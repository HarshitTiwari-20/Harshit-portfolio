"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Senior Full Stack Engineer",
    company: "TechNova Solutions",
    period: "2022 - Present",
    description: "Architected microservices infrastructure handling 1M+ daily requests. Led the migration to Next.js 14, improving LCP by 40%. Implemented secure smart contract integrations for Web3 features.",
  },
  {
    role: "DevOps Engineer",
    company: "CloudScale Inc.",
    period: "2020 - 2022",
    description: "Designed multi-region Kubernetes clusters. Automated CI/CD pipelines reducing deployment times by 70%. Managed AWS infrastructure via Terraform.",
  },
  {
    role: "Frontend Developer",
    company: "Creative Web Agency",
    period: "2019 - 2020",
    description: "Built pixel-perfect, responsive UI components using React and Tailwind. Integrated complex animations with Framer Motion for high-impact marketing sites.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Work Experience
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-[var(--color-brand-cyan)] to-[var(--color-brand-purple)] mx-auto rounded-full"
          />
        </div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--color-brand-cyan)] via-[var(--color-brand-purple)] to-transparent opacity-30 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center ${
                  idx % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[20px] md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-[#030014] border-2 border-[var(--color-brand-purple)] z-10 shadow-[0_0_15px_rgba(176,38,255,0.4)]">
                  <Briefcase className="w-4 h-4 text-white" />
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${idx % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                  <div className="glass p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-colors group">
                    <span className="text-[var(--color-brand-cyan)] text-sm font-semibold tracking-wider">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-2 group-hover:text-[var(--color-brand-purple)] transition-colors">
                      {exp.role}
                    </h3>
                    <h4 className="text-gray-400 font-medium mb-4">{exp.company}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
