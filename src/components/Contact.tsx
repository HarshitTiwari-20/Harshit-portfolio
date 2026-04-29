"use client";

import { motion } from "framer-motion";
import { Send, User, Mail, ArrowDownToLine, Plane } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Contact() {



  
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (res.ok) alert("Message sent to Harshit's Telegram!");
    } catch (err) {
      alert("Error sending message.");
    } finally {
      setLoading(false);
    }
  };






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
            Let&apos;s <span className="text-gradient">Connect</span>
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
            
            <form className="relative z-10 space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    placeholder="John Doe" 
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-[var(--color-brand-cyan)] transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    placeholder="john@example.com" 
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-[var(--color-brand-cyan)] transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Subject</label>
                <input 
                  type="text" 
                  name="subject"
                  required
                  placeholder="Project Inquiry" 
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-[var(--color-brand-cyan)] transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Message</label>
                <textarea 
                  rows={4}
                  name="message"
                  required
                  placeholder="Tell me about your project..." 
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-[var(--color-brand-cyan)] transition-colors resize-none"
                />
              </div>
              
              <button disabled={loading} className="w-full relative group py-4 rounded-xl bg-white text-black font-semibold overflow-hidden hover:scale-[1.02] transition-all disabled:opacity-50">
                <span className="relative flex items-center justify-center gap-2">
                  {loading ? "Sending..." : "Send Message"}
                  <Send className="w-4 h-4" />
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
                I&apos;m currently available for freelance work and open to new opportunities.
                If you have a project that needs some creative magic or robust engineering, let&apos;s talk.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <a href="mailto:ht2004103@gmail.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 glass rounded-full flex items-center justify-center border border-white/10 group-hover:border-[var(--color-brand-cyan)] transition-colors">
                    <Mail className="w-5 h-5 text-gray-400 group-hover:text-[var(--color-brand-cyan)] transition-colors" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Email</div>
                    <div className="text-white font-medium group-hover:text-[var(--color-brand-cyan)] transition-colors">
                      ht2004103@gmail.com
                    </div>
                  </div>
                </a>
                
                <a 
                  href="https://drive.google.com/file/d/1fh9WiqgnntRtz_hzI3l5Cr891rzliB4f/view?usp=sharing" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 glass rounded-full flex items-center justify-center border border-white/10 group-hover:border-[var(--color-brand-purple)] transition-colors">
                    <ArrowDownToLine className="w-5 h-5 text-gray-400 group-hover:text-[var(--color-brand-purple)] transition-colors" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Resume</div>
                    <div className="text-white font-medium group-hover:text-[var(--color-brand-purple)] transition-colors">
                      Download CV
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-400 tracking-wider uppercase mb-6">Socials</h4>
              <div className="flex gap-4">
                {[
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    ),
                    href: "https://github.com/HarshitTiwari-20",
                  },
                  { icon: <User className="w-5 h-5" />, href: "https://www.linkedin.com/in/harshit-tiwari-20" },
                  {
                    icon: (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.949.555-2.003.959-3.127 1.184-.897-.959-2.178-1.555-3.594-1.555-2.719 0-4.924 2.206-4.924 4.917 0 .39.045.765.127 1.124-4.09-.205-7.719-2.165-10.148-5.144-.424.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.247-2.228-.616v.061c0 2.385 1.698 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.376 4.6 3.416-1.68 1.316-3.809 2.101-6.102 2.101-.39 0-.779-.023-1.17-.067 2.179 1.397 4.768 2.213 7.557 2.213 9.054 0 14-7.496 14-13.986 0-.21 0-.423-.015-.633.962-.689 1.8-1.56 2.46-2.548l-.047-.02z"/>
                      </svg>
                    ),
                    href: "https://twitter.com/Harshit_310",
                  },
                  {
                    icon: <Plane className="w-5 h-5" />,
                    href: "https://t.me/Harshit_310",
                  },
                ].map((social, idx) => (
                  <Link
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
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
