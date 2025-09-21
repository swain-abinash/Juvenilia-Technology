import type { HomeData } from '../types';
import { 
    CodeIcon, SmartphoneIcon, MegaphoneIcon, BriefcaseIcon, SearchIcon, PaletteIcon, 
    RocketLaunchIcon, HeadsetIcon, BanknoteIcon, HeartPulseIcon, ShoppingCartIcon, GraduationCapIcon 
} from '../components/Icons';

export const homeData: HomeData = {
  hero: {
    headline: "Innovating Technology, Empowering Businesses",
    subheadline: "We build digital solutions that help companies grow faster.",
    ctas: [
      { text: "Get Started", link: "#contact", type: "primary" },
      { text: "Contact Us", link: "#contact", type: "secondary" },
    ],
    images: [
      "https://placehold.co/1920x1080/000000/FFFFFF?text=Digital+Transformation",
      "https://placehold.co/1920x1080/1a1a1a/FFFFFF?text=Cloud+Solutions",
      "https://placehold.co/1920x1080/0a0a0a/FFFFFF?text=AI+Innovation"
    ]
  },
  aboutPreview: {
    intro: "Founded in 2015, Juvenilia Technologies Pvt Ltd has grown into one of India’s most trusted IT solution companies, delivering innovative digital solutions across industries.",
    cta: { text: "Learn More About Us", link: "/about" },
  },
  services: {
    title: "What We Do Best",
    items: [
      { icon: CodeIcon, title: "Web Development", description: "Creating responsive, high-performance websites for optimal user experience." },
      { icon: SmartphoneIcon, title: "App Development", description: "Building native and cross-platform mobile apps that engage your users." },
      { icon: MegaphoneIcon, title: "Digital Marketing", description: "Driving growth with data-driven strategies from SEO to social media." },
      { icon: BriefcaseIcon, title: "Software Solutions", description: "Developing custom software to streamline your business operations." },
    ],
    cta: { text: "View All Services", link: "/services" },
  },
  caseStudies: {
    title: "Success Stories",
    items: [
      { problem: "Low Conversions", solution: "AI-driven marketing automation", result: "Boosted revenue by 200% for an eCommerce brand." },
      { problem: "Inefficient Operations", solution: "Custom ERP software development", result: "Reduced manual workload by 40% for a manufacturing firm." },
      { problem: "Poor Mobile Experience", solution: "A new cross-platform mobile app", result: "Increased user engagement by 60% for a healthcare provider." },
    ],
    cta: { text: "View All Projects", link: "/projects" },
  },
  testimonials: {
      title: "What Our Clients Say",
      items: [
          { quote: "Juvenilia Technologies helped us scale with a seamless eCommerce solution. Highly recommend!", name: "Priya Sharma", company: "CEO, GlamCart", image: "https://placehold.co/100x100/orange/white?text=PS" },
          { quote: "Their digital marketing expertise is unmatched. We saw a tangible increase in leads within the first quarter.", name: "Ankit Singh", company: "Marketing Head, FinSecure", image: "https://placehold.co/100x100/orange/white?text=AS" },
          { quote: "The custom software they built for us has revolutionized our workflow. An incredible team to work with.", name: "Meera Desai", company: "COO, HealthPlus", image: "https://placehold.co/100x100/orange/white?text=MD" },
      ]
  },
  clients: {
      title: "Trusted By",
      logos: [
          { src: "https://placehold.co/150x60/ffffff/black?text=ClientA", alt: "Client A" },
          { src: "https://placehold.co/150x60/ffffff/black?text=ClientB", alt: "Client B" },
          { src: "https://placehold.co/150x60/ffffff/black?text=ClientC", alt: "Client C" },
          { src: "https://placehold.co/150x60/ffffff/black?text=ClientD", alt: "Client D" },
          { src: "https://placehold.co/150x60/ffffff/black?text=ClientE", alt: "Client E" },
          { src: "https://placehold.co/150x60/ffffff/black?text=ClientF", alt: "Client F" },
      ]
  },
  stats: {
      items: [
          { value: 100, label: "Projects Delivered", suffix: "+" },
          { value: 10, label: "Countries Served", suffix: "+" },
          { value: 50, label: "Experts Onboard", suffix: "+" },
      ]
  },
  process: {
      title: "Our Process",
      items: [
          { icon: SearchIcon, title: "Discovery", description: "We start by understanding your goals, challenges, and vision." },
          { icon: PaletteIcon, title: "Design", description: "Crafting intuitive and beautiful user interfaces and experiences." },
          { icon: CodeIcon, title: "Development", description: "Bringing designs to life with clean, efficient, and scalable code." },
          { icon: RocketLaunchIcon, title: "Deployment", description: "Seamlessly launching your project for the world to see." },
          { icon: HeadsetIcon, title: "Support", description: "Providing ongoing support and maintenance to ensure success." },
      ]
  },
  techStack: {
      title: "Tech We Use",
      logos: [
          { src: "https://placehold.co/100x100/ffffff/black?text=React", alt: "React" },
          { src: "https://placehold.co/100x100/ffffff/black?text=Node.js", alt: "Node.js" },
          { src: "https://placehold.co/100x100/ffffff/black?text=AWS", alt: "AWS" },
          { src: "https://placehold.co/100x100/ffffff/black?text=MongoDB", alt: "MongoDB" },
          { src: "https://placehold.co/100x100/ffffff/black?text=Next.js", alt: "Next.js" },
          { src: "https://placehold.co/100x100/ffffff/black?text=GraphQL", alt: "GraphQL" },
          { src: "https://placehold.co/100x100/ffffff/black?text=Docker", alt: "Docker" },
          { src: "https://placehold.co/100x100/ffffff/black?text=Figma", alt: "Figma" },
      ]
  },
  industries: {
      title: "Industry-Specific Solutions",
      items: [
          { icon: BanknoteIcon, name: "Banking & Finance", image: "https://placehold.co/400x300/111/fff?text=Finance" },
          { icon: HeartPulseIcon, name: "Healthcare", image: "https://placehold.co/400x300/111/fff?text=Healthcare" },
          { icon: ShoppingCartIcon, name: "E-commerce", image: "https://placehold.co/400x300/111/fff?text=E-commerce" },
          { icon: GraduationCapIcon, name: "Education", image: "https://placehold.co/400x300/111/fff?text=Education" },
      ]
  },
  culture: {
      title: "Our Culture",
      quote: "At Juvenilia Tech, I get to innovate every day.",
      author: "Ranjan",
      role: "Director",
      videoUrl: "" // Add a video URL here if available
  },
  awards: {
      title: "Awards & Certifications",
      items: [
          { name: "Top IT Services Firm", issuer: "Clutch", year: "2023" },
          { name: "ISO 9001:2015", issuer: "ISO Certified", year: "" },
          { name: "Best Web Agency", issuer: "Web Awards", year: "2022" },
      ]
  },
  resources: {
      title: "Free Resources",
      items: [
          { title: "The Ultimate SEO Guide", description: "A comprehensive guide to dominate search rankings.", link: "#" },
          { title: "eCommerce Growth Playbook", description: "Strategies to scale your online store.", link: "#" },
      ],
      cta: { text: "Get Free Resources", link: "#" }
  },
  stickyCta: {
      text: "Want to transform your idea into reality? Let’s Talk.",
      buttonText: "Contact Us",
      link: "#contact"
  }
};

