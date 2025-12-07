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
      <PhotoGallery
        images={eventsImages}
        title="Events"
        description="From intimate gatherings to grand celebrations, every event has moments worth preserving forever."
      />
    </main>
  );
}
