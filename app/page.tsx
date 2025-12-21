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

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-dvh md:h-[70vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent z-10" />
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/hero-main.jpg"
            alt="Portfolio hero"
            fill
            className="object-cover object-center md:object-bottom"
            priority
            quality={100}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute top-1/4 md:bottom-24 left-0 z-20 px-12 py-6 bg-expresso/60"
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
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex items-center justify-center z-30 px-6 text-center"
        >
          <p className="font-playfair tracking-wide text-2xl md:text-5xl font-light text-beige/80 uppercase leading-tight">
            Visual storyteller for the wildly in love
          </p>
        </motion.div> */}
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
                      <h2 className="font-playfair text-3xl md:text-4xl text-stone-100 mb-2 transform transition-transform duration-500 group-hover:-translate-y-1">
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
    </main>
  );
}
