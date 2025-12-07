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
      <PhotoGallery
        images={maternityImages}
        title="Maternity"
        description="A celebration of new life. These tender moments capture the beauty and anticipation of mothers-to-be."
      />
    </main>
  );
}
