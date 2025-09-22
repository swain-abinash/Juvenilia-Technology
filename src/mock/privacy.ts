// src/mock/privacy.ts
export interface PrivacySection {
  id: string;
  title: string;
  content: string[];
}

export const privacyPolicy: PrivacySection[] = [
  {
    id: "commitment",
    title: "Our Commitment to Protecting Your Privacy",
    content: [
      "Juvenila Technology Pvt. Ltd. is committed to protecting your online privacy.",
      "This Privacy Statement communicates our policies on collecting, using, and disclosing personal information when you access the Service.",
      "Use of the Service shall be deemed as acceptance of this policy."
    ],
  },
  {
    id: "disclosing",
    title: "Disclosing Information",
    content: [
      "We do not disclose your personal information to third parties without your consent.",
      "Information may be used to maintain contact and update you about our services.",
      "If we decide to share data in the future, it will be only with your prior knowledge and consent."
    ],
  },
  {
    id: "protection",
    title: "Protecting Your Privacy",
    content: [
      "Juvenila Technology Pvt. Ltd. uses state-of-the-art marketing solutions to protect your online presence.",
      "We personalize measures to facilitate visibility and growth of your brand.",
    ],
  },
  {
    id: "why-choose",
    title: "Why Choose Juvenila Technology?",
    content: [
      "We follow a client-centric approach that ensures exceptional results.",
      "Our experts use the latest digital marketing methods, tailoring strategies to your business objectives.",
    ],
  },
  {
    id: "clients",
    title: "Client Approach",
    content: [
      "We value openness and measurable results in all collaborations.",
      "Client satisfaction and business success are always our top priority.",
    ],
  },
  {
    id: "contact",
    title: "Get in Touch",
    content: [
      "Would you like your brand’s digital presence to be taken to the next level?",
      "Contact Juvenila Technology today to book an appointment.",
    ],
  },
];
