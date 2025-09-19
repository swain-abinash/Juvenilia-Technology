import React, { useState } from 'react';

interface PlanAccordionProps {
  title: string;
  items: string[];
  plans: any[];
  isOpen?: boolean;
}

const PlanAccordion: React.FC<PlanAccordionProps> = ({ 
  title, 
  items, 
  plans, 
  isOpen = false 
}) => {
  const [isExpanded, setIsExpanded] = useState(isOpen);

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
              planName === 'POPULAR' ? 'text-orange-500' : 'text-gray-400'
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

  return (
    <div className="border border-gray-200 rounded-lg mb-4">
      <button
        className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-inset transition-colors duration-200"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-black">{title}</h3>
          <div className="flex items-center">
            {isExpanded ? (
              <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            )}
          </div>
        </div>
      </button>
      
      {isExpanded && (
        <div className="border-t border-gray-200">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Features</th>
                  {plans.map((plan, index) => (
                    <th 
                      key={index} 
                      className={`px-4 py-3 text-center text-sm font-medium ${
                        plan.name === 'POPULAR' 
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
                {items.map((item, itemIndex) => (
                  <tr key={itemIndex} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">
                      {item}
                    </td>
                    {plans.map((plan, planIndex) => (
                      <td 
                        key={planIndex} 
                        className={`px-4 py-3 text-center ${
                          plan.name === 'POPULAR' 
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
        </div>
      )}
    </div>
  );
};

export default PlanAccordion;