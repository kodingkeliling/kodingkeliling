"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus, HelpCircle } from "@untitledui/icons";

export const FAQSection = () => {
    const { t } = useLanguage();
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-sm font-medium text-brand-700"
                    >
                        <HelpCircle className="size-4" />
                        <span>{t.navigation.faq}</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-display-sm font-semibold text-primary md:text-display-md"
                    >
                        {t.faq.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-4 max-w-2xl text-lg text-tertiary"
                    >
                        {t.faq.description}
                    </motion.p>
                </div>

                <div className="mx-auto mt-12 max-w-3xl">
                    <div className="divide-y divide-secondary">
                        {t.faq.items.map((item: any, index: number) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative z-10 py-6"
                            >
                                <button
                                    type="button"
                                    onClick={() => toggleAccordion(index)}
                                    className="group flex min-h-[44px] w-full cursor-pointer items-start justify-between text-left focus:outline-none"
                                    aria-expanded={openIndex === index}
                                >
                                    <span className="text-lg font-semibold text-primary pr-8 transition-colors group-hover:text-brand-600">
                                        {item.question}
                                    </span>
                                    <span className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full border border-secondary text-tertiary transition-colors group-hover:border-brand-300 group-hover:text-brand-600">
                                        {openIndex === index ? (
                                            <Minus className="size-4" />
                                        ) : (
                                            <Plus className="size-4" />
                                        )}
                                    </span>
                                </button>
                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <p className="mt-4 text-md leading-relaxed text-tertiary">
                                                {item.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 rounded-2xl bg-secondary p-8 text-center md:p-12"
                >
                    <h3 className="text-xl font-semibold text-primary">{t.faq.stillHaveQuestions}</h3>
                    <p className="mt-2 text-tertiary">{t.faq.footerContactDesc}</p>
                    <div className="mt-8">
                        <a
                            href="https://wa.me/6282116147481"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center rounded-lg bg-brand-600 px-6 py-3 text-md font-semibold text-white shadow-sm transition-all hover:bg-brand-700 hover:shadow-md"
                        >
                            {t.common.consultNow}
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
