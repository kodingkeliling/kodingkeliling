import { ProjectsSection } from "@/components/projects-section";
import { Breadcrumbs } from "@/components/breadcrumbs";

export default function ProjectsPage() {
    return (
        <main className="flex-1 bg-primary">
            <Breadcrumbs />
            <ProjectsSection />
        </main>
    );
}
