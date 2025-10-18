import Contact from "@/components/Contact";
import HeroBanner from "@/components/Hero";
import CardSection from "@/components/MidSection";
import PhotoPreview from "@/components/PhotoPreview";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fcfbf9]">
      <HeroBanner />
      <CardSection />
      <PhotoPreview />
      <Contact />
    </div>
  );
}
