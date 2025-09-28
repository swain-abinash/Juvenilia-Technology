import React from "react";
import { User } from "lucide-react";
import { aboutData } from "../../../mock/aboutData";
import { SectionTitle } from "./SectionTitle";
import { AnimatedCard } from "./AnimatedCard";

export const Leadership: React.FC = () => {
  const leaders = aboutData.leadership;

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Meet Our Leaders" subtitle="Leadership" />

        <div className="space-y-10">
          {Array.from({ length: Math.ceil(leaders.length / 3) }).map((_, row) => {
            const start = row * 3;
            const rowItems = leaders.slice(start, start + 3);

            // For 5 items → last row has 2 items, center them
            const isLastRow = row === Math.floor(leaders.length / 3);
            const shouldCenter =
              (leaders.length % 3 !== 0 && isLastRow) || rowItems.length < 3;

            return (
              <div
                key={row}
                className={`grid gap-8 ${shouldCenter
                    ? "grid-cols-1 sm:grid-cols-2 justify-center place-items-center"
                    : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                  }`}
              >
                {rowItems.map((leader, index) => (
                  <AnimatedCard key={index} delay={(start + index) * 0.1}>
                    <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-orange-400/20 hover:border-orange-400/40 transition-all w-full max-w-sm">
                      <div className="absolute inset-0 bg-orange-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                      <div className="relative">
                        {/* <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 p-1">
                          <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                            {leader.image ? (
                              <img
                                src={leader.image}
                                alt={leader.name}
                                className="w-full h-full object-cover rounded-full"
                              />
                            ) : (
                              <User className="w-12 h-12 text-orange-400" />
                            )}
                          </div>
                        </div> */}

<div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden group bg-white">
  {leader.image ? (
    <img
      src={leader.image}
      alt={leader.name}
      className="w-full h-full object-cover object-center transform transition-transform duration-300 group-hover:scale-110"
      style={{ objectFit: 'cover', objectPosition: 'center' }}
    />
  ) : (
    <div className="w-full h-full rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
      <User className="w-16 h-16 text-white" />
    </div>
  )}
</div>

                        <h3 className="text-xl font-bold text-white text-center mb-1">
                          {leader.name}
                        </h3>
                        <p className="text-orange-400 text-sm font-semibold text-center mb-3">
                          {leader.position}
                        </p>
                        <p className="text-white/70 text-sm text-center leading-relaxed">
                          {leader.bio}
                        </p>
                      </div>
                    </div>
                  </AnimatedCard>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
