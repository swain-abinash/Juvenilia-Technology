import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import SectionTitle from '../ui/SectionTitle';
import type { HomeData } from '../../../types';

const Industries = ({ data }: { data: HomeData['industries'] }) => {
    return (
        <SectionWrapper className="bg-gray-900">
            <SectionTitle>{data.title}</SectionTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {data.items.map((industry, index) => (
                    <motion.div
                        key={index}
                        className="group relative rounded-xl overflow-hidden cursor-pointer"
                        whileHover={{ y: -10 }}
                    >
                        <img src={industry.image} alt={industry.name} className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/80 transition-all duration-300 backdrop-blur-0 group-hover:backdrop-blur-sm"></div>
                        <div className="absolute inset-0 p-6 flex flex-col items-center justify-center text-center">
                            <div className="p-4 bg-white/10 rounded-full mb-4">
                                <industry.icon className="w-10 h-10 text-orange-400"/>
                            </div>
                            <h3 className="text-2xl font-bold text-white">{industry.name}</h3>
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Industries;

