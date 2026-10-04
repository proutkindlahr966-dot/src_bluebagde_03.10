"use client";

import React, { createContext, useCallback, useContext, useMemo, useState } from "react";
import {
  LANG_ATTR,
  RTL_LANGS,
  getStoredLang,
  setStoredLang,
  tApp,
  tPage,
} from "@/lib/i18n";

type LocaleContextValue = {
  lang: string;
  setLang: (lang: string) => void;
  t: (key: string, vars?: Record<string, string | number>) => string;
  tp: (key: string) => string;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({
  children,
  initialLang = "en",
}: {
  children: React.ReactNode;
  initialLang?: string;
}) {
  const [lang, setLangState] = useState(initialLang);

  const setLang = useCallback((next: string) => {
    setLangState(next);
    setStoredLang(next);
    if (typeof document !== "undefined") {
      document.documentElement.lang = LANG_ATTR[next] || "en";
      document.documentElement.dir = RTL_LANGS.has(next) ? "rtl" : "ltr";
      document.title = tPage("pageTitle", next);
    }
  }, []);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      t: (key: string, vars?: Record<string, string | number>) => tApp(key, lang, vars),
      tp: (key: string) => tPage(key, lang),
    }),
    [lang, setLang]
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}

export function readInitialLang() {
  return getStoredLang();
}
