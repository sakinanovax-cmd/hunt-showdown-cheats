"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Check, ChevronDown, Globe } from "lucide-react";
import {
  DEFAULT_LANGUAGE,
  LANGUAGE_STORAGE_KEY,
  SITE_LANGUAGES,
  getLanguageByCode,
  type SiteLanguageCode,
} from "@/lib/languages";

function setGoogTransCookie(lang: SiteLanguageCode) {
  const value = lang === "en" ? "" : `/en/${lang}`;
  const domains = [window.location.hostname, `.${window.location.hostname}`];

  for (const domain of domains) {
    document.cookie = value
      ? `googtrans=${value};path=/;domain=${domain};max-age=31536000`
      : `googtrans=;path=/;domain=${domain};max-age=0`;
  }

  document.cookie = value
    ? `googtrans=${value};path=/;max-age=31536000`
    : `googtrans=;path=/;max-age=0`;
}

function applyHtmlLang(lang: SiteLanguageCode) {
  document.documentElement.lang = lang === "zh-CN" ? "zh" : lang;
}

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate?: {
        TranslateElement: new (
          options: { pageLanguage: string; autoDisplay: boolean; includedLanguages: string },
          elementId: string,
        ) => void;
      };
    };
  }
}

function ensureGoogleTranslate() {
  if (document.getElementById("google-translate-script")) return;

  window.googleTranslateElementInit = () => {
    if (!window.google?.translate) return;
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false,
        includedLanguages: SITE_LANGUAGES.map((l) => l.code).join(","),
      },
      "google_translate_element",
    );
  };

  const script = document.createElement("script");
  script.id = "google-translate-script";
  script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  script.async = true;
  document.body.appendChild(script);
}

export default function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState<SiteLanguageCode>(DEFAULT_LANGUAGE);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();

  useEffect(() => {
    const saved = window.localStorage.getItem(LANGUAGE_STORAGE_KEY) as SiteLanguageCode | null;
    const initial = saved && SITE_LANGUAGES.some((l) => l.code === saved) ? saved : DEFAULT_LANGUAGE;
    setCurrent(initial);
    applyHtmlLang(initial);

    // Do not load Google Translate on English — it tanks Lighthouse Performance/Best Practices.
    if (initial !== "en") {
      setGoogTransCookie(initial);
      ensureGoogleTranslate();
    } else {
      setGoogTransCookie("en");
    }
  }, []);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const selectLanguage = (code: SiteLanguageCode) => {
    setCurrent(code);
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, code);
    setGoogTransCookie(code);
    applyHtmlLang(code);
    setOpen(false);
    if (code !== "en") ensureGoogleTranslate();
    window.location.reload();
  };

  const active = getLanguageByCode(current);

  return (
    <div className={`language-switcher ${compact ? "language-switcher-compact" : ""}`} ref={rootRef}>
      <div id="google_translate_element" className="google-translate-host" aria-hidden="true" />

      <button
        type="button"
        className="language-switcher-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((prev) => !prev)}
      >
        <Globe size={15} aria-hidden="true" />
        <span className="language-switcher-code">{active.code === "zh-CN" ? "ZH" : active.code.toUpperCase()}</span>
        <ChevronDown size={14} className={`language-switcher-chevron ${open ? "is-open" : ""}`} aria-hidden="true" />
      </button>

      {open && (
        <ul id={listId} className="language-switcher-menu" role="listbox" aria-label="Select language">
          {SITE_LANGUAGES.map((lang) => {
            const selected = lang.code === current;
            return (
              <li key={lang.code} role="option" aria-selected={selected}>
                <button
                  type="button"
                  className={`language-switcher-option ${selected ? "is-active" : ""}`}
                  onClick={() => selectLanguage(lang.code)}
                >
                  <span className="language-switcher-option-main">
                    <span className="language-switcher-option-native">{lang.native}</span>
                    <span className="language-switcher-option-label">{lang.label}</span>
                  </span>
                  {selected && <Check size={14} aria-hidden="true" />}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
