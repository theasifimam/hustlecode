"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiTwitter,
  FiLinkedin,
  FiInstagram,
} from "react-icons/fi";

export default function Footer() {
  const links = [
    {
      title: "Services",
      items: [
        { name: "Web Development", href: "/services/web" },
        { name: "Mobile Apps", href: "/services/mobile" },
        { name: "UI/UX Design", href: "/services/design" },
        { name: "DevOps", href: "/services/devops" },
      ],
    },
    {
      title: "Company",
      items: [
        { name: "About Us", href: "/about" },
        { name: "Our Work", href: "/work" },
        { name: "Careers", href: "/careers" },
        { name: "Blog", href: "/blog" },
      ],
    },
    {
      title: "Support",
      items: [
        { name: "Contact Us", href: "/contact" },
        { name: "FAQs", href: "/faq" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
      ],
    },
  ];

  const socialLinks = [
    { icon: <FiGithub className="w-5 h-5" />, name: "GitHub", href: "#" },
    { icon: <FiTwitter className="w-5 h-5" />, name: "Twitter", href: "#" },
    { icon: <FiLinkedin className="w-5 h-5" />, name: "LinkedIn", href: "#" },
    { icon: <FiInstagram className="w-5 h-5" />, name: "Instagram", href: "#" },
  ];

  return (
    <footer className="relative bg-neutral-900 text-neutral-200 pt-24 pb-12 overflow-hidden">
      {/* Floating tech bubbles (dark version) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/5 border border-white/10"
            style={{
              width: Math.random() * 120 + 60,
              height: Math.random() * 120 + 60,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 80],
              x: [0, (Math.random() - 0.5) * 80],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative container mx-auto px-5 max-w-7xl">
        {/* Top Row - Brand, Social, Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-8 mb-16 items-start"
        >
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                HustleCode
              </span>
            </Link>
            <p className="text-neutral-400">
              Building the future with modern technologies and innovative
              solutions.
            </p>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">
              Connect With Us
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ y: -5 }}
                  className="p-2.5 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <FiMail className="text-cyan-400 mt-1 flex-shrink-0" />
                <a
                  href="mailto:contact@hustlecode.com"
                  className="hover:text-white transition-colors"
                >
                  contact@hustlecode.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FiPhone className="text-cyan-400 mt-1 flex-shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="hover:text-white transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FiMapPin className="text-cyan-400 mt-1 flex-shrink-0" />
                <span className="hover:text-white transition-colors">
                  123 Tech Street, Silicon Valley
                </span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Middle Row - Navigation Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid lg:grid-cols-3 gap-12 mb-16"
        >
          {links.map((group, i) => (
            <div key={i}>
              <h3 className="text-lg font-semibold text-white mb-5">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.items.map((item, j) => (
                  <motion.li
                    key={j}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Link
                      href={item.href}
                      className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-neutral-400 text-sm">
            © {new Date().getFullYear()} HustleCode. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-neutral-400 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-neutral-400 hover:text-white text-sm transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="text-neutral-400 hover:text-white text-sm transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
