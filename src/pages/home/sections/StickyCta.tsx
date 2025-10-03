import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // ✅ import Link
import type { HomeData } from '../../../types';

const StickyCta = ({ data }: { data: HomeData['stickyCta'] }) => {
    return (
        <div className="sticky bottom-2 inset-x-0 z-50 px-2">
            <motion.div 
                className="max-w-xl mx-auto p-2 bg-gradient-to-r from-orange-500 to-orange-600 rounded-md shadow-lg flex items-center justify-between"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, type: 'spring', stiffness: 100 }}
            >
                <p className="text-white font-medium text-xs sm:text-sm">{data.text}</p>
                <Link 
                    to={data.link} 
                    className="flex-shrink-0 px-3 py-1 sm:px-4 bg-white text-orange-600 font-medium rounded text-xs sm:text-sm hover:bg-gray-200 transition-colors"
                >
                    {data.buttonText}
                </Link>
            </motion.div>
        </div>
    );
};

export default StickyCta;
