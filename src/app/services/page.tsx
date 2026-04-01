import { ServicesSection } from "@/components/services-section";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Layanan Jasa Pembuatan Website & Aplikasi Bandung Jakarta",
    description: "Jasa pembuatan website, aplikasi mobile, dan software kustom (ERP/CRM) profesional di Bandung, Jakarta, dan Indonesia dengan harga terjangkau.",
}

export default function ServicesPage() {
    return (
        <main className="flex-1 bg-secondary">
            <Breadcrumbs />
            <ServicesSection />
        </main>
    );
}
