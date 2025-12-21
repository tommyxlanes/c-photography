"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaFacebookF, FaPinterestP } from "react-icons/fa";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { name: "Instagram", href: "https://instagram.com", icon: FaInstagram },
    { name: "Facebook", href: "https://facebook.com", icon: FaFacebookF },
    { name: "Pinterest", href: "https://pinterest.com", icon: FaPinterestP },
  ];

  return (
    <footer className="bg-expresso text-background">
      {/* Main Footer */}
      {/* <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={100}
                height={60}
                className="invert"
              />
            </Link>
            <p className="font-bodoni text-background/70 leading-relaxed">
              Capturing love stories and timeless moments throughout Southern
              California.
            </p>
          </div>

          <div>
            <h4 className="font-playfair text-lg mb-6">Explore</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-bodoni text-background/70 hover:text-background transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-playfair text-lg mb-6">Get in Touch</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:hello@yourdomain.com"
                  className="flex items-center gap-3 font-bodoni text-background/70 hover:text-background transition-colors duration-300"
                >
                  <Mail className="w-4 h-4" strokeWidth={1.5} />
                  hello@yourdomain.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+16261234567"
                  className="flex items-center gap-3 font-bodoni text-background/70 hover:text-background transition-colors duration-300"
                >
                  <Phone className="w-4 h-4" strokeWidth={1.5} />
                  (626) 123-4567
                </a>
              </li>
              <li>
                <span className="flex items-center gap-3 font-bodoni text-background/70">
                  <MapPin className="w-4 h-4" strokeWidth={1.5} />
                  West Covina, CA
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-playfair text-lg mb-6">Connect</h4>
            <div className="flex items-center gap-4 mb-8">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-background/30 flex items-center justify-center hover:bg-background/10 hover:border-background/50 transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
            <p className="font-bodoni text-sm text-background/50">
              Available for weddings, engagements & portrait sessions
            </p>
          </div>
        </div>
      </div> */}

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="flex justify-center max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-bodoni text-sm text-background/50 text-center">
              © {currentYear} Chroma Pix. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
