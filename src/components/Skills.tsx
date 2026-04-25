"use client";

import { motion } from "framer-motion";
import { Layout, Server, Settings, Bitcoin } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: <Layout className="w-6 h-6 text-[#0ff]" />,
    skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "TypeScript", "Redux"],
    color: "from-[#0ff]/20 to-transparent",
    borderColor: "group-hover:border-[#0ff]/50",
  },
  {
    title: "Backend",
    icon: <Server className="w-6 h-6 text-[#b026ff]" />,
    skills: ["Node.js", "Express", "NestJS", "PostgreSQL", "MongoDB", "GraphQL", "Prisma", "GO"],
    color: "from-[#b026ff]/20 to-transparent",
    borderColor: "group-hover:border-[#b026ff]/50",
  },
  {
    title: "DevOps",
    icon: <Settings className="w-6 h-6 text-[#00f0ff]" />,
    skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Terraform", "Linux", "Nginx", "Google Cloud"],
    color: "from-[#00f0ff]/20 to-transparent",
    borderColor: "group-hover:border-[#00f0ff]/50",
  },
  {
    title: "Web3",
    icon: <Bitcoin className="w-6 h-6 text-[#f7931a]" />,
    skills: ["Solidity","Rust",  "Ethers.js", "Web3.js", "Smart Contracts", "IPFS"],
    color: "from-[#f7931a]/20 to-transparent",
    borderColor: "group-hover:border-[#f7931a]/50",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Technical Arsenal
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-[var(--color-brand-cyan)] to-[var(--color-brand-purple)] mx-auto rounded-full"
          />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className={`group relative glass rounded-2xl p-6 border border-white/5 transition-all duration-300 overflow-hidden ${category.borderColor}`}
            >
              {/* Background Glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-b ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-black/40 rounded-xl border border-white/10">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm font-medium text-gray-300 bg-white/5 border border-white/10 rounded-full group-hover:border-white/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
