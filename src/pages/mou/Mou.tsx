import React from 'react';
import { mouData } from '../../mock/mou';
import { MouHero } from '../../components/common/mou/MouHero';
import { MouBenefits } from '../../components/common/mou/MouBenefits';
import { MouDetails } from '../../components/common/mou/MouDetails';
import { MouContactCard } from '../../components/common/mou/MouContactCard';
import { SectionTitle } from '../../components/common/about/SectionTitle';


const MouPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-black text-white">
            <MouHero title={mouData.pageTitle} subtitle={mouData.subtitle} />


            <main className="max-w-6xl mx-auto px-6 -mt-12">
                {/* Intro + CTA */}
                <section className="bg-gradient-to-b from-black/80 via-black/70 to-black/60 p-8 rounded-2xl border border-gray-800 shadow-lg">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                        <div className="md:col-span-2">
                            <SectionTitle title="About this MoU" subtitle={mouData.intro} />
                            <p className="text-gray-200 leading-relaxed">{mouData.intro}</p>


                            <div className="mt-6">
                                <h4 className="text-lg font-semibold text-white mb-3">Key Benefits for Students</h4>
                                <ul className="list-inside list-disc text-gray-200 space-y-2">
                                    {mouData.benefits.map((b, i) => (
                                        <li key={i}>{b}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>


                        <div>
                            <MouContactCard person={mouData.contact.person} email={mouData.contact.email} phone={mouData.contact.phone} />
                        </div>
                    </div>
                </section>


                {/* Benefits area (visual) */}
                <MouBenefits benefits={mouData.benefits} />


                {/* Details cards */}
                <MouDetails items={mouData.details} />


                {/* Footer CTA */}
                <section className="py-12">
                    <div className="bg-orange-500 rounded-2xl p-8 text-black font-semibold text-center">
                        <p>Interested in partnering with Juvenilia Technology? Reach out to our Partnerships Team at <a href={`mailto:${mouData.contact.email}`} className="underline">{mouData.contact.email}</a></p>
                    </div>
                </section>
            </main>


            <footer className="py-8">
                <div className="max-w-6xl mx-auto px-6 text-sm text-gray-400 text-center">© {new Date().getFullYear()} Juvenilia Technology. All rights reserved.</div>
            </footer>
        </div>
    );
};


export default MouPage;