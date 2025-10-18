// components/Navbar.tsx
"use client";

import React from "react";
import Image from "next/image";

const Navbar = () => {
  const leftMenuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
  ];

  const rightMenuItems = [
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-2">
        <div className="grid grid-cols-3 items-center gap-8">
          {/* Left Menu */}
          <div className="flex items-center justify-end space-x-8 font-bodoni">
            {leftMenuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-coffee hover:text-text-coffee font-light text-lg tracking-wide transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-coffee transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Centered Logo */}
          <div className="flex justify-center">
            <Image
              src={"/images/logo.png"}
              alt="c photography"
              width={150}
              height={100}
            />
          </div>

          {/* Right Menu */}
          <div className="flex items-center justify-start space-x-8 font-bodoni">
            {rightMenuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-coffee hover:text-text-coffee font-light text-lg tracking-wide transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-coffee transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
