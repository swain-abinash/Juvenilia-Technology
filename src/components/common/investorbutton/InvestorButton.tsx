import React from "react";
import { Link } from "react-router-dom";
import { FaHandHoldingUsd } from "react-icons/fa";

const InvestorButton: React.FC = () => {
  return (
    <div className="relative inline-block group" style={{ animation: "slow-float 4s ease-in-out infinite" }}>
      {/* Embedded animation keyframes */}
      <style>
        {`
          @keyframes slow-float {
            0% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0); }
          }
        `}
      </style>

      {/* subtle glow behind the button */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 opacity-20 blur-md pointer-events-none"></div>

      <Link
        to="/payment"
        aria-label="Invest Now"
        className="flex items-center overflow-hidden h-14 w-14 group-hover:w-[200px] transition-[width] duration-500 ease-in-out 
                   bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 text-white font-semibold rounded-full 
                   shadow-lg hover:shadow-orange-500/50 relative"
      >
        {/* icon container - always visible */}
        <span className="flex items-center justify-center w-14 h-14 flex-shrink-0">
          <FaHandHoldingUsd className="text-2xl" />
        </span>

        {/* text - hidden until hover */}
        <span className="ml-[4px] pr-4 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-base">
          Become an Investor
        </span>

        {/* shiny sweep effect */}
        <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 pointer-events-none"></span>
      </Link>
    </div>
  );
};

export default InvestorButton;
