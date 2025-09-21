import React from "react";

const Faqs: React.FC = () => {
  const faqs = [
    {
      q: "How do I create an account?",
      a: "Click on the signup button and follow the instructions."
    },
    {
      q: "How can I reset my password?",
      a: "Go to login, click on 'Forgot Password' and follow the steps."
    },
    {
      q: "Is my data secure?",
      a: "Yes, we use industry-standard security practices."
    },
    {
      q: "How do I contact support?",
      a: "You can reach us via the Contact page or email."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      <div className="space-y-6">
        {faqs.map((item, idx) => (
          <div key={idx}>
            <h2 className="text-lg font-semibold text-gray-800">{item.q}</h2>
            <p className="text-gray-600">{item.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
