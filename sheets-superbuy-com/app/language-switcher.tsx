"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    google?: { translate?: { TranslateElement?: new (options: Record<string, unknown>, elementId: string) => void } };
    googleTranslateElementInit?: () => void;
  }
}

const languages = [
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
  { code: "de", label: "Deutsch" },
  { code: "es", label: "Español" },
  { code: "zh-CN", label: "简体中文" },
];

function savedLanguage() {
  if (typeof window === "undefined") return "en";
  const queryLanguage = new URL(window.location.href).searchParams.get("lang");
  if (languages.some((item) => item.code === queryLanguage)) return queryLanguage!;
  const saved = window.localStorage.getItem("sheets-superbuy-language");
  return languages.some((item) => item.code === saved) ? saved! : "en";
}

function clearTranslationCookies() {
  const host = window.location.hostname;
  const labels = host.split(".");
  const parentDomains = labels.map((_, index) => labels.slice(index).join(".")).filter((domain) => domain.includes("."));
  const domains = ["", ...parentDomains, ...parentDomains.map((domain) => `.${domain}`)];
  for (const domain of domains) {
    const domainPart = domain ? `; domain=${domain}` : "";
    for (const path of ["/", window.location.pathname]) {
      document.cookie = `googtrans=; path=${path}; max-age=0; SameSite=Lax${domainPart}`;
      document.cookie = `googtrans=; path=${path}; expires=Thu, 01 Jan 1970 00:00:00 GMT${domainPart}`;
    }
  }
}

export function LanguageSwitcher() {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const targetLanguage = savedLanguage();
    setLanguage(targetLanguage);
    clearTranslationCookies();
    if (targetLanguage !== "en") {
      document.cookie = `googtrans=/en/${targetLanguage}; path=/; max-age=31536000; SameSite=Lax`;
    }
    const removeToolbar = () => {
      if (document.documentElement.style.marginTop !== "0px") document.documentElement.style.setProperty("margin-top", "0px", "important");
      if (document.body.style.top !== "0px") document.body.style.setProperty("top", "0px", "important");
      document.querySelectorAll<HTMLElement>(
        "iframe.goog-te-banner-frame, iframe.skiptranslate, .goog-te-banner-frame, .VIpgJd-ZVi9od-ORHb-OEVmcd"
      ).forEach((element) => { if (element.style.display !== "none") element.style.setProperty("display", "none", "important"); });
    };
    removeToolbar();
    const observer = new MutationObserver(removeToolbar);
    observer.observe(document.documentElement, { childList: true, subtree: true, attributes: true, attributeFilter: ["style", "class"] });
    const initialize = () => {
      const Constructor = window.google?.translate?.TranslateElement;
      const host = document.getElementById("google_translate_engine");
      if (!Constructor || !host || host.childElementCount) return;
      new Constructor({ pageLanguage: "en", includedLanguages: "en,fr,de,es,zh-CN", autoDisplay: false }, "google_translate_engine");
    };
    window.googleTranslateElementInit = initialize;
    if (document.querySelector('script[data-site-translate="true"]')) { initialize(); return; }
    const script = document.createElement("script");
    script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    script.dataset.siteTranslate = "true";
    document.body.appendChild(script);
    return () => observer.disconnect();
  }, []);

  const changeLanguage = (next: string) => {
    setLanguage(next);
    window.localStorage.setItem("sheets-superbuy-language", next);
    const url = new URL(window.location.href);
    if (next === "en") url.searchParams.delete("lang");
    else url.searchParams.set("lang", next);
    // Keep the exact pathname and modules; the query parameter is the single
    // source of truth for the language applied on the next clean document.
    window.location.assign(url.toString());
  };

  return <div className="language-switcher">
    <label htmlFor="site-language"><span aria-hidden="true">文</span><span className="sr-only">Page language</span></label>
    <select id="site-language" value={language} onChange={(event) => changeLanguage(event.target.value)} aria-label="Page language">
      {languages.map((item) => <option value={item.code} key={item.code}>{item.label}</option>)}
    </select>
    <div id="google_translate_engine" aria-hidden="true" />
  </div>;
}
