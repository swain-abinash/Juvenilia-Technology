import React, { useState } from "react";
import { accordionSections, planData } from "../../../mock/WebDesignPlan";
import { toggleAccordion } from "../../../utils/ToggleAccordian";
import { renderValue } from "../../../utils/RenderValue";
import { getValue } from "../../../utils/GetValue";
import { PayPalButtons } from "@paypal/react-paypal-js";

const WebDesignPlan = () => {
  const { plans } = planData;
  const [openAccordion, setOpenAccordion] = useState<string | null>("SERVICES");

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

              {/* Services List with Accordion */}
              <div className="space-y-2">
                {accordionSections.map((section, index) => (
                  <div key={index} className="border-b border-gray-200 pb-2">
                    <button
                      onClick={() =>
                        toggleAccordion(
                          section.title,
                          openAccordion,
                          setOpenAccordion
                        )
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
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20 12H4"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5 text-black"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                      )}
                    </button>

                    {/* Features under each accordion */}
                    {openAccordion === section.title && (
                      <div className="mt-3">
                        <div className="space-y-2">
                          {section.items.map((item, itemIndex) => (
                            <div
                              key={itemIndex}
                              className="text-sm text-gray-700 text-left"
                            >
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
            {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mb-6">
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
            </div> */}

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
                              plan.name === "PREMIUM"
                                ? "bg-orange-500 text-white"
                                : "text-gray-700"
                            }`}
                          >
                            {/* {plan.name} */}
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
                            {plans.map((plan, planIndex) => (
                              <td
                                key={planIndex}
                                className={`px-4 py-3 text-center ${
                                  plan.name === "PREMIUM" ? "bg-orange-50" : ""
                                }`}
                              >
                                {renderValue(getValue(plan, item), plan.name)}
                              </td>
                            ))}
                          </tr>
                        ))}
                      {/* 🔹 Row for PayPal Buttons */}
                      <tr>
                        {plans.map((plan: any, index) => (
                          <td key={index} className="px-4 py-3 text-center">
                            <div className="flex justify-center">
                              <form
                                action="https://www.paypal.com/cgi-bin/webscr"
                                method="post"
                                target="_top"
                              >
                                <input
                                  type="hidden"
                                  name="cmd"
                                  value="_s-xclick"
                                />
                                <input
                                  type="hidden"
                                  name="hosted_button_id"
                                  value={plan.value}
                                />
                                <input
                                  type="hidden"
                                  name="currency_code"
                                  value="USD"
                                />
                                <input
                                  type="image"
                                  src="https://www.paypalobjects.com/en_US/i/btn/btn_paynowCC_LG.gif"
                                  name="submit"
                                  title="PayPal - The safer, easier way to pay online!"
                                  alt="Buy Now"
                                />
                              </form>
                            </div>
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Bottom Buy Now Buttons */}
                {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-gray-50">
                  {plans.map((plan, index) => (
                    <div key={index} className="text-center">
                      <div className="mb-2">
                        <h4 className="font-semibold text-black">{plan.name}</h4>
                        <div className="text-sm text-gray-600">UPTO {plan.keywords} KEYWORDS</div>
                        <div className="text-sm text-gray-600">6 MONTHS</div>
                      </div>
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
                </div> */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDesignPlan;
