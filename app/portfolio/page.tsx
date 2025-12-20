"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  weddingImages,
  engagementImages,
  portraitsImages,
  maternityImages,
  graduationsImages,
  eventsImages,
} from "@/data/images";

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
    image: "/images/graduations/DSC08562.jpg",
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

// Map category slugs to their images
const categoryImages: Record<string, string[]> = {
  wedding: weddingImages,
  engagement: engagementImages,
  portraits: portraitsImages,
  maternity: maternityImages,
  graduations: graduationsImages,
  events: eventsImages,
};

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const filteredCategories = activeFilter
    ? categories.filter((cat) => cat.slug === activeFilter)
    : categories;

  // Get images for the active filter
  const activeImages = activeFilter ? categoryImages[activeFilter] || [] : [];
  const activeCategory = categories.find((cat) => cat.slug === activeFilter);

  // Lightbox handlers
  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
    document.body.style.overflow = "unset";
  };

  const goToPrevious = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex(
      selectedImageIndex === 0
        ? activeImages.length - 1
        : selectedImageIndex - 1
    );
  };

  const goToNext = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex(
      selectedImageIndex === activeImages.length - 1
        ? 0
        : selectedImageIndex + 1
    );
  };

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      switch (e.key) {
        case "Escape":
          closeLightbox();
          break;
        case "ArrowLeft":
          goToPrevious();
          break;
        case "ArrowRight":
          goToNext();
          break;
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, activeImages.length]);

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section - Three Image Grid */}
      <section className="pt-24 md:pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[70vh] min-h-[500px] max-h-[700px]">
            {/* Main Large Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="md:col-span-2 md:row-span-2 relative overflow-hidden group"
            >
              <Image
                src="https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Wedding photography"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-expresso/60 via-transparent to-transparent" />
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute bottom-8 left-8 z-20"
              >
                <p className="font-playfair tracking-wide text-2xl md:text-4xl font-light text-stone-100 uppercase leading-tight">
                  Visual
                  <br />
                  storyteller
                  <br />
                  <span className="text-background/70">for the wildly</span>
                  <br />
                  in love
                </p>
              </motion.div>
            </motion.div>

            {/* Top Right Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative overflow-hidden group hidden md:block"
            >
              <Image
                src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1170&auto=format&fit=crop"
                alt="Couple portrait"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-expresso/10 group-hover:bg-expresso/0 transition-colors duration-500" />
            </motion.div>

            {/* Bottom Right Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="relative overflow-hidden group hidden md:block"
            >
              <Image
                src="https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=1171&auto=format&fit=crop"
                alt="Wedding details"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-expresso/10 group-hover:bg-expresso/0 transition-colors duration-500" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Category Filter Pills */}
      <section className="py-8 px-6 border-b border-coffee/10 hidden md:block">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setActiveFilter(null)}
              className={`cursor-pointer px-6 py-2 font-bodoni text-sm tracking-wide transition-all duration-300 ${
                activeFilter === null
                  ? "bg-coffee text-background"
                  : "bg-transparent text-coffee border border-coffee/30 hover:border-coffee"
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category.slug}
                onClick={() => setActiveFilter(category.slug)}
                className={`cursor-pointer px-6 py-2 font-bodoni text-sm tracking-wide transition-all duration-300 ${
                  activeFilter === category.slug
                    ? "bg-coffee text-background"
                    : "bg-transparent text-coffee border border-coffee/30 hover:border-coffee"
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="pt-0 md:pt-20 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl md:text-5xl text-coffee mb-4">
              {activeFilter ? activeCategory?.title : "Portfolio"}
            </h2>
            <p className="font-bodoni text-coffee/70 max-w-2xl mx-auto">
              {activeFilter
                ? activeCategory?.description
                : "Explore our collection of captured moments across different occasions and celebrations"}
            </p>
            {activeFilter && (
              <p className="font-bodoni text-sm text-coffee/50 mt-2">
                {activeImages.length} photos
              </p>
            )}
          </motion.div>

          <AnimatePresence mode="wait">
            {/* Show Category Cards when "All" is selected */}
            {!activeFilter && (
              <motion.div
                key="categories"
                variants={parentVariants}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {categories.map((category) => (
                  <motion.div key={category.slug} variants={cardVariants}>
                    <Link
                      href={`/portfolio/${category.slug}`}
                      className="group block"
                    >
                      <div className="relative overflow-hidden aspect-[4/5] bg-coffee/10">
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
                          <div className="flex items-center gap-3 mb-2">
                            <h2 className="font-playfair text-3xl md:text-4xl text-stone-100 transform transition-transform duration-500 group-hover:-translate-y-1">
                              {category.title}
                            </h2>
                            <span className="font-bodoni text-xs text-background/60 bg-background/10 px-2 py-1 rounded-full">
                              {category.count} photos
                            </span>
                          </div>
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
            )}

            {/* Show Images Grid when a category is selected */}
            {activeFilter && (
              <motion.div
                key={activeFilter}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
              >
                {activeImages.map((src, index) => (
                  <motion.div
                    key={src}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.03 }}
                    className="break-inside-avoid"
                  >
                    <button
                      onClick={() => openLightbox(index)}
                      className="relative w-full overflow-hidden bg-coffee/10 group cursor-pointer block"
                    >
                      <Image
                        src={src}
                        alt={`${activeCategory?.title} photo ${index + 1}`}
                        width={800}
                        height={600}
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-expresso/0 group-hover:bg-expresso/20 transition-colors duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-12 h-12 rounded-full bg-background/90 flex items-center justify-center">
                          <svg
                            className="w-5 h-5 text-coffee"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                            />
                          </svg>
                        </div>
                      </div>
                    </button>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImageIndex !== null && activeImages.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-expresso/95 backdrop-blur-sm flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors z-10"
              aria-label="Close lightbox"
            >
              <svg
                className="w-6 h-6 text-background"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors z-10"
              aria-label="Previous image"
            >
              <svg
                className="w-6 h-6 text-background"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors z-10"
              aria-label="Next image"
            >
              <svg
                className="w-6 h-6 text-background"
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
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-bodoni text-background/70 text-sm">
              {selectedImageIndex + 1} / {activeImages.length}
            </div>

            {/* Main Image */}
            <motion.div
              key={selectedImageIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-[90vw] max-h-[85vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={activeImages[selectedImageIndex]}
                alt={`${activeCategory?.title} photo ${selectedImageIndex + 1}`}
                width={1200}
                height={800}
                className="max-w-full max-h-[85vh] w-auto h-auto object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
