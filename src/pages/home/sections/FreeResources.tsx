import React from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import SectionTitle from '../ui/SectionTitle';
import type { HomeData } from '../../../types';
import { DownloadIcon } from '../../../components/Icons';

const FreeResources = ({ data }: { data: HomeData['resources'] }) => {
    return (
        <SectionWrapper>
            <div className="bg-gray-900 p-8 md:p-12 rounded-2xl text-center">
                <SectionTitle>{data.title}</SectionTitle>
                <p className="max-w-2xl mx-auto text-gray-300 mb-8">
                    Download our free guides, tools & insights to grow your business faster.
                </p>
                <div className="max-w-md mx-auto space-y-4 mb-8">
                    {data.items.map((resource, index) => (
                        <a href={resource.link} key={index} className="group block p-6 bg-black rounded-lg border border-white/10 text-left hover:border-orange-500 transition-colors">
                            <h4 className="text-lg font-bold text-white flex items-center gap-2">
                                <DownloadIcon className="w-5 h-5 text-orange-500" />
                                {resource.title}
                            </h4>
                            <p className="text-gray-400">{resource.description}</p>
                        </a>
                    ))}
                </div>
                 <a href={data.cta.link} className="inline-block px-8 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all duration-300">
                    {data.cta.text}
                </a>
            </div>
        </SectionWrapper>
    );
};

export default FreeResources;

