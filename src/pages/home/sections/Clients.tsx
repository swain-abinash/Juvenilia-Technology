import React from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import type { HomeData } from '../../../types';

const Clients = ({ data }: { data: HomeData['clients'] }) => {
    const duplicatedLogos = [...data.logos, ...data.logos];
    return (
        <SectionWrapper className="py-12 bg-gray-900">
             <h3 className="text-center text-2xl font-bold text-gray-400 mb-8">{data.title}</h3>
            <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                    {duplicatedLogos.map((logo, index) => (
                        <li key={index}>
                            <img src={logo.src} alt={logo.alt} className="h-10 w-auto object-contain grayscale transition duration-300 hover:grayscale-0" />
                        </li>
                    ))}
                </ul>
            </div>
        </SectionWrapper>
    );
};

export default Clients;
