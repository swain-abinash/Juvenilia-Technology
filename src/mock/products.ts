// src/mock/products.ts
import jtCodingBabaImg from "../../public/logo.png";  // ✅ import image

export interface Product {
  id: number;
  name: string;
  description: string;
  features: string[];
  image: string;
  playstoreLink?: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "JT Coding Baba",
    description:
      "JT Coding Baba is an ed-tech platform offering personalized Java programming courses for beginners and professionals through its mobile app, 'Learn Java: JT Coding Baba'. The app provides tailor-made courses, live tutoring, progress tracking, and industry-relevant projects to help users learn Java, enhance their coding skills, and potentially receive certification and job referrals through the JT network.",
    features: [
      "Personalized Learning: Adapts to your needs with personalized study plans and progress tracking.",
      "Comprehensive Courses: Covers basics to advanced Java with live & recorded sessions.",
      "Live Interaction: IIT faculty and industry experts conducting live tutoring.",
      "Practical Experience: Hands-on industry-relevant projects.",
      "Career Support: Certifications and job referrals through JT network.",
      "User-Friendly Interface: Seamless experience with anytime, anywhere access.",
    ],
    image: jtCodingBabaImg, // ✅ assigned imported image
    playstoreLink:
      "https://play.google.com/store/apps/details?id=co.griffin.ujair&hl=en_IN",
  },
];
