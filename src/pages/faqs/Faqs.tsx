import React, { useState } from "react";
import { faqs } from "../../mock/faqs";
import type { FAQCategory } from "../../mock/faqs";
import { ChevronDown, ChevronUp, Search } from "lucide-react";

const FAQs: React.FC = () => {
  const [open, setOpen] = useState<{ category: string; index: number } | null>(
    null
  );
  const [search, setSearch] = useState("");

  const toggleFAQ = (category: string, index: number) => {
    if (open?.category === category && open.index === index) {
      setOpen(null);
    } else {
      setOpen({ category, index });
    }
  };

  const filteredFaqs: FAQCategory[] = faqs.map((cat) => ({
    ...cat,
    items: cat.items.filter(
      (f) =>
        f.q.toLowerCase().includes(search.toLowerCase()) ||
        f.a.toLowerCase().includes(search.toLowerCase())
    ),
  }));

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-black text-white py-16 text-center">
        <h1 className="text-5xl font-bold mb-2 text-orange-400/70">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-300 text-lg">Find quick answers to your queries</p>
      </div>

      {/* Search */}
      <div className="max-w-3xl mx-auto px-4 py-6">
        <div className="flex items-center border border-gray-700 rounded-lg px-3 py-2 shadow-sm bg-gray-900">
          <Search className="w-5 h-5 text-orange-400/70 mr-2" />
          <input
            type="text"
            placeholder="Search FAQs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 outline-none text-sm bg-gray-900 text-white placeholder-gray-400"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-4xl mx-auto px-4 pb-16 space-y-10">
        {filteredFaqs.map((cat, catIndex) =>
          cat.items.length > 0 ? (
            <div key={catIndex}>
              <h2 className="text-2xl font-semibold mb-4 text-orange-400/60 border-b border-gray-700 pb-2">
                {cat.category}
              </h2>
              <div className="space-y-3">
                {cat.items.map((faq, i) => (
                  <div
                    key={i}
                    className="border border-gray-700 rounded-lg shadow-md bg-gray-900 transition hover:shadow-gray-600"
                  >
                    <button
                      onClick={() => toggleFAQ(cat.category, i)}
                      className="w-full flex justify-between items-center px-4 py-3 text-left font-medium hover:bg-gray-800 transition"
                    >
                      <span>{faq.q}</span>
                      {open?.category === cat.category && open.index === i ? (
                        <ChevronUp className="w-5 h-5 text-orange-400/70" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-orange-400/70" />
                      )}
                    </button>
                    {open?.category === cat.category && open.index === i && (
                      <div className="px-4 pb-4 text-gray-300 text-sm leading-relaxed">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default FAQs;
