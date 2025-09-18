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
    <section className="bg-gray-100 py-16 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black">Perks & Benefits</h2>
          <p className="text-lg text-gray-600 mt-2">We invest in our team's success and well-being.</p>
          <div className="mt-4 w-24 h-1 bg-orange-500 mx-auto rounded"></div>
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
              <motion.div key={benefit.title} variants={itemVariants} className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow">
                <div className="flex-shrink-0 text-orange-500 mt-1">
                   <Icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black">{benefit.title}</h3>
                  <p className="text-gray-600 mt-1">{benefit.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

