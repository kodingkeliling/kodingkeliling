"use client";

import React, { useState } from "react";
import { MessageCircle01, Zap, XClose, Star06 } from "@untitledui/icons";
import { cx } from "@/utils/cx";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

export const ChatFab = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { language } = useLanguage();

    const labels = {
        id: { ai: "Tanya AI", wa: "WhatsApp" },
        en: { ai: "Ask AI", wa: "WhatsApp" }
    };

    const t = labels[language === "id" ? "id" : "en"];

    return (
        <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end">
            {/* Unified Options Menu */}
            <div className={cx(
                "mb-4 overflow-hidden rounded-2xl border border-secondary bg-white shadow-2xl transition-all duration-300 dark:bg-gray-800",
                isOpen ? "translate-y-0 opacity-100 scale-100" : "translate-y-10 opacity-0 scale-95 pointer-events-none"
            )}>
                <div className="flex flex-col">
                    <Link
                        href="/contact"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-4 px-5 py-4 transition-all hover:bg-gray-50 dark:hover:bg-gray-700/50 border-b border-secondary"
                    >
                        <div className="flex size-10 items-center justify-center rounded-xl bg-brand-50 dark:bg-brand-solid/10">
                            <Star06 className="size-5 text-utility-brand-700" />
                        </div>
                        <span className="text-md font-bold text-primary dark:text-white">{t.ai}</span>
                    </Link>
                    <a
                        href={process.env.NEXT_PUBLIC_WHATSAPP_LINK || "#"}
                        target="_blank"
                        className="flex items-center gap-4 px-5 py-4 transition-all hover:bg-gray-50 dark:hover:bg-gray-700/50"
                    >
                        <div className="flex size-10 items-center justify-center rounded-xl bg-success-400">
                            <Image src="/images/whatsapp.png" alt="WA" width={20} height={20} className="size-5" />
                        </div>
                        <span className="text-md font-bold text-primary dark:text-white">{t.wa}</span>
                    </a>
                </div>
            </div>

            {/* Main Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={cx(
                    "flex size-14 items-center justify-center rounded-full text-white shadow-2xl transition-all hover:scale-105 active:scale-95",
                    isOpen ? "bg-gray-800 rotate-90" : "bg-brand-solid animate-bounce-subtle"
                )}
                aria-label="Toggle Chat Options"
            >
                {isOpen ? <XClose className="size-7" /> : <MessageCircle01 className="size-8" />}
            </button>
        </div>
    );
};
