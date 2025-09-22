import React from "react";
import { privacyPolicy } from "../../mock/privacy";
import type { PrivacySection } from "../../mock/privacy";

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Main Content */}
      <main className="flex-1 max-w-5xl mx-auto px-6 py-16 space-y-12">
        <h1 className="text-5xl font-bold mb-12 text-center text-orange-400 tracking-wide">
          Privacy Policy
        </h1>

        <div className="space-y-10">
          {privacyPolicy.map((section: PrivacySection) => (
            <section
              key={section.id}
              id={section.id}
              className="bg-gray-900 rounded-xl border-l-4 border-orange-500 shadow-lg p-8 hover:shadow-orange-600 transition duration-300"
            >
              <h2 className="text-2xl font-bold mb-4 text-orange-400">
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

export default Privacy;
