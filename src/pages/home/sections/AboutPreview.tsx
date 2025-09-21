import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import type { HomeData } from '../../../types';

const AboutPreview = ({ data }: { data: HomeData['aboutPreview'] }) => {
    return (
        <SectionWrapper className="bg-gray-900">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.7 }}
                >
                    <img src="https://placehold.co/600x400/1a1a1a/orange?text=JT" alt="Juvenilia Technologies Office" className="rounded-xl shadow-2xl object-cover w-full h-full" />
                </motion.div>
                <div className="text-center md:text-left">
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">{data.intro}</p>
                    <a href={data.cta.link} className="group text-orange-500 font-bold text-lg inline-flex items-center gap-2">
                        {data.cta.text} &rarr;
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-orange-500"></span>
                    </a>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default AboutPreview;
