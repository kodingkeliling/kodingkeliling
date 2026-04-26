"use client";

import React from "react";
import { useParams } from "next/navigation";
import { Button } from "@/components/base/buttons/button";
import { Check, Monitor01, Code02, Phone01, LayersTwo01 } from "@untitledui/icons";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { useLanguage } from "@/context/LanguageContext";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { BadgeWithDot } from "@/components/base/badges/badges";
import { config } from "@/utils/config";

const iconsMap: Record<string, any> = {
    Monitor01,
    Code02,
    Phone01,
    LayersTwo01
};

export default function ServiceDetailPage() {
    const params = useParams();
    const slug = params.slug;
    const { t } = useLanguage();

    const serviceData = t.services.find(s => s.slug === slug);

    if (!serviceData) {
        return <div className="p-20 text-center">Service not found.</div>;
    }

    const service = { ...serviceData, icon: iconsMap[serviceData.iconName] };

    return (
        <main className="flex-1 bg-primary pb-16 md:pb-24">
            <Breadcrumbs />
            <div className="mx-auto max-w-container px-4 md:px-8 mt-8 md:mt-12">
                <div className="max-w-3xl">
                    <FeaturedIcon
                        icon={service.icon}
                        color={service.color as any}
                        size="xl"
                        theme="light"
                        className="mb-8"
                    />
                    <h1 className="text-3xl font-bold text-primary mb-6 sm:text-4xl md:text-display-md lg:text-display-lg leading-tight">
                        {service.title}
                    </h1>
                    <p className="text-xl text-tertiary mb-10 leading-relaxed">
                        {service.detailDescription}
                    </p>

                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-primary">Fitur Unggulan ✨</h3>
                        <div className="grid gap-4 sm:grid-cols-2">
                            {service.features.map((feature, i) => (
                                <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-secondary bg-secondary/50">
                                    <div className="bg-success-primary p-1 rounded-full mt-0.5">
                                        <Check className="size-4 text-success-700" />
                                    </div>
                                    <span className="text-md text-secondary font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-16 flex flex-col gap-6">
                        <div className="flex flex-wrap items-center gap-4">
                            <BadgeWithDot color="success" size="lg">
                                Gratis Konsultasi 💸
                            </BadgeWithDot>
                            <BadgeWithDot color="brand" size="lg">
                                {t.hero.fullOwnership} 🚀
                            </BadgeWithDot>
                        </div>
                        <Button
                            size="xl"
                            color="primary"
                            href={config.public.whatsappLink}
                            target="_blank"
                            className="w-full sm:w-auto font-bold"
                        >
                            {t.common.consultNow}
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    );
}
