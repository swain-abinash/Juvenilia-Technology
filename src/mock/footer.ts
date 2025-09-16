export const footerData = {
  company: {
    name: 'JT',
    description:
      'Auctor blandit dolorem primis eius odit soluta molestie? Malesuada elementum aut doloremque labo.',
    socials: [
      { key: 'facebook', label: 'Facebook', href: 'https://facebook.com' },
      { key: 'twitter', label: 'Twitter', href: 'https://twitter.com' },
      { key: 'instagram', label: 'Instagram', href: 'https://instagram.com' },
      { key: 'youtube', label: 'YouTube', href: 'https://youtube.com' },
    ],
  },
  columns: [
    {
      title: 'Useful Links',
      links: [
        { label: 'About us', href: '/about' },
        { label: 'Careers', href: '/career' },
        { label: 'News & Articles', href: '/blogs' },
        { label: 'Legal Notice', href: '/legal' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Help Center', href: '/help' },
        { label: 'Contact Us', href: '/contact' },
        { label: 'FAQ', href: '/faq' },
        { label: 'Parent Community', href: '/community' },
      ],
    },
    {
      title: 'Contact Information',
      contacts: [
        { type: 'address', value: '3557 Derek Drive, Orlando, Florida' },
        { type: 'phone', value: '+1(456)657-887' },
        { type: 'email', value: 'info@domain.com' },
      ],
    },
  ],
  copyright: `Copyright © ${new Date().getFullYear()} JT. All rights reserved.`,
} as const


