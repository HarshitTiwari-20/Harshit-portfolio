"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-brand-purple)]/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-[var(--color-brand-cyan)]/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-[var(--color-brand-cyan)]/30 text-sm font-medium text-gray-300 shadow-[0_0_15px_rgba(0,255,255,0.1)]"
          >
            <Terminal className="w-4 h-4 text-[var(--color-brand-cyan)]" />
            <span>Full Stack • DevOps • Web3</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight"
          >
            Building Scalable <br className="hidden md:block" />
            <span className="text-gradient">Web, DevOps & Web3</span> <br className="hidden md:block" />
            Solutions.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed"
          >
            I architect and develop high-performance web applications, automate infrastructure deployment,
            and integrate decentralized technologies into modern products.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 pt-4"
          >
            <Link
              href="#projects"
              className="group relative px-8 py-3 rounded-full bg-white text-black font-semibold overflow-hidden transition-transform hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-brand-cyan)] to-[var(--color-brand-purple)] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              <span className="relative flex items-center gap-2">
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              href="#contact"
              className="px-8 py-3 rounded-full glass border border-gray-700 font-semibold text-white hover:border-[var(--color-brand-purple)] hover:shadow-[0_0_20px_rgba(176,38,255,0.3)] transition-all duration-300 hover:bg-white/5 active:scale-95"
            >
              Contact Me
            </Link>
          </motion.div>

        </div>
      </div>
      
      {/* subtle grid background */}
      <div className="absolute inset-0 z-0 bg-[url('https://transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />
    </section>
  );
}
