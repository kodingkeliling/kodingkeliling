"use client";

import React from "react";
import { Hero } from "@/components/hero";
import { ServicesSection } from "@/components/services-section";
import { ProjectsSection } from "@/components/projects-section";
import { ReviewsSection } from "@/components/reviews-section";

export const HomeScreen = () => {
    return (
        <main className="flex-1 overflow-x-hidden">
            <Hero />
            <ServicesSection />
            <ProjectsSection limit={3} />
            <ReviewsSection />
        </main>
    );
};
