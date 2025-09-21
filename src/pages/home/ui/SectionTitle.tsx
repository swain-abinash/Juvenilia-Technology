import React from 'react';

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-white">
        {children}
    </h2>
);

export default SectionTitle;
