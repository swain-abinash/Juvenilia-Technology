import React from "react";
import { privacyPolicy } from "../../mock/privacy";
import type { PrivacySection } from "../../mock/privacy";

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-white flex flex-col">
      {/* Header Section */}
      <header className="relative text-center py-20 overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-orange-400/5 to-transparent blur-3xl" />
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-orange-400 tracking-wide">
            Privacy Policy
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We value your privacy. Learn how we collect, use, and protect your
            personal information to keep your trust secure.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-5xl mx-auto px-6 pb-24 space-y-12">
        {privacyPolicy.map((section: PrivacySection, index: number) => (
          <section
            key={section.id}
            id={section.id}
            className={`relative rounded-2xl border border-gray-800 p-10 backdrop-blur-sm 
                       transition duration-300 bg-gray-900/70 hover:bg-gray-800/70
                       hover:shadow-[0_0_25px_rgba(255,165,0,0.2)] ${index % 2 === 0
                ? "hover:border-orange-400/60"
                : "hover:border-orange-300/60"
              }`}
          >
            {/* Accent bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500/60 to-transparent rounded-t-2xl" />

            <h2 className="text-3xl font-semibold mb-6 text-orange-400 tracking-wide">
              {section.title}
            </h2>

            <div className="text-gray-300 text-base leading-relaxed space-y-4">
              {section.content.map((para, i) => (
                <p key={i} className="transition duration-200 hover:text-gray-100">
                  {para}
                </p>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};

export default Privacy;

