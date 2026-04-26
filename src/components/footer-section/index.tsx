"use client";

import React from "react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/base/buttons/button";
import { Mail01 } from "@untitledui/icons";
import { Instagram, GitHub } from "@/components/foundations/social-icons";
import { useLanguage } from "@/context/LanguageContext";
import { BadgeWithDot } from "@/components/base/badges/badges";
import { config } from "@/utils/config";

export const FooterSection = () => {
    const { t } = useLanguage();
    const { footer, navigation } = t;

    return (
        <footer id="kontak" className="bg-primary py-16 md:py-20 border-t border-secondary">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col items-center justify-between gap-12 lg:flex-row lg:items-start">
                    <div className="flex flex-1 flex-col items-center gap-6 lg:items-start">
                        <Logo />
                        <p className="max-w-md text-center text-lg text-tertiary lg:text-left">
                            {footer.description} 🚀
                        </p>
                        <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
                            <BadgeWithDot color="brand" size="md">
                                {t.hero.fullOwnership}
                            </BadgeWithDot>
                        </div>
                        <div className="flex gap-4">
                            <Button color="secondary" size="lg" iconLeading={Mail01} aria-label="Email" href="mailto:kodingkeliling@gmail.com" />
                            <Button color="secondary" size="lg" iconLeading={Instagram} aria-label="Instagram" href="https://instagram.com/kodingkeliling" target="_blank" />
                            <Button color="secondary" size="lg" iconLeading={GitHub} aria-label="GitHub" href="https://github.com/kodingkeliling" target="_blank" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
                        <div className="flex flex-col gap-4 text-center lg:text-left">
                            <h4 className="text-sm font-semibold text-tertiary">{footer.quickLinks}</h4>
                            <ul className="flex flex-col gap-3 font-semibold text-primary">
                                <li><a href="/services" className="hover:text-brand transition-all">{navigation.layanan}</a></li>
                                <li><a href="/projects" className="hover:text-brand transition-all">{navigation.project}</a></li>
                                <li><a href="/reviews" className="hover:text-brand transition-all">{navigation.review}</a></li>
                                <li><a href={config.public.whatsappLink} target="_blank" className="hover:text-brand transition-all">{navigation.kontak}</a></li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-4 text-center lg:text-left">
                            <h4 className="text-sm font-semibold text-tertiary">{footer.services}</h4>
                            <ul className="flex flex-col gap-3 font-semibold text-primary whitespace-nowrap">
                                {t.services.slice(0, 4).map((s, i) => (
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
                        <a href="#" className="hover:text-primary transition-all">{footer.privacyPolicy}</a>
                        <a href="#" className="hover:text-primary transition-all">{footer.termsOfService}</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
