import React from 'react';
import { ChevronUp } from 'lucide-react';
import { useScrollToTop } from '../hooks/useScrollToTop';

const ScrollToTopButton = ({ threshold = 0.1, className = '' }) => {
  const { showScrollTop, scrollToTop } = useScrollToTop(threshold);

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-6 right-6 z-50 
        bg-gradient-to-r from-orange-500 to-orange-600 
        hover:from-orange-600 hover:to-orange-700 
        text-white p-4 rounded-full 
        shadow-lg hover:shadow-xl
        transition-all duration-300 ease-in-out
        transform hover:scale-110
        animate-float
        backdrop-blur-sm
        border border-orange-400/20
        group
        ${showScrollTop
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-8 pointer-events-none'
        } 
        ${className}
      `}
      aria-label="Scroll to top"
    >
      <ChevronUp className="w-6 h-6 transition-transform duration-200 group-hover:-translate-y-1" />
      
      {/* Pulse ring effect */}
      <div className="absolute inset-0 rounded-full bg-orange-400/30 animate-ping opacity-20"></div>
      
      {/* Subtle glow effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 opacity-20 blur-md animate-pulse"></div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        
        @keyframes gentleFloat {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          25% {
            transform: translateY(-4px) scale(1.02);
          }
          50% {
            transform: translateY(-6px) scale(1.05);
          }
          75% {
            transform: translateY(-3px) scale(1.02);
          }
        }
        
        .animate-float {
          animation: gentleFloat 3s ease-in-out infinite;
        }
        
        .animate-float:hover {
          animation-play-state: paused;
        }
      `}</style>
    </button>
  );
};

export default ScrollToTopButton;