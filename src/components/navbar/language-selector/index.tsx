"use client";

import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { LanguageType, languageNames, locales } from "@/locales";
import { ChevronDown, Globe01 } from "@untitledui/icons";
import { cx } from "@/utils/cx";
import { motion, AnimatePresence } from "motion/react";

export const LanguageSelector = ({ mobile = false }: { mobile?: boolean }) => {
    const { language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const languages = Object.keys(locales) as LanguageType[];

    // Close on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    if (mobile) {
        return (
            <div className="flex flex-col gap-2 w-full px-4">
                <p className="text-xs font-semibold text-tertiary uppercase tracking-wider mb-1">Select Language</p>
                <div className="grid grid-cols-2 gap-2">
                    {languages.map((lang) => (
                        <button
                            key={lang}
                            onClick={() => setLanguage(lang)}
                            className={cx(
                                "flex items-center justify-center rounded-lg py-3 text-sm font-bold transition-all border",
                                language === lang 
                                    ? "bg-brand-solid text-white border-brand-solid" 
                                    : "bg-secondary text-primary border-secondary hover:border-brand"
                            )}
                        >
                            <span className="uppercase mr-2 text-[10px] opacity-70">{lang}</span>
                            {languageNames[lang].split(" ")[0]}
                        </button>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="relative" ref={containerRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={cx(
                    "flex items-center gap-2 rounded-full border border-secondary bg-primary px-4 py-2 text-sm font-bold text-primary transition-all hover:border-brand focus:outline-none shadow-sm",
                    isOpen && "border-brand ring-2 ring-brand-solid/10"
                )}
                aria-label="Select Language"
            >
                <Globe01 className="size-4 text-tertiary" />
                <span className="uppercase">{language}</span>
                <ChevronDown className={cx("size-4 text-tertiary transition-transform", isOpen && "rotate-180")} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 mt-2 w-56 overflow-hidden rounded-xl border border-secondary bg-primary shadow-xl z-[100]"
                    >
                        <div className="p-2">
                            <p className="px-3 py-2 text-[10px] font-bold text-tertiary uppercase tracking-widest">
                                Choose Language
                            </p>
                            <div className="max-h-[300px] overflow-y-auto custom-scrollbar">
                                {languages.map((lang) => (
                                    <button
                                        key={lang}
                                        onClick={() => {
                                            setLanguage(lang);
                                            setIsOpen(false);
                                        }}
                                        className={cx(
                                            "flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left transition-all",
                                            language === lang 
                                                ? "bg-brand-solid/10 text-brand-solid font-bold" 
                                                : "text-primary hover:bg-secondary"
                                        )}
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className="flex size-6 items-center justify-center rounded bg-secondary text-[10px] font-bold uppercase text-tertiary group-hover:bg-brand-solid/20 group-hover:text-brand-solid">
                                                {lang}
                                            </span>
                                            <span className="text-sm">{languageNames[lang]}</span>
                                        </div>
                                        {language === lang && (
                                            <span className="size-2 rounded-full bg-brand-solid" />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
