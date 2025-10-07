import React from "react";
import { Link } from "react-router-dom";
import { siteMap } from "../../mock/sitemap";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const SiteMap: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white overflow-hidden">
      {/* Soft background glow orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500/10 blur-[130px] rounded-full animate-pulse" />
      <div className="absolute bottom-10 right-16 w-80 h-80 bg-purple-700/10 blur-[130px] rounded-full animate-pulse delay-1000" />

      <div className="relative max-w-7xl mx-auto px-6 py-24">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-orange-400 via-yellow-300 to-pink-400 bg-clip-text text-transparent"
          >
            Explore Our Site Map
          </motion.h1>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto leading-relaxed">
            Navigate easily through all sections of our website — from core pages to resources,
            support, and highlights. Designed for seamless exploration.
          </p>
        </div>

        {/* Quick Navigation Chips */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {siteMap
            .flatMap((section) => section.items)
            .slice(0, 10)
            .map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <Link
                  to={item.href}
                  className="px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-gray-300 hover:text-white hover:border-orange-400 hover:bg-orange-400/10 transition-all duration-300 text-sm font-medium"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
        </div>

        {/* Site Map Sections */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {siteMap.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:border-orange-500/30 hover:shadow-[0_0_30px_rgba(255,165,0,0.2)] transition-all duration-500"
            >
              {/* Section Title */}
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-block w-2.5 h-2.5 bg-orange-500 rounded-full shadow-[0_0_10px_rgba(255,165,0,0.8)]" />
                <h2 className="text-2xl font-semibold text-orange-400 tracking-wide">
                  {section.title}
                </h2>
              </div>

              {/* Section Links */}
              <ul className="space-y-3">
                {section.items.map((item, j) => (
                  <li key={item.label} className="group">
                    <Link
                      to={item.href}
                      className="flex items-center justify-between text-gray-200 hover:text-orange-300 transition-all duration-300"
                    >
                      <span className="flex items-center gap-2">
                        <ArrowRight
                          size={16}
                          className="text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                        {item.label}
                      </span>
                      {item.children && item.children.length > 0 && (
                        <span className="text-xs text-gray-400 italic">
                          ({item.children.length} sub-links)
                        </span>
                      )}
                    </Link>

                    {/* Child Links */}
                    {item.children && item.children.length > 0 && (
                      <ul className="mt-2 ml-6 space-y-2 border-l border-white/10 pl-4">
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <Link
                              to={child.href}
                              className="text-gray-400 hover:text-orange-200 text-sm transition-all duration-300"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-20 text-center text-gray-400 text-sm max-w-2xl mx-auto"
        >
          <p>
            This sitemap reflects the complete navigation structure of our website. 
            Updates are automatically reflected here whenever new sections are added.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SiteMap;
