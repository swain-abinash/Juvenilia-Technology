import React from "react";

const Privacy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-gray-600 leading-relaxed mb-4">
        We respect your privacy and are committed to protecting your personal
        data. This Privacy Policy explains how we collect, use, and safeguard
        your information.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">1. Data Collection</h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        We collect information that you provide directly and automatically
        through our services.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">2. Data Usage</h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        Your data is used to improve our services, communicate with you, and
        ensure security.
      </p>
    </div>
  );
};

export default Privacy;
