// src/mock/terms.ts

export interface TermSection {
  id: string;
  title: string;
  content: string[];
}

export const termsAndConditions: TermSection[] = [
  {
    id: "authorization",
    title: "Authorization",
    content: [
      "The Client engages the Service Provider as an independent contractor to perform account design and setup for the purchased Services.",
      "The Client grants the Service Provider permission to access their existing accounts through write permission and authorizes the Agent, Company, and Associates and Account Provider to grant access to the Service Provider for the Client's accounts and all other necessary login details and program access.",
      "The client grants the service provider permission to use their login credentials for accessing third-party accounts, which include licensed images, copyrighted text, technical information, and media content needed for service development."
    ]
  },
  {
    id: "links",
    title: "Links",
    content: [
      "According to this agreement, the Client has verified all links that they have provided for their Services.",
      "The Service Provider will not accept any liability for legal actions against the Client that stem from unapproved links that appear on the Client's account and Services."
    ]
  },
  {
    id: "media",
    title: "Graphics & Audio/Video Media",
    content: [
      "The Client will provide the Service Provider with all necessary graphics, audio and video media elements to complete the Services.",
      "The list contains audio and video content, together with images and photography, and scanning services."
    ]
  },
  {
    id: "third-party",
    title: "3rd Party Stock Photography, Audio, and Video",
    content: [
      "The Client needs to cover all expenses for obtaining third-party stock photography.",
      "The Client accepts total responsibility for all 3rd stock Photography and Audio and Video content that he delivers to the Service Provider through any delivery method.",
      "The Client will defend and protect the Service Provider and its subcontractors against all legal claims that stem from the provided 3rd Party Stock Photography and Audio and Video content."
    ]
  },
  {
    id: "file-delivery",
    title: "File Delivery",
    content: [
      "The Client must deliver all text and files in standard electronic formats, which include Microsoft Word, .jpg, .gif, .png, and .pdf.",
      "Users can send their submissions through email, CD, DVD, or an external USB drive.",
      "The Service Provider will need to pay extra fees when they have to get files through different methods."
    ]
  },
  {
    id: "payment",
    title: "Payment Terms / Workflow",
    content: [
      "The Client must pay the Service Provider at least the full amount of the Services according to the terms specified in the quotation or invoice.",
      "Design and development work will begin after the Service Provider receives all payments and obtains complete access to Client content.",
      "Payments can be made via PayPal, Credit Card, Bank Transfer, Money Order, or Cheque.",
      "The Service Provider holds the authority to remove web content if payment remains unpaid for 30 days following completion notification."
    ]
  },
  {
    id: "subscription",
    title: "Monthly Subscription Service Payment",
    content: [
      "The Client agrees to pay monthly fees in advance.",
      "The Service Provider can suspend monthly services if payments remain unpaid beyond 10 days after the due date."
    ]
  },
  {
    id: "copyright",
    title: "Copyrights and Trademarks",
    content: [
      "The Client guarantees all text, graphics, photos, designs, audios, videos, and trademarks sent to the Service Provider belong to the Client or have authorization.",
      "The Client assumes full responsibility for the content used during website development."
    ]
  },
  {
    id: "third-party-modifications",
    title: "Third Party Modifications",
    content: [
      "Clients often make independent modifications to their Services after design completion.",
      "The Client agrees to pay for repair work if modifications damage the Service Provider's work."
    ]
  },
  {
    id: "additional-expenses",
    title: "Additional Expenses",
    content: [
      "The Client must compensate the Service Provider for all essential expenses needed to finish development.",
      "This includes fonts, photography, audio, video content, software, third-party plugins, and online portals."
    ]
  },
  {
    id: "limited-liability",
    title: "Limited Liability",
    content: [
      "The Client ensures that submitted content does not involve abusive or unethical material.",
      "The Client indemnifies the Service Provider against claims arising from such content."
    ]
  },
  {
    id: "ownership",
    title: "Ownership",
    content: [
      "After paying for development, the Client owns all final work including graphics, designs, photos, source code, and programs.",
      "The Service Provider retains ownership until final payment is made."
    ]
  },
  {
    id: "nondisclosure",
    title: "Nondisclosure",
    content: [
      "The Service Provider and its subcontractors agree not to disclose Confidential Information during or after the term of this Agreement.",
      "The Client agrees to keep Service Provider information, including strategies and training material, confidential."
    ]
  }
];
