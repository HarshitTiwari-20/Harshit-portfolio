"use client";

import { motion } from "framer-motion";
import { Send, Code2, User, Globe, Mail } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Let's <span className="text-gradient">Connect</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-[var(--color-brand-cyan)] to-[var(--color-brand-purple)] mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-3xl border border-white/10 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#0ff]/5 to-[#b026ff]/5 rounded-3xl pointer-events-none" />
            
            <form className="relative z-10 space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-[var(--color-brand-cyan)] transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-[var(--color-brand-cyan)] transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Subject</label>
                <input 
                  type="text" 
                  placeholder="Project Inquiry" 
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-[var(--color-brand-cyan)] transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell me about your project..." 
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-[var(--color-brand-cyan)] transition-colors resize-none"
                />
              </div>
              
              <button className="w-full relative group py-4 px-8 rounded-xl bg-white text-black font-semibold overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98]">
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-brand-cyan)] to-[var(--color-brand-purple)] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                <span className="relative flex items-center justify-center gap-2">
                  Send Message
                  <Send className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </form>
          </motion.div>

          {/* Right Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-12"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Get in touch</h3>
              <p className="text-gray-400 leading-relaxed max-w-md">
                I'm currently available for freelance work and open to new opportunities.
                If you have a project that needs some creative magic or robust engineering, let's talk.
              </p>
            </div>

            <div className="space-y-6">
              <a href="mailto:hello@harshit.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 glass rounded-full flex items-center justify-center border border-white/10 group-hover:border-[var(--color-brand-cyan)] transition-colors">
                  <Mail className="w-5 h-5 text-gray-400 group-hover:text-[var(--color-brand-cyan)] transition-colors" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Email</div>
                  <div className="text-white font-medium group-hover:text-[var(--color-brand-cyan)] transition-colors">hello@harshit.com</div>
                </div>
              </a>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-400 tracking-wider uppercase mb-6">Socials</h4>
              <div className="flex gap-4">
                {[
                  { icon: <Code2 className="w-5 h-5" />, href: "#" },
                  { icon: <User className="w-5 h-5" />, href: "#" },
                  { icon: <Globe className="w-5 h-5" />, href: "#" },
                ].map((social, idx) => (
                  <Link
                    key={idx}
                    href={social.href}
                    className="w-12 h-12 glass rounded-xl flex items-center justify-center border border-white/10 hover:border-[var(--color-brand-purple)] hover:bg-white/5 hover:-translate-y-1 transition-all duration-300 text-gray-400 hover:text-white"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
