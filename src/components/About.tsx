"use client";

import { copyEmail } from "@/utils/copy-text";
import { AnimatePresence, motion } from "framer-motion";
import { Copy, MapPin, Mail, Calendar } from "lucide-react";
import Image from "next/image";
import { useState } from "react";


  // 3. Create state for feedback
  
export default function About() {

  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    // 4. Call your existing util and trigger feedback
    await copyEmail();
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Visual/Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-[var(--color-brand-cyan)] to-[var(--color-brand-purple)] rounded-3xl blur-[30px] opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
            <div className="relative aspect-square rounded-3xl glass overflow-hidden border border-white/10 flex items-center justify-center bg-[#0a0a14]">
              {/* Optional Real Image Could go here, using a stylized placeholder for now */}
              <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/cubes.png')] opacity-10" />
              <div className="text-center z-10">
                <div className="w-80 h-80 mx-auto mb-6 rounded-full bg-gradient-to-tr from-[#0ff] to-[#b026ff] p-1">
                  <div className="relative w-full h-full bg-[#030014] rounded-full overflow-hidden">
                    <Image
                      src="/harshit-logo-Photoroom.png"
                      alt="Harshit"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Harshit Tiwari</h3>
                <p className="text-[#0ff] font-medium tracking-widest uppercase text-sm"> Developer & Product Builder</p>
              </div>
            </div>
            
            {/* Quick Stats Overlay */}
            <div className="absolute -right-6 -bottom-14 glass p-4  rounded-2xl border border-white/10 shadow-2xl animate-bounce-slow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-[var(--color-brand-cyan)]">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">4+</div>
                  <div className="text-xs text-gray-400">Years Experience</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
             className="lg:col-span-7"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-6">
              I am a passionate Full Stack Developer with deep expertise in DevOps practices and Web3 integration.
              I thrive on architecting complex systems from the ground up, ensuring they are not only performant 
              but highly scalable and secure.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              Whether it's building a pixel-perfect React frontend, deploying resilient microservices via Kubernetes,
              or writing gas-optimized smart contracts in Solidity, I bring a holistic engineering approach to every product.
            </p>

           
          <div className="flex">
           <div 
                className="relative group flex items-center gap-5 p-4 px-8 glass rounded-xl border border-white/5 hover:border-[var(--color-brand-cyan)] transition-all cursor-pointer overflow-visible" 
                onClick={handleCopy}
              >
              
                

                <MapPin className={`w-5 h-5 transition-colors ${isCopied ? 'text-green-400' : 'text-[var(--color-brand-cyan)]'}`} />
                <span className="text-gray-300">Reomte & Onsite</span>
              </div>
              <div 
                className="relative group flex items-center gap-3 p-4 glass rounded-xl border border-white/5 hover:border-[var(--color-brand-cyan)] transition-all cursor-pointer overflow-visible" 
                onClick={handleCopy}
              >
              
                <AnimatePresence>
                  {isCopied && (
                    <motion.span
                      initial={{ opacity: 0, y: 0 }}
                      animate={{ opacity: 1, y: -45 }}
                      exit={{ opacity: 0, y: -60 }}
                      className="absolute left-1/2 -translate-x-1/2 top-0 px-3 py-1 bg-[var(--color-brand-cyan)] text-black text-xs font-bold rounded shadow-lg pointer-events-none"
                    >
                      Copied!
                    </motion.span>
                  )}
                </AnimatePresence>

                <Mail className={`w-5 h-5 transition-colors ${isCopied ? 'text-green-400' : 'text-[var(--color-brand-cyan)]'}`} />
                <span className="text-gray-300">Available for Freelance</span>
              </div>
            </div> 
          </motion.div>

        </div>
      </div>
    </section>
  );
}
