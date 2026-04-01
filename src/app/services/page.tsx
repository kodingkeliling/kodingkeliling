import { ServicesSection } from "@/components/services-section";
import { Breadcrumbs } from "@/components/breadcrumbs";

export default function ServicesPage() {
    return (
        <main className="flex-1 bg-secondary">
            <Breadcrumbs />
            <ServicesSection />
        </main>
    );
}
