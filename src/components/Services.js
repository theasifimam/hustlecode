"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaReact, FaNodeJs, FaJava, FaMobileAlt } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiMysql,
  SiDocker,
  SiKubernetes,
  SiSpringboot,
  SiGraphql,
  SiAmazon,
} from "react-icons/si";
import { FiArrowRight } from "react-icons/fi";

export default function Technologies() {
  const [activeFilter, setActiveFilter] = useState("All");

  const techStack = [
    {
      name: "MongoDB",
      icon: <SiMongodb className="w-5 h-5 text-gray-600" />,
      color: "from-green-500 to-green-600",
      border: "from-green-500 to-green-600",
      bg: "bg-gradient-to-br from-green-500/5 to-green-600/5",
      category: "Database",
      description: "NoSQL database for modern applications",
    },
    {
      name: "Express.js",
      icon: <SiExpress className="w-5 h-5 text-gray-600" />,
      color: "from-gray-600 to-gray-800",
      border: "from-gray-600 to-gray-800",
      bg: "bg-gradient-to-br from-gray-600/5 to-gray-800/5",
      category: "Backend",
      description: "Minimalist web framework for Node.js",
    },
    {
      name: "React",
      icon: <FaReact className="w-5 h-5 text-gray-600" />,
      color: "from-blue-400 to-blue-600",
      border: "from-blue-400 to-blue-600",
      bg: "bg-gradient-to-br from-blue-400/5 to-blue-600/5",
      category: "Frontend",
      description: "Library for building user interfaces",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="w-5 h-5 text-gray-600" />,
      color: "from-green-500 to-green-700",
      border: "from-green-500 to-green-700",
      bg: "bg-gradient-to-br from-green-500/5 to-green-700/5",
      category: "Backend",
      description: "JavaScript runtime environment",
    },
    {
      name: "MySQL",
      icon: <SiMysql className="w-5 h-5 text-gray-600" />,
      color: "from-blue-500 to-blue-700",
      border: "from-blue-500 to-blue-700",
      bg: "bg-gradient-to-br from-blue-500/5 to-blue-700/5",
      category: "Database",
      description: "Relational database management system",
    },
    {
      name: "Java",
      icon: <FaJava className="w-5 h-5 text-gray-600" />,
      color: "from-red-500 to-red-700",
      border: "from-red-500 to-red-700",
      bg: "bg-gradient-to-br from-red-500/5 to-red-700/5",
      category: "Backend",
      description: "Object-oriented programming language",
    },
    {
      name: "React Native",
      icon: <FaMobileAlt className="w-5 h-5 text-gray-600" />,
      color: "from-blue-300 to-blue-500",
      border: "from-blue-300 to-blue-500",
      bg: "bg-gradient-to-br from-blue-300/5 to-blue-500/5",
      category: "Mobile",
      description: "Framework for cross-platform apps",
    },
    {
      name: "Docker",
      icon: <SiDocker className="w-5 h-5 text-gray-600" />,
      color: "from-blue-500 to-blue-600",
      border: "from-blue-500 to-blue-600",
      bg: "bg-gradient-to-br from-blue-500/5 to-blue-600/5",
      category: "DevOps",
      description: "Containerization platform",
    },
    {
      name: "Kubernetes",
      icon: <SiKubernetes className="w-5 h-5 text-gray-600" />,
      color: "from-blue-600 to-blue-800",
      border: "from-blue-600 to-blue-800",
      bg: "bg-gradient-to-br from-blue-600/5 to-blue-800/5",
      category: "DevOps",
      description: "Container orchestration system",
    },
    {
      name: "Spring Boot",
      icon: <SiSpringboot className="w-5 h-5 text-gray-600" />,
      color: "from-green-500 to-green-700",
      border: "from-green-500 to-green-700",
      bg: "bg-gradient-to-br from-green-500/5 to-green-700/5",
      category: "Backend",
      description: "Framework for Java applications",
    },
    {
      name: "GraphQL",
      icon: <SiGraphql className="w-5 h-5 text-gray-600" />,
      color: "from-pink-500 to-pink-700",
      border: "from-pink-500 to-pink-700",
      bg: "bg-gradient-to-br from-pink-500/5 to-pink-700/5",
      category: "API",
      description: "Query language for APIs",
    },
    {
      name: "AWS",
      icon: <SiAmazon className="w-5 h-5 text-gray-600" />,
      color: "from-yellow-500 to-yellow-600",
      border: "from-yellow-500 to-yellow-600",
      bg: "bg-gradient-to-br from-yellow-500/5 to-yellow-600/5",
      category: "Cloud",
      description: "Cloud computing services",
    },
  ];

  const categories = [
    "All",
    ...new Set(techStack.map((tech) => tech.category)),
  ];
  const filteredTech =
    activeFilter === "All"
      ? techStack
      : techStack.filter((tech) => tech.category === activeFilter);

  return (
    <section id="technologies" className="py-24 bg-neutral-50">
      <div className="container mx-auto px-5 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <span className="inline-block mb-4 text-sm font-medium text-[#7209b7] bg-[#7209b7]/10 px-4 py-1.5 rounded-full">
            OUR TECHNOLOGIES
          </span>
          <h2 className="text-5xl font-bold mb-5 text-neutral-900">
            Modern{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4361ee] to-[#3a0ca3]">
              Tech Stack
            </span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Cutting-edge technologies powering exceptional digital experiences
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === category
                  ? "bg-gradient-to-r from-[#4361ee] to-[#3a0ca3] text-white shadow-md"
                  : "text-neutral-600 bg-white hover:bg-neutral-100 border border-neutral-200"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Cylindrical Capsule Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTech.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="relative h-full p-0.5 rounded-full hover:bg-gradient-to-r hover:from-blue-300 hover:to-purple-200 transition-all duration-500">
                <div
                  className={`h-full p-6 rounded-full flex items-center space-x-4 ${tech.bg} backdrop-blur-sm`}
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-white ${tech.color} shadow-md flex-shrink-0`}
                  >
                    {tech.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-neutral-900 truncate">
                      {tech.name}
                    </h3>
                    <p className="text-neutral-600 text-sm mt-1">
                      {tech.description}
                    </p>
                  </div>
                  <FiArrowRight className="text-[#4361ee] group-hover:text-[#3a0ca3] transition-colors flex-shrink-0 group-hover:translate-x-1 duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center"
        >
          <button className="px-10 py-4 bg-gradient-to-r from-[#4361ee] to-[#3a0ca3] hover:from-[#3a0ca3] hover:to-[#4361ee] text-white rounded-2xl font-semibold hover:shadow-xl transition-all transform hover:-translate-y-1.5 duration-500 group">
            <span className="relative z-10">See All Technologies</span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#3a0ca3] to-[#4361ee] opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
