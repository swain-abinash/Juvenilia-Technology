import React, { useState } from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import SectionTitle from '../ui/SectionTitle';
import type { HomeData } from '../../../types';
import { DownloadIcon } from '../../../components/Icons';
import SuccessModal from '../../../components/common/SuccessModal';

const FreeResources = ({ data }: { data: HomeData['resources'] }) => {
    const [form, setForm] = useState({ name: '', email: '', phone: '', website: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    
    const handleResourceDownload = async (title: string, link: string) => {
        try {
            // If a valid link is provided, try to fetch and force a download
            if (link && link !== '#') {
                const response = await fetch(link, { mode: 'cors' });
                if (!response.ok) throw new Error('Download failed');
                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                const safeName = title?.replace(/[^a-z0-9]+/gi, '_').toLowerCase() || 'download';
                // Try to preserve extension if present in link
                const extMatch = link.split('?')[0].split('#')[0].match(/\.[a-z0-9]+$/i);
                a.download = extMatch ? `${safeName}${extMatch[0]}` : `${safeName}.pdf`;
                document.body.appendChild(a);
                a.click();
                a.remove();
                window.URL.revokeObjectURL(url);
                return;
            }

            // Fallback: generate a simple text file with resource title
            const blob = new Blob([
                `${title}\n\nThanks for your interest! Please contact us for the latest version of this guide.`
            ], { type: 'text/plain;charset=utf-8' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            const safeName = title?.replace(/[^a-z0-9]+/gi, '_').toLowerCase() || 'download';
            a.download = `${safeName}.txt`;
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
        } catch (e) {
            // As a last resort, open the link (if any)
            if (link && link !== '#') {
                window.open(link, '_blank');
            }
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.phone || !form.website) return;
        setIsSubmitting(true);
        try {
            // Placeholder for future dynamic submission (API/Google Sheet/etc.)
            await new Promise((res) => setTimeout(res, 600));
            setSuccessMessage('Thank you! We will contact you within 24 hours.');
            setForm({ name: '', email: '', phone: '', website: '' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <SectionWrapper>
            <div className="bg-gray-900 p-8 md:p-12 rounded-2xl">
                <SectionTitle>{data.title}</SectionTitle>
                <p className="max-w-2xl mx-auto text-gray-300 mb-8 text-center">
                    Download our free guides, tools & insights to grow your business faster.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    {/* Left: existing resources list */}
                    <div>
                        {/* What you'll get from the audit */}
                        <div className="mb-8 bg-black rounded-lg border border-white/10 p-6">
                            <h4 className="text-xl font-bold text-white mb-3">What you'll get in the free audit</h4>
                            <ul className="space-y-2 text-gray-300 text-sm">
                                <li className="flex items-start gap-2"><span className="text-green-400 mt-[2px]">✔</span><span>Performance & Core Web Vitals (LCP, CLS, TBT) with score breakdown</span></li>
                                <li className="flex items-start gap-2"><span className="text-green-400 mt-[2px]">✔</span><span>SEO technical checks (metadata, headings, indexing, sitemap, robots)</span></li>
                                <li className="flex items-start gap-2"><span className="text-green-400 mt-[2px]">✔</span><span>Mobile UX & responsiveness findings with quick wins</span></li>
                                <li className="flex items-start gap-2"><span className="text-green-400 mt-[2px]">✔</span><span>Security basics (HTTPS, mixed content, outdated libs)</span></li>
                                <li className="flex items-start gap-2"><span className="text-green-400 mt-[2px]">✔</span><span>Accessibility highlights (contrast, alt text, landmarks)</span></li>
                                <li className="flex items-start gap-2"><span className="text-green-400 mt-[2px]">✔</span><span>Prioritized 7–10 step action plan for improvements</span></li>
                            </ul>
                            <p className="text-xs text-gray-400 mt-4">No spam. 100% free. A human expert reviews your site.</p>
                        </div>

                        {/* Existing resources list */}
                        <div className="space-y-4 mb-8">
                            {data.items.map((resource, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    onClick={() => handleResourceDownload(resource.title, resource.link)}
                                    className="group w-full text-left p-6 bg-black rounded-lg border border-white/10 hover:border-orange-500 transition-colors"
                                >
                                    <h4 className="text-lg font-bold text-white flex items-center gap-2">
                                        <DownloadIcon className="w-5 h-5 text-orange-500" />
                                        {resource.title}
                                    </h4>
                                    <p className="text-gray-400">{resource.description}</p>
                                </button>
                            ))}
                        </div>
                        <a href={data.cta.link} className="inline-block px-8 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all duration-300">
                            {data.cta.text}
                        </a>
                    </div>

                    {/* Right: Free Audit Form */}
                    <div className="bg-black rounded-xl border border-white/10 p-6 text-left">
                        <h3 className="text-2xl font-bold text-white mb-2">Free Resources</h3>
                        <p className="text-orange-400 mb-6">Get a Free Audit Report to check the health of your website</p>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm text-gray-300 mb-1 text-left">Name</label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={form.name}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    placeholder="Your name"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm text-gray-300 mb-1 text-left">Email Address</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    placeholder="you@example.com"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm text-gray-300 mb-1 text-left">Phone Number</label>
                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    value={form.phone}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    placeholder="+91 98765 43210"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="website" className="block text-sm text-gray-300 mb-1 text-left">Website</label>
                                <input
                                    id="website"
                                    name="website"
                                    type="url"
                                    value={form.website}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    placeholder="https://yourdomain.com"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-3 bg-orange-600 hover:bg-orange-700 disabled:opacity-60 text-white font-semibold rounded-lg"
                            >
                                {isSubmitting ? 'Submitting...' : 'Submit'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            {successMessage && (
                <SuccessModal
                    title="Thank you!"
                    successMessage={successMessage}
                    setSuccessMessage={setSuccessMessage}
                />
            )}
        </SectionWrapper>
    );
};

export default FreeResources;

