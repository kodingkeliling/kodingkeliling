"use client";

import React from "react";
import Image from "next/image";
import { Star01 } from "@untitledui/icons";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "motion/react";

const trustedBrands = [
    "KSR UNPAS", "LISMA UNPAS", "IOM ITB", "UNPAS", "777 Group"
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

export const ReviewsSection = () => {
    const { t } = useLanguage();
    return (
        <section id="review" className="bg-secondary pt-8 pb-16 md:pt-12 md:pb-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 flex flex-col items-center text-center"
                >
                    <h2 className="text-display-sm font-semibold text-primary md:text-display-md">
                        {t.common.whatClientsSay}
                    </h2>
                    <p className="mt-4 max-w-2xl text-lg text-tertiary">
                        {t.common.whatClientsSayDesc}
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants as any}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid gap-8 sm:grid-cols-2 md:grid-cols-3"
                >
                    {t.common.reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants as any}
                            className="flex flex-col rounded-2xl border border-secondary bg-primary p-8 shadow-sm transition-all hover:shadow-md"
                        >
                            <div className="mb-6 flex items-center gap-2">
                                <div className="flex gap-1 text-warning-400">
                                    {[...Array(5)].map((_, i) => (
                                        <Star01 key={i} className="size-5 fill-current" />
                                    ))}
                                </div>
                                <span className="font-bold text-secondary">5.0</span>
                            </div>
                            <p className="mb-8 text-lg font-medium italic text-primary">
                                "{review.review}"
                            </p>
                            <div className="mt-auto flex items-center gap-4">
                                <div className="relative size-12 overflow-hidden rounded-full border border-secondary bg-secondary">
                                    <Image
                                        src={review.avatar}
                                        alt={review.name}
                                        fill
                                        className="object-cover"
                                        onError={(e) => {
                                            e.currentTarget.src = "/favicon.png";
                                        }}
                                    />
                                </div>
                                <div>
                                    <h4 className="text-md font-bold text-primary">{review.name}</h4>
                                    <p className="text-sm text-tertiary">{review.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-16 overflow-hidden border-y border-secondary py-12"
                >
                    <p className="mb-8 text-center text-sm font-semibold uppercase tracking-wider text-tertiary">
                        {t.common.trustedBy}
                    </p>
                    <div className="flex select-none overflow-hidden hover:[animation-play-state:paused]">
                        <div className="flex min-w-full shrink-0 animate-marquee items-center justify-around gap-12 px-6">
                            {trustedBrands.map((brand, i) => (
                                <span key={i} className="text-2xl font-bold text-gray-400 hover:text-brand transition-colors cursor-default md:text-3xl">
                                    {brand}
                                </span>
                            ))}
                        </div>
                        <div className="flex min-w-full shrink-0 animate-marquee items-center justify-around gap-12 px-6" aria-hidden="true">
                            {trustedBrands.map((brand, i) => (
                                <span key={i} className="text-2xl font-bold text-gray-400 hover:text-brand transition-colors cursor-default md:text-3xl">
                                    {brand}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
