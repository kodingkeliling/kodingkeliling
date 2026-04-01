"use client";

import React from "react";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { Button } from "@/components/base/buttons/button";
import { ArrowNarrowRight, Monitor01, Code02, Phone01, LayersTwo01 } from "@untitledui/icons";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "motion/react";

const iconsMap: Record<string, any> = {
    Monitor01,
    Code02,
    Phone01,
    LayersTwo01
};

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15
        }
    }
};

export const ServicesSection = () => {
    const { t } = useLanguage();
    const services = t.services.map(s => ({ ...s, icon: iconsMap[s.iconName] }));

    return (
        <section id="layanan" className="bg-secondary pt-8 pb-16 md:pt-12 md:pb-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 flex flex-col items-center text-center"
                >
                    <h2 className="text-display-sm font-semibold text-primary md:text-display-md">
                        {t.common.ourServices}
                    </h2>
                    <p className="mt-4 max-w-2xl text-lg text-tertiary">
                        {t.common.ourServicesDesc}
                    </p>
                    <div className="mt-6 flex items-center gap-2 rounded-full bg-success-primary px-4 py-1.5 text-md font-bold text-success-700">
                        {t.common.consultationFree}
                    </div>
                </motion.div>

                <motion.div
                    variants={staggerContainer as any}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp as any}
                            className="group flex flex-col items-center rounded-2xl border border-secondary bg-primary p-6 text-center shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
                        >
                            <FeaturedIcon
                                icon={service.icon}
                                color={service.color as any}
                                size="lg"
                                theme="light"
                                className="mb-5 transition-transform group-hover:scale-110"
                            />
                            <h3 className="mb-3 text-xl font-bold text-primary">
                                {service.title}
                            </h3>
                            <p className="mb-6 text-md text-tertiary line-clamp-3">
                                {service.description}
                            </p>
                            <Button
                                color="link-color"
                                size="md"
                                iconTrailing={ArrowNarrowRight}
                                href={`/services/${service.slug}`}
                                className="mt-auto font-bold"
                            >
                                {t.common.seeDetail}
                            </Button>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
