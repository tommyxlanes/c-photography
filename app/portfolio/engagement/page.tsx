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
      <PhotoGallery
        images={engagementImages}
        title="Engagement"
        description="The beginning of forever. These sessions capture the excitement, love, and anticipation of couples embarking on their journey together."
      />
    </main>
  );
}
