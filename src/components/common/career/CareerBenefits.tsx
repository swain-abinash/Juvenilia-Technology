import { motion } from 'framer-motion';
import type { CareerPageData } from '../../../types';
import * as LucideIcons from 'lucide-react';

type CareerBenefitsProps = {
  benefits: CareerPageData['benefits'];
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

export const CareerBenefits = ({ benefits }: CareerBenefitsProps) => {
 return (
  <section className="bg-black py-16 sm:py-24 relative overflow-hidden">
    {/* Background gradient similar to AboutHero */}
    <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
    
    {/* Subtle orange glow effect */}
    <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/5 via-orange-400/3 to-transparent"></div>
    
    <div className="container mx-auto px-6 relative z-10">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
            Perks & Benefits
          </span>
        </h2>
        <p className="text-lg text-white/70 mt-2">We invest in our team's success and well-being.</p>
        <div className="mt-4 w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded"></div>
      </div>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {benefits.map((benefit) => {
          const Icon = LucideIcons[benefit.icon as keyof typeof LucideIcons] || LucideIcons['Gift'];
          return (
            <motion.div 
              key={benefit.title} 
              variants={itemVariants} 
              className="flex items-start space-x-4 p-6 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800/50 shadow-xl hover:shadow-2xl hover:border-orange-400/30 transition-all duration-300"
            >
              <div className="flex-shrink-0 text-orange-400 mt-1 p-2 rounded-lg bg-orange-400/10 border border-orange-400/20">
                 <Icon className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-white/70">{benefit.description}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  </section>
);
};

