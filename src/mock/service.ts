export interface ServiceBenefit {
  title: string;
  description: string;
}

export interface ServiceFeature {
  title: string;
  items: string[];
}

export interface Service {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  whyChooseUs: {
    title: string;
    description: string;
    features: string[];
  };
  additionalInfo?: ServiceFeature[];
  icon: string;
}

export const services: Service[] = [
  // Digital Marketing Services
  {
    id: 'seo',
    title: 'Search Engine Optimization (SEO)',
    category: 'Digital Marketing',
    shortDescription: 'Boost your online visibility and rank higher on search engines',
    description: 'SEO is still more crucial for any business in the age of AI. When people search for your services and products online, it\'s clear that business owners want to be at the top of the page. By using SEO, you can now advertise your business on Google, Bing, and Yahoo! in a new way.',
    benefits: [
      'Top position on the search engine results page',
      'Boost in website traffic for our business website',
      'Better performance from a competitor',
      'Cost-Effective Marketing',
      'The ratio of conversion is up',
      'Customer trust increases',
      'Online Brand Credibility'
    ],
    whyChooseUs: {
      title: 'Why Choose JT for SEO Services?',
      description: 'Our belief is that we should only provide top-notch SEO services to businesses in order to gain long-term online visibility and growth.',
      features: [
        'Fully Result-oriented process',
        'Affordable SEO services',
        'Free Website analysis report',
        '24*6 Customer support'
      ]
    },
    icon: '🔍'
  },
  // Mobile App Development Services
  {
    id: 'android-app',
    title: 'Android App Development',
    category: 'Mobile App Development',
    shortDescription: 'High-quality Android apps with reliable performance and scalability',
    description: 'Our Android app development team of professionals already has the know-how of the respective fields, and they can perfectly exploit it for the best delivery of results. Juvenilia Technology is known for the quality services it provides. We put in a lot of work every time to ensure that the apps we create run smoothly and do not have downtime. After the release of your application in the Google Play Store, we take care of the update, resolve the bug, and constantly measure the performance.',
    benefits: [
      'Wider Market Reach',
      'Reduced Time to Market',
      'Amplified ROI Opportunity',
      'Compatibility with Various Devices',
      'Free and Open Source',
      'Advanced Security Features',
      'Loyal Community Support'
    ],
    whyChooseUs: {
      title: 'Why Choose JT for Android App Development?',
      description: 'We deliver robust, scalable Android apps using modern architectures and best practices, with continuous support after launch.',
      features: [
        'Experienced Android engineers',
        'Post-launch maintenance & updates',
        'Performance and reliability focused',
        'End-to-end delivery from design to deploy'
      ]
    },
    icon: '🤖'
  },
  {
    id: 'ios-app',
    title: 'iOS App Development',
    category: 'Mobile App Development',
    shortDescription: 'Premium iOS apps aligned with Apple ecosystem and UX standards',
    description: 'Our iOS App development team operates in accordance with typical professional methods, which are common in the process of creating iOS applications. The methodology of iOS development has always been essential in the generation of new, bright, and attractive ideas for the whole idea of innovation. We mix components of different web and mobile technologies for building our standard software, which is either isolated or dependent on the framework.',
    benefits: [
      'Quality User Experience of a High Standard',
      'Prominent Market Position',
      'Consistent User Retention Over Time',
      'Better Security',
      'More Rapid Development and Deployment',
      'Compatibility with Apple Ecosystem',
      'Regular Updates and Support'
    ],
    whyChooseUs: {
      title: 'Why Choose JT for iOS App Development?',
      description: 'We craft polished iOS apps that leverage Apple design guidelines and ecosystem capabilities for superior UX and performance.',
      features: [
        'Native Swift/SwiftUI expertise',
        'App Store submission guidance',
        'Security and privacy best practices',
        'Seamless integration with Apple services'
      ]
    },
    icon: '🍎'
  },
  {
    id: 'smo',
    title: 'Social Media Optimization (SMO)',
    category: 'Digital Marketing',
    shortDescription: 'Enhance your social media presence with data-driven strategies',
    description: 'In the age of social media, it is evident that business owners are eager to enhance their social presence by implementing an effective data-driven approach and best practices.',
    benefits: [
      'Define Business Goal',
      'Develop Brand Awareness',
      'Attract the audience',
      'Engage the Audience',
      'Increase the website traffic',
      'Create Interactive Content',
      'Content Amplification'
    ],
    whyChooseUs: {
      title: 'Why Choose JT for SMO Services?',
      description: 'By utilizing social media platforms, we can effectively promote your business and create brand value.',
      features: [
        'More visibility of your website',
        'Helps you get high traffic',
        'It gives you an improved ROI',
        'Useful for gaining quick popularity'
      ]
    },
    icon: '📱'
  },
  {
    id: 'ppc',
    title: 'Pay-Per-Click (PPC)',
    category: 'Digital Marketing',
    shortDescription: 'Get immediate exposure with targeted paid advertising campaigns',
    description: 'A paid search strategy, known as pay-per-click marketing, utilizes advertising to build brand awareness and gain immediate exposure from a specific audience segment.',
    benefits: [
      'Fast and Measurable results',
      'Immediate Impact',
      'Attract the Ideal People at the Right Time',
      'Pay Only When People Click',
      'Increase sales and Traffic',
      'Remarketing with PPC can help in enhancing Brand Recognition'
    ],
    whyChooseUs: {
      title: 'Why Choose JT for PPC Services?',
      description: 'PPC marketing is focused on establishing an online brand that can boost traffic and leads through paid advertising.',
      features: [
        'Google Ads',
        'Bing Ads',
        'Facebook & Instagram Marketing',
        'LinkedIn Marketing'
      ]
    },
    icon: '💰'
  },
  {
    id: 'content-marketing',
    title: 'Content Marketing',
    category: 'Digital Marketing',
    shortDescription: 'Engage customers with high-quality, conversion-driven content',
    description: 'By creating high-quality content, we can effectively engage customers and drive them to convert. Content is a powerful business model that helps businesses thrive.',
    benefits: [
      'Increase your brand visibility',
      'Improves brand awareness and recognition',
      'Referral traffic to your business',
      'Conversion potential will increase',
      'Trust can only be established with content produced by your audience',
      'The success of content marketing leads to an increase in your social media followers',
      'Great Customer Relationships'
    ],
    whyChooseUs: {
      title: 'Why Choose Juvenilia Technology for Content Marketing?',
      description: 'A few essential approaches are necessary to ensure the success of Content Marketing.',
      features: [
        'Brand Evaluation',
        'Set Clear Aims and Goals',
        'Enhanced loyalty among customers leads to better outcomes',
        'Content-driven revenue'
      ]
    },
    icon: '✍️'
  },
  {
    id: 'local-seo',
    title: 'Local SEO',
    category: 'Digital Marketing',
    shortDescription: 'Capture more local business through relevant local searches',
    description: 'The strategy of utilizing your online presence to capture more business through relevant local searches on search engines is known as Local SEO.',
    benefits: [
      'Google My Business listing',
      'Keyword selection',
      'Local Link Building Strategy',
      'On-page SEO',
      'Local Landing page optimization',
      'Local SEO content marketing',
      'Target a specific audience'
    ],
    whyChooseUs: {
      title: 'Why Choose JT for Local SEO Services?',
      description: 'SEO can help you acquire leads, traffic, and sales for your local business.',
      features: [
        'Stronger local community outreach',
        'Optimized Google My Business listing',
        'Higher local SEO ranking',
        'More targeted website traffic'
      ]
    },
    icon: '📍'
  },
  // Website Design Services
  {
    id: 'static-website',
    title: 'Static Website Design',
    category: 'Web Design',
    shortDescription: 'Fast, secure, and cost-effective websites for consistent content',
    description: 'A static website is a website that serves content through arbitrary files composed of HTML, CSS, and JavaScript. A static website is the most suitable option for websites with consistent content and frequent changes, particularly for smaller sites with minimal content.',
    benefits: [
      'Fast Performance',
      'Requires fewer server resources',
      'Low Hosting costs',
      'Easier to secure',
      'Easy Deployment'
    ],
    whyChooseUs: {
      title: 'Why Choose JT for Static Website Design?',
      description: 'We provide efficient static website solutions that are perfect for businesses with consistent content needs.',
      features: [
        'Lightning-fast loading times',
        'Enhanced security',
        'Cost-effective hosting',
        'Easy maintenance'
      ]
    },
    icon: '🌐'
  },
  {
    id: 'dynamic-website',
    title: 'Dynamic Website Design',
    category: 'Web Design',
    shortDescription: 'Interactive websites that update content based on user behavior',
    description: 'Dynamic websites are those that update their content with each visit of a user. The updating is subject to a variety of factors such as demographics, time of day/day and location, as well as user interaction and data sources.',
    benefits: [
      'Higher Personalization',
      'Better manageability',
      'Increased functionality',
      'Good user experience',
      'SEO Friendly'
    ],
    whyChooseUs: {
      title: 'Why Choose JT for Dynamic Website Design?',
      description: 'We create dynamic websites that adapt to your users and business needs.',
      features: [
        'Personalized user experience',
        'Content management system',
        'Database integration',
        'Real-time updates'
      ]
    },
    icon: '⚡'
  },
  {
    id: 'responsive-website',
    title: 'Responsive Website Design',
    category: 'Web Design',
    shortDescription: 'Websites that work perfectly across all devices and screen sizes',
    description: 'Designed for a responsive website, web pages display and render information in the same manner across all screen sizes and devices. Rapid loading without any distortions is the primary benefit of responsive web design.',
    benefits: [
      'Improves user experience',
      'Improved Page Speed',
      'Increases mobile traffic',
      'Increase conversion rates',
      'Improved SEO ranking'
    ],
    whyChooseUs: {
      title: 'Why Choose JT for Responsive Website Design?',
      description: 'We ensure your website looks and functions perfectly on every device.',
      features: [
        'Mobile-first approach',
        'Cross-browser compatibility',
        'Optimized performance',
        'Future-proof design'
      ]
    },
    icon: '📱'
  },
  {
    id: 'custom-website',
    title: 'Custom Website Design',
    category: 'Web Design',
    shortDescription: 'Unique websites tailored to your brand identity and requirements',
    description: 'Custom website development just means the process of building web solutions that specifically match the requirements, objectives, or brand identity of a client.',
    benefits: [
      'Set Your Brand Apart from the Crowd',
      'Complete Ownership',
      'Quick Page Loading',
      'Scalability and Flexibility',
      'User-Friendly Interface'
    ],
    whyChooseUs: {
      title: 'Why Choose JT for Custom Website Design?',
      description: 'We create unique websites that perfectly represent your brand and meet your specific needs.',
      features: [
        'Tailored to your brand',
        'Unique functionality',
        'Scalable architecture',
        'Full ownership rights'
      ]
    },
    icon: '🎨'
  },
  {
    id: 'landing-page',
    title: 'Landing Page Design',
    category: 'Web Design',
    shortDescription: 'High-converting landing pages designed for specific campaigns',
    description: 'To engage people in a task or action, landing page design involves creating essentially one web page. The landing page is the link between your marketing campaigns and measurable conversions.',
    benefits: [
      'Targeted conversion',
      'Effective lead generation',
      'Enhancing User Experience',
      'Increased credibility',
      'Building Brand Identity'
    ],
    whyChooseUs: {
      title: 'Why Choose JT for Landing Page Design?',
      description: 'We create landing pages that convert visitors into customers effectively.',
      features: [
        'Conversion-focused design',
        'A/B testing ready',
        'Analytics integration',
        'Mobile optimized'
      ]
    },
    icon: '🎯'
  },
  // Website Development Services
  {
    id: 'wordpress-development',
    title: 'WordPress Website Development',
    category: 'Web Development',
    shortDescription: 'Flexible and user-friendly WordPress websites for all business sizes',
    description: 'Millions of websites worldwide have relied on the open-source platform in recent years. With a strong emphasis on adaptability and user-friendliness, it is an excellent solution for companies of all sizes.',
    benefits: [
      'SEO-Friendly',
      'Responsive Design',
      'User Management',
      'Content Management',
      'Simplicity of Operation',
      'Easy social media integration',
      'Easy theme system'
    ],
    whyChooseUs: {
      title: 'Why Choose JT for WordPress Development?',
      description: 'We leverage WordPress\'s flexibility to create powerful, manageable websites.',
      features: [
        'Custom theme development',
        'Plugin integration',
        'Performance optimization',
        'Security hardening'
      ]
    },
    icon: '💻'
  },
  {
    id: 'software-development',
    title: 'Software Development',
    category: 'Web Development',
    shortDescription: 'Comprehensive software solutions that drive digital transformation and business growth.',
    description: 'Software development is the process of creating software programs or systems, which includes the phases of designing, coding, testing, documenting, and maintaining. It is a core function that most companies are gradually integrating into their organizational structure, playing a vital role in digital transformation — the application of technology to improve business strategy, products and services, and business processes.',
    benefits: [
      'Increases Efficiency',
      'Improves Customer Experience',
      'Enables Business Expansion',
      'Ensures More Effective Data Management',
      'Gives You an Edge Over Competitors',
      'Saves Money in the Long Run',
      'Customer Support and Maintenance'
    ],
    whyChooseUs: {
      title: 'Why Choose JT for Software Development?',
      description: 'We offer custom software development as a solution to unique challenges and goals, making it a worthwhile investment for any organization, large or small.',
      features: [
        'Distinct Custom-Made Solutions',
        'Openness, Scalability, and Stability',
        'Concentrated Business Plan',
        'Improved Security'
      ]
    },
     icon: '⚙️'
  }
  ,
  {
    id: 'ecommerce-development',
    title: 'E-Commerce Website Development',
    category: 'Web Development',
    shortDescription: 'Complete e-commerce solutions for online businesses',
    description: 'E-commerce web development is the creation of a website that allows e-commerce companies to sell and promote their products online, including frontend and backend development for checkout systems, payment processing, and site security.',
    benefits: [
      'Easy Navigation & Search',
      'Mobile-friendly Design',
      'Detailed Product Descriptions',
      'Personalization Features',
      'Streamlined Checkout Process',
      'Real-Time Inventory Updates',
      'Pricing & Shipping Information'
    ],
    whyChooseUs: {
      title: 'Why Choose JT for E-Commerce Development?',
      description: 'We create comprehensive e-commerce solutions that drive sales and growth.',
      features: [
        'Secure payment integration',
        'Inventory management',
        'Multi-platform compatibility',
        'Analytics and reporting'
      ]
    },
    icon: '🛒'
  }
];

export const getServicesByCategory = () => {
  const categories: { [key: string]: Service[] } = {};
  services.forEach(service => {
    if (!categories[service.category]) {
      categories[service.category] = [];
    }
    categories[service.category].push(service);
  });
  return categories;
};

export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id);
};

export const getAllServices = (): Service[] => {
  return services;
};

export const getServicesByIds = (ids: string[]): Service[] => {
  return services.filter(service => ids.includes(service.id));
};

export const searchServices = (query: string): Service[] => {
  const searchTerm = query.toLowerCase().trim();
  if (!searchTerm) return services;

  return services.filter(service =>
    service.title.toLowerCase().includes(searchTerm) ||
    service.category.toLowerCase().includes(searchTerm) ||
    service.shortDescription.toLowerCase().includes(searchTerm) ||
    service.description.toLowerCase().includes(searchTerm) ||
    service.benefits.some(benefit => benefit.toLowerCase().includes(searchTerm))
  );
};

// Helper function to get related services (same category, excluding current service)
export const getRelatedServices = (currentServiceId: string, limit: number = 3): Service[] => {
  const currentService = getServiceById(currentServiceId);
  if (!currentService) return [];

  const relatedServices = services.filter(service =>
    service.category === currentService.category &&
    service.id !== currentServiceId
  );

  return relatedServices.slice(0, limit);
};