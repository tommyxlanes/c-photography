"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const categories = [
  {
    slug: "wedding",
    title: "Wedding",
    description: "Capturing the magic of your special day",
    image: "/images/wedding/DSC00529.jpg",
    count: 19,
  },
  {
    slug: "engagement",
    title: "Engagement",
    description: "Celebrating love stories just beginning",
    image: "/images/engagement/DSC05571.jpg",
    count: 20,
  },
  {
    slug: "portraits",
    title: "Portraits",
    description: "Timeless portraits that tell your story",
    image: "/images/portraits/DSC07352.jpg",
    count: 17,
  },
  {
    slug: "maternity",
    title: "Maternity",
    description: "Beautiful moments of anticipation",
    image: "/images/maternity/DSC04879.jpg",
    count: 20,
  },
  {
    slug: "graduations",
    title: "Graduations",
    description: "Honoring your achievements",
    image: "/images/graduations/DSC00807.jpg",
    count: 23,
  },
  {
    slug: "events",
    title: "Events",
    description: "Memorable occasions captured forever",
    image: "/images/events/DSC03699.jpg",
    count: 20,
  },
];

const parentVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-expresso/60 via-expresso/40 to-background z-10" />
        <Image
          src="/images/wedding/DSC00425.jpg"
          alt="Portfolio hero"
          fill
          className="object-cover object-top"
          priority
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 text-center px-6"
        >
          <p className="font-bodoni text-lg md:text-3xl text-coffee max-w-2xl mx-auto">
            A collection of cherished moments and timeless memories
          </p>
        </motion.div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={parentVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {categories.map((category) => (
              <motion.div key={category.slug} variants={cardVariants}>
                <Link
                  href={`/portfolio/${category.slug}`}
                  className="group block"
                >
                  <div className="relative overflow-hidden rounded-2xl aspect-[4/5] bg-coffee/10">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-expresso via-expresso/30 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-500" />

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-8">
                      <span className="font-bodoni text-sm text-background/60 mb-2">
                        {category.count} photos
                      </span>
                      <h2 className="font-playfair text-3xl md:text-4xl text-background mb-2 transform transition-transform duration-500 group-hover:-translate-y-1">
                        {category.title}
                      </h2>
                      <p className="font-bodoni text-background/80 text-sm mb-4">
                        {category.description}
                      </p>

                      {/* View link */}
                      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                        <span className="font-bodoni text-sm text-background tracking-wider">
                          View Gallery
                        </span>
                        <svg
                          className="w-4 h-4 text-background transform group-hover:translate-x-1 transition-transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-6 bg-coffee/10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-playfair text-4xl md:text-5xl text-coffee mb-6">
              Let&apos;s Create Together
            </h2>
            <p className="font-bodoni text-coffee/70 mb-8">
              Ready to capture your special moments? Get in touch and let&apos;s
              discuss your vision.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-coffee text-background font-bodoni tracking-wider rounded-full hover:bg-expresso transition-colors duration-300"
            >
              Book a Session
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

// import Contact from "@/components/Contact";
// import HeroBanner from "@/components/Hero";
// import CardSection from "@/components/MidSection";
// import PhotoGallery from "@/components/PhotoGallery";
// import PhotoPreview from "@/components/PhotoPreview";
// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-[#fcfbf9]">
//       <HeroBanner />
//       <CardSection />
//       <PhotoPreview />
//       <Contact />
//     </div>
//   );
// }
