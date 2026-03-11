export type StoreProduct = {
  slug: string;
  tag: string;
  title: string;
  desc: string;
  longDesc: string;
  price: string;
  badge: string;
  razorpayUrl?: string;
};

export const storeProducts: StoreProduct[] = [
  {
    slug: "influencer-collaboration-agreement-toolkit",
    tag: "Legal Toolkit",
    title: "Influencer Collaboration Agreement Toolkit",
    desc: "A complete toolkit for navigating brand-influencer agreements — covering contract structures, key clauses, IP ownership, and disclosure obligations.",
    longDesc:
      "This toolkit is designed for fashion brands, designers, creators, and marketing teams who collaborate with influencers and need clarity, protection, and a reliable contract framework. It helps you structure collaborations confidently, reduce misunderstandings, and protect your intellectual property, deliverables, and timelines.\n\nWhat you get:\n- A practical breakdown of the clauses that matter in influencer contracts\n- Guidance on deliverables, timelines, usage rights, and approvals\n- IP ownership + licensing concepts explained in a brand-friendly way\n- Disclosure and compliance pointers for sponsored content\n\nBest for: brands working with influencers, agencies, creators, and early-stage fashion businesses.",
    price: "₹999",
    badge: "Toolkit",
    razorpayUrl: "https://razorpay.me/@yourfashionlawguide?amount=hs5%2BhsUaIlsmW%2BfZKlAvnw%3D%3D",
  },
  {
    slug: "fashion-law-essential-pack",
    tag: "Educational Guide",
    title: "Fashion Law Essential Pack",
    desc: "A starter pack to help you protect your brand identity with core legal strategy — designed for designers and entrepreneurs building in fashion.",
    longDesc:
      "This essential pack is built for fashion founders and creatives who want a strong legal foundation early. It focuses on the most common risk areas—brand name protection, basic IP awareness, and proactive strategy—so you can build with confidence.\n\nWhat you get:\n- Clear guidance on trademarks, copyright, and design protection\n- Practical steps for protecting your brand assets\n- Common mistakes founders make (and how to avoid them)\n- A simple action plan to start building legal hygiene\n\nBest for: new fashion labels, designers, D2C brands, and entrepreneurs.",
    price: "₹799",
    badge: "Guide",
    razorpayUrl: "https://razorpay.me/@yourfashionlawguide?amount=ouka7pPo%2Fz198lsjyH%2BoeQ%3D%3D",
  },
  {
    slug: "fashion-intellectual-property-handbook",
    tag: "Book",
    title: "Fashion Intellectual Property Handbook",
    desc: "A comprehensive reference covering the full spectrum of IP as it applies to the fashion industry — from registration to enforcement and emerging tech.",
    longDesc:
      "A deeper, more comprehensive handbook for those who want to understand fashion IP end-to-end. This resource connects the legal concepts to real-world scenarios across design, branding, manufacturing, and digital fashion.\n\nWhat you get:\n- End-to-end coverage of fashion IP: trademark, copyright, design protection\n- Practical context: how IP plays out in lookalikes, collaborations, licensing\n- Enforcement basics and how to think about infringement\n- Emerging areas: tech, digital assets, and evolving brand protection challenges\n\nBest for: professionals, founders, students, and teams who want a comprehensive fashion IP reference.",
    price: "₹999",
    badge: "Book",
    razorpayUrl: "https://razorpay.me/@yourfashionlawguide?amount=hs5%2BhsUaIlsmW%2BfZKlAvnw%3D%3D",
  },
  {
    slug: "contract-drafting-resources",
    tag: "Contract Templates",
    title: "Contract Drafting Resources",
    desc: "Ready-to-use contract templates and drafting guides for common fashion industry agreements — manufacturing, licensing, collaborations, and more.",
    longDesc:
      "This set of drafting resources is designed to help you move faster without compromising on legal clarity. It’s built for fashion businesses that regularly deal with vendors, manufacturers, collaborators, and partners—and want reusable frameworks that can be adapted to real situations.\n\nWhat you get:\n- Drafting guidance for common fashion industry contracts\n- Structured templates you can adapt to your deals\n- Checklists for negotiation and due diligence\n- Common clause explanations (so you know what you’re signing)\n\nBest for: fashion businesses working with manufacturers, vendors, collaborators, and license partners.",
    price: "₹799",
    badge: "Templates",
    razorpayUrl: "https://razorpay.me/@yourfashionlawguide?amount=ouka7pPo%2Fz198lsjyH%2BoeQ%3D%3D",
  },
];

export function getStoreProductBySlug(slug: string) {
  return storeProducts.find((p) => p.slug === slug);
}
