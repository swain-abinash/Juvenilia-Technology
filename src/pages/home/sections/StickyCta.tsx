import React from 'react';
import { motion } from 'framer-motion';
import type { HomeData } from '../../../types';

const StickyCta = ({ data }: { data: HomeData['stickyCta'] }) => {
    return (
        <div className="sticky bottom-4 inset-x-0 z-50 px-4">
             <motion.div 
                className="max-w-4xl mx-auto p-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg shadow-2xl flex items-center justify-between"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, type: 'spring', stiffness: 100 }}
            >
                <p className="text-white font-semibold text-sm sm:text-base">{data.text}</p>
                <a href={data.link} className="flex-shrink-0 px-4 py-2 sm:px-6 bg-white text-orange-600 font-bold rounded-md text-sm sm:text-base hover:bg-gray-200 transition-colors animate-pulse-slow">
                    {data.buttonText}
                </a>
            </motion.div>
        </div>
    );
};

export default StickyCta;
