// components/Contact.tsx
"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  const contactInfo = [
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      label: "Email",
      value: "hello@cphotography.com",
      link: "mailto:hello@cphotography.com",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      label: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      label: "Location",
      value: "Los Angeles, CA",
      link: "#",
    },
  ];

  return (
    <section id="contact" className="relative scroll-mt-24">
      <div className="mx-auto">
        {/* Section Header */}
        <div className="relative z-10 p-8  text-center w-full bg-background">
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
              <h2 className="font-playfair text-3xl md:text-5xl text-coffee mb-6 leading-tight uppercase">
                Ready to Tell Your Story?
              </h2>
              <p className="font-bodoni text-coffee/70 text-lg mb-10 max-w-xl mx-auto">
                I'd love to hear about your plans and see if we're the right
                fit. Let's grab a virtual coffee and chat about your vision.
              </p>
            </motion.div>
          </div>
          {/* <div className="flex items-center justify-center gap-6 mb-4">
            <h2 className="font-playfair text-4xl md:text-5xl uppercase text-coffee">
              Contact
            </h2>
          </div>
          <p className="font-bodoni text-lg text-coffee/70 max-w-2xl mx-auto">
            Let's create something beautiful together
          </p> */}
        </div>

        <div className="absolute inset-0 w-full h-full grid grid-cols-1 lg:grid-cols-2">
          <div className="bg-[#d4c5b0]"></div>
          <div className="bg-stone-100"></div>
        </div>

        {/* Full Width Split Background */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto">
          {/* Left Side - Form with Coffee Background */}
          <div className="bg-transparent p-8 md:p-12 lg:p-16">
            <div className="max-w-xl mx-auto">
              <h3 className="font-playfair text-3xl text-coffee mb-6">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block font-bodoni text-coffee mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-[#fcfbf9] w-full px-4 py-3 border border-coffee/20 focus:outline-none focus:ring-2 focus:ring-coffee/50 transition-all font-bodoni"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block font-bodoni text-coffee mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-[#fcfbf9] w-full px-4 py-3 border border-coffee/20 focus:outline-none focus:ring-2 focus:ring-coffee/50 transition-all font-bodoni"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block font-bodoni text-coffee mb-2"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-[#fcfbf9] w-full px-4 py-3 border border-coffee/20 focus:outline-none focus:ring-2 focus:ring-coffee/50 transition-all font-bodoni"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-bodoni text-coffee mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-[#fcfbf9] w-full px-4 py-3 border border-coffee/20 focus:outline-none focus:ring-2 focus:ring-coffee/50 transition-all font-bodoni resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-coffee text-background font-bodoni text-lg py-4 hover:bg-coffee/90 transition-all duration-300 hover:scale-[1.02] shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Right Side - Contact Info with Gray Background */}
          <div className="bg-stone-100 p-8 md:p-12 lg:p-16 flex flex-col ">
            <div className="max-w-xl mx-auto space-y-8">
              <div>
                <h3 className="font-playfair text-3xl text-coffee mb-4">
                  Contact Information
                </h3>
                <p className="font-bodoni text-coffee/70 leading-relaxed">
                  I'd love to hear from you! Whether you're planning a wedding,
                  need portrait photography, or have any questions, feel free to
                  reach out.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-coffee/10 rounded-full flex items-center justify-center text-coffee">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bodoni text-coffee/60 text-sm mb-1">
                        {item.label}
                      </h4>
                      <p className="font-bodoni text-coffee text-lg">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="pt-8">
                <h4 className="font-bodoni text-coffee mb-4 text-center">
                  Follow Us
                </h4>
                <div className="flex justify-center gap-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-coffee/10 rounded-full flex items-center justify-center text-coffee hover:bg-coffee hover:text-background transition-all duration-300"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>

                  <a
                    href="#"
                    className="w-12 h-12 bg-coffee/10 rounded-full flex items-center justify-center text-coffee hover:bg-coffee hover:text-background transition-all duration-300"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>

                  <a
                    href="#"
                    className="w-12 h-12 bg-coffee/10 rounded-full flex items-center justify-center text-coffee hover:bg-coffee hover:text-background transition-all duration-300"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
