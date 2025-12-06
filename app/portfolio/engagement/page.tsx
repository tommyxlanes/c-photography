import PhotoGallery from "@/components/PhotoGallery";
import { engagementImages } from "@/data/images";
import Link from "next/link";

export const metadata = {
  title: "Engagement Photography | Portfolio",
  description:
    "Celebrating love stories just beginning with romantic and candid moments",
};

export default function EngagementPage() {
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
        images={engagementImages}
        title="Engagement"
        description="The beginning of forever. These sessions capture the excitement, love, and anticipation of couples embarking on their journey together."
      />
    </main>
  );
}
