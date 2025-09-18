import React from 'react';
import type { Service } from '../../../mock/service.ts';


interface ServiceCardProps {
  service: Service;
  onClick: (serviceId: string) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onClick }) => {
  return (
    <div
      onClick={() => onClick(service.id)}
      className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-orange-500 transform hover:-translate-y-2 hover:scale-105 relative overflow-hidden"
    >
      {/* Card Header */}
      <div className="p-6 border-b border-gray-100 group-hover:border-orange-100 transition-colors duration-300">
        <div className="flex items-center justify-between mb-4">
          <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
            {service.icon}
          </div>
          <span className="px-3 py-1 bg-orange-100 text-orange-800 text-xs font-medium rounded-full group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
            {service.category}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300 mb-2">
          {service.title}
        </h3>
        
        <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
          {service.shortDescription}
        </p>
      </div>

      {/* Card Body */}
      <div className="p-6">
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-800 mb-2">Key Benefits:</h4>
          <ul className="space-y-1">
            {service.benefits.slice(0, 3).map((benefit, index) => (
              <li key={index} className="text-xs text-gray-600 flex items-start">
                <span className="text-orange-500 mr-2 group-hover:text-orange-600 transition-colors duration-300">•</span>
                {benefit}
              </li>
            ))}
            {service.benefits.length > 3 && (
              <li className="text-xs text-orange-500 font-medium group-hover:text-orange-600 transition-colors duration-300">
                +{service.benefits.length - 3} more benefits
              </li>
            )}
          </ul>
        </div>

        {/* Call to Action */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 group-hover:border-orange-100 transition-colors duration-300">
          <span className="text-sm font-medium text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
            Learn More
          </span>
          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center group-hover:bg-orange-600 transition-all duration-300 transform group-hover:scale-110">
            <svg 
              className="w-4 h-4 text-white transform group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Hover Overlay Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 to-orange-600/0 group-hover:from-orange-500/5 group-hover:to-orange-600/5 rounded-xl transition-all duration-300 pointer-events-none"></div>
    </div>
  );
};

export default ServiceCard;