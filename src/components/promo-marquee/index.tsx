"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export const PromoMarquee = () => {
    const { t } = useLanguage();

    const promoText = t.common.promoText;

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
