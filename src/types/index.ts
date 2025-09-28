import React from 'react';

export type Cta = { text: string; link: string; type: 'primary' | 'secondary' };
export type Service = { icon: React.ComponentType<any>; title: string; description: string; };
export type CaseStudy = { problem: string; solution: string; result: string; };
export type Testimonial = { quote: string; name: string; company: string; image: string; };
export type Stat = { value: number; label: string; suffix: string; };
export type ProcessStep = { icon: React.ComponentType<any>; title: string; description: string; };
export type Industry = { icon: React.ComponentType<any>; name: string; image: string; };
export type Award = { 
  name: string; 
  issuer: string; 
  year: string; 
  image?: string; // ✅ optional image for award
};

export type Resource = { title: string; description: string; link: string; };

export interface HomeData {
  hero: { 
    headline: string; 
    subheadline: string; 
    ctas: Cta[];
    images: string[];
  };
  aboutPreview: { intro: string; cta: { text: string; link: string; }; };
  services: { title: string; items: Service[]; cta: { text: string; link: string; }; };
  caseStudies: { title: string; items: CaseStudy[]; cta: { text: string; link: string; }; };
  testimonials: { title: string; items: Testimonial[]; };
  clients: { title: string; logos: { src: string; alt: string; }[]; };
  stats: { items: Stat[]; };
  process: { title:string; items: ProcessStep[]; };
  techStack: { title: string; logos: { src: string; alt: string; }[]; };
  industries: { title: string; items: Industry[]; };
  culture: { title: string; quote: string; author: string; role: string; videoUrl: string; };
  awards: { title: string; items: Award[]; };
  resources: { title: string; items: Resource[]; cta: { text: string; link: string; }; };
  stickyCta: { text: string; buttonText: string; link: string; };
}


export interface CareerPageData {
  header: {
    title: string;
    subtitle: string;
    mainImage: string;
  };
  values: {
    icon: string;
    title: string;
    description: string;
  }[];
  benefits: {
    icon: string; // Using string for icon names from a library like lucide-react
    title: string;
    description: string;
  }[];
  openings: {
    id: number;
    title: string;
    department: string;
    location: string;
    type: 'Full-time' | 'Part-time' | 'Contract';
    description: string;
    responsibilities: string[];
    qualifications: string[];
  }[];
}

