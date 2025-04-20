"use client";

import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend, FiClock } from "react-icons/fi";
import { FaLinkedin, FaGithub, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const contactMethods = [
    {
      icon: <FiMail className="w-6 h-6 text-blue-500" />,
      title: "Email Us",
      description: "For general inquiries and support",
      action: "mailto:contact@hustlecode.com",
      actionText: "contact@hustlecode.com",
      color: "from-blue-100 to-blue-50",
      border: "border-blue-200",
    },
    {
      icon: <FiPhone className="w-6 h-6 text-green-500" />,
      title: "Call Us",
      description: "Mon-Fri, 9am-5pm (PST)",
      action: "tel:+1234567890",
      actionText: "+1 (234) 567-890",
      color: "from-green-100 to-green-50",
      border: "border-green-200",
    },
    {
      icon: <FaWhatsapp className="w-6 h-6 text-green-500" />,
      title: "WhatsApp",
      description: "For instant messaging",
      action: "https://wa.me/1234567890",
      actionText: "Chat Now",
      color: "from-green-100 to-green-50",
      border: "border-green-200",
    },
    {
      icon: <FiMapPin className="w-6 h-6 text-purple-500" />,
      title: "Visit Us",
      description: "Our headquarters",
      action: "https://maps.google.com",
      actionText: "123 Tech Street, SV",
      color: "from-purple-100 to-purple-50",
      border: "border-purple-200",
    },
    {
      icon: <FiClock className="w-6 h-6 text-amber-500" />,
      title: "Working Hours",
      description: "When we're available",
      actionText: "Mon-Fri: 9AM-5PM",
      color: "from-amber-100 to-amber-50",
      border: "border-amber-200",
    },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin className="w-5 h-5" />,
      name: "LinkedIn",
      color: "bg-[#0A66C2]",
    },
    {
      icon: <FaGithub className="w-5 h-5" />,
      name: "GitHub",
      color: "bg-neutral-800",
    },
    {
      icon: <FaTwitter className="w-5 h-5" />,
      name: "Twitter",
      color: "bg-[#1DA1F2]",
    },
  ];

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-br from-neutral-50 to-neutral-100">
      {/* Floating bubbles background */}
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
              opacity: 0.7,
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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-4 text-sm font-medium text-[#6E45E2] bg-[#6E45E2]/10 px-4 py-1.5 rounded-full">
            GET IN TOUCH
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-5 text-neutral-900">
            Contact{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6E45E2] to-[#89D4CF]">
              Our Team
            </span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            We&apos;re here to help and answer any questions you might have
          </p>
        </motion.div>

        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div
                className={`h-full p-6 pl-12 rounded-full bg-gradient-to-br ${method.color} border ${method.border} hover:shadow-lg transition-all`}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-xl shadow-sm border border-neutral-200">
                    {method.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-1">
                      {method.title}
                    </h3>
                    <p className="text-neutral-600 text-sm mb-3">
                      {method.description}
                    </p>
                    {method.action ? (
                      <a
                        href={method.action}
                        className="text-sm font-medium text-[#6E45E2] hover:underline flex items-center gap-1"
                      >
                        {method.actionText}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-neutral-700">
                        {method.actionText}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Social Media Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ y: -8 }}
            className="group"
          >
            <div className="h-full p-6 pl-12 rounded-full bg-gradient-to-br from-neutral-100 to-neutral-50 border border-neutral-200 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-neutral-900 mb-4">
                Connect With Us
              </h3>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ y: -5 }}
                    className={`p-3 ${social.color} text-white rounded-full hover:shadow-md transition-all`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-4xl shadow-xl border border-neutral-200 p-8 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-2">Send Us a Message</h3>
          <p className="text-neutral-600 mb-8">
            Fill out the form below and we&apos;ll respond within 24 hours
          </p>

          <form className="grid md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-3xl border border-neutral-300 focus:ring-2 focus:ring-[#6E45E2] focus:border-[#6E45E2] outline-none transition-all"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-3xl border border-neutral-300 focus:ring-2 focus:ring-[#6E45E2] focus:border-[#6E45E2] outline-none transition-all"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-3xl border border-neutral-300 focus:ring-2 focus:ring-[#6E45E2] focus:border-[#6E45E2] outline-none transition-all"
                placeholder="How can we help?"
              />
            </div>
            <div className="md:col-span-3">
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Your Message
              </label>
              <textarea
                rows={5}
                className="w-full px-4 py-3 rounded-3xl border border-neutral-300 focus:ring-2 focus:ring-[#6E45E2] focus:border-[#6E45E2] outline-none transition-all"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>
            <div className="md:col-span-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-[#6E45E2] to-[#89D4CF] text-white font-medium py-4 px-6 rounded-3xl hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <FiSend className="text-lg" />
                Send Message
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
