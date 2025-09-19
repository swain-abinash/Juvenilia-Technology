
import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, centered = true }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}
    >
      {subtitle && (
        <span className="text-orange-400 text-sm font-semibold tracking-wider uppercase mb-2 block">
          {subtitle}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl font-bold text-white">
        <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      <div className={`w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mt-4 ${centered ? 'mx-auto' : ''}`} />
    </motion.div>
  );
};