import PhotoGallery from "@/components/PhotoGallery";
import { weddingImages } from "@/data/images";
import Link from "next/link";

export const metadata = {
  title: "Wedding Photography | Portfolio",
  description:
    "Capturing the magic of your special day with elegance and artistry",
};

export default function WeddingPage() {
  return (
    <main className="min-h-screen bg-background">
      <PhotoGallery
        images={weddingImages}
        title="Wedding"
        description="Every love story deserves to be told beautifully. These moments of joy, tears, and celebration are captured with care and artistry."
      />
    </main>
  );
}
