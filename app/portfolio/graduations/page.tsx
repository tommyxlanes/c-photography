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
      <PhotoGallery
        images={graduationsImages}
        title="Graduations"
        description="Years of hard work celebrated in a single moment. These images honor the dedication and triumph of graduates."
      />
    </main>
  );
}
