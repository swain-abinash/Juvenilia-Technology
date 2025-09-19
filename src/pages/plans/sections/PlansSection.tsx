import React, { useState } from 'react';
import { planData } from '../../../mock/plan';

const PlansSection: React.FC = () => {
  const { plans } = planData;
  const [openAccordion, setOpenAccordion] = useState<string | null>("SERVICES");

  // Define accordion sections based on Excel headers (yellow rows)
  const accordionSections = [
    {
      title: "SERVICES",
      items: ["Keywords","Website Analysis ", "Competitor Analysis", "Keywrords Research"]
    },
    {
      title: "On Page Optimization", 
      items: ["Meta Titles ", "Meta Description", "Page Title", "Page Speed", "Broken Link", "404 Error Page", "Google Analytics Set up", "Google Webmaster Tool Set up", "XML Sitemap", "Robots.txt", "HTML Validation", "CSS Validation", "Mobile Responsive", "Schema Markup", "Optimize Images", "Page Indexing", "Optimiza Alt Tags", "Duplicate Content"]
    },
    {
      title: "Content Marketing",
      items: ["Articles per Month"]
    },
    {
      title: "Off Page",
      items: ["Social Bookmarking", "Blog Directory Submission", "Article Submission", "Video Submission", "Image Submission", "Infographics Submission", "Document Sharing", "Web2.0 Submission", "Guest Blogging", "Blog Commenting ", "Classified Ads Posting"]
    },
    {
      title: "Social Marketing",
      items: ["Facebook", "Instagram", "X", "LinkedIn", "YouTube"]
    },
    {
      title: "SEO Report",
      items: ["Reporting"]
    },
    {
      title: "Minimum Contract Duration",
      items: ["Email", "WhatsApp", "Zoom ", "Google meet "]
    }
  ];

  const getValue = (plan: any, item: string) => {
    if (item === 'Keywords') {
      return plan.keywords;
    }
    return plan[item];
  };

  const renderValue = (value: any, planName: string) => {
    if (value === 'Yes') {
      return (
        <div className="flex justify-center">
          <svg 
            className={`w-5 h-5 ${
              planName === 'PREMIUM' ? 'text-orange-500' : 'text-gray-400'
            }`} 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
      );
    } else if (value === 'No') {
      return (
        <div className="flex justify-center">
          <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
      );
    } else if (typeof value === 'number') {
      return (
        <div className="text-center text-black font-medium">
          {value}
        </div>
      );
    } else {
      return (
        <div className="text-center text-black font-medium">
          {value}
        </div>
      );
    }
  };

  const toggleAccordion = (title: string) => {
    // Don't close if already open - just keep it open
    if (openAccordion !== title) {
      setOpenAccordion(title);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Layout - Two Column */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Side - Header and Contact */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              {/* Main Header */}
              <div className="mb-8">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight mb-4">
                  GENERATE LEADS ONLINE
                </h1>
                <p className="text-base sm:text-lg text-black font-medium">
                  THAT WORKS FOR YOUR BUSINESS
                </p>
              </div>

              {/* Contact Button */}
              <div className="mb-8">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg flex items-center gap-3 transition-colors duration-200 shadow-lg w-full sm:w-auto">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  9818888064
                </button>
              </div>

              {/* Services List with Accordion */}
              <div className="space-y-2">
                {accordionSections.map((section, index) => (
                  <div key={index} className="border-b border-gray-200 pb-2">
                    <button
                      onClick={() => toggleAccordion(section.title)}
                      className="w-full flex items-center justify-between text-left py-2 hover:bg-gray-50 transition-colors duration-200"
                    >
                      <span className="text-black font-medium text-sm sm:text-base">{section.title}</span>
                      {openAccordion === section.title ? (
                        <svg 
                          className="w-4 h-4 sm:w-5 sm:h-5 text-black" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                      ) : (
                        <svg 
                          className="w-4 h-4 sm:w-5 sm:h-5 text-black" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      )}
                    </button>
                    
                    {/* Features under each accordion */}
                    {openAccordion === section.title && (
                      <div className="mt-3">
                        <div className="space-y-2">
                          {section.items.map((item, itemIndex) => (
                            <div key={itemIndex} className="text-sm text-gray-700 text-left">
                              • {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Plans Comparison */}
          <div className="lg:col-span-2">
            {/* Plans Header */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mb-6">
              {plans.map((plan, index) => (
                <div 
                  key={index}
                  className={`text-center p-3 sm:p-4 rounded-lg ${
                    plan.name === 'PREMIUM' 
                      ? 'bg-orange-500 text-white' 
                      : 'bg-gray-100 text-black'
                  }`}
                >
                  <h3 className="text-sm sm:text-lg font-bold mb-1 sm:mb-2">{plan.name}</h3>
                  <div className="text-xs sm:text-sm mb-1">UPTO {plan.keywords} KEYWORDS</div>
                  <div className="text-xs sm:text-sm mb-1 sm:mb-2">6 MONTHS</div>
                  <button 
                    className={`w-full py-1 sm:py-2 px-2 sm:px-4 rounded text-xs sm:text-sm font-medium transition-colors duration-200 ${
                      plan.name === 'PREMIUM'
                        ? 'bg-white text-orange-500 hover:bg-gray-100'
                        : 'bg-gray-600 text-white hover:bg-gray-700'
                    }`}
                  >
                    Buy Now
                  </button>
                </div>
              ))}
            </div>

            {/* Features Table - Show only when accordion is open */}
            {openAccordion && (
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                {/* Features Table */}
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50">
                        {plans.map((plan, index) => (
                          <th 
                            key={index} 
                            className={`px-4 py-3 text-center text-sm font-medium ${
                              plan.name === 'PREMIUM' 
                                ? 'bg-orange-500 text-white' 
                                : 'text-gray-700'
                            }`}
                          >
                            {plan.name}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {accordionSections
                        .find(section => section.title === openAccordion)
                        ?.items.map((item, itemIndex) => (
                        <tr key={itemIndex} className="hover:bg-gray-50">
                          {plans.map((plan, planIndex) => (
                            <td 
                              key={planIndex} 
                              className={`px-4 py-3 text-center ${
                                plan.name === 'PREMIUM' 
                                  ? 'bg-orange-50' 
                                  : ''
                              }`}
                            >
                              {renderValue(getValue(plan, item), plan.name)}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Bottom Buy Now Buttons */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-gray-50">
                  {plans.map((plan, index) => (
                    <div key={index} className="text-center">
                      {/* <div className="mb-2">
                        <h4 className="font-semibold text-black">{plan.name}</h4>
                        <div className="text-sm text-gray-600">UPTO {plan.keywords} KEYWORDS</div>
                        <div className="text-sm text-gray-600">6 MONTHS</div>
                      </div> */}
                      <button 
                        className={`w-full py-2 px-4 rounded text-sm font-medium transition-colors duration-200 ${
                          plan.name === 'PREMIUM'
                            ? 'bg-orange-500 text-white hover:bg-orange-600'
                            : 'bg-gray-600 text-white hover:bg-gray-700'
                        }`}
                      >
                        Buy Now
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlansSection;