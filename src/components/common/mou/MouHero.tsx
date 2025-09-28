import React from 'react';


type Props = {
    title: string;
    subtitle: string;
};


export const MouHero: React.FC<Props> = ({ title, subtitle }) => {
    return (
        <header className="bg-black pt-16 pb-12">
            <div className="max-w-6xl mx-auto px-6">
                <div className="bg-gradient-to-r from-black via-transparent to-transparent p-8 rounded-2xl border border-gray-800">
                    <h1 className="text-4xl md:text-5xl font-black text-white leading-tight">{title}</h1>
                    <p className="mt-4 text-lg text-orange-300 max-w-3xl">{subtitle}</p>
                </div>
            </div>
        </header>
    );
};