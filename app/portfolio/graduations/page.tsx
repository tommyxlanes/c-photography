import PhotoGallery from "@/components/PhotoGallery";
import { graduationsImages } from "@/data/images";
import Link from "next/link";

export const metadata = {
  title: "Graduation Photography | Portfolio",
  description: "Honoring your achievements and celebrating academic milestones",
};

export default function GraduationsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Back link */}
      <div className="max-w-7xl mx-auto px-6 pt-8">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 font-bodoni text-coffee/70 hover:text-coffee transition-colors"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Portfolio
        </Link>
      </div>

      <PhotoGallery
        images={graduationsImages}
        title="Graduations"
        description="Years of hard work celebrated in a single moment. These images honor the dedication and triumph of graduates."
      />
    </main>
  );
}
