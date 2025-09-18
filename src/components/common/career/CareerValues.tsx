import { motion } from 'framer-motion';
import type { CareerPageData } from '../../../types';
import * as LucideIcons from 'lucide-react';

type CareerValuesProps = {
  values: CareerPageData['values'];
};

const iconContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const iconItemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 },
  },
};

export const CareerValues = ({ values }: CareerValuesProps) => {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black">Our Core Values</h2>
          <p className="text-lg text-gray-600 mt-2">The principles that guide us in everything we do.</p>
          <div className="mt-4 w-24 h-1 bg-orange-500 mx-auto rounded"></div>
        </div>
        <motion.div
          variants={iconContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {values.map((value) => {
            const Icon = LucideIcons[value.icon as keyof typeof LucideIcons] || LucideIcons['ShieldQuestion'];
            return (
              <motion.div
                key={value.title}
                variants={iconItemVariants}
                className="text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-orange-100 text-orange-600 mx-auto mb-4">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

