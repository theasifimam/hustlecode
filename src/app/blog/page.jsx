"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FiSearch,
  FiCalendar,
  FiUser,
  FiTag,
  FiArrowRight,
  FiClock,
  FiBookmark,
} from "react-icons/fi";
import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaCode,
  FaDatabase,
  FaCloud,
} from "react-icons/fa";

export default function BlogsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  // Sample blog data
  const blogs = [
    {
      id: 1,
      title: "Building Scalable APIs with GraphQL and Node.js",
      excerpt:
        "Learn how to create efficient, type-safe APIs using GraphQL and Express for modern web applications that can handle millions of requests.",
      category: "Backend",
      readTime: "8 min read",
      date: "Apr 18, 2025",
      author: "Sarah Johnson",
      image:
        "https://images.unsplash.com/photo-1729520126792-bf28b9919ba4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: <FaNodeJs className="w-5 h-5" />,
      color: "bg-green-600",
      featured: true,
      tags: ["GraphQL", "Node.js", "API"],
    },
    {
      id: 2,
      title: "React Performance Optimization Techniques",
      excerpt:
        "Practical tips to make your React applications lightning fast by reducing unnecessary renders and optimizing component lifecycle.",
      category: "Frontend",
      readTime: "6 min read",
      date: "Apr 15, 2025",
      author: "Michael Chen",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: <FaReact className="w-5 h-5" />,
      color: "bg-blue-500",
      featured: false,
      tags: ["React", "Performance", "JavaScript"],
    },
    {
      id: 3,
      title: "Introduction to Microservices Architecture",
      excerpt:
        "Understanding the fundamentals of building distributed systems with microservices for scalable and maintainable applications.",
      category: "Architecture",
      readTime: "12 min read",
      date: "Apr 10, 2025",
      author: "Emily Rodriguez",
      image:
        "https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: <FaCode className="w-5 h-5" />,
      color: "bg-purple-600",
      featured: false,
      tags: ["Microservices", "System Design"],
    },
    {
      id: 4,
      title: "Data Structures Every Developer Should Know",
      excerpt:
        "A comprehensive guide to essential data structures with examples in multiple programming languages to improve your algorithmic thinking.",
      category: "Computer Science",
      readTime: "15 min read",
      date: "Apr 5, 2025",
      author: "David Park",
      image:
        "https://images.unsplash.com/photo-1516542076529-1ea3854896f2?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: <FaCode className="w-5 h-5" />,
      color: "bg-red-600",
      featured: true,
      tags: ["Algorithms", "Data Structures", "Interviews"],
    },
    {
      id: 5,
      title: "Modern Python: Features You Should Be Using",
      excerpt:
        "Exploring powerful features in Python 3.11 and beyond that can make your code more efficient, readable, and maintainable.",
      category: "Backend",
      readTime: "10 min read",
      date: "Mar 30, 2025",
      author: "Alex Turner",
      image:
        "https://images.unsplash.com/photo-1685558589023-3297b012d8bc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: <FaPython className="w-5 h-5" />,
      color: "bg-yellow-600",
      featured: false,
      tags: ["Python", "Programming"],
    },
    {
      id: 6,
      title: "Building Responsive Layouts with Tailwind CSS",
      excerpt:
        "Create beautiful, flexible interfaces with utility-first CSS framework that speeds up your development workflow significantly.",
      category: "Frontend",
      readTime: "7 min read",
      date: "Mar 25, 2025",
      author: "Lisa Wong",
      image:
        "https://images.unsplash.com/photo-1593720213681-e9a8778330a7?q=80&w=1444&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: <FaCode className="w-5 h-5" />,
      color: "bg-cyan-600",
      featured: false,
      tags: ["CSS", "Tailwind", "UI Design"],
    },
    {
      id: 7,
      title: "Getting Started with PostgreSQL and TypeORM",
      excerpt:
        "Set up a robust database system for your TypeScript projects with proper type safety and efficient query capabilities.",
      category: "Database",
      readTime: "9 min read",
      date: "Mar 20, 2025",
      author: "James Wilson",
      image:
        "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: <FaDatabase className="w-5 h-5" />,
      color: "bg-blue-700",
      featured: false,
      tags: ["PostgreSQL", "TypeScript", "ORM"],
    },
    {
      id: 8,
      title: "Enterprise Java Application Development with Spring Boot",
      excerpt:
        "Building robust, enterprise-grade applications with Spring Boot for scalable and maintainable backend services.",
      category: "Backend",
      readTime: "14 min read",
      date: "Mar 15, 2025",
      author: "Priya Sharma",
      image:
        "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=1506&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: <FaJava className="w-5 h-5" />,
      color: "bg-red-600",
      featured: true,
      tags: ["Java", "Spring Boot", "Enterprise"],
    },
    {
      id: 9,
      title: "Building Real-time Applications with WebSockets",
      excerpt:
        "Learn how to implement live features and bidirectional communication in your web applications with WebSocket protocols.",
      category: "Frontend",
      readTime: "11 min read",
      date: "Mar 10, 2025",
      author: "Thomas Grant",
      image:
        "https://images.unsplash.com/photo-1649451844813-3130d6f42f8a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: <FaReact className="w-5 h-5" />,
      color: "bg-blue-500",
      featured: false,
      tags: ["WebSockets", "Real-time", "JavaScript"],
    },
    {
      id: 10,
      title: "Cloud Native Development: Best Practices",
      excerpt:
        "Explore key principles and patterns for developing applications optimized for cloud environments and containerization.",
      category: "DevOps",
      readTime: "13 min read",
      date: "Mar 5, 2025",
      author: "Sophia Martinez",
      image:
        "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: <FaCloud className="w-5 h-5" />,
      color: "bg-blue-400",
      featured: true,
      tags: ["Cloud", "Kubernetes", "Docker"],
    },
  ];

  // Get all unique categories
  const categories = ["All", ...new Set(blogs.map((blog) => blog.category))];

  // Filter blogs based on active category and search query
  useEffect(() => {
    const results = blogs.filter((blog) => {
      const matchesCategory =
        activeFilter === "All" || blog.category === activeFilter;
      const matchesSearch =
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && (searchQuery === "" || matchesSearch);
    });

    setFilteredBlogs(results);
  }, [activeFilter, searchQuery]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Banner */}
      <div className="bg-gradient-to-r">
        <div className="container mx-auto px-4 max-w-6xl py-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 md:mb-0"
            >
              <h1 className="text-3xl lg:text-4xl font-bold ">
                Dev Insights Blog
              </h1>
              <p className="text-gray-600 max-w-xl">
                Expert articles, tutorials, and insights on programming and
                software development
              </p>
            </motion.div>

            {/* Search bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="w-full md:w-72"
            >
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiSearch className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 rounded-full border-0 bg-gray-200 backdrop-blur-sm text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-300 outline-none"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl py-8">
        {/* Category Filters - Pill Style */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex overflow-x-auto hide-scrollbar pb-2 mb-8"
        >
          <div className="flex gap-2">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                  activeFilter === category
                    ? "bg-gray-800 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Featured Post - Full Width */}
        {filteredBlogs.length > 0 &&
          filteredBlogs.some((blog) => blog.featured) &&
          searchQuery === "" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-medium text-gray-800 mb-4">
                Featured Article
              </h2>
              {filteredBlogs
                .filter((blog) => blog.featured)
                .slice(0, 1)
                .map((blog) => (
                  <div
                    key={`featured-${blog.id}`}
                    className="relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-md transition-all border border-gray-100"
                  >
                    <div className="flex flex-col lg:flex-row">
                      <div className="lg:w-1/2 h-64 lg:h-auto">
                        <img
                          src={blog.image}
                          alt={blog.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="lg:w-1/2 p-6 lg:p-8 flex flex-col justify-between">
                        <div>
                          <div className="flex mb-3">
                            <span
                              className={`${blog.color} text-white text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5`}
                            >
                              {blog.icon}
                              {blog.category}
                            </span>
                          </div>
                          <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                            {blog.title}
                          </h3>
                          <p className="text-gray-600">{blog.excerpt}</p>

                          <div className="flex flex-wrap gap-2 mt-4">
                            {blog.tags.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full flex items-center gap-1"
                              >
                                <FiTag className="w-3 h-3" />
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="mt-6">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                <FiUser className="w-4 h-4" />
                              </div>
                              <span className="text-sm text-gray-600">
                                {blog.author}
                              </span>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                              <div className="flex items-center gap-1">
                                <FiCalendar className="w-4 h-4" />
                                <span>{blog.date}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <FiClock className="w-4 h-4" />
                                <span>{blog.readTime}</span>
                              </div>
                            </div>
                          </div>

                          <button className="inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium hover:from-blue-600 hover:to-purple-600 transition-all group">
                            Read full article
                            <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </motion.div>
          )}

        {/* Main Content Area */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Blog Listing - Left Column */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:w-2/3"
          >
            {filteredBlogs.length > 0 ? (
              <>
                <h2 className="text-2xl font-medium text-gray-800 mb-4">
                  Latest Articles
                </h2>
                <div className="space-y-6">
                  {filteredBlogs.map((blog, index) => (
                    <motion.article
                      key={blog.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100 relative p-0.5"
                    >
                      {/* Card with gradient border styling */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-200 to-purple-200 opacity-0 hover:opacity-100 transition-opacity"></div>

                      <div className="relative bg-white rounded-xl p-0 flex flex-col md:flex-row overflow-hidden">
                        <div className="md:w-1/3 h-48 md:h-auto">
                          <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="md:w-2/3 p-5 flex flex-col justify-between">
                          <div>
                            <div className="flex mb-2">
                              <span
                                className={`${blog.color} text-white text-xs font-medium px-2.5 py-1 rounded-full flex items-center gap-1`}
                              >
                                {blog.icon}
                                {blog.category}
                              </span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors">
                              {blog.title}
                            </h3>
                            <p className="text-gray-500 mt-2 text-sm line-clamp-2">
                              {blog.excerpt}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-3">
                              {blog.tags.slice(0, 3).map((tag, tagIndex) => (
                                <span
                                  key={tagIndex}
                                  className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full flex items-center gap-1"
                                >
                                  <FiTag className="w-3 h-3" />
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                              <FiUser className="w-4 h-4" />
                              <span>{blog.author}</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="flex items-center gap-1">
                                <FiCalendar className="w-4 h-4" />
                                <span>{blog.date}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <FiClock className="w-4 h-4" />
                                <span>{blog.readTime}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center mt-12">
                  <div className="flex gap-2">
                    <button className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                      &lt;
                    </button>
                    <button className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-600 text-white">
                      1
                    </button>
                    <button className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                      2
                    </button>
                    <button className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                      3
                    </button>
                    <button className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                      &gt;
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16 bg-white rounded-xl shadow-sm"
              >
                <h3 className="text-xl text-gray-600">
                  No articles found matching your criteria
                </h3>
                <p className="text-gray-500 mt-2">
                  Try adjusting your search terms or filters
                </p>
                <button
                  onClick={() => {
                    setActiveFilter("All");
                    setSearchQuery("");
                  }}
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                >
                  Reset filters
                </button>
              </motion.div>
            )}
          </motion.div>

          {/* Sidebar - Right Column */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:w-1/3 space-y-8"
          >
            {/* Categories Sidebar */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Categories
              </h3>
              <div className="space-y-2">
                {categories
                  .filter((cat) => cat !== "All")
                  .map((category, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveFilter(category)}
                      className={`w-full px-4 py-2 rounded-full text-sm font-medium transition-all flex justify-between items-center ${
                        activeFilter === category
                          ? "bg-gray-800 text-white"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      <span>{category}</span>
                      <span className="bg-gray-200 text-gray-700 text-xs px-2 py-0.5 rounded-full">
                        {
                          blogs.filter((blog) => blog.category === category)
                            .length
                        }
                      </span>
                    </button>
                  ))}
              </div>
            </div>

            {/* Popular Posts */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Popular Posts
              </h3>
              <div className="space-y-4">
                {blogs.slice(0, 4).map((blog, index) => (
                  <div key={`popular-${index}`} className="flex gap-3 group">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg flex-shrink-0 overflow-hidden">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-800 line-clamp-2 group-hover:text-blue-600 transition-colors">
                        {blog.title}
                      </h4>
                      <div className="flex items-center mt-1 text-xs text-gray-500">
                        <FiCalendar className="w-3 h-3 mr-1" />
                        <span>{blog.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 text-white">
              <div className="flex items-center gap-2 mb-4">
                <FiBookmark className="w-5 h-5" />
                <h3 className="text-lg font-semibold">Stay Updated</h3>
              </div>
              <p className="text-blue-100 text-sm mb-4">
                Get the latest articles and programming tutorials delivered to
                your inbox.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 rounded-md text-gray-900 border-0 focus:ring-2 focus:ring-white text-sm"
                />
                <button className="w-full px-4 py-2 bg-white text-blue-600 font-medium rounded-md hover:bg-blue-50 transition-colors text-sm">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-blue-100 mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>

            {/* Tags Cloud */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Popular Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {Array.from(new Set(blogs.flatMap((blog) => blog.tags))).map(
                  (tag, index) => (
                    <button
                      key={index}
                      onClick={() => setSearchQuery(tag)}
                      className="text-xs bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full hover:bg-gray-200 transition-colors"
                    >
                      {tag}
                    </button>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gray-900 py-16 mt-16"
      >
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to level up your coding skills?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Join our community of developers and stay ahead with the latest
            programming techniques and best practices.
          </p>
          <button className="px-8 py-3 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all flex items-center mx-auto group">
            Explore our projects
            <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </motion.div>

      {/* Add custom styles for hiding scrollbar */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
