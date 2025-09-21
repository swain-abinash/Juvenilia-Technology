import React from "react";

const Helps: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Help & Support</h1>
      <p className="text-gray-600 leading-relaxed mb-4">
        Need assistance? We're here to help. Below are some common topics
        and resources you may find useful.
      </p>
      <ul className="list-disc pl-6 text-gray-600 space-y-2">
        <li>How to create an account</li>
        <li>Resetting your password</li>
        <li>Managing your profile settings</li>
        <li>Contacting customer support</li>
      </ul>
    </div>
  );
};

export default Helps;
