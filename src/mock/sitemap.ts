export type SiteMapItem = {
  label: string;
  href: string;
  children?: SiteMapItem[];
};

export type SiteMapSection = {
  title: string;
  items: SiteMapItem[];
};

// Centralized sitemap configuration for the site
// Add/edit links here to keep the Footer and Site Map page consistent
export const siteMap: SiteMapSection[] = [
  {
    title: 'Primary',
    items: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'Products', href: '/products' },
      { label: 'Plans', href: '/plans' },
      { label: 'MOU', href: '/mou' },
      { label: 'News & Articles', href: '/news-article' },
      { label: 'Career', href: '/career' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Support',
    items: [
      { label: 'Terms of Use', href: '/terms' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'FAQs', href: '/faqs' },
      // { label: 'Helps', href: '/helps' },
      { label: 'Site Map', href: '/site-map' },
    ],
  }
];


