import React from 'react'
import { Link } from "react-router-dom";
import { FaHandHoldingUsd } from 'react-icons/fa'

const InvestorButton = () => {
  return (
    <div className="animate-float inline-block ">
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 opacity-20 blur-md animate-pulse"></div>

  <Link
    to="/payment"
    className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 text-white font-semibold transition-all duration-500 shadow-lg hover:shadow-orange-500/50 hover:scale-105 relative overflow-hidden group w-full sm:w-auto justify-center"
  >
    <FaHandHoldingUsd className="text-sm md:text-base" />
    <span className="relative z-10 truncate">Become an Investor</span>
    <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
  </Link>
</div>

  )
}

export default InvestorButton