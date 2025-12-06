// components/CardSection.tsx
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const parentVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
} as const;

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1], // Valid cubic-bezier easing
    },
  },
} as const;

const CardSection = () => {
  const cards = [
    {
      id: 1,
      title: "Wedding",
      description: "Capturing your special moments with elegance and grace",
      image: "/images/wedding/DSC03768.jpg",
    },
    {
      id: 2,
      title: "Portrait",
      description: "Timeless portraits that tell your unique story",
      image: "/images/portraits/DSC09352.jpg",
    },
    {
      id: 3,
      title: "Event",
      description: "Professional coverage of your memorable occasions",
      image: "/images/events/DSC03473.jpg",
    },
    {
      id: 4,
      title: "Graduation",
      description: "Capturing your special moments with elegance and grace",
      image: "/images/graduations/DSC00987.jpg",
    },
    {
      id: 5,
      title: "Maternity",
      description: "Timeless portraits that tell your unique story",
      image: "/images/maternity/DSC04932.jpg",
    },
    {
      id: 6,
      title: "Engagement",
      description: "Professional coverage of your memorable occasions",
      image: "/images/engagement/DSC06160.jpg",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-6 mb-4">
            <Image
              src="/images/floral-left.png"
              alt="floral"
              width={70}
              height={50}
              className="opacity-50 mt-2"
            />
            <h2 className="font-playfair text-5xl md:text-6xl text-coffee">
              Services
            </h2>
            <Image
              src="/images/floral-right.png"
              alt="floral"
              width={70}
              height={50}
              className="opacity-50 mt-2"
            />
          </div>
          <p className="font-bodoni text-lg text-coffee/70 max-w-2xl mx-auto">
            Discover the artistry behind every captured moment
          </p>
        </div>

        {/* Cards Grid with Stagger Animation */}
        <motion.div
          variants={parentVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {cards.map((card) => (
            <motion.div
              key={card.id}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-500"
            >
              {/* Image */}
              <div className="relative h-96 overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coffee/90 via-coffee/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-background">
                <h3 className="font-playfair text-3xl mb-3 transform transition-transform duration-500 group-hover:-translate-y-1">
                  {card.title}
                </h3>
                <p className="font-bodoni text-background/90 text-sm leading-relaxed">
                  {card.description}
                </p>

                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="inline-flex items-center font-bodoni text-sm tracking-wider">
                    View More
                    <svg
                      className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
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
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CardSection;
