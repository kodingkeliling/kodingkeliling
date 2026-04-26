"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "@untitledui/icons";
import { config } from "@/utils/config";
import { Button } from "@/components/base/buttons/button";

export const FAQSection = () => {
    const { t, language } = useLanguage();
    const { faq } = t;
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // FAQ Schema for SEO
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faq.items.map((item) => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
    };

    return (
        <section className="bg-primary py-16 md:py-24" id="faq">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mb-12 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col items-center gap-3"
                    >
                        <h2 className="text-display-sm font-bold tracking-tight text-primary md:text-display-md">
                            {faq.title}
                        </h2>
                        <p className="max-w-2xl text-lg text-tertiary md:text-xl">
                            {faq.description}
                        </p>
                    </motion.div>
                </div>

                <div className="mx-auto max-w-3xl">
                    <div className="divide-y divide-secondary border-y border-secondary">
                        {faq.items.map((item, index) => (
                            <div key={index} className="py-6 md:py-8">
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="flex w-full items-start justify-between text-left focus:outline-none group"
                                    aria-expanded={openIndex === index}
                                >
                                    <span className="text-lg font-semibold text-primary md:text-xl group-hover:text-brand transition-colors">
                                        {item.question}
                                    </span>
                                    <span className={`ml-6 flex-shrink-0 text-tertiary transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}>
                                        <ChevronDown className="size-6" />
                                    </span>
                                </button>
                                <AnimatePresence initial={false}>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pt-4 pr-12">
                                                <p className="text-md text-tertiary md:text-lg leading-relaxed">
                                                    {item.answer}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-16 rounded-2xl bg-secondary p-8 text-center md:p-12"
                >
                    <h3 className="text-xl font-semibold text-primary md:text-2xl">
                        {faq.stillHaveQuestions}
                    </h3>
                    <p className="mt-2 text-md text-tertiary md:text-lg">
                        {faq.footerContactDesc}
                    </p>
                    <div className="mt-8 flex justify-center">
                        <Button
                            size="xl"
                            color="primary"
                            href={config.public.whatsappLink}
                            target="_blank"
                            className="font-bold"
                        >
                            {t.common.consultNow}
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
