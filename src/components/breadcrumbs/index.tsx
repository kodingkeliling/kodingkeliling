"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home02 } from "@untitledui/icons";
import { useLanguage } from "@/context/LanguageContext";

export const Breadcrumbs = () => {
    const pathname = usePathname();
    const { language } = useLanguage();

    if (pathname === "/") return null;

    const pathSegments = pathname.split("/").filter(Boolean);
    
    const labels: Record<string, Record<string, string>> = {
        id: { services: "Layanan", projects: "Project", reviews: "Review", contact: "Kontak", home: "Beranda" },
        en: { services: "Services", projects: "Projects", reviews: "Reviews", contact: "Contact", home: "Home" },
        jp: { services: "サービス", projects: "プロジェクト", reviews: "レビュー", contact: "コンタクト", home: "ホーム" },
        es: { services: "Servicios", projects: "Proyectos", reviews: "Reseñas", contact: "Contacto", home: "Inicio" },
        fr: { services: "Services", projects: "Projets", reviews: "Avis", contact: "Contact", home: "Accueil" },
        de: { services: "Dienste", projects: "Projekte", reviews: "Bewertungen", contact: "Kontakt", home: "Startseite" },
        zh: { services: "服务", projects: "项目", reviews: "评价", contact: "联系", home: "首页" },
        ko: { services: "서비스", projects: "프로젝트", reviews: "리뷰", contact: "연락처", home: "홈" },
    };

    const currentLabels = labels[language] || labels.en;
    const getLabel = (segment: string) => currentLabels[segment] || segment;

    return (
        <nav className="mx-auto max-w-container px-4 pt-4 md:px-8 md:pt-8" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm font-medium text-tertiary">
                <li>
                    <Link href="/" className="hover:text-primary flex items-center gap-1 transition-colors">
                        <Home02 className="size-4" />
                        <span>{currentLabels.home}</span>
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
