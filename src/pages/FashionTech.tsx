import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { LuxuryButton } from "@/components/ui/LuxuryButton";
import { SEO } from "@/components/SEO";
import { CheckCircle2, Cpu, Globe, Shield, Smartphone, Palette, Code, Zap, Database } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };

const techServices = [
  {
    icon: Cpu,
    title: "AI-Generated Designs",
    desc: "Legal frameworks for AI-assisted design creation, ownership rights, and compliance with emerging AI regulations in fashion.",
    features: ["AI design ownership agreements", "Training data compliance", "Output rights protection", "Ethical AI guidelines", "Regulatory compliance"]
  },
  {
    icon: Globe,
    title: "NFT & Digital Assets",
    desc: "Comprehensive legal support for NFT launches, digital fashion items, and virtual marketplace participation.",
    features: ["Smart contract review", "IP rights in NFTs", "Securities compliance", "Consumer protection", "Cross-border regulations"]
  },
  {
    icon: Smartphone,
    title: "E-Commerce & Data Privacy",
    desc: "GDPR, CCPA, and Indian data protection compliance for fashion e-commerce platforms and customer data management.",
    features: ["Privacy policy drafting", "Cookie consent management", "Data processing agreements", "Cross-border data transfers", "Breach response protocols"]
  },
  {
    icon: Palette,
    title: "Virtual Fashion & Metaverse",
    desc: "Legal strategies for virtual fashion shows, digital clothing, and brand presence in metaverse platforms.",
    features: ["Virtual IP protection", "Platform agreements", "Digital licensing", "Avatar rights", "Virtual real estate"]
  }
];

const complianceAreas = [
  { 
    icon: Database,
    title: "Data Protection",
    desc: "Comprehensive data privacy compliance for customer data, analytics, and marketing operations"
  },
  { 
    icon: Shield,
    title: "Cybersecurity",
    desc: "Legal frameworks for data breach prevention, response, and customer notification requirements"
  },
  { 
    icon: Code,
    title: "Platform Compliance",
    desc: "App store policies, marketplace regulations, and digital platform terms of service"
  },
  { 
    icon: Zap,
    title: "Emerging Tech",
    desc: "Blockchain, IoT in fashion, and wearable technology legal considerations"
  }
];

const innovations = [
  "Digital twins for physical garments",
  "AI-powered personal styling algorithms",
  "Virtual try-on technologies",
  "Blockchain-based supply chain transparency",
  "Sustainability tracking through IoT",
  "Augmented reality shopping experiences"
];

export default function FashionTech() {
  return (
    <Layout>
      <SEO 
        title="Fashion Tech & Digital Compliance" 
        description="Legal services for fashion technology: AI designs, NFTs, e-commerce compliance, data privacy, and metaverse presence." 
        path="/fashion-tech" 
      />
      
      {/* HERO SECTION */}
      <section className="pt-16 sm:pt-20 md:pt-24 pb-10 sm:pb-16 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="text-center">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#1A1A1A] mb-6 sm:mb-8">
              Fashion <span className="editorial-italic">Tech & Digital</span>
            </h1>
            <p className="font-sans text-base sm:text-lg text-[#5C554D] max-w-3xl mx-auto leading-relaxed">
              Navigate the complex legal landscape of fashion technology with confidence. From AI-generated designs to NFT launches and metaverse presence, we provide cutting-edge legal counsel for the digital fashion revolution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* TECH SERVICES */}
      <section className="pb-20 sm:pb-28 md:pb-32 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-x-12 sm:gap-y-16">
            {techServices.map((service, i) => (
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
                    <service.icon className="w-6 h-6 text-[#6B2D3E]" />
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl text-[#1A1A1A]">{service.title}</h3>
                </div>
                <p className="font-sans text-[#5C554D] text-sm sm:text-base leading-relaxed mb-6">{service.desc}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, j) => (
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

      {/* COMPLIANCE AREAS */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="font-display text-3xl sm:text-4xl text-[#1A1A1A] mb-4">Digital <span className="editorial-italic">Compliance</span></h2>
            <p className="font-sans text-[#5C554D] max-w-2xl mx-auto">
              Comprehensive compliance frameworks for the digital fashion ecosystem
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {complianceAreas.map((area, i) => (
              <motion.div 
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: i * 0.1 }}
                className="bg-[#FAF7F2] p-6 text-center group hover:bg-[#6B2D3E] hover:text-white transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#6B2D3E]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20">
                  <area.icon className="w-6 h-6 text-[#6B2D3E] group-hover:text-white" />
                </div>
                <h4 className="font-display text-lg text-[#1A1A1A] mb-3 group-hover:text-white">{area.title}</h4>
                <p className="font-sans text-sm text-[#5C554D] leading-relaxed group-hover:text-white/90">{area.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INNOVATIONS SECTION */}
      <section className="py-16 sm:py-20 md:py-24 bg-[#6B2D3E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <Zap className="w-12 h-12 text-white/80 mx-auto mb-6" />
            <h2 className="font-display text-3xl sm:text-4xl text-white mb-4">Fashion <span className="editorial-italic">Innovations</span></h2>
            <p className="font-sans text-white/80 max-w-2xl mx-auto">
              Cutting-edge technologies we help you navigate legally
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {innovations.map((innovation, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20"
              >
                <span className="font-sans text-sm text-white/90">{innovation}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* REGULATIONS SECTION */}
      <section className="py-16 sm:py-20 md:py-24 bg-[#FAF7F2] border-y border-[#9E8A5F]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl sm:text-4xl text-[#1A1A1A] mb-4">Key <span className="editorial-italic">Regulations</span></h2>
            <p className="font-sans text-[#5C554D] max-w-2xl mx-auto">
              Staying compliant with evolving digital regulations
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { title: "GDPR", desc: "EU General Data Protection Regulation for customer data" },
              { title: "CCPA/CPRA", desc: "California Consumer Privacy Act compliance" },
              { title: "IT Act 2000", desc: "Indian Information Technology Act and rules" },
              { title: "DPDP Act 2023", desc: "India's Digital Personal Data Protection Act" },
              { title: "AI Regulations", desc: "Emerging AI governance frameworks" },
              { title: "Crypto Laws", desc: "Cryptocurrency and digital asset regulations" }
            ].map((reg, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 border border-[#9E8A5F]/20 text-center"
              >
                <h4 className="font-display text-xl text-[#6B2D3E] mb-3">{reg.title}</h4>
                <p className="font-sans text-sm text-[#5C554D]">{reg.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <Cpu className="w-12 h-12 text-[#6B2D3E] mx-auto mb-6" />
            <h2 className="font-display text-3xl sm:text-4xl text-[#1A1A1A] mb-6">
              Future-Proof Your <span className="editorial-italic">Digital Fashion</span>
            </h2>
            <p className="font-sans text-[#5C554D] text-base sm:text-lg mb-8 max-w-2xl mx-auto">
              Don't let legal complexities slow your innovation. Schedule a consultation to ensure your fashion tech initiatives are legally sound and future-ready.
            </p>
            <LuxuryButton href="/book-consultation">Schedule Tech Consultation</LuxuryButton>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
