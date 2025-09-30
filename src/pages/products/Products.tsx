// src/components/products/Products.tsx
import React from "react";
import { motion } from "framer-motion";
import { products } from "../../mock/products";
import SectionTitle from "../home/ui/SectionTitle";
import { Play, CheckCircle } from "lucide-react";

const Products: React.FC = () => {
  const product = products[0]; // currently only JT Coding Baba

  return (
    <section className="py-20 px-6 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <SectionTitle>Our Products</SectionTitle>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
          {/* Left: Product Image with subtle animation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-md">
              <img
                src={product.image}
                alt={product.name}
                className="rounded-2xl shadow-2xl w-full border-2 border-orange-500/60 hover:scale-105 hover:shadow-orange-500/30 transition-transform duration-500"
              />
              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                Hot Product
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h2 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
              {product.name}
            </h2>

            <p className="text-gray-300 mb-6 leading-relaxed">
              {product.description}
            </p>

            {/* Features */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {product.features.map((feature, idx) => (
                <motion.li
                  key={idx}
                  whileHover={{ scale: 1.03 }}
                  className="flex items-start gap-3 text-gray-200 bg-white/5 p-3 rounded-xl hover:bg-orange-500/10 transition"
                >
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </motion.li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              {product.playstoreLink && (
                <a
                  href={product.playstoreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition"
                >
                  <Play className="w-5 h-5" />
                  Download on Play Store
                </a>
              )}

              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white px-6 py-3 rounded-xl font-semibold transition"
              >
                Talk to Advisor
              </a>
            </div>
          </motion.div>
        </div>

        {/* Highlights Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-white text-center mb-10">
            Key Highlights
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            {[
              "50+ Live Interactive Sessions",
              "Access to Recorded Sessions",
              "Hands-on Industry Projects",
              "Live Classes from IIT Faculty",
              "JT Professional Certification",
              "Job Referrals through JT Network",
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl shadow-lg"
              >
                <p className="text-orange-400 font-semibold">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
