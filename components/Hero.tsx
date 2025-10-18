// components/HeroImage.tsx
"use client";

import Image from "next/image";

const HeroImage = () => {
  return (
    <div className="w-full h-[700px]">
      <div className="w-full h-full relative">
        <Image
          src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
          alt="Wedding hero"
          fill
          className="hero-image object-cover object-bottom"
          priority
          quality={90}
        />
      </div>
    </div>
  );
};

export default HeroImage;
