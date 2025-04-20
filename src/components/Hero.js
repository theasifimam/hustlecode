"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { FaReact, FaNodeJs, FaJava, FaMobileAlt } from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiMysql,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";

export default function Hero() {
  const techStacks = [
    { name: "MERN Stack", icon: <FaReact className="text-blue-400" /> },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-black dark:text-white" />,
    },
    { name: "React Native", icon: <FaMobileAlt className="text-blue-300" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
    { name: "Java", icon: <FaJava className="text-red-600" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  ];

  const services = [
    { name: "Web Development", description: "Modern responsive websites" },
    { name: "Mobile Apps", description: "iOS & Android applications" },
    { name: "UI/UX Design", description: "Beautiful interfaces" },
    { name: "Software Testing", description: "Quality assurance" },
    { name: "DevOps", description: "Deployment & CI/CD" },
    { name: "API Development", description: "REST & GraphQL" },
  ];

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-br from-neutral-50 to-neutral-100 text-neutral-900 overflow-hidden">
      {/* Floating tech bubbles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white border border-neutral-200 shadow-sm"
            style={{
              width: Math.random() * 120 + 60,
              height: Math.random() * 120 + 60,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.6,
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 100],
              x: [0, (Math.random() - 0.5) * 100],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative container mx-auto px-5 max-w-7xl">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Left Section - Tech Stacks */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-3xl shadow-lg border border-neutral-100"
          >
            <h3 className="text-xl font-bold mb-6 text-center">
              Our Tech Stack
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {techStacks.map((tech, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="flex items-center gap-3 p-3 bg-neutral-50 rounded-3xl border border-neutral-200"
                >
                  <div className="text-2xl">{tech.icon}</div>
                  <span className="font-medium text-sm">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Center Hero Content */}
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
                  Digital Solutions
                </span>
                <br />
                <span className="text-neutral-700">That Drive Growth</span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-2xl mx-auto leading-relaxed text-neutral-600">
                We build high-performance web & mobile applications using modern
                technologies
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link
                href="/contact"
                className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium py-3.5 px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get Started
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link
                href="/work"
                className="group relative overflow-hidden bg-white text-neutral-700 font-medium py-3.5 px-8 rounded-full border border-neutral-300 transition-all duration-300 hover:shadow-md hover:bg-neutral-50"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  View Portfolio
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Right Section - Services */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-3xl shadow-lg border border-neutral-100"
          >
            <h3 className="text-xl font-bold mb-6 text-center">Our Services</h3>
            <div className="space-y-4">
              {services.map((service, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 5 }}
                  className="p-4 pl-5 bg-neutral-50 rounded-full border border-neutral-200"
                >
                  <h4 className="font-bold text-blue-600">{service.name}</h4>
                  <p className="text-sm text-neutral-600 mt-1">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Trust indicators at bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 flex flex-wrap justify-center items-center gap-8 text-sm text-neutral-600"
        >
          <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm border border-neutral-200">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="w-8 h-8 rounded-full bg-neutral-200 border-2 border-white overflow-clip"
                >
                  <img
                    src={`https://randomuser.me/api/portraits/${
                      item % 2 === 0 ? "women" : "men"
                    }/${item}.jpg`}
                    alt="avatar"
                    width={32}
                    height={32}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <span>Trusted by 50+ companies</span>
          </div>

          <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm border border-neutral-200">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
            <span>Rated 4.9/5</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
