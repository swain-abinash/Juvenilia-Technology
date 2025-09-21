import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import SectionTitle from '../ui/SectionTitle';
import type { HomeData } from '../../../types';

const OurProcess = ({ data }: { data: HomeData['process'] }) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    return (
        <SectionWrapper className="bg-gray-900">
            <SectionTitle>{data.title}</SectionTitle>
            <div ref={ref} className="relative max-w-2xl mx-auto">
                <svg className="absolute top-0 left-1/2 -ml-[2px] h-full w-1" aria-hidden="true">
                    <motion.path
                        d={`M 0 0 V ${data.items.length * 200}`}
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth={4}
                        initial={{ pathLength: 0 }}
                        style={{ pathLength: scrollYProgress }}
                    />
                    <defs>
                        <linearGradient id="gradient" gradientTransform="rotate(90)">
                            <stop offset="0%" stopColor="#F97316" />
                            <stop offset="100%" stopColor="#4f4f4f" />
                        </linearGradient>
                    </defs>
                </svg>
                <div className="relative flex flex-col gap-16">
                    {data.items.map((step, index) => (
                        <motion.div 
                            key={index} 
                            className="relative flex items-center gap-6"
                            initial={{ opacity: 0, x: (index % 2 === 0) ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-orange-500 rounded-full border-4 border-gray-900 flex items-center justify-center z-10">
                                <step.icon className="w-5 h-5 text-white" />
                            </div>
                            <div className={`w-full p-6 bg-black rounded-lg border border-white/10 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'} md:w-5/12`}>
                                <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                                <p className="text-gray-400">{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default OurProcess;

