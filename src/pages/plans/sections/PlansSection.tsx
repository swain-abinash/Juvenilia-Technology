import React, { useState } from 'react';
import SEO from './SEO';
import WebDesignPlan from './WebDesignPlan';
import DevelopmentPlan from './DevelopmentPlan';
import SoftwareDevelopment from './SoftwareDevelopment';

const PlansSection: React.FC = () => {
   const [activeCategory, setActiveCategory] = useState<string>('SEO');
   const categories = ['Web Design Plans', 'Development Plans', 'Software Development'];
     return (
    <>
     <div className="flex flex-wrap justify-center gap-4 mb-8 mt-8">
          <button
            onClick={() => setActiveCategory('SEO')}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeCategory === 'SEO'
                ? 'bg-orange-500 text-white shadow-lg transform scale-105'
                : 'bg-white text-gray-700 hover:bg-orange-100 shadow-md hover:shadow-lg'
            }`}
          >
            SEO
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-orange-500 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-orange-100 shadow-md hover:shadow-lg'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        {activeCategory === 'SEO' && <SEO />}
        {activeCategory === 'Web Design Plans' && <WebDesignPlan />}
                {activeCategory === 'Development Plans' && <DevelopmentPlan />}
        {activeCategory === 'Software Development' && <SoftwareDevelopment />}


    {/* <SEO/> */}
    </>
  )
};

export default PlansSection;