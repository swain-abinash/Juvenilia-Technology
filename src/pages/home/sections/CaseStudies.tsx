import React, { useRef } from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import SectionTitle from '../ui/SectionTitle';
import type { HomeData } from '../../../types';
import { AlertTriangle, Lightbulb, TrendingUp } from 'lucide-react'; // icons

const CaseStudies = ({ data }: { data: HomeData['caseStudies'] }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <SectionWrapper className="bg-gradient-to-b from-gray-900 via-black to-gray-900 relative">
      <SectionTitle>{data.title}</SectionTitle>

      <div className="relative">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory pb-8 scrollbar-hide space-x-8"
        >
          {data.items.map((study, index) => (
            <div
              key={index}
              className="snap-center flex-shrink-0 w-80 md:w-96 bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-lg 
              transform transition-transform duration-500 hover:scale-105 hover:border-orange-500/40"
            >
              {/* Problem */}
              <div className="mb-6">
                <h4 className="flex items-center gap-2 text-sm font-semibold text-red-400 uppercase tracking-wide">
                  <AlertTriangle className="w-4 h-4" /> Problem
                </h4>
                <p className="text-gray-300 mt-1">{study.problem}</p>
              </div>

              {/* Solution */}
              <div className="mb-6">
                <h4 className="flex items-center gap-2 text-sm font-semibold text-blue-400 uppercase tracking-wide">
                  <Lightbulb className="w-4 h-4" /> Solution
                </h4>
                <p className="text-gray-300 mt-1">{study.solution}</p>
              </div>

              {/* Result */}
              <div>
                <h4 className="flex items-center gap-2 text-sm font-semibold text-green-400 uppercase tracking-wide">
                  <TrendingUp className="w-4 h-4" /> Result
                </h4>
                <p className="text-xl font-bold text-white mt-1">{study.result}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <a
          href={data.cta.link}
          className="inline-block px-10 py-4 bg-gradient-to-r from-orange-500 to-black-400 text-white font-semibold rounded-full shadow-lg 
          hover:scale-105 transition-transform duration-300"
        >
          {data.cta.text}
        </a>
      </div>
    </SectionWrapper>
  );
};

export default CaseStudies;
