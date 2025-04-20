"use client";

import { avatars } from "@/lib/data/images";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsQuote } from "react-icons/bs";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "HustleCode transformed our digital presence completely. Their team delivered beyond our expectations with cutting-edge solutions.",
      author: "Sarah Johnson",
      role: "CEO, TechNova Inc.",
      avatar: avatars[0],
      rating: 5,
      accent: "from-violet-100 to-indigo-100",
    },
    {
      quote:
        "The mobile app they developed increased our user engagement by 180%. Their attention to detail is remarkable.",
      author: "Michael Chen",
      role: "Product Director, PulseHealth",
      avatar: avatars[1],
      rating: 5,
      accent: "from-rose-100 to-pink-100",
    },
    {
      quote:
        "Working with HustleCode was seamless. They understood our vision and executed it flawlessly with modern technologies.",
      author: "Emma Rodriguez",
      role: "CTO, Finova Systems",
      avatar: avatars[2],
      rating: 5,
      accent: "from-blue-100 to-teal-100",
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
          className="mb-16 text-center"
        >
          <span className="inline-block mb-3 text-xs font-medium tracking-wider text-cyan-500 uppercase">
            Client Voices
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-700">
              Trusted
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
              {" "}
              Partners
            </span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Hear what industry leaders say about working with our team
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
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
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${testimonial.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>
                <div className="absolute inset-0.5 rounded-[calc(1.5rem-2px)] border border-neutral-200 group-hover:border-neutral-300 transition-all duration-500"></div>
              </div>

              <div className="relative h-full p-8 flex flex-col">
                <BsQuote className="text-3xl text-neutral-300 mb-6" />

                <p className="text-lg text-neutral-700 mb-8 flex-grow">
                  &quot;{testimonial.quote}&quot;
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-neutral-200 overflow-hidden border-2 border-white shadow-sm">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900">
                      {testimonial.author}
                    </h4>
                    <p className="text-sm text-neutral-600">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                <div className="absolute top-8 right-8 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating
                          ? "text-amber-400"
                          : "text-neutral-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
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
          className="mt-20 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6">
            Ready to join our satisfied clients?
          </h3>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-bold hover:shadow-lg hover:shadow-cyan-500/30 transition-all hover:-translate-y-1"
          >
            Get Started Today
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
