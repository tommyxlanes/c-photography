import PhotoGallery from "@/components/PhotoGallery";
import { eventsImages } from "@/data/images";
import Link from "next/link";

export const metadata = {
  title: "Event Photography | Portfolio",
  description:
    "Professional coverage of memorable occasions and special gatherings",
};

export default function EventsPage() {
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
        images={eventsImages}
        title="Events"
        description="From intimate gatherings to grand celebrations, every event has moments worth preserving forever."
      />
    </main>
  );
}
