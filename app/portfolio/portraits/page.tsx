import PhotoGallery from "@/components/PhotoGallery";
import { portraitsImages } from "@/data/images";
import Link from "next/link";

export const metadata = {
  title: "Portrait Photography | Portfolio",
  description:
    "Timeless portraits that capture personality, emotion, and authentic moments",
};

export default function PortraitsPage() {
  return (
    <main className="min-h-screen bg-background">
      <PhotoGallery
        images={portraitsImages}
        title="Portraits"
        description="Every face tells a story. These portraits capture the essence of individuals through thoughtful composition and natural light."
      />
    </main>
  );
}
