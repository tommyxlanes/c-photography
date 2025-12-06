import PhotoGallery from "@/components/PhotoGallery";
import { maternityImages } from "@/data/images";
import Link from "next/link";

export const metadata = {
  title: "Maternity Photography | Portfolio",
  description:
    "Beautiful moments of anticipation, celebrating the journey to motherhood",
};

export default function MaternityPage() {
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
        images={maternityImages}
        title="Maternity"
        description="A celebration of new life. These tender moments capture the beauty and anticipation of mothers-to-be."
      />
    </main>
  );
}
