import React, { useRef } from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import SectionTitle from '../ui/SectionTitle';
import type { HomeData } from '../../../types';

const CaseStudies = ({ data }: { data: HomeData['caseStudies'] }) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    return (
        <SectionWrapper className="bg-gray-900">
            <SectionTitle>{data.title}</SectionTitle>
             <div className="relative">
                <div ref={scrollRef} className="flex overflow-x-auto snap-x snap-mandatory pb-8 scrollbar-hide space-x-8">
                    {data.items.map((study, index) => (
                        <div key={index} className="snap-center flex-shrink-0 w-80 md:w-96 bg-black p-8 rounded-2xl border border-white/10 transform transition-transform duration-300 hover:scale-105">
                           <div className="mb-4">
                                <h4 className="text-sm font-semibold text-orange-500 uppercase">Problem</h4>
                                <p className="text-gray-300">{study.problem}</p>
                           </div>
                           <div className="mb-4">
                                <h4 className="text-sm font-semibold text-orange-500 uppercase">Solution</h4>
                                <p className="text-gray-300">{study.solution}</p>
                           </div>
                           <div>
                                <h4 className="text-sm font-semibold text-orange-500 uppercase">Result</h4>
                                <p className="text-lg font-bold text-white">{study.result}</p>
                           </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="text-center mt-12">
                <a href={data.cta.link} className="inline-block px-8 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all duration-300">
                    {data.cta.text}
                </a>
            </div>
        </SectionWrapper>
    );
};

export default CaseStudies;
