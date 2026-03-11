import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { LuxuryButton } from "@/components/ui/LuxuryButton";
import { SEO } from "@/components/SEO";
import { CheckCircle2, Shield, Globe, FileText, AlertCircle, TrendingUp } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };

const services = [
  {
    icon: Shield,
    title: "Trademark Registration",
    desc: "Comprehensive trademark search, filing, and registration services for brand names, logos, and taglines. We handle both Indian and international trademark applications.",
    features: ["Brand name availability search", "Logo and word mark filing", "International class classification", "Opposition and cancellation proceedings"]
  },
  {
    icon: FileText,
    title: "Copyright Protection",
    desc: "Secure your original designs, patterns, and creative works with robust copyright registration and enforcement strategies.",
    features: ["Design registration", "Artistic work copyright", "Software and content protection", "Infringement monitoring"]
  },
  {
    icon: Globe,
    title: "Global IP Strategy",
    desc: "Strategic international IP portfolio management for fashion brands expanding across markets.",
    features: ["Madrid Protocol applications", "Regional trademark filings", "Cross-border enforcement", "IP portfolio audits"]
  },
  {
    icon: AlertCircle,
    title: "IP Enforcement",
    desc: "Aggressive protection of your intellectual property rights through litigation, cease and desist notices, and customs interventions.",
    features: ["Anti-counterfeiting measures", "Customs recordation", "Civil and criminal litigation", "Domain name disputes"]
  }
];

const process = [
  { step: "01", title: "IP Audit", desc: "Comprehensive assessment of your existing IP assets and gaps" },
  { step: "02", title: "Strategy Development", desc: "Customized protection strategy aligned with business goals" },
  { step: "03", title: "Registration", desc: "Filing applications across relevant jurisdictions" },
  { step: "04", title: "Monitoring", desc: "Continuous monitoring for potential infringements" }
];

export default function IntellectualProperty() {
  return (
    <Layout>
      <SEO 
        title="Intellectual Property Protection for Fashion Brands" 
        description="Comprehensive IP protection services for fashion brands: trademark, copyright, design patents, and global enforcement strategies." 
        path="/intellectual-property" 
      />
      
      {/* HERO SECTION */}
      <section className="pt-16 sm:pt-20 md:pt-24 pb-10 sm:pb-16 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="text-center">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#1A1A1A] mb-6 sm:mb-8">
              Intellectual Property <span className="editorial-italic">Protection</span>
            </h1>
            <p className="font-sans text-base sm:text-lg text-[#5C554D] max-w-3xl mx-auto leading-relaxed">
              In the fashion industry, your creative assets are your most valuable currency. We provide comprehensive IP protection strategies that safeguard your brand identity, designs, and innovations from imitation and infringement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="pb-20 sm:pb-28 md:pb-32 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-x-12 sm:gap-y-16">
            {services.map((srv, i) => (
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
                    <srv.icon className="w-6 h-6 text-[#6B2D3E]" />
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl text-[#1A1A1A]">{srv.title}</h3>
                </div>
                <p className="font-sans text-[#5C554D] text-sm sm:text-base leading-relaxed mb-6">{srv.desc}</p>
                <ul className="space-y-2">
                  {srv.features.map((feature, j) => (
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
            <h2 className="font-display text-3xl sm:text-4xl text-[#1A1A1A] mb-4">Our <span className="editorial-italic">Process</span></h2>
            <p className="font-sans text-[#5C554D] max-w-2xl mx-auto">
              A systematic approach to protecting your intellectual property assets
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
            {process.map((item, i) => (
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

      {/* STATS SECTION */}
      <section className="py-16 sm:py-20 md:py-24 bg-[#6B2D3E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {[
              { number: "500+", label: "Trademarks Filed" },
              { number: "200+", label: "Copyrights Registered" },
              { number: "98%", label: "Success Rate" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="font-display text-4xl sm:text-5xl mb-2">{stat.number}</div>
                <div className="font-sans text-sm uppercase tracking-widest opacity-80">{stat.label}</div>
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
            <TrendingUp className="w-12 h-12 text-[#6B2D3E] mx-auto mb-6" />
            <h2 className="font-display text-3xl sm:text-4xl text-[#1A1A1A] mb-6">
              Protect Your <span className="editorial-italic">Creative Legacy</span>
            </h2>
            <p className="font-sans text-[#5C554D] text-base sm:text-lg mb-8 max-w-2xl mx-auto">
              Don't let your innovations be vulnerable. Schedule a consultation to develop a comprehensive IP protection strategy for your fashion brand.
            </p>
            <LuxuryButton href="/book-consultation">Schedule IP Consultation</LuxuryButton>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
