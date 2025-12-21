"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const leftMenuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
  ];

  const rightMenuItems = [
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  const allMenuItems = [...leftMenuItems, ...rightMenuItems];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Smooth scroll handler
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
    // Move this OUTSIDE the if block
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-sm py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 items-center gap-4 md:gap-8">
            {/* Left Menu - Desktop */}
            <div className="hidden md:flex items-center justify-end space-x-10 font-playfair">
              {leftMenuItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                    className="text-coffee text-base tracking-widest uppercase transition-colors duration-300 relative group"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-coffee transition-all duration-300 group-hover:w-full" />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Centered Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-start md:justify-center"
            >
              <Link href="/" className="relative">
                <Image
                  src="/images/logo.png"
                  alt="Photography"
                  width={isScrolled ? 90 : 110}
                  height={isScrolled ? 55 : 75}
                  className={`${
                    isMobileMenuOpen && !isScrolled ? "invert" : ""
                  } transition-all duration-500`}
                />
              </Link>
            </motion.div>

            {/* Right Menu - Desktop */}
            <div className="hidden md:flex items-center justify-start space-x-10 font-playfair">
              {rightMenuItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (index + 2) * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                    className="text-coffee text-base tracking-widest uppercase transition-colors duration-300 relative group"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-coffee transition-all duration-300 group-hover:w-full" />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden justify-end">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative w-10 h-10 flex items-center justify-center"
                aria-label="Toggle menu"
              >
                <div className="w-6 flex flex-col items-end gap-1.5">
                  <motion.span
                    animate={{
                      rotate: isMobileMenuOpen ? 45 : 0,
                      y: isMobileMenuOpen ? 8 : 0,
                      width: isMobileMenuOpen ? 24 : 24,
                    }}
                    className={`${
                      isMobileMenuOpen && !isScrolled
                        ? "bg-beige"
                        : "bg-expresso"
                    } block h-px origin-center`}
                    style={{ width: 24 }}
                  />
                  <motion.span
                    animate={{
                      opacity: isMobileMenuOpen ? 0 : 1,
                      x: isMobileMenuOpen ? 10 : 0,
                    }}
                    className={`${
                      isMobileMenuOpen && !isScrolled
                        ? "bg-beige"
                        : "bg-expresso"
                    } block h-px`}
                    style={{ width: 18 }}
                  />
                  <motion.span
                    animate={{
                      rotate: isMobileMenuOpen ? -45 : 0,
                      y: isMobileMenuOpen ? -7 : 0,
                      width: isMobileMenuOpen ? 24 : 12,
                    }}
                    className={`${
                      isMobileMenuOpen && !isScrolled
                        ? "bg-beige"
                        : "bg-expresso"
                    } block h-px origin-center`}
                    style={{ width: 12 }}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden min-h-screen"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-expresso/95 backdrop-blur-md"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="relative min-h-full flex flex-col items-center justify-center"
            >
              <nav className="flex flex-col items-center space-y-8">
                {allMenuItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={(e) => handleSmoothScroll(e, item.href)}
                      className="font-playfair text-4xl text-background hover:text-background/70 transition-colors duration-300"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Decorative element */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="absolute bottom-20 flex flex-col items-center"
              >
                <div className="w-px h-16 bg-background/30 mb-4" />
                <p className="font-playfair text-background/50 text-sm tracking-widest">
                  PHOTOGRAPHY
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
