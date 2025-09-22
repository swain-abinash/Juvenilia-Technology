import React from "react";
import { termsAndConditions } from "../../mock/terms";
import type { TermSection } from "../../mock/terms";

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <main className="flex-1 max-w-5xl mx-auto px-6 py-16 space-y-12">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-orange-400 tracking-wider">
            Terms & Conditions
          </h1>
          <p className="mt-4 text-gray-300 text-lg">
            Please read these terms carefully before using our services.
          </p>
        </header>

        {/* Terms Sections */}
        <div className="space-y-10">
          {termsAndConditions.map((section: TermSection) => (
            <section
              key={section.id}
              id={section.id}
              className="bg-gray-900 rounded-xl border-l-4 border-orange-500 shadow-lg p-8 hover:shadow-orange-600 transition duration-300"
            >
              <h2 className="text-2xl font-bold text-orange-400 mb-4">
                {section.title}
              </h2>
              <div className="text-gray-200 text-base leading-relaxed space-y-3">
                {section.content.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Terms;
