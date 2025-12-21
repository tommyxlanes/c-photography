"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Sparkles, Film } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[3/4] overflow-hidden order-2 lg:order-1"
            >
              <Image
                src="/images/cp-hero.webp"
                alt="Photographer portrait"
                fill
                className="object-cover grayscale opacity-90"
                priority
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-expresso/20 via-transparent to-transparent" />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <p className="font-bodoni text-coffee/60 tracking-widest text-sm uppercase mb-4">
                The Artist Behind the Lens
              </p>
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-coffee mb-6 leading-tight">
                Hello, I'm
                <br />
                <span className="text-beige/70">Christ Perez</span>
              </h1>
              <div className="w-16 h-px bg-coffee/30 mb-8" />
              <p className="font-bodoni text-coffee/80 text-lg leading-relaxed mb-6">
                A hopeless romantic with a camera, dedicated to preserving the
                fleeting moments that make your heart skip a beat. Based in Los
                Angeles, I travel wherever love takes me.
              </p>
              <p className="font-bodoni text-coffee/70 leading-relaxed">
                With over eight years behind the lens, I've had the honor of
                documenting hundreds of love stories — each one as unique as the
                souls who live them.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-6 bg-coffee/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-bodoni text-coffee/60 tracking-widest text-sm uppercase mb-4">
              My Philosophy
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl text-coffee mb-8 leading-relaxed">
              "I consider myself incredibly lucky to do what I love — capturing
              moments that will be cherished for a lifetime"
            </h2>
            <div className="w-12 h-px bg-coffee/30 mx-auto mb-8" />
            <p className="font-bodoni text-coffee/70 text-lg leading-relaxed max-w-2xl mx-auto">
              Based in West Covina, California, I've had the privilege of
              sharing my passion for photography and the beauty of this city
              with every person I work with. Each session is an opportunity to
              connect, create, and preserve something meaningful together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Three Image Feature */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { src: "/images/wedding/DSC00425.jpg", alt: "Wedding detail" },
              { src: "/images/engagement/DSC08808.jpg", alt: "Couple moment" },
              { src: "/images/portraits/DSC09352.jpg", alt: "Portrait" },
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative aspect-[4/5] overflow-hidden group"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-expresso/10 group-hover:bg-expresso/0 transition-colors duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="font-bodoni text-coffee/60 tracking-widest text-sm uppercase mb-4">
                My Story
              </p>
              <h2 className="font-playfair text-3xl md:text-4xl text-coffee mb-6">
                How It All Began
              </h2>
              <div className="w-16 h-px bg-coffee/30 mb-8" />
              <div className="space-y-6 font-bodoni text-coffee/70 leading-relaxed">
                <p>
                  My journey into photography began at the Los Angeles Film
                  School, where I fell in love with the art of visual
                  storytelling. Surrounded by the energy and creativity of LA, I
                  discovered that my true calling was capturing the raw,
                  unscripted moments that make each story unique.
                </p>
                <p>
                  Over the years, I've had the honor of working with countless
                  couples and families throughout Southern California. Each
                  session has deepened my appreciation for this craft — and for
                  the trust people place in me to document their most cherished
                  memories.
                </p>
                <p>
                  Today, I pour that same passion into every shoot. Whether
                  we're chasing golden hour in the foothills or exploring hidden
                  gems around West Covina, I love sharing the beauty of this
                  place I call home with everyone I work with.
                </p>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative aspect-square overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1658504292957-9d901d2ebfae?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Behind the scenes"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-expresso/30 via-transparent to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-expresso">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center"
          >
            {[
              { number: "8+", label: "Years of Experience" },
              { number: "350+", label: "Weddings Captured" },
              { number: "12", label: "Countries Traveled" },
              { number: "∞", label: "Cups of Coffee" },
            ].map((stat, index) => (
              <div key={index}>
                <p className="font-playfair text-4xl md:text-5xl text-background mb-2">
                  {stat.number}
                </p>
                <p className="font-bodoni text-background/70 text-sm tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <p className="font-bodoni text-coffee/60 tracking-widest text-sm uppercase mb-4">
              The Experience
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl text-coffee mb-4">
              What Working With Me Looks Like
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Connection First",
                description:
                  "Before I ever pick up my camera, we connect. A phone call, a coffee date, or a video chat — I want to know your story, your quirks, what makes you both laugh until you cry.",
                icon: Heart,
              },
              {
                title: "Effortless & Natural",
                description:
                  "No awkward posing or forced smiles. I guide you through natural movements and genuine interactions, creating space for authentic moments to unfold.",
                icon: Sparkles,
              },
              {
                title: "Timeless Delivery",
                description:
                  "Your gallery arrives within 4-6 weeks — a curated collection of images edited with a warm, timeless aesthetic that will look beautiful for generations.",
                icon: Film,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="text-center p-8 border border-coffee/10 hover:border-coffee/30 transition-colors duration-300"
              >
                <item.icon
                  className="w-8 h-8 text-coffee/70 mx-auto mb-6"
                  strokeWidth={1.5}
                />
                <h3 className="font-playfair text-xl text-coffee mb-4">
                  {item.title}
                </h3>
                <p className="font-bodoni text-coffee/70 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Touch Section */}
      <section className="py-20 px-6 bg-coffee/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <p className="font-bodoni text-coffee/60 tracking-widest text-sm uppercase mb-4">
              When I'm Not Behind the Camera
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl text-coffee mb-8">
              A Few Fun Facts
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 font-bodoni text-coffee/70"
          >
            {[
              "I'm a sucker for golden hour and oat milk lattes",
              "My happy place is anywhere with mountains and water",
              "I cry at every wedding — even after 350+",
              "Currently obsessed with vintage film photography",
              "I believe in long hugs and handwritten notes",
              "My dog, is my unofficial studio assistant",
            ].map((fact, index) => (
              <div key={index} className="flex items-start gap-4">
                <span className="text-coffee/40 mt-1">✦</span>
                <p>{fact}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-bodoni text-coffee/60 tracking-widest text-sm uppercase mb-4">
              Let's Create Together
            </p>
            <h2 className="font-playfair text-3xl md:text-5xl text-coffee mb-6 leading-tight">
              Ready to Tell Your Story?
            </h2>
            <p className="font-bodoni text-coffee/70 text-lg mb-10 max-w-xl mx-auto">
              I'd love to hear about your plans and see if we're the right fit.
              Let's grab a virtual coffee and chat about your vision.
            </p>
            <Link
              href="#contact"
              className="inline-block font-bodoni text-sm tracking-widest uppercase px-10 py-4 bg-coffee text-background hover:bg-expresso transition-colors duration-300"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section> */}
    </main>
  );
}
