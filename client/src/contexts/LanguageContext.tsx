import React, { createContext, useContext, useState } from "react";

type Language = "zh" | "en";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (zh: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "zh",
  setLang: () => {},
  t: (zh) => zh,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("zh");
  const t = (zh: string, en: string) => (lang === "zh" ? zh : en);
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
