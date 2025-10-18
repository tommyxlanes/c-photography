// components/CardSection.tsx
"use client";

import React from "react";
import Image from "next/image";

const CardSection = () => {
  const cards = [
    {
      id: 1,
      title: "Weddings",
      description: "Capturing your special moments with elegance and grace",
      image:
        "https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    },
    {
      id: 2,
      title: "Portraits",
      description: "Timeless portraits that tell your unique story",
      image:
        "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=686",
    },
    {
      id: 3,
      title: "Events",
      description: "Professional coverage of your memorable occasions",
      image:
        "https://images.unsplash.com/photo-1556125574-d7f27ec36a06?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    },
  ];

  return (
    <section className="py-20 px-6 ">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-6 mb-4">
            {/* Left Floral Line */}
            <Image
              src={"/images/floral-left.png"}
              alt="floral"
              width={70}
              height={50}
              className="opacity-50 mt-2"
            />

            <h2 className="font-playfair text-5xl md:text-6xl text-coffee">
              Services
            </h2>

            {/* Right Floral Line */}
            <Image
              src={"/images/floral-right.png"}
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

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-500"
            >
              {/* Image Container */}
              <div className="relative h-96 overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-coffee/90 via-coffee/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-background">
                <h3 className="font-playfair text-3xl mb-3 transform transition-transform duration-500 group-hover:translate-y-[-4px]">
                  {card.title}
                </h3>
                <p className="font-bodoni text-background/90 text-sm leading-relaxed">
                  {card.description}
                </p>

                {/* View More Link */}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardSection;
