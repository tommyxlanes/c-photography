import { notFound } from "next/navigation";
import PhotoGallery from "@/components/PhotoGallery";
import {
  weddingImages,
  engagementImages,
  portraitsImages,
  maternityImages,
  graduationsImages,
  eventsImages,
  categoryMeta,
} from "@/data/images";

interface CategoryPageProps {
  params: {
    category: string;
  };
}

// Map category slugs to their images
const categoryImages: Record<string, string[]> = {
  wedding: weddingImages,
  engagement: engagementImages,
  portraits: portraitsImages,
  maternity: maternityImages,
  graduations: graduationsImages,
  events: eventsImages,
};

// Generate static params for all categories
export async function generateStaticParams() {
  return [
    { category: "wedding" },
    { category: "engagement" },
    { category: "portraits" },
    { category: "maternity" },
    { category: "graduations" },
    { category: "events" },
  ];
}

// Generate metadata for each category
export async function generateMetadata({ params }: CategoryPageProps) {
  const meta = categoryMeta[params.category];

  if (!meta) {
    return {
      title: "Portfolio | Photography",
    };
  }

  return {
    title: `${meta.title} | Portfolio`,
    description: meta.description,
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { category } = params;
  const images = categoryImages[category] || [];
  const meta = categoryMeta[category];

  // If category doesn't exist, show 404
  if (!meta || images.length === 0) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      <PhotoGallery
        images={images}
        title={meta.title}
        description={meta.description}
        backLink="/portfolio"
        backLabel="Back to Portfolio"
      />
    </main>
  );
}
