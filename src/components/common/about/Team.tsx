import React from "react";
import { motion } from "framer-motion";
import { aboutData } from "../../../mock/aboutData";
import { SectionTitle } from "./SectionTitle";

export const Team: React.FC = () => {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-orange-500/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTitle title="Meet Our Visionaries" subtitle="Our Team" />

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-12 justify-items-center">
          {aboutData.team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
                type: "spring",
                stiffness: 80,
              }}
              whileHover={{ scale: 1.05, y: -6 }}
              className="relative group w-[260px] min-h-[360px] rounded-3xl p-6 bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 hover:border-orange-400/40"
            >
              {/* Profile Image */}
              <div className="relative mx-auto w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden ring-2 ring-orange-500/40 group-hover:ring-orange-500 transition-all duration-300 bg-gray-900 flex items-center justify-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-contain w-full h-full scale-105 group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Member Info */}
              <div className="text-center mt-6">
                <h4 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors duration-300">
                  {member.name}
                </h4>
                <p className="text-sm text-orange-300/80 font-medium">
                  {member.position}
                </p>
                <p className="text-gray-400 text-sm mt-3 italic leading-relaxed">
                  “{member.tagline}”
                </p>
              </div>

              {/* Decorative Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

