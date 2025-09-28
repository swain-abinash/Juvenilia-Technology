import React from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import SectionTitle from '../ui/SectionTitle';
import type { HomeData } from '../../../types';

const TechStack = ({ data }: { data: HomeData['techStack'] }) => {
    const duplicatedLogos = [...data.logos, ...data.logos];
    return (
        <SectionWrapper>
            <SectionTitle>{data.title}</SectionTitle>
            <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll">
                    {duplicatedLogos.map((logo, index) => (
                        <li key={index} className="flex-shrink-0">
                            <img
                                src={logo.src}
                                alt={logo.alt}
                                className="h-15 w-auto object-contain transition duration-300 hover:scale-110"
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </SectionWrapper>
    );
};

export default TechStack;
