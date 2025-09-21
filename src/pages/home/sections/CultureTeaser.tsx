import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import type { HomeData } from '../../../types';
import { PlayIcon } from '../../../components/Icons';

const CultureTeaser = ({ data }: { data: HomeData['culture'] }) => {
    return(
        <SectionWrapper>
            <div className="bg-gradient-to-br from-orange-500/20 to-gray-900 p-8 md:p-12 rounded-2xl flex flex-col md:flex-row items-center gap-8">
                <motion.div 
                    className="relative w-full md:w-1/2"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                    <div className="aspect-video bg-black rounded-lg shadow-2xl flex items-center justify-center">
                        <PlayIcon className="w-16 h-16 text-white/70 hover:text-white transition-colors cursor-pointer" />
                    </div>
                </motion.div>
                <div className="md:w-1/2 text-center md:text-left">
                    <p className="text-2xl md:text-3xl font-medium italic text-white mb-4">"{data.quote}"</p>
                    <p className="font-bold text-orange-400">{data.author}, <span className="text-gray-400 font-normal">{data.role}</span></p>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default CultureTeaser;

