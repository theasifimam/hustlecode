"use client";

import { motion } from "framer-motion";
import { FiArrowRight, FiExternalLink } from "react-icons/fi";
import { FaReact, FaNode, FaFigma } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiFirebase } from "react-icons/si";
import Link from "next/link";

export default function ProjectShowcase() {
  const projects = [
    {
      title: "Nexus Dashboard",
      description:
        "AI-powered analytics platform with real-time data visualization",
      tech: ["Next.js", "Tailwind", "Node.js"],
      year: "2023",
      link: "#",
      image: "./images/ui2.png",
      accent: "bg-gradient-to-br from-violet-100 to-indigo-100",
      icons: [
        <SiNextdotjs className="w-5 h-5 text-neutral-900" key="next" />,
        <SiTailwindcss className="w-5 h-5 text-cyan-500" key="tailwind" />,
        <FaNode className="w-5 h-5 text-green-600" key="node" />,
      ],
    },
    {
      title: "Pulse Mobile",
      description:
        "Health tracking app with wearable integration and ML insights",
      tech: ["React Native", "Firebase", "TensorFlow"],
      year: "2023",
      link: "#",
      image: "./images/ui6.png",
      accent: "bg-gradient-to-br from-rose-100 to-pink-100",
      icons: [
        <FaReact className="w-5 h-5 text-blue-500" key="react" />,
        <SiFirebase className="w-5 h-5 text-amber-500" key="firebase" />,
        <FaFigma className="w-5 h-5 text-purple-500" key="figma" />,
      ],
    },
    {
      title: "Aurora Design System",
      description:
        "Enterprise-grade component library for fintech applications",
      tech: ["TypeScript", "Storybook", "Figma"],
      year: "2024",
      link: "#",
      image: "./images/ui4.png",
      accent: "bg-gradient-to-br from-blue-100 to-teal-100",
      icons: [
        <SiNextdotjs className="w-5 h-5 text-neutral-900" key="next" />,
        <FaFigma className="w-5 h-5 text-purple-500" key="figma" />,
        <SiTailwindcss className="w-5 h-5 text-cyan-500" key="tailwind" />,
      ],
    },
  ];

  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-violet-50 blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-20 w-96 h-96 rounded-full bg-indigo-50 blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-5 max-w-7xl">
        {/* Animated header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <span className="inline-block mb-3 text-xs font-medium tracking-wider text-cyan-500 uppercase">
                Selected Works
              </span>
              <h2 className="text-4xl md:text-6xl font-bold text-neutral-900">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-700">
                  Innovation
                </span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                  Showcase
                </span>
              </h2>
            </div>
            <Link
              href="/work"
              className="group flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              <span className="border-b border-transparent group-hover:border-cyan-500 transition-all">
                View all projects
              </span>
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* Projects grid - Ultra modern layout */}
        <div className="grid gap-8 md:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative group"
            >
              <div className="absolute inset-0 rounded-4xl overflow-hidden">
                <div
                  className={`absolute inset-0 ${project.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>
                <div className="absolute inset-0.5 rounded-[calc(2.5rem-2px)] border border-neutral-200 group-hover:border-neutral-300 transition-all duration-500"></div>
              </div>

              <div className="relative grid lg:grid-cols-5 gap-8 p-1">
                {/* Project meta */}
                <div className="lg:col-span-2 flex flex-col justify-between p-6 lg:p-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      {project.icons.map((icon, i) => (
                        <div
                          key={i}
                          className="p-2 bg-white rounded-3xl shadow-sm border border-neutral-100"
                        >
                          {icon}
                        </div>
                      ))}
                    </div>
                    <span className="inline-block mb-2 text-sm text-cyan-500">
                      {project.year}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-neutral-600">{project.description}</p>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium bg-white text-neutral-700 rounded-full border border-neutral-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project visual */}
                <div className="lg:col-span-3 relative h-64 lg:h-auto rounded-4xl overflow-hidden border border-neutral-200 group-hover:border-neutral-300 transition-all shadow-sm">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/30 z-10">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute bottom-6 left-6 z-20">
                    <a
                      href={project.link}
                      className="flex items-center gap-2 px-4 py-2 bg-neutral-900 text-white rounded-full text-sm font-medium hover:bg-neutral-800 transition-all shadow-md"
                    >
                      View Project <FiExternalLink className="text-sm" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-24 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6">
            Ready to build something extraordinary?
          </h3>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-bold hover:shadow-lg hover:shadow-cyan-500/30 transition-all hover:-translate-y-1"
          >
            Start Your Project
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
