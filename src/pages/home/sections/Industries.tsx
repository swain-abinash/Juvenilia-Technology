import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import SectionTitle from '../ui/SectionTitle';
import type { HomeData } from '../../../types';

const Industries = ({ data }: { data: HomeData['industries'] }) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const scrollToIndex = (index: number) => {
        if (scrollContainerRef.current) {
            const cardWidth = 320 + 24; // card width + gap
            const scrollPosition = index * cardWidth;
            scrollContainerRef.current.scrollTo({
                left: scrollPosition,
                behavior: 'smooth'
            });
        }
    };

    useEffect(() => {
        if (isHovered) return; // Pause auto-scroll when hovered

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                const nextIndex = (prevIndex + 1) % data.items.length;
                scrollToIndex(nextIndex);
                return nextIndex;
            });
        }, 2000);

        return () => clearInterval(interval);
    }, [data.items.length, isHovered]);

    const handleDotClick = (index: number) => {
        setCurrentIndex(index);
        scrollToIndex(index);
    };

    return (
        <SectionWrapper className="bg-gray-900">
            <SectionTitle>{data.title}</SectionTitle>
            <div className="relative">
                {/* Horizontal scrolling container */}
                <div 
                    ref={scrollContainerRef}
                    className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide scroll-smooth" 
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {data.items.map((industry, index) => (
                        <motion.div
                            key={index}
                            className="group relative rounded-xl overflow-hidden cursor-pointer flex-shrink-0 w-80 h-64"
                            whileHover={{ y: -10 }}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <img src={industry.image} alt={industry.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/80 transition-all duration-300 backdrop-blur-0 group-hover:backdrop-blur-sm"></div>
                            <div className="absolute inset-0 p-6 flex flex-col items-center justify-center text-center">
                                <div className="p-4 bg-white/10 rounded-full mb-4">
                                    <industry.icon className="w-10 h-10 text-orange-400"/>
                                </div>
                                <h3 className="text-xl font-bold text-white">{industry.name}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
                
                {/* Auto-scroll indicators with active state */}
                <div className="flex justify-center mt-6 gap-2">
                    {data.items.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleDotClick(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                index === currentIndex 
                                    ? 'bg-orange-500 scale-125' 
                                    : 'bg-orange-400/30 hover:bg-orange-400/60'
                            }`}
                        />
                    ))}
                </div>
                
                {/* Auto-scroll status indicator */}
                {/* <div className="flex justify-center mt-2">
                    <div className="flex items-center gap-2 text-orange-400/60 text-sm">
                        <div className={`w-2 h-2 rounded-full ${isHovered ? 'bg-red-400' : 'bg-green-400 animate-pulse'}`}></div>
                        <span>{isHovered ? 'Paused' : 'Auto-scrolling'}</span>
                    </div>
                </div> */}
            </div>
        </SectionWrapper>
    );
};

export default Industries;

