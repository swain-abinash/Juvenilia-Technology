export interface FAQ {
  q: string;
  a: string;
}

export interface FAQCategory {
  category: string;
  items: FAQ[];
}

export const faqs: FAQCategory[] = [
  {
    category: "SEO & Marketing",
    items: [
      {
        q: "How do I select the right keywords for my business?",
        a: "Our team conducts keyword research using industry tools and competitor analysis. We’ll share a curated keyword list with you for approval before we begin optimization."
      },
      {
        q: "Do you follow Google Webmaster Guidelines?",
        a: "Yes, we strictly adhere to Google Webmaster and Search Console guidelines to ensure white-hat SEO practices."
      },
      {
        q: "How long does SEO take to show results?",
        a: "SEO is a long-term process. Depending on competition and keyword difficulty, results may take 3 to 6 months to reflect in rankings."
      },
      {
        q: "What constitutes an effective social media strategy?",
        a: "A good strategy aligns with business goals such as brand awareness, engagement, lead generation, and conversions, backed by analytics and consistent content."
      },
      {
        q: "How do you measure campaign success?",
        a: "We measure performance using KPIs like traffic growth, engagement rate, conversions, keyword rankings, and ROI reports."
      }
    ]
  },
  {
    category: "Web Development",
    items: [
      {
        q: "What platforms do you build websites on?",
        a: "We work with WordPress, React, Laravel, Next.js, HTML/CSS/JS, and Shopify depending on your project needs."
      },
      {
        q: "Do I have to select a website design template?",
        a: "Not necessarily. We provide mockups and custom UI/UX designs based on your brand identity. You approve the final design before development begins."
      },
      {
        q: "Can I manage the website myself after launch?",
        a: "Yes. We build websites with easy-to-use CMS dashboards and provide training so you can manage content and updates independently."
      },
      {
        q: "Do you include SEO in your website builds?",
        a: "Yes, all websites come with basic on-page SEO optimization. For advanced SEO campaigns, we offer separate packages."
      },
      {
        q: "Do you offer logo and branding design?",
        a: "Yes, we provide professional logo design, branding, and style guidelines as an additional service."
      },
      {
        q: "Do you provide domain and hosting?",
        a: "We don’t directly sell hosting or domains, but we guide you to trusted providers and assist in setup."
      },
      {
        q: "Can you integrate third-party tools like CRMs or payment gateways?",
        a: "Yes, we specialize in integrating APIs, CRMs, ERP systems, and payment gateways such as Razorpay, PayPal, and Stripe."
      }
    ]
  },
  {
    category: "Maintenance & Support",
    items: [
      {
        q: "Do you provide ongoing maintenance?",
        a: "Yes, we offer flexible maintenance plans covering updates, bug fixes, backups, and performance optimization."
      },
      {
        q: "How long have you been in web development?",
        a: "Our team has been building websites and digital solutions since 2015, with expertise across industries."
      },
      {
        q: "Do I get full ownership of my website?",
        a: "Yes. Once the project is completed and payment is cleared, the website and all its assets are entirely yours."
      },
      {
        q: "Is my project data kept confidential?",
        a: "Yes, all projects are handled under strict confidentiality. NDAs can also be signed upon request."
      }
    ]
  },
  {
    category: "Payments & Policies",
    items: [
      {
        q: "What payment methods do you accept?",
        a: "We accept payments through PayPal, Razorpay, credit/debit cards, bank transfers, and UPI depending on client location."
      },
      {
        q: "Do you require advance payment?",
        a: "Yes. We usually work with a milestone-based payment system, with an upfront deposit to initiate the project."
      },
      {
        q: "What if I’m not satisfied with the services?",
        a: "We don’t offer refunds, but we ensure satisfaction through detailed project discussions, transparent updates, and revisions where necessary."
      }
    ]
  }
];
