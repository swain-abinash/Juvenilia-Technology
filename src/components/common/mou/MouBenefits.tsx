import React from 'react';


type Props = {
    benefits: string[];
};


export const MouBenefits: React.FC<Props> = ({ benefits }) => {
    return (
        <section className="py-10">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {benefits.map((b, idx) => (
                        <div
                            key={idx}
                            className="flex gap-4 items-start p-6 bg-white/5 rounded-lg border border-gray-800"
                        >
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-500 text-black font-bold">
                                {idx + 1}
                            </div>
                            <p className="text-white">{b}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};