import { ProjectsSection } from "@/components/projects-section";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portofolio Jasa Pembuatan Website & Aplikasi",
    description: "Lihat portofolio karya terbaik KodingKeliling dalam jasa pembuatan website, aplikasi mobile, dan sistem kustom untuk berbagai klien di Bandung, Jakarta, dan Indonesia.",
}

export default function ProjectsPage() {
    return (
        <main className="flex-1 bg-primary">
            <Breadcrumbs />
            <ProjectsSection />
        </main>
    );
}
