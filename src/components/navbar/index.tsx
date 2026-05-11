"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/base/buttons/button";
import { Logo } from "@/components/logo";
import { Moon01, Sun, XClose, Menu01, Globe01, ChevronDown } from "@untitledui/icons";
import { cx } from "@/utils/cx";
import { useTheme } from "next-themes";
import { useLanguage } from "@/context/LanguageContext";
import { locales } from "@/locales";
import { config } from "@/utils/config";

const navItems = [
    { key: "layanan", href: "/services" },
    { key: "project", href: "/projects" },
    { key: "review", href: "/reviews" },
    { key: "kontak", href: "/contact" },
];

const languages = [
    { code: "id", label: "ID" },
    { code: "en", label: "EN" },
    { code: "jp", label: "JP" },
    { code: "es", label: "ES" },
    { code: "fr", label: "FR" },
    { code: "de", label: "DE" },
    { code: "zh", label: "ZH" },
    { code: "ko", label: "KO" },
];

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);
    const pathname = usePathname();
    const { language, setLanguage, t } = useLanguage();
    const { theme, setTheme } = useTheme();

    return (
        <header className="sticky top-0 z-50 bg-primary/80 backdrop-blur-md border-b border-white/10">
            <div className="mx-auto flex h-20 max-w-container items-center justify-between px-4 md:px-8">
                <Link href="/" className="flex items-center">
                    <Logo />
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:block">
                    <ul className="flex items-center gap-10 lg:gap-14">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                            // Use t.navigation for localized labels
                            const label = (t.navigation as any)[item.key];
                            return (
                                <li key={item.key} className="relative py-7">
                                    <Link
                                        href={item.href}
                                        className={cx(
                                            "inline-flex items-center text-md font-medium transition-all",
                                            isActive ? "text-brand" : "text-tertiary hover:text-primary"
                                        )}
                                    >
                                        {label}
                                    </Link>
                                    {isActive && (
                                        <span className="absolute bottom-[-1px] left-0 right-0 h-1 bg-brand rounded-t-full" />
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                <div className="hidden items-center gap-2 md:flex">
                    {/* Theme Switch */}
                    <Button
                        color="secondary"
                        size="md"
                        iconLeading={theme === "dark" ? Sun : Moon01}
                        className="rounded-full px-3"
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        aria-label="Toggle Theme"
                    />

                    {/* Language Switch Dropdown */}
                    <div className="relative">
                        <Button
                            color="secondary"
                            size="md"
                            className="rounded-full font-bold px-3 uppercase text-sm"
                            iconLeading={Globe01}
                            iconTrailing={
                                <div className={cx("transition-transform", isLangOpen && "rotate-180")}>
                                    <ChevronDown className="size-3" />
                                </div>
                            }
                            onClick={() => setIsLangOpen(!isLangOpen)}
                        >
                            {language}
                        </Button>

                        {isLangOpen && (
                            <>
                                <div 
                                    className="fixed inset-0 z-10" 
                                    onClick={() => setIsLangOpen(false)}
                                />
                                <div className="absolute right-0 top-full mt-2 w-32 overflow-hidden rounded-xl border border-white/10 bg-primary shadow-xl z-20">
                                    <div className="flex flex-col p-1 gap-1 max-h-60 overflow-y-auto scrollbar-hide">
                                        {languages.map((lang) => (
                                            <button
                                                key={lang.code}
                                                className={cx(
                                                    "px-3 py-2.5 text-xs font-bold rounded-lg transition-colors text-left uppercase flex items-center justify-between cursor-pointer",
                                                    language === lang.code 
                                                        ? "bg-brand/10 text-brand" 
                                                        : "text-tertiary hover:bg-white/5 hover:text-primary"
                                                )}
                                                onClick={() => {
                                                    setLanguage(lang.code as any);
                                                    setIsLangOpen(false);
                                                }}
                                            >
                                                <span>{lang.label}</span>
                                                {language === lang.code && <div className="size-1.5 rounded-full bg-brand" />}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </>
                        )}
                    </div>

                </div>

                {/* Mobile Menu Trigger */}
                <button
                    className="p-2 md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    {isMenuOpen ? <XClose className="size-6 text-primary" /> : <Menu01 className="size-6 text-primary" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={cx(
                "fixed inset-x-0 h-screen bg-primary transition-all duration-300 md:hidden z-40 overflow-y-auto",
                isMenuOpen ? "top-[80px] opacity-100" : "top-[-100%] opacity-0 pointer-events-none invisible"
            )}>
                <nav className="flex flex-col items-center justify-center gap-6 py-12 px-6">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                        return (
                            <Link
                                key={item.key}
                                href={item.href}
                                className={cx(
                                    "text-display-xs text-primary hover:text-brand transition-all",
                                    isActive ? "font-semibold" : "font-normal"
                                )}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {(t.navigation as any)[item.key]}
                            </Link>
                        );
                    })}
                    
                    <div className="w-full h-px bg-white/10 my-2" />

                    <div className="flex flex-wrap items-center justify-center gap-2">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                className={cx(
                                    "px-4 py-2 rounded-full border border-white/10 text-sm font-bold transition-all uppercase cursor-pointer",
                                    language === lang.code 
                                        ? "bg-brand/10 border-brand text-brand" 
                                        : "bg-white/5 text-tertiary"
                                )}
                                onClick={() => setLanguage(lang.code as any)}
                            >
                                {lang.label}
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-4 mt-4 w-full">
                        <Button
                            color="secondary"
                            size="lg"
                            iconLeading={theme === "dark" ? Sun : Moon01}
                            className="rounded-full flex-1"
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        >
                            {theme === "dark" ? "Light" : "Dark"}
                        </Button>
                    </div>
                </nav>
            </div>
        </header>
    );
};
