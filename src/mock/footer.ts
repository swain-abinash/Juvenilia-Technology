export const footerData = {
  company: {
    name: 'Juvenilia Technology Pvt. Ltd.',
    description:
      'Juvenilia Technology describes a company that offers inventive Information Technology solutions. It is a company that takes the lead in digital innovation, offering tailored solutions that change the global impact of the business market since 2015.',
    socials: [
      { key: 'facebook', label: 'Facebook', href: 'https://facebook.com' },
      { key: 'instagram', label: 'Instagram', href: 'https://instagram.com' },
      { key: 'linkedin', label: 'LinkedIn', href: 'https://youtube.com' },
      { key: 'twitter', label: 'Twitter', href: 'https://twitter.com' },
    ],
    logo:"../assets/logo.png"
  },
  columns: [
    {
      title: 'Short Links',
      links: [
        { label: 'Products', href: '/products' },
        { label: 'MOU', href: '/mou' },
        { label: 'Blog', href: '/blogs' },
        { label: 'News & Articles', href: '/news' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Terms of Use', href: '/terms' },
        { label: 'Privacy Policy', href: '/privacypolicy' },
        { label: 'Helps', href: '/help' },
        { label: 'FAQS', href: '/faq' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    // {
    //   title: 'Contact Information',
    //   contacts: [
    //     { type: 'address', value: '3557 Derek Drive, Orlando, Florida' },
    //     { type: 'phone', value: '+1(456)657-887' },
    //     { type: 'email', value: 'info@domain.com' },
    //   ],
    // },
  ],
  copyright: `Copyright © ${new Date().getFullYear()} JT. All rights reserved.`,
} as const


