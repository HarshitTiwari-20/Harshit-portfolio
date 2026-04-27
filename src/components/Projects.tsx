"use client";

import { motion } from "framer-motion";
import { Link as LinkIcon, Code2, FolderOpen } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "DeFi Trading App",
    description: "A decentralized trading platform that automatically lock-in funds in crowdfund when it opens the position and returns the remaining funds after the position closes",
    tech: ["Next.js", "Solidity", "Hardhat", "Tailwind", "Ethers.js"],
    github: "https://github.com/HarshitTiwari-20/Traderm",
    demo: "https://traderm.vercel.app/",
  },
  {
    title: "",
    description: "Real-time AWS/GCP resource monitoring dashboard utilizing WebSockets for live metrics and anomalous activity alerts.",
    tech: ["React", "Node.js", "Docker", "Prometheus", "Grafana"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "NFT Marketplace MVP",
    description: "Launchpad and marketplace for verified NFT artists. Features gasless transactions via meta-transactions and lazy minting.",
    tech: ["Next.js", "Polygon", "IPFS", "Prisma", "TypeScript"],
    github: "https://github.com/HarshitTiwari-20/pokemon-nfts",
    demo: "https://pokemon-nfts.vercel.app/",
  },
  {
    title: "Automated Deployment Pipeline AI",
    description: "CLI tool that analyzes repositories and automatically generates optimized Dockerfiles and GitHub Actions workflows.",
    tech: ["Go", "Docker", "Python", "OpenAI API"],
    github: "https://github.com",
    demo: "https://demo.com",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/2 right-0 w-[30rem] h-[30rem] bg-[#b026ff]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[20rem] h-[20rem] bg-[#0ff]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-4"
            >
              Featured <span className="text-gradient">Projects</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-24 h-1 bg-gradient-to-r from-[var(--color-brand-cyan)] to-[var(--color-brand-purple)] rounded-full"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
             <Link href="https://github.com" target="_blank" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
               <span>View Full Github</span>
               <ArrowRightIcon className="w-4 h-4" />
             </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group glass rounded-2xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-300"
            >
              <div className="p-8 h-full flex flex-col relative">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0ff]/5 to-[#b026ff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="flex justify-between items-start mb-6 relative z-10">
                  <div className="p-3 glass rounded-xl text-[var(--color-brand-cyan)]">
                    <FolderOpen className="w-8 h-8" />
                  </div>
                  <div className="flex items-center gap-4">
                    <Link href={project.github} target="_blank" className="text-gray-400 hover:text-white transition-colors">
                      <Code2 className="w-5 h-5" />
                    </Link>
                    <Link href={project.demo} target="_blank" className="text-gray-400 hover:text-[#0ff] transition-colors">
                      <LinkIcon className="w-5 h-5" />
                    </Link>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 relative z-10 group-hover:text-[var(--color-brand-cyan)] transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-8 leading-relaxed relative z-10 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 relative z-10 mt-auto">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs font-mono text-[var(--color-brand-purple)] bg-[#b026ff]/10 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

function ArrowRightIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
