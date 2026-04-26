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
import { config } from "@/utils/config";
import { LanguageSelector } from "./language-selector";

const navItems = [
    { key: "layanan", href: "/services" },
    { key: "project", href: "/projects" },
    { key: "review", href: "/reviews" },
    { key: "kontak", href: "/contact" },
];

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();
    const { t } = useLanguage();
    const { theme, setTheme } = useTheme();

    const navigation = t.navigation;

    return (
        <header className="sticky top-0 z-50 bg-primary/80 backdrop-blur-md border-b border-secondary">
            <div className="mx-auto flex h-20 max-w-container items-center justify-between px-4 md:px-8">
                <Link href="/" className="flex items-center">
                    <Logo />
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:block">
                    <ul className="flex items-center gap-10 lg:gap-14">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                            const label = (navigation as any)[item.key];
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
                    <LanguageSelector />
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
                "fixed inset-x-0 h-screen bg-primary transition-all duration-300 md:hidden z-[-1] overflow-y-auto",
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
                                {(navigation as any)[item.key]}
                            </Link>
                        );
                    })}
                    <div className="flex items-center gap-4 mt-4">
                        {/* Theme Switch */}
                        <Button
                            color="secondary"
                            size="lg"
                            iconLeading={theme === "dark" ? Sun : Moon01}
                            className="rounded-full px-4"
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            aria-label="Toggle Theme"
                        >
                            {theme === "dark" ? "Light Mode" : "Dark Mode"}
                        </Button>
                    </div>
                    <LanguageSelector mobile />
                    <Button
                        size="xl" 
                        href={config.public.whatsappLink}
                        target="_blank"
                        className="w-[80%]"
                    >
                        Hubungi WhatsApp
                    </Button>
                </nav>
            </div>
        </header>
    );
};
