"use client";

import React from "react";
import { Button } from "@/components/base/buttons/button";
import { ArrowNarrowRight } from "@untitledui/icons";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import { motion } from "motion/react";
import { BadgeWithDot } from "@/components/base/badges/badges";
import { config } from "@/utils/config";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

export const Hero = () => {
    const { t } = useLanguage();
    const { hero } = t;

    return (
        <section className="relative overflow-hidden bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col items-center gap-12 lg:flex-row">
                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        animate="animate"
                        className="flex flex-1 flex-col items-start gap-6 text-left"
                    >
                        <motion.div variants={fadeInUp}>
                            <BadgeWithDot color="brand" size="md">
                                {hero.badge}
                            </BadgeWithDot>
                        </motion.div>

                        <motion.h1
                            variants={fadeInUp}
                            className="text-display-md font-bold tracking-tight text-primary md:text-display-lg leading-tight"
                        >
                            {hero.title} <span className="text-brand">{hero.brand}</span>
                        </motion.h1>

                        <motion.p
                            variants={fadeInUp}
                            className="text-lg text-tertiary md:text-xl max-w-xl"
                        >
                            {hero.description}
                        </motion.p>

                        <motion.div
                            variants={fadeInUp}
                            className="flex w-full flex-col gap-3 sm:flex-row"
                        >
                            <Button
                                size="xl"
                                className="w-full sm:w-auto font-bold"
                                href={config.public.whatsappLink}
                                target="_blank"
                                iconTrailing={ArrowNarrowRight}
                            >
                                {hero.ctaConsultation}
                            </Button>
                            <Button
                                color="secondary"
                                size="xl"
                                className="w-full sm:w-auto font-bold"
                                href="/services"
                            >
                                {hero.ctaServices}
                            </Button>
                        </motion.div>

                        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                            <motion.div
                                variants={fadeInUp}
                                className="flex items-center gap-2 text-sm font-semibold text-success-700"
                            >
                                <span className="inline-flex size-5 items-center justify-center rounded-full bg-success-secondary text-success-700">
                                    ✓
                                </span>
                                {hero.freeConsultation} 💸
                            </motion.div>

                            <motion.div
                                variants={fadeInUp}
                                className="flex items-center gap-2 text-sm font-semibold text-brand-700"
                            >
                                <span className="inline-flex size-5 items-center justify-center rounded-full bg-brand-primary text-brand-700">
                                    ✓
                                </span>
                                {hero.fullOwnership} 🚀
                            </motion.div>

                            <motion.div
                                variants={fadeInUp}
                                className="flex items-center gap-2 text-sm font-semibold text-blue-700"
                            >
                                <span className="inline-flex size-5 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                                    ✓
                                </span>
                                {hero.worldwideService} 🌍
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="flex flex-1 items-center justify-center w-full"
                    >
                        <div className="relative w-full max-w-[500px]">
                            <div className="absolute -inset-4 rounded-full bg-brand-primary blur-3xl opacity-50" />
                            <Image
                                src="/images/developer.svg"
                                alt="Coding Illustration"
                                width={500}
                                height={500}
                                className="relative rounded-2xl grayscale-0 w-full h-auto"
                                priority
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
