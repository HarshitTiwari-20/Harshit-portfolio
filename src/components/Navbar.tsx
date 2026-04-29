"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass shadow-lg py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between">
          <Link href="#home" className="flex items-center gap-2 group">
            <div className="p-1 glass rounded-lg group-hover:border-[var(--color-brand-cyan)] transition-colors duration-300">
              <Image 
                src="/harshit-logo-Photoroom.png" 
                alt="Harshit Logo" 
                width={32} 
                height={32} 
                className="w-8 h-8 object-contain"
              />
            </div>
            <span className="font-bold text-xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-cyan)] to-[var(--color-brand-purple)]">
              HARSHIT
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-gray-300 hover:text-white transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--color-brand-cyan)] to-[var(--color-brand-purple)] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            <Link
              href="#contact"
              className="px-5 py-2 text-sm font-medium rounded-full border border-gray-700 hover:border-[var(--color-brand-purple)] hover:shadow-[0_0_15px_rgba(176,38,255,0.4)] transition-all bg-white/5 backdrop-blur-sm"
            >
              Let's Talk
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden glass border-t border-white/10 mt-4"
        >
          <div className="flex flex-col gap-4 p-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-white transition-colors text-lg font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
