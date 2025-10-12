import React, { useState } from "react";
import {
  accordionSections,
  planData,
} from "../../../mock/SOftwareDevelopMentPlan";
import { toggleAccordion } from "../../../utils/ToggleAccordian";
import { renderValue } from "../../../utils/RenderValue";
import { getValue } from "../../../utils/GetValue";
import { PayPalButtons } from "@paypal/react-paypal-js";

const SoftwareDevelopment = () => {
  const { plans } = planData;
  const [openAccordion, setOpenAccordion] = useState<string | null>("SERVICES");

  return (
  <div className="min-h-screen bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Main Layout - Two Column */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Side - Header and Accordion */}
        <div className="lg:col-span-1">
          <div className="sticky top-25">
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
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg font-semibold md:text-base text-xs flex items-center gap-3 transition-colors duration-200 shadow-lg w-full sm:w-auto">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M2.25 4.5A2.25 2.25 0 0 1 4.5 2.25h15a2.25 2.25 0 0 1 2.25 2.25v15a2.25 2.25 0 0 1-2.25 2.25h-15A2.25 2.25 0 0 1 2.25 19.5v-15zm2.28.75 7.47 5.33a.75.75 0 0 0 .9 0l7.47-5.33H4.53zM19.5 18V7.27l-6.75 4.82a2.25 2.25 0 0 1-2.5 0L3.5 7.27V18A.75.75 0 0 0 4.25 18h15a.75.75 0 0 0 .75-.75z" />
                </svg>
                support@juveniliatechnology.com
              </button>
            </div>

            {/* Accordion Sections */}
            <div className="space-y-2">
              {accordionSections.map((section, index) => (
                <div key={index} className="border-b border-gray-200 pb-2">
                  <button
                    onClick={() =>
                      toggleAccordion(section.title, openAccordion, setOpenAccordion)
                    }
                    className="w-full flex items-center justify-between text-left py-2 hover:bg-gray-50 transition-colors duration-200"
                  >
                    <span className="text-black font-medium text-sm sm:text-base">
                      {section.title}
                    </span>
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
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Table Comparison */}
        <div className="lg:col-span-2">
          {openAccordion && (
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="bg-gray-50 px-4 py-3 text-left font-semibold text-gray-800 text-sm">
                        {openAccordion}
                      </th>
                      {plans.map((plan, index) => (
                        <th key={index} className="px-4 py-3 text-center align-top">
                          <div
                              key={index}
                              className={`text-center p-3 sm:p-4 rounded-lg ${
                                plan.name === "PREMIUM"
                                  ? "bg-orange-500 text-white"
                                  : "bg-gray-100 text-black"
                              }`}
                            >
                              <h3 className="text-sm sm:text-lg font-bold mb-1 sm:mb-2">
                                {plan.name}
                              </h3>
                              <h3
                                className={`
                                     bg-orange-500
                                 text-white  p-2 rounded-2xl`}
                              >
                                Price:{plan.price}
                              </h3>
                            </div>
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody className="bg-white divide-y divide-gray-200">
                    {accordionSections
                      .find((section) => section.title === openAccordion)
                      ?.items.map((item, itemIndex) => (
                        <tr key={itemIndex} className="hover:bg-gray-50">
                          <td className="px-4 py-3 text-left font-medium text-gray-800">
                            {item}
                          </td>
                          {plans.map((plan, planIndex) => (
                            <td key={planIndex} className="px-4 py-3 text-center">
                              {renderValue(getValue(plan, item), plan.name)}
                            </td>
                          ))}
                        </tr>
                      ))}
                    <tr>
                      <td className="px-4 py-3 text-left font-medium text-gray-800">
                        Buy Now
                      </td>
                      {plans.map((plan, index) => (
                        <td key={index} className="px-4 py-3 text-center">
                          <form
                            action="https://www.paypal.com/cgi-bin/webscr"
                            method="post"
                            target="_top"
                          >
                            <input type="hidden" name="cmd" value="_s-xclick" />
                            <input
                              type="hidden"
                              name="hosted_button_id"
                              value={plan.value}
                            />
                            <input type="hidden" name="currency_code" value="USD" />
                            <input
                              type="image"
                              src="https://www.paypalobjects.com/en_US/i/btn/btn_paynowCC_LG.gif"
                              name="submit"
                              alt="Buy Now"
                            />
                          </form>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
);

};

export default SoftwareDevelopment;
