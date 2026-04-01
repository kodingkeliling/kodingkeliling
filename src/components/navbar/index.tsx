"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/base/buttons/button";
import { Logo } from "@/components/logo";
import { Moon01, Sun, XClose, Menu01 } from "@untitledui/icons";
import { cx } from "@/utils/cx";
import { useTheme } from "next-themes";
import { useLanguage } from "@/context/LanguageContext";
import { locales } from "@/locales";

const navItems = [
    { key: "layanan", href: "/services" },
    { key: "project", href: "/projects" },
    { key: "review", href: "/reviews" },
    { key: "kontak", href: "/contact" },
];

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();
    const { language, setLanguage, t } = useLanguage();
    const { theme, setTheme } = useTheme();

    const navLabels: Record<string, any> = {
        id: { layanan: "Layanan", project: "Project", review: "Review", kontak: "Kontak" },
        en: { layanan: "Services", project: "Projects", review: "Reviews", kontak: "Contact" }
    };

    return (
        <header className="sticky top-0 z-50 bg-primary/80">
            <div className="mx-auto flex h-20 max-w-container items-center justify-between px-4 md:px-8">
                <Link href="/" className="flex items-center">
                    <Logo />
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:block">
                    <ul className="flex items-center gap-10 lg:gap-14">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                            const label = navLabels[language][item.key];
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
                    {/* Language Switch */}
                    <Button
                        color="secondary"
                        size="md"
                        className="rounded-full font-bold px-3 uppercase text-sm"
                        onClick={() => setLanguage(language === "id" ? "en" : "id")}
                    >
                        {language}
                    </Button>
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
                "fixed inset-x-0 h-screen bg-primary transition-all duration-300 md:hidden z-[-1]",
                isMenuOpen ? "top-[80px] opacity-100" : "top-[-100%] opacity-0"
            )}>
                <nav className="flex flex-col items-center justify-center gap-8 py-12">
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
                                {navLabels[language][item.key]}
                            </Link>
                        );
                    })}
                    <Button
                        size="xl" className="mt-4"
                        href={process.env.NEXT_PUBLIC_WHATSAPP_LINK || "#"}
                        target="_blank"
                    >
                        Hubungi WhatsApp
                    </Button>
                </nav>
            </div>
        </header>
    );
};
