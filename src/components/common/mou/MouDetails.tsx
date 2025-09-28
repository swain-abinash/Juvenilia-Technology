import React from 'react';


type Item = {
    heading: string;
    content: string;
};


export const MouDetails: React.FC<{ items: Item[] }> = ({ items }) => {
    return (
        <section className="py-8">
            <div className="max-w-6xl mx-auto px-6">
                <div className="space-y-4">
                    {items.map((it, i) => (
                        <div key={i} className="p-6 bg-black/60 border border-gray-800 rounded-lg">
                            <h3 className="text-xl font-semibold text-white">{it.heading}</h3>
                            <p className="mt-2 text-sm text-gray-200">{it.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};