"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "motion/react";
import { Globe01, Zap, ShieldTick } from "@untitledui/icons";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";

export const WorldwideSection = () => {
    const { t } = useLanguage();
    const { common, worldwide } = t;

    const icons = [Globe01, Zap, ShieldTick];
    const colors = ["brand", "success", "warning"];

    return (
        <section className="bg-secondary py-16 md:py-24 overflow-hidden">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col items-center text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col items-center gap-3"
                    >
                        <h2 className="text-display-sm font-bold tracking-tight text-primary md:text-display-md">
                            {common.worldwideContent} 🌏
                        </h2>
                        <p className="max-w-2xl text-lg text-tertiary md:text-xl">
                            {common.worldwideContentDesc}
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {worldwide.features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col items-center text-center p-6 bg-primary rounded-2xl border border-secondary shadow-sm hover:shadow-md transition-all"
                        >
                            <FeaturedIcon
                                icon={icons[index % icons.length]}
                                color={colors[index % colors.length] as any}
                                size="lg"
                                theme="light"
                                className="mb-6"
                            />
                            <h3 className="text-xl font-bold text-primary mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-md text-tertiary leading-relaxed">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-20 relative rounded-3xl bg-brand-solid p-8 md:p-16 text-center text-white overflow-hidden shadow-2xl"
                >
                    <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "url('/images/world-map.svg')", backgroundSize: "cover", backgroundPosition: "center" }} />
                    <div className="relative z-10 flex flex-col items-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider mb-6">
                            <span className="size-2 rounded-full bg-success-400 animate-pulse" />
                            {t.common.globalDigitalPartner}
                        </div>
                        <h3 className="text-2xl font-bold md:text-4xl mb-6 leading-tight">
                            {worldwide.ctaTitle}
                        </h3>
                        <p className="max-w-2xl text-lg text-white/80 mb-10">
                            {worldwide.ctaDesc}
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
