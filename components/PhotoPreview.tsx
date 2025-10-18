// components/PhotoPreview.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const PhotoPreview = () => {
  const photos = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      alt: "Wedding photo 1",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=686",
      alt: "Portrait photo",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1556125574-d7f27ec36a06?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      alt: "Event photo",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      alt: "Wedding photo 2",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      alt: "Wedding photo 3",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=686",
      alt: "Portrait photo 2",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-6 mb-4">
            {/* Left Decorative Line */}
            <Image
              src={"/images/floral-left.png"}
              alt="floral"
              width={70}
              height={50}
              className="opacity-50 mt-2"
            />

            <h2 className="font-playfair text-5xl md:text-6xl text-coffee">
              Gallery
            </h2>

            {/* Right Decorative Line */}
            <Image
              src={"/images/floral-right.png"}
              alt="floral"
              width={70}
              height={50}
              className="opacity-50 mt-2"
            />
          </div>

          <p className="font-bodoni text-lg text-coffee/70 max-w-2xl mx-auto mb-8">
            A glimpse into our captured moments
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Hover Overlay */}
              {/* <div className="absolute inset-0 bg-coffee/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-background"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                  />
                </svg>
              </div> */}
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center font-bodoni text-coffee hover:bg-coffee hover:text-white px-6 py-2 text-md transition-all duration-300"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PhotoPreview;
