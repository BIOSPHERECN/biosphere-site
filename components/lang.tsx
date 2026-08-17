"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { dict, type Lang } from "@/lib/i18n";

type DictKey = keyof typeof dict.zh;

const LangContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: DictKey) => string;
} | null>(null);

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("zh");

  useEffect(() => {
    const saved = window.localStorage.getItem("lang");
    if (saved === "en" || saved === "zh") setLang(saved);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang, t: (k) => dict[lang][k] as string }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}

export function LangToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLang();
  return (
    <button
      type="button"
      aria-label="Switch language"
      onClick={() => setLang(lang === "zh" ? "en" : "zh")}
      className={`cursor-pointer border px-2 py-1 text-[11px] font-medium uppercase tracking-wider transition hover:opacity-70 ${className}`}
      style={{ borderColor: "currentColor" }}
    >
      {lang === "zh" ? "EN" : "中文"}
    </button>
  );
}
