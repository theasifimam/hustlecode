"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  FiCalendar,
  FiTag,
  FiClock,
  FiBookmark,
  FiHeart,
  FiArrowLeft,
  FiLink,
  FiTwitter,
  FiFacebook,
  FiLinkedin,
} from "react-icons/fi";
import { FaNodeJs } from "react-icons/fa";
import { FiCheck, FiArrowRight } from "react-icons/fi";

export default function ArticlePage() {
  const [copied, setCopied] = useState(false);
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  // Sample article data
  const article = {
    id: 1,
    title: "Building Scalable APIs with GraphQL and Node.js",
    excerpt:
      "Learn how to create efficient, type-safe APIs using GraphQL and Express for modern web applications that can handle millions of requests.",
    content: [
      {
        type: "paragraph",
        content:
          "In modern web development, creating robust and efficient APIs is crucial for delivering high-performance applications. GraphQL has emerged as a powerful alternative to traditional REST APIs, offering greater flexibility and efficiency. In this comprehensive guide, we'll explore how to build scalable APIs using GraphQL with Node.js and Express.",
      },
      {
        type: "heading",
        content: "What is GraphQL?",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "GraphQL is a query language for APIs and a runtime for executing those queries with your existing data. Unlike REST APIs, which expose a fixed set of endpoints, GraphQL provides a single endpoint where clients can request exactly the data they need. This eliminates over-fetching and under-fetching of data, making applications more efficient.",
      },
      {
        type: "list",
        items: [
          "Type system that ensures data integrity",
          "Client-specific queries for precise data fetching",
          "Introspection for self-documentation",
          "Real-time updates with subscriptions",
        ],
        style: "unordered",
      },
      {
        type: "heading",
        content: "Setting Up a GraphQL Server with Express",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Let's dive into creating a GraphQL server using Express and Apollo Server, one of the most popular GraphQL implementations for Node.js.",
      },
      {
        type: "code",
        language: "javascript",
        content: `// Install required packages
// npm install express apollo-server-express graphql

const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

// Define GraphQL schema
const typeDefs = gql\`
  type Query {
    hello: String
    users: [User]
  }
  
  type User {
    id: ID!
    name: String
    email: String
  }
\`;

// Define resolvers
const resolvers = {
  Query: {
    hello: () => 'Hello World!',
    users: () => [
      { id: 1, name: 'John Doe', email: 'john@example.com' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
    ]
  }
};

async function startServer() {
  // Initialize Express
  const app = express();
  
  // Initialize Apollo Server
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  
  // Apply middleware
  server.applyMiddleware({ app });
  
  // Start server
  app.listen({ port: 4000 }, () => {
    console.log(\`Server running at http://localhost:4000\${server.graphqlPath}\`);
  });
}

startServer();`,
      },
      {
        type: "paragraph",
        content:
          "With this basic setup, we have a functioning GraphQL server that can respond to queries. The next step is to structure our schema and resolvers for a more complex application.",
      },
      {
        type: "heading",
        content: "Schema Design Best Practices",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "A well-designed GraphQL schema is the foundation of a scalable API. It acts as a contract between the client and server, defining what queries and mutations are available and what data structures are returned.",
      },
      {
        type: "heading",
        content: "Organizing Resolvers for Scalability",
        level: 3,
      },
      {
        type: "paragraph",
        content:
          "As your application grows, you'll want to organize your resolvers in a modular way. This helps with maintainability and makes testing easier.",
      },
      {
        type: "code",
        language: "javascript",
        content: `// user/resolvers.js
const userResolvers = {
  Query: {
    user: (_, { id }) => getUserById(id),
    users: () => getAllUsers()
  },
  Mutation: {
    createUser: (_, { input }) => createNewUser(input),
    updateUser: (_, { id, input }) => updateExistingUser(id, input)
  }
};

// product/resolvers.js
const productResolvers = {
  Query: {
    product: (_, { id }) => getProductById(id),
    products: () => getAllProducts()
  }
};

// Merge resolvers
const resolvers = mergeResolvers([
  userResolvers,
  productResolvers
]);`,
      },
      {
        type: "heading",
        content: "Implementing Authentication and Authorization",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Security is critical for any API. With GraphQL, you can implement authentication and authorization at different levels of your schema.",
      },
      {
        type: "paragraph",
        content: "One common approach is using directive-based authorization:",
      },
      {
        type: "code",
        language: "javascript",
        content: `const typeDefs = gql\`
  directive @auth(requires: Role = USER) on FIELD_DEFINITION
  
  enum Role {
    ADMIN
    USER
  }
  
  type User {
    id: ID!
    name: String
    email: String
    adminData: String @auth(requires: ADMIN)
  }
  
  type Query {
    publicData: String
    userData: String @auth(requires: USER)
    adminData: String @auth(requires: ADMIN)
  }
\`;`,
      },
      {
        type: "heading",
        content: "Optimizing Performance",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "GraphQL APIs can face unique performance challenges, especially when dealing with complex nested queries.",
      },
      {
        type: "list",
        items: [
          "Implement query complexity analysis to prevent expensive queries",
          "Use dataloaders for batching and caching database operations",
          "Apply pagination to limit large result sets",
          "Consider persisted queries for production environments",
        ],
        style: "unordered",
      },
      {
        type: "paragraph",
        content:
          "By following these practices, you can build GraphQL APIs that are not only flexible and powerful but also performant and secure. Whether you're building a small project or an enterprise application, these principles will help you create a robust API architecture that can scale with your needs.",
      },
    ],
    category: "Backend",
    readTime: "8 min read",
    date: "Apr 18, 2025",
    author: {
      name: "Sarah Johnson",
      avatar:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bio: "Senior Backend Developer with expertise in Node.js, GraphQL, and microservices architecture",
    },
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: <FaNodeJs className="w-5 h-5" />,
    color: "bg-green-600",
    tags: ["GraphQL", "Node.js", "API", "Express", "Backend"],
    relatedPosts: [
      {
        id: 2,
        title: "REST vs GraphQL: Choosing the Right API Architecture",
        excerpt:
          "Compare the benefits and trade-offs of REST and GraphQL for your next project",
        image:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "API",
        date: "Apr 12, 2025",
      },
      {
        id: 3,
        title: "Securing Node.js Applications in Production",
        excerpt:
          "Essential security practices for deploying Node.js applications",
        image:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Backend",
        date: "Apr 5, 2025",
      },
      {
        id: 4,
        title: "Database Optimization Techniques for GraphQL",
        excerpt:
          "Solve N+1 queries and other performance challenges in GraphQL",
        image:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Database",
        date: "Mar 28, 2025",
      },
    ],
  };

  // Function to copy article URL
  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Render different content blocks based on type
  const renderContent = (item, index: number) => {
    switch (item.type) {
      case "paragraph":
        return (
          <p key={index} className="mb-6 text-gray-700 leading-relaxed">
            {item.content}
          </p>
        );
      case "heading":
        if (item.level === 2) {
          return (
            <h2
              key={index}
              className="text-2xl font-bold text-gray-800 mt-10 mb-4"
            >
              {item.content}
            </h2>
          );
        } else {
          return (
            <h3
              key={index}
              className="text-xl font-semibold text-gray-800 mt-8 mb-3"
            >
              {item.content}
            </h3>
          );
        }
      case "list":
        if (item.style === "unordered") {
          return (
            <ul
              key={index}
              className="mb-6 pl-5 list-disc text-gray-700 space-y-2"
            >
              {item.items.map((listItem, i) => (
                <li key={i} className="leading-relaxed">
                  {listItem}
                </li>
              ))}
            </ul>
          );
        } else {
          return (
            <ol
              key={index}
              className="mb-6 pl-5 list-decimal text-gray-700 space-y-2"
            >
              {item.items.map((listItem, i) => (
                <li key={i} className="leading-relaxed">
                  {listItem}
                </li>
              ))}
            </ol>
          );
        }
      case "code":
        return (
          <div key={index} className="mb-6 rounded-3xl overflow-hidden">
            <div className="bg-gray-800 text-gray-300 px-4 py-2 text-sm flex justify-between items-center">
              <span>{item.language}</span>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(item.content);
                  alert("Code copied to clipboard!");
                }}
                className="text-xs bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded-3xl focus:outline-none transition-colors"
              >
                Copy
              </button>
            </div>
            <pre className="bg-gray-900 text-gray-300 p-4 overflow-x-auto text-sm">
              <code>{item.content}</code>
            </pre>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Article Header Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 max-w-6xl py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <button
              onClick={() => window.history.back()}
              className="flex items-center mb-6 text-blue-100 hover:text-white transition-colors"
            >
              <FiArrowLeft className="mr-2" />
              Back to articles
            </button>

            <div className="flex items-center mb-4">
              <span
                className={`${article.color} text-white text-sm font-medium px-3 py-1 rounded-full flex items-center gap-1.5`}
              >
                {article.icon}
                {article.category}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              {article.title}
            </h1>

            <p className="text-blue-100 text-lg max-w-3xl mb-6">
              {article.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-blue-100">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-blue-500">
                  <img
                    src={article.author.avatar}
                    alt={article.author.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span>{article.author.name}</span>
              </div>

              <div className="flex items-center gap-1">
                <FiCalendar className="w-4 h-4" />
                <span>{article.date}</span>
              </div>

              <div className="flex items-center gap-1">
                <FiClock className="w-4 h-4" />
                <span>{article.readTime}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl -mt-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Article Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-2/3"
          >
            {/* Article Image */}
            <div className="bg-white rounded-3xl shadow-sm mb-8 overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>

            {/* Article Content */}
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm mb-8">
              <article className="prose prose-lg max-w-none">
                {article.content.map(renderContent)}
              </article>

              {/* Tags */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full flex items-center gap-1"
                    >
                      <FiTag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Article Actions */}
              <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap justify-between items-center gap-4">
                <div className="flex gap-3">
                  <button
                    onClick={() => setLiked(!liked)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-colors ${
                      liked
                        ? "bg-red-50 text-red-600 border-red-200"
                        : "border-gray-200 text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <FiHeart
                      className={`w-4 h-4 ${liked ? "fill-current" : ""}`}
                    />
                    <span>{liked ? "Liked" : "Like"}</span>
                  </button>

                  <button
                    onClick={() => setBookmarked(!bookmarked)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-colors ${
                      bookmarked
                        ? "bg-blue-50 text-blue-600 border-blue-200"
                        : "border-gray-200 text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <FiBookmark
                      className={`w-4 h-4 ${bookmarked ? "fill-current" : ""}`}
                    />
                    <span>{bookmarked ? "Saved" : "Save"}</span>
                  </button>
                </div>

                <div className="flex gap-2">
                  <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                    <FiTwitter className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                    <FiFacebook className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                    <FiLinkedin className="w-4 h-4" />
                  </button>
                  <button
                    onClick={copyToClipboard}
                    className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors ${
                      copied
                        ? "bg-green-500 text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {copied ? (
                      <FiCheck className="w-4 h-4" />
                    ) : (
                      <FiLink className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Author Bio */}
            <div className="bg-white p-6 rounded-3xl shadow-sm mb-8">
              <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
                <div className="w-20 h-20 rounded-full overflow-hidden bg-blue-100 flex-shrink-0">
                  <img
                    src={article.author.avatar}
                    alt={article.author.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-lg font-semibold text-gray-800">
                    About {article.author.name}
                  </h3>
                  <p className="text-gray-600 mt-2">{article.author.bio}</p>
                  <button className="mt-3 text-blue-600 hover:text-blue-800 transition-colors text-sm font-medium">
                    View all articles
                  </button>
                </div>
              </div>
            </div>

            {/* Comments Section */}
            <div className="bg-white p-6 rounded-3xl shadow-sm mb-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-800">
                  Comments (5)
                </h3>
                <button className="text-blue-600 hover:text-blue-800 transition-colors text-sm font-medium">
                  View all
                </button>
              </div>

              <div className="border-b border-gray-100 pb-6 mb-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-blue-100 flex-shrink-0">
                    <img
                      src="/api/placeholder/100/100"
                      alt="User Avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium text-gray-800">Alex Chen</h4>
                      <span className="text-xs text-gray-500">2 days ago</span>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Great article! I&apos;ve been using GraphQL for a while
                      now, and these performance tips are spot on. Especially
                      the part about DataLoaders - they&apos;re a game changer
                      for solving N+1.
                    </p>
                    <div className="flex gap-4 mt-2">
                      <button className="text-xs text-gray-500 hover:text-gray-700 transition-colors">
                        Reply
                      </button>
                      <button className="text-xs text-gray-500 hover:text-gray-700 transition-colors flex items-center gap-1">
                        <FiHeart className="w-3 h-3" /> 3
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-blue-100 flex-shrink-0">
                  <img
                    src="/api/placeholder/100/100"
                    alt="Your Avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <textarea
                    placeholder="Write a comment..."
                    className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none"
                    rows={3}
                  ></textarea>
                  <div className="flex justify-end mt-2">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm hover:bg-blue-700 transition-colors">
                      Post Comment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:w-1/3 space-y-8"
          >
            {/* Table of Contents */}
            <div className="bg-white p-6 rounded-3xl shadow-sm sticky top-8 z-10">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Table of Contents
              </h3>
              <nav className="space-y-2">
                {article.content
                  .filter((item) => item.type === "heading")
                  .map((heading, index) => (
                    <a
                      key={index}
                      href={`#${heading.content
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className={`block py-1.5 px-3 rounded hover:bg-gray-100 transition-colors ${
                        heading.level === 2
                          ? "text-gray-700 font-medium"
                          : "text-gray-600 text-sm pl-6"
                      }`}
                    >
                      {heading.content}
                    </a>
                  ))}
              </nav>
            </div>

            {/* Related Articles */}
            <div className="bg-white p-6 rounded-3xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Related Articles
              </h3>
              <div className="space-y-4">
                {article.relatedPosts.map((post, index) => (
                  <div key={index} className="flex gap-3 group">
                    <div className="w-24 h-16 bg-gray-100 rounded-2xl overflow-hidden flex-shrink-0">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-800 line-clamp-2 group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </h4>
                      <div className="flex items-center mt-1 text-xs text-gray-500">
                        <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full text-xs">
                          {post.category}
                        </span>
                        <span className="mx-2">•</span>
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-6 text-white">
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

            {/* Share Widget - Sticky */}
            <div className="hidden lg:block">
              <div className="sticky top-48 bg-white p-4 rounded-3xl shadow-sm">
                <h3 className="text-sm font-medium text-gray-700 mb-3 text-center">
                  Share
                </h3>
                <div className="flex align-middle justify-between space-y-3">
                  <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                    <FiTwitter className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                    <FiFacebook className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                    <FiLinkedin className="w-5 h-5" />
                  </button>
                  <button
                    onClick={copyToClipboard}
                    className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors ${
                      copied
                        ? "bg-green-500 text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {copied ? (
                      <FiCheck className="w-5 h-5" />
                    ) : (
                      <FiLink className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* More Articles - Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 mb-16"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-medium text-gray-800">
              More Articles
            </h2>
            <button className="text-blue-600 hover:text-blue-800 transition-colors text-sm font-medium flex items-center gap-1 group">
              View all articles
              <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {article.relatedPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="mb-2">
                    <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 mt-2 text-sm line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100 text-sm text-gray-500">
                    <span>{post.date}</span>
                    <button className="flex items-center text-blue-600 hover:text-blue-800 transition-colors group">
                      Read more{" "}
                      <FiArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Missing imports that should be at the top of the file
