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
      icon: <SiMongodb className="w-5 h-5" />,
      color: "bg-green-500",
      category: "Database",
      description: "NoSQL database for modern applications",
    },
    {
      name: "Express.js",
      icon: <SiExpress className="w-5 h-5" />,
      color: "bg-gray-700",
      category: "Backend",
      description: "Minimalist web framework for Node.js",
    },
    {
      name: "React",
      icon: <FaReact className="w-5 h-5" />,
      color: "bg-blue-500",
      category: "Frontend",
      description: "Library for building user interfaces",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="w-5 h-5" />,
      color: "bg-green-600",
      category: "Backend",
      description: "JavaScript runtime environment",
    },
    {
      name: "MySQL",
      icon: <SiMysql className="w-5 h-5" />,
      color: "bg-blue-600",
      category: "Database",
      description: "Relational database management system",
    },
    {
      name: "Java",
      icon: <FaJava className="w-5 h-5" />,
      color: "bg-red-600",
      category: "Backend",
      description: "Object-oriented programming language",
    },
    {
      name: "React Native",
      icon: <FaMobileAlt className="w-5 h-5" />,
      color: "bg-blue-400",
      category: "Mobile",
      description: "Framework for cross-platform apps",
    },
    {
      name: "Docker",
      icon: <SiDocker className="w-5 h-5" />,
      color: "bg-blue-500",
      category: "DevOps",
      description: "Containerization platform",
    },
    {
      name: "Kubernetes",
      icon: <SiKubernetes className="w-5 h-5" />,
      color: "bg-blue-600",
      category: "DevOps",
      description: "Container orchestration system",
    },
    {
      name: "Spring Boot",
      icon: <SiSpringboot className="w-5 h-5" />,
      color: "bg-green-500",
      category: "Backend",
      description: "Framework for Java applications",
    },
    {
      name: "GraphQL",
      icon: <SiGraphql className="w-5 h-5" />,
      color: "bg-pink-600",
      category: "API",
      description: "Query language for APIs",
    },
    {
      name: "AWS",
      icon: <SiAmazon className="w-5 h-5" />,
      color: "bg-yellow-600",
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
    <section id="technologies" className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-medium text-gray-800 mb-3">
            Technology Stack
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Carefully selected tools for building exceptional digital
            experiences
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === category
                  ? "bg-gray-800 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Cylindrical Capsule Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTech.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <div className="relative h-full p-0.5 rounded-full bg-gradient-to-r from-gray-200 to-gray-300 hover:from-blue-200 hover:to-purple-200 transition-all">
                <div className="h-full bg-white rounded-full p-4 flex items-center space-x-4">
                  <div
                    className={`w-10 h-10 rounded-full ${tech.color} flex items-center justify-center text-white`}
                  >
                    {tech.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-gray-800 truncate">
                      {tech.name}
                    </h3>
                    <p className="text-xs text-gray-500 truncate">
                      {tech.description}
                    </p>
                  </div>
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
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <button className="px-6 py-2.5 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all flex items-center mx-auto group">
            Explore our projects
            <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
