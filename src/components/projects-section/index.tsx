"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/base/buttons/button";
import { LinkExternal01, Star01 } from "@untitledui/icons";
import { cx } from "@/utils/cx";
import { Badge } from "@/components/base/badges/badges";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "motion/react";

interface ProjectsSectionProps {
    limit?: number;
}

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export const ProjectsSection = ({ limit }: ProjectsSectionProps) => {
    const { t } = useLanguage();
    const displayProjects = limit ? t.projects.slice(0, limit) : t.projects;

    return (
        <section id="project" className="bg-primary pt-8 pb-16 md:pt-12 md:pb-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 flex flex-col items-center justify-between gap-6 md:flex-row"
                >
                    <div className="max-w-xl text-left">
                        <h2 className="text-display-sm font-semibold text-primary md:text-display-md">
                            {t.common.latestProjects}
                        </h2>
                        <p className="mt-4 text-lg text-tertiary">
                            {t.common.latestProjectsDesc}
                        </p>
                    </div>
                    {limit && (
                        <Button color="secondary" size="lg" href="/projects">
                            {t.common.seeAllProjects}
                        </Button>
                    )}
                </motion.div>

                <motion.div
                    variants={containerVariants as any}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid gap-8 sm:grid-cols-2 md:grid-cols-3"
                >
                    {displayProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants as any}
                            className="group relative flex flex-col overflow-hidden rounded-2xl border border-secondary shadow-sm transition-all hover:shadow-lg"
                        >
                            <div className="relative h-64 w-full overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                                    onError={(e) => {
                                        e.currentTarget.src = "/favicon.png";
                                    }}
                                />
                                {project.link && (
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-6">
                                        <Button
                                            color="primary"
                                            size="md"
                                            href={project.link}
                                            target="_blank"
                                            iconLeading={LinkExternal01}
                                            className="w-full"
                                        >
                                            {t.common.visitWebsite}
                                        </Button>
                                    </div>
                                )}
                            </div>
                            <div className="flex flex-col gap-3 p-5 bg-primary">
                                <div className="flex items-center justify-between">
                                    <Badge color="brand" size="sm" type="color">
                                        {project.category}
                                    </Badge>
                                </div>
                                <h3 className="text-xl font-bold text-primary group-hover:text-brand transition-colors">{project.title}</h3>

                                <p className="text-sm text-tertiary line-clamp-2">
                                    {project.description}
                                </p>

                                <div className="flex items-center gap-1 text-warning-400">
                                    {[...Array(5)].map((_, i) => (
                                        <Star01 key={i} className={cx("size-4", i < Math.floor(project.rating) ? "fill-current" : "opacity-30")} />
                                    ))}
                                    <span className="text-xs font-bold text-secondary ml-1">{project.rating}</span>
                                </div>

                                <div className="flex flex-wrap gap-2 pt-2">
                                    {project.tech.map((t) => (
                                        <Badge key={t} color="gray" size="sm" type="pill-color" className="text-[10px]">
                                            {t}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
