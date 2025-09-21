import React, { useRef, useEffect } from 'react';
import { useInView, animate } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import type { HomeData } from '../../../types';

const StatCounter = ({ value, suffix, label }: { value: number, suffix: string, label: string }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView && ref.current) {
            animate(0, value, {
                duration: 2,
                onUpdate(latest) {
                    if(ref.current) {
                        ref.current.textContent = Math.round(latest).toString();
                    }
                }
            });
        }
    }, [isInView, value]);

    return (
        <div className="text-center">
            <h3 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300">
                <span ref={ref}>0</span>{suffix}
            </h3>
            <p className="text-lg text-gray-400 mt-2">{label}</p>
        </div>
    );
};

const Stats = ({ data }: { data: HomeData['stats'] }) => {
    return (
        <SectionWrapper>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {data.items.map((stat, index) => (
                    <StatCounter key={index} value={stat.value} suffix={stat.suffix} label={stat.label} />
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Stats;
