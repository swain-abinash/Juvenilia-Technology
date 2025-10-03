export const footerData = {
  company: {
    name: "Juvenilia Technology Pvt. Ltd",
    description:
      "Juvenilia Technology describes a company that offers inventive Information Technology solutions. It is a company that takes the lead in digital innovation, offering tailored solutions that change the global impact of the business market since 2015.",
    socials: [
      { key: "facebook", label: "Facebook", href: "https://www.facebook.com/profile.php?id=61581051792812" },
      // { key: "instagram", label: "Instagram", href: "https://instagram.com" },
      { key: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/company/juveniliatechnology/" },
      { key: "x", label: "X", href: "https://x.com/JuveniliaTech" },
    ],
    logo: "/logo.png",
  },

  columns: [
    {
      title: "Short Links",
      links: [
        { label: "Products", href: "/products" },
        { label: "MOU", href: "/mou" },       
        { label: "News & Articles", href: "/news-article" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Terms of Use", href: "/terms" },
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Site Map", href: "/site-map" },
        { label: "FAQS", href: "/faqs" },
        { label: "Contact", href: "/contact" },
      ],
    },
  ],
  copyright: `Copyright © ${new Date().getFullYear()} JT. All rights reserved.`,
} as const;
