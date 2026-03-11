import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { LuxuryButton } from "@/components/ui/LuxuryButton";
import { SEO } from "@/components/SEO";
import { CheckCircle2, FileText, Users, Package, Store, Handshake, AlertTriangle, Scale } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };

const contractTypes = [
  {
    icon: Package,
    title: "Manufacturing & Supply Agreements",
    desc: "Comprehensive contracts covering production quality, timelines, payment terms, and intellectual property rights for manufacturing partnerships.",
    features: ["Quality control standards", "Delivery timelines", "Payment structures", "IP ownership clauses", "Defect liability"]
  },
  {
    icon: Users,
    title: "Influencer & Celebrity Partnerships",
    desc: "Strategic agreements for brand endorsements, sponsored content, and collaborative collections that protect your brand image.",
    features: ["Usage rights and exclusivity", "Content approval processes", "Performance metrics", "Moral clauses", "Compensation structures"]
  },
  {
    icon: Store,
    title: "Retail & Distribution Contracts",
    desc: "Framework agreements for retail partnerships, consignment arrangements, and exclusive distribution networks.",
    features: ["Territorial rights", "Pricing policies", "Marketing obligations", "Inventory management", "Termination clauses"]
  },
  {
    icon: Handshake,
    title: "Collaboration & Licensing Deals",
    desc: "Joint ventures and licensing agreements that maximize brand value while maintaining control over your intellectual property.",
    features: ["Royalty structures", "Quality control provisions", "Brand guidelines", "Audit rights", "Renewal terms"]
  }
];

const contractProcess = [
  { step: "01", title: "Requirements Analysis", desc: "Understanding your business objectives and risk tolerance" },
  { step: "02", title: "Drafting", desc: "Creating customized contracts with protective clauses" },
  { step: "03", title: "Negotiation", desc: "Strategic negotiation to secure favorable terms" },
  { step: "04", title: "Review & Execution", desc: "Final review and proper execution of agreements" }
];

const risks = [
  "Ambiguous terms leading to disputes",
  "Inadequate IP protection clauses",
  "Unfavorable payment terms",
  "Limited quality control mechanisms",
  "Restrictive exclusivity provisions",
  "Weak termination clauses"
];

export default function CommercialContracts() {
  return (
    <Layout>
      <SEO 
        title="Commercial Contracts for Fashion Brands" 
        description="Expert drafting and negotiation of fashion industry contracts: manufacturing, retail, influencer partnerships, and licensing agreements." 
        path="/commercial-contracts" 
      />
      
      {/* HERO SECTION */}
      <section className="pt-16 sm:pt-20 md:pt-24 pb-10 sm:pb-16 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="text-center">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#1A1A1A] mb-6 sm:mb-8">
              Commercial <span className="editorial-italic">Contracts</span>
            </h1>
            <p className="font-sans text-base sm:text-lg text-[#5C554D] max-w-3xl mx-auto leading-relaxed">
              Strategic contract drafting and negotiation that protects your business interests while fostering profitable partnerships. We specialize in fashion industry agreements that balance commercial success with legal protection.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTRACT TYPES */}
      <section className="pb-20 sm:pb-28 md:pb-32 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-x-12 sm:gap-y-16">
            {contractTypes.map((contract, i) => (
              <motion.div 
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className="bg-white p-8 sm:p-10 border-t-4 border-[#6B2D3E] shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#6B2D3E]/10 rounded-full flex items-center justify-center">
                    <contract.icon className="w-6 h-6 text-[#6B2D3E]" />
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl text-[#1A1A1A]">{contract.title}</h3>
                </div>
                <p className="font-sans text-[#5C554D] text-sm sm:text-base leading-relaxed mb-6">{contract.desc}</p>
                <ul className="space-y-2">
                  {contract.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-[#5C554D]">
                      <CheckCircle2 className="w-4 h-4 text-[#9E8A5F] shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="font-display text-3xl sm:text-4xl text-[#1A1A1A] mb-4">Contract <span className="editorial-italic">Development</span></h2>
            <p className="font-sans text-[#5C554D] max-w-2xl mx-auto">
              Our systematic approach to creating ironclad agreements
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
            {contractProcess.map((item, i) => (
              <motion.div 
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-[#9E8A5F] font-display text-4xl sm:text-5xl italic mb-4 opacity-50">
                  {item.step}
                </div>
                <h4 className="font-display text-lg text-[#1A1A1A] mb-3">{item.title}</h4>
                <p className="font-sans text-sm text-[#5C554D] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* RISKS SECTION */}
      <section className="py-16 sm:py-20 md:py-24 bg-[#6B2D3E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <AlertTriangle className="w-12 h-12 text-white/80 mx-auto mb-6" />
            <h2 className="font-display text-3xl sm:text-4xl text-white mb-4">Common Contract <span className="editorial-italic">Risks</span></h2>
            <p className="font-sans text-white/80 max-w-2xl mx-auto">
              Avoid these pitfalls that can cost your fashion business dearly
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {risks.map((risk, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg"
              >
                <Scale className="w-5 h-5 text-white/60 shrink-0" />
                <span className="font-sans text-sm text-white/90">{risk}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-16 sm:py-20 md:py-24 bg-white border-y border-[#9E8A5F]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {[
              { number: "300+", label: "Contracts Drafted" },
              { number: "₹50Cr+", label: "Deal Value Protected" },
              { number: "0", label: "Contract Disputes" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="font-display text-4xl sm:text-5xl text-[#6B2D3E] mb-2">{stat.number}</div>
                <div className="font-sans text-sm uppercase tracking-widest text-[#5C554D]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 sm:py-20 md:py-24 bg-[#FAF7F2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <FileText className="w-12 h-12 text-[#6B2D3E] mx-auto mb-6" />
            <h2 className="font-display text-3xl sm:text-4xl text-[#1A1A1A] mb-6">
              Secure Your <span className="editorial-italic">Business Relationships</span>
            </h2>
            <p className="font-sans text-[#5C554D] text-base sm:text-lg mb-8 max-w-2xl mx-auto">
              Don't leave your business relationships to chance. Let us draft contracts that protect your interests while enabling growth.
            </p>
            <LuxuryButton href="/book-consultation">Review Your Contracts</LuxuryButton>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
