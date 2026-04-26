"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { locales, LocaleType, LanguageType } from "@/locales";

interface LanguageContextType {
    language: LanguageType;
    t: LocaleType;
    setLanguage: (lang: LanguageType) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguageState] = useState<LanguageType>("id");

    useEffect(() => {
        const savedLang = localStorage.getItem("lang") as LanguageType;
        if (savedLang && locales[savedLang]) {
            setLanguageState(savedLang);
        }
    }, []);

    const setLanguage = (lang: LanguageType) => {
        if (locales[lang]) {
            setLanguageState(lang);
            localStorage.setItem("lang", lang);
        }
    };

    const t = locales[language];

    return (
        <LanguageContext.Provider value={{ language, t, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};
