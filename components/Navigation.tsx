"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const rightNavigation = [
    { name: "Tours", href: "/tours" },
    { name: "Meet Your Pilot", href: "/meet-your-pilot" },
    { name: "FAQ", href: "/faq" },
  ];

  const bookNowLink = { name: "Inquire Now", href: "/inquiry" };

  return (
    <header>

      <nav>
        <Link href="/" className="logo">
          <Image
            src="/aviation-expeditions-images/Logo_Yellow.png"
            alt="Aviation Expeditions Logo"
            width={110}
            height={110}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 flex-1 justify-end ml-8">
          {/* Right Navigation Links */}
          <ul className="flex gap-8">
            {rightNavigation.map((item) => (
              <li key={item.name}>
                <a href={item.href}>{item.name}</a>
              </li>
            ))}
          </ul>

          {/* Book Now Button */}
          <a
            href={bookNowLink.href}
            className="book-now-btn"
          >
            {bookNowLink.name}
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-3 rounded-md transition-all duration-300"
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: "60px",
            left: "0",
            right: "0",
            width: "100%",
            backgroundColor: "#0f1f35",
            borderTop: "2px solid #00d4ff",
            borderBottom: "2px solid #00d4ff",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.9)",
            zIndex: "39",
            maxHeight: "calc(100vh - 60px)",
            overflowY: "auto",
            padding: "1.5rem 1rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem"
          }}
        >
          {rightNavigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block text-sm hover:text-cyan-400 transition-colors py-3 px-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <div className="pt-3 border-t border-cyan-400 border-opacity-20 mt-4">
            <a
              href={bookNowLink.href}
              className="book-now-btn block text-center py-3"
              onClick={() => setIsMenuOpen(false)}
            >
              {bookNowLink.name}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
