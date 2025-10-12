import React, { useState } from "react";
import SEO from "./SEO";
import WebDesignPlan from "./WebDesignPlan";
import DevelopmentPlan from "./DevelopmentPlan";
import SoftwareDevelopment from "./SoftwareDevelopment";

const PlansSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("SEO");
  const categories = [
    "Web Design Plans",
    "Development Plans",
    "Software Development",
  ];
  return (
    <>
      <div className=" flex flex-wrap md:justify-center p-2x gap-3 h-auto mb-4 mt-4 md:mb-8 md:mt-8 w-full ">
        <button
          onClick={() => setActiveCategory("SEO")}
          className={`px-2 py-1 md:px-6 md:py-3 rounded-full md:font-semibold text-xs md:text-base transition-all duration-300 ${
            activeCategory === "SEO"
              ? "bg-orange-500 text-white shadow-lg scale-105"
              : "bg-white text-gray-700 hover:bg-orange-100 shadow-md hover:shadow-lg"
          }`}
        >
          SEO
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-2 py-1  md:px-6 md:py-3 rounded-full  md:font-semibold text-xs md:text-base transition-all duration-300 ${
              activeCategory === category
                ? "bg-orange-500 text-white shadow-lg scale-105"
                : "bg-white text-gray-700 hover:bg-orange-100 shadow-md hover:shadow-lg"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {activeCategory === "SEO" && <SEO />}
      {activeCategory === "Web Design Plans" && <WebDesignPlan />}
      {activeCategory === "Development Plans" && <DevelopmentPlan />}
      {activeCategory === "Software Development" && <SoftwareDevelopment />}

      {/* <SEO/> */}
    </>
  );
};

export default PlansSection;
