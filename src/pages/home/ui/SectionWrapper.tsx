import { motion } from 'framer-motion';
import React from 'react';

const SectionWrapper = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
    <motion.section
        className={`w-full py-20 px-4 sm:px-6 lg:px-8 ${className}`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
    >
        <div className="max-w-7xl mx-auto">
            {children}
        </div>
    </motion.section>
);

export default SectionWrapper;
