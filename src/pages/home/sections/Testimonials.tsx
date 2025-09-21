import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import SectionTitle from '../ui/SectionTitle';
import type { HomeData } from '../../../types';

const Testimonials = ({ data }: { data: HomeData['testimonials'] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % data.items.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [data.items.length]);

    return (
        <SectionWrapper>
            <SectionTitle>{data.title}</SectionTitle>
            <div className="relative max-w-3xl mx-auto h-64">
                {data.items.map((testimonial, index) => (
                    <motion.div
                        key={index}
                        className="absolute w-full"
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: index === currentIndex ? 1 : 0, scale: index === currentIndex ? 1 : 0.95, y: index === currentIndex ? 0 : 10 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        <div className="bg-gray-900 p-8 rounded-xl border border-white/10 text-center">
                            <p className="text-xl italic text-gray-300 mb-6">"{testimonial.quote}"</p>
                            <div className="flex items-center justify-center gap-4">
                                <img src={testimonial.image} alt={testimonial.name} className="w-14 h-14 rounded-full border-2 border-orange-500" />
                                <div>
                                    <p className="font-bold text-white">{testimonial.name}</p>
                                    <p className="text-gray-400">{testimonial.company}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Testimonials;
