import React from 'react';
import { siteMap } from '../../mock/sitemap';

const SiteMap: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold">Site Map</h1>
          <p className="text-gray-300 mt-3 max-w-3xl">
            A hierarchical overview of all pages and key anchors across the site.
          </p>
        </div>

        {/* Quick access chips */}
        <div className="flex flex-wrap gap-2 mb-10">
          {siteMap.flatMap((s) => s.items).slice(0, 10).map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-3 py-1 rounded-full bg-gray-800 text-gray-200 hover:bg-gray-700 hover:text-white border border-white/10 text-sm"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Hierarchical columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {siteMap.map((section) => (
            <div key={section.title} className="bg-gray-900/80 rounded-xl border border-white/10 p-6">
              <h2 className="text-xl font-semibold text-orange-500 mb-4">{section.title}</h2>
              <nav>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item.label} className="group">
                      <div className="flex items-start gap-3">
                        <span className="mt-1 inline-block w-2 h-2 rounded-full bg-orange-500 group-hover:scale-110 transition" />
                        <div>
                          <a href={item.href} className="text-white hover:text-orange-400 transition">
                            {item.label}
                          </a>
                          {item.children && item.children.length > 0 && (
                            <ul className="mt-2 pl-4 border-l border-white/10 space-y-2">
                              {item.children.map((child) => (
                                <li key={child.label} className="flex items-start gap-2">
                                  <span className="mt-[9px] inline-block w-1 h-1 rounded-full bg-gray-400" />
                                  <a href={child.href} className="text-gray-300 hover:text-orange-300 transition text-sm">
                                    {child.label}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          ))}
        </div>

        {/* Legend / Notes */}
        <div className="mt-12 text-sm text-gray-400">
          <p>
            Note: Items with bullets represent in-page anchors or secondary destinations. The order reflects navigation hierarchy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SiteMap;


