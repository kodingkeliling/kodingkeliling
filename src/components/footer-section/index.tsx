"use client";

import React from "react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/base/buttons/button";
import { Globe01, Mail01, MessageCircle01 } from "@untitledui/icons";
import { useLanguage } from "@/context/LanguageContext";

export const FooterSection = () => {
    const { t } = useLanguage();
    const { footer } = t;

    return (
        <footer id="kontak" className="bg-primary py-16 md:py-20 border-t border-secondary">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col items-center justify-between gap-12 lg:flex-row lg:items-start">
                    <div className="flex flex-1 flex-col items-center gap-6 lg:items-start">
                        <Logo />
                        <p className="max-w-md text-center text-lg text-tertiary lg:text-left">
                            {footer.description} 🚀
                        </p>
                        <div className="flex gap-4">
                            <Button color="secondary" size="lg" iconLeading={Globe01} aria-label="Website" />
                            <Button color="secondary" size="lg" iconLeading={Mail01} aria-label="Email" />
                            <Button color="secondary" size="lg" iconLeading={MessageCircle01} aria-label="WhatsApp" />
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-12 sm:grid-cols-2">
                        <div className="flex flex-col gap-4 text-center lg:text-left">
                            <h4 className="text-sm font-semibold text-tertiary">{footer.quickLinks}</h4>
                            <ul className="flex flex-col gap-3 font-semibold text-primary">
                                <li><a href="/services" className="hover:text-brand transition-all">Layanan</a></li>
                                <li><a href="/projects" className="hover:text-brand transition-all">Project</a></li>
                                <li><a href="/reviews" className="hover:text-brand transition-all">Review</a></li>
                                <li><a href={process.env.NEXT_PUBLIC_WHATSAPP_LINK || "#"} target="_blank" className="hover:text-brand transition-all">Kontak</a></li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-4 text-center lg:text-left">
                            <h4 className="text-sm font-semibold text-tertiary">{footer.services}</h4>
                            <ul className="flex flex-col gap-3 font-semibold text-primary whitespace-nowrap">
                                {t.services.map((s, i) => (
                                    <li key={i}><a href={`/services/${s.slug}`} className="hover:text-brand transition-all truncate">{s.title}</a></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-secondary pt-8 md:flex-row md:items-center">
                    <p className="text-sm text-tertiary">
                        {footer.copyright}
                    </p>
                    <div className="flex gap-6 text-sm font-semibold text-tertiary">
                        <a href="#" className="hover:text-primary transition-all">Privacy Policy</a>
                        <a href="#" className="hover:text-primary transition-all">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
