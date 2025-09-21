import React from "react";

const Terms: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Terms of Use</h1>
      <p className="text-gray-600 leading-relaxed mb-4">
        Welcome to our website. By accessing or using our services, you agree
        to comply with and be bound by these Terms of Use. Please read them
        carefully.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">1. Acceptance of Terms</h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        By accessing this site, you agree to our terms and conditions.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">2. Restrictions</h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        You may not copy, modify, distribute, sell, or lease any part of our
        services without prior written permission.
      </p>
    </div>
  );
};

export default Terms;
