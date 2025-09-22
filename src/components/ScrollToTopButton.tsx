import React from 'react';
import { ChevronUp } from 'lucide-react';
import { useScrollToTop } from '../hooks/useScrollToTop';

const ScrollToTopButton = ({ threshold = 0.1, className = '' }) => {
  const { showScrollTop, scrollToTop } = useScrollToTop(threshold);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 ${
        showScrollTop 
          ? 'opacity-100 transform translate-y-0' 
          : 'opacity-0 transform translate-y-4 pointer-events-none'
      } ${className}`}
      aria-label="Scroll to top"
    >
      <ChevronUp className="w-6 h-6" />
    </button>
  );
};

export default ScrollToTopButton;