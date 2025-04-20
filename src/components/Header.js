"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiX,
  FiMenu,
  FiArrowRight,
  FiUser,
  FiCode,
  FiSmartphone,
  FiCloud,
  FiLayers,
  FiBriefcase,
  FiMail,
} from "react-icons/fi";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesHover, setServicesHover] = useState(false);

  // Modern gradient inspired by Dribbble designs
  const primaryGradient = "bg-gradient-to-r from-[#6E45E2] to-[#89D4CF]";
  const primaryGradientHover = "hover:from-[#5D3AC7] hover:to-[#7AC5C0]";
  const accentColor = "text-[#6E45E2]";

  return (
    <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-neutral-100/70">
      <div className="container mx-auto px-5 max-w-7xl">
        <div className="flex justify-between items-center py-3">
          {/* Logo with modern gradient */}
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/"
              className={`text-2xl font-semibold tracking-tight ${primaryGradient} bg-clip-text text-transparent`}
            >
              HustleCode
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/about"
                className={`flex items-center px-4 py-2 text-neutral-600 hover:text-neutral-900 transition-colors text-sm font-medium rounded-lg hover:bg-neutral-50 ${accentColor}`}
              >
                <FiUser className="mr-2" />
                About
              </Link>
            </motion.div>

            {/* Services Dropdown */}
            <motion.div
              className="relative"
              onHoverStart={() => setServicesHover(true)}
              onHoverEnd={() => setServicesHover(false)}
              whileHover={{ y: -2 }}
            >
              <button
                className={`flex items-center px-4 py-2 text-neutral-600 hover:text-neutral-900 transition-colors text-sm font-medium rounded-lg hover:bg-neutral-50 ${accentColor}`}
              >
                <FiLayers className="mr-2" />
                Services
                <motion.span
                  animate={{ rotate: servicesHover ? 180 : 0 }}
                  className="ml-1"
                >
                  <svg
                    className="w-4 h-4 text-neutral-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </motion.span>
              </button>

              <AnimatePresence>
                {servicesHover && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-xl py-2 border border-neutral-100/70 backdrop-blur-lg"
                  >
                    <Link
                      href="/services/web-development"
                      className={`flex items-center px-4 py-2.5 text-sm text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 transition-all rounded-lg mx-1 ${accentColor}`}
                    >
                      <FiCode className="mr-3" />
                      Web Development
                    </Link>
                    <Link
                      href="/services/mobile-apps"
                      className={`flex items-center px-4 py-2.5 text-sm text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 transition-all rounded-lg mx-1 ${accentColor}`}
                    >
                      <FiSmartphone className="mr-3" />
                      Mobile Apps
                    </Link>
                    <Link
                      href="/services/devops"
                      className={`flex items-center px-4 py-2.5 text-sm text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 transition-all rounded-lg mx-1 ${accentColor}`}
                    >
                      <FiCloud className="mr-3" />
                      DevOps
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/work"
                className={`flex items-center px-4 py-2 text-neutral-600 hover:text-neutral-900 transition-colors text-sm font-medium rounded-lg hover:bg-neutral-50 ${accentColor}`}
              >
                <FiBriefcase className="mr-2" />
                Work
              </Link>
            </motion.div>

            {/* Modern CTA Button */}
            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="ml-3"
            >
              <Link
                href="/contact"
                className={`flex items-center px-5 py-2.5 ${primaryGradient} ${primaryGradientHover} text-white rounded-lg text-sm font-medium transition-all hover:shadow-sm group`}
              >
                <FiMail className="mr-2 text-white/90" />
                Contact
                <FiArrowRight className="ml-2 text-white/90 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </nav>

          {/* Modern Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-lg hover:bg-neutral-100/50 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label="Menu"
          >
            {mobileMenuOpen ? (
              <FiX className="w-5 h-5 text-neutral-700" />
            ) : (
              <FiMenu className="w-5 h-5 text-neutral-700" />
            )}
          </motion.button>
        </div>

        {/* Modern Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="pt-2 pb-6 space-y-1">
                {[
                  { href: "/about", icon: <FiUser />, text: "About" },
                  {
                    href: "/services",
                    icon: <FiLayers />,
                    text: "Services",
                    subItems: [
                      {
                        href: "/services/web-development",
                        icon: <FiCode />,
                        text: "Web Dev",
                      },
                      {
                        href: "/services/mobile-apps",
                        icon: <FiSmartphone />,
                        text: "Mobile Apps",
                      },
                      {
                        href: "/services/devops",
                        icon: <FiCloud />,
                        text: "DevOps",
                      },
                    ],
                  },
                  { href: "/work", icon: <FiBriefcase />, text: "Work" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <div className="space-y-1">
                      <Link
                        href={item.href}
                        className={`flex items-center px-4 py-3 text-neutral-700 hover:bg-neutral-50 rounded-lg transition-all font-medium ${accentColor}`}
                        onClick={() =>
                          !item.subItems && setMobileMenuOpen(false)
                        }
                      >
                        <span className="mr-3">{item.icon}</span>
                        {item.text}
                      </Link>

                      {item.subItems && (
                        <div className="pl-10 space-y-1">
                          {item.subItems.map((subItem, subIndex) => (
                            <motion.div
                              key={subIndex}
                              initial={{ x: -20, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{
                                delay: 0.15 + index * 0.05 + subIndex * 0.03,
                              }}
                            >
                              <Link
                                href={subItem.href}
                                className={`flex items-center px-4 py-2 text-neutral-600 hover:bg-neutral-50 rounded-lg transition-all ${accentColor}`}
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                <span className="mr-3">{subItem.icon}</span>
                                {subItem.text}
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="pt-3"
                >
                  <Link
                    href="/contact"
                    className={`flex items-center justify-center px-4 py-3 ${primaryGradient} text-white rounded-full text-center font-medium hover:shadow-sm transition-all`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <FiMail className="mr-2" />
                    Contact Us
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
