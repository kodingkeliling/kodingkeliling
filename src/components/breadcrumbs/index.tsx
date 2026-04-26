"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home02 } from "@untitledui/icons";
import { useLanguage } from "@/context/LanguageContext";

export const Breadcrumbs = () => {
    const pathname = usePathname();
    const { t } = useLanguage();

    if (pathname === "/") return null;

    const pathSegments = pathname.split("/").filter(Boolean);
    
    // Map URL segments to navigation translation keys
    const segmentToNavKey: Record<string, string> = {
        services: "layanan",
        projects: "project",
        reviews: "review",
        contact: "kontak"
    };

    const getLabel = (segment: string) => {
        const navKey = segmentToNavKey[segment.toLowerCase()];
        if (navKey && (t.navigation as any)[navKey]) {
            return (t.navigation as any)[navKey];
        }
        return segment;
    };

    return (
        <nav className="mx-auto max-w-container px-4 pt-4 md:px-8 md:pt-8" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm font-medium text-tertiary">
                <li>
                    <Link href="/" className="hover:text-primary flex items-center gap-1 transition-colors">
                        <Home02 className="size-4" />
                        <span>{t.common.home}</span>
                    </Link>
                </li>
                {pathSegments.map((segment, index) => {
                    const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
                    const isLast = index === pathSegments.length - 1;

                    return (
                        <li key={segment} className="flex items-center space-x-2">
                            <ChevronRight className="size-4 shrink-0 text-quaternary" />
                            {isLast ? (
                                <span className="text-brand font-bold capitalize">{getLabel(segment)}</span>
                            ) : (
                                <Link href={href} className="hover:text-primary transition-colors capitalize">
                                    {getLabel(segment)}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};
