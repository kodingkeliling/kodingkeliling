import { ReviewsSection } from "@/components/reviews-section";
import { Breadcrumbs } from "@/components/breadcrumbs";

export default function ReviewsPage() {
    return (
        <main className="flex-1 bg-secondary">
            <Breadcrumbs />
            <ReviewsSection />
        </main>
    );
}
