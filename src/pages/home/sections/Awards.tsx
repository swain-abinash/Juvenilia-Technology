import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import SectionTitle from '../ui/SectionTitle';
import type { HomeData } from '../../../types';

const Awards = ({ data }: { data: HomeData['awards'] }) => {
    return (
        <SectionWrapper className="bg-gray-900">
            <SectionTitle>{data.title}</SectionTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {data.items.map((award, index) => (
                    <motion.div 
                        key={index}
                        className="relative p-6 text-center bg-black rounded-xl border border-white/10"
                        whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(249, 115, 22, 0.1)" }}
                    >
                         <div className="mb-2 text-4xl">🏆</div>
                         <h3 className="text-xl font-bold text-white">{award.name}</h3>
                         <p className="text-gray-400">{award.issuer} {award.year && `(${award.year})`}</p>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Awards;
