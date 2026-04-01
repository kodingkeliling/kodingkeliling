"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export const PromoMarquee = () => {
    const { language } = useLanguage();

    const promoText = language === "id"
        ? "🚀 DISKON 10% UNTUK PROJECT PERTAMA ANDA! • 📞 KONSULTASI GRATIS SEKARANG • 🌐 KODINGKELILING: SOLUSI DIGITAL PROFESIONAL TERPERCAYA • 💸 BEBAS BIAYA ADMIN UNTUK UMKM • ✨ "
        : "🚀 10% DISCOUNT FOR YOUR FIRST PROJECT! • 📞 FREE CONSULTATION NOW • 🌐 KODINGKELILING: TRUSTED PROFESSIONAL DIGITAL SOLUTIONS • 💸 NO ADMIN FEE FOR SMALL BUSINESSES • ✨ ";

    return (
        <div className="bg-brand-solid py-2 text-white overflow-hidden relative border-y border-white/10">
            <div className="flex animate-marquee-slow whitespace-nowrap">
                <div className="flex shrink-0 items-center justify-around gap-8 pr-8 font-bold tracking-wider text-[10px] md:text-sm uppercase">
                    {Array(8).fill(promoText).map((text, i) => (
                        <span key={i}>{text}</span>
                    ))}
                </div>
                <div className="flex shrink-0 items-center justify-around gap-8 pr-8 font-bold tracking-wider text-[10px] md:text-sm uppercase" aria-hidden="true">
                    {Array(8).fill(promoText).map((text, i) => (
                        <span key={i}>{text}</span>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes marquee-slow {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee-slow {
                    animation: marquee-slow 200s linear infinite;
                    width: max-content;
                }
            `}</style>
        </div>
    );
};
