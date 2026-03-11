import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { LuxuryButton } from "@/components/ui/LuxuryButton";
import { SEO } from "@/components/SEO";

const fadeUp = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };

const services = [
  {
    title: "Intellectual Property Protection",
    desc: "Comprehensive trademark, copyright, and design patent services to ensure your creative output remains exclusively yours. We handle registrations, oppositions, and enforcement globally.",
    num: "01",
    href: "/intellectual-property"
  },
  {
    title: "Commercial Contracts",
    desc: "From manufacturing agreements to influencer partnerships and retail distribution contracts. We draft and negotiate terms that protect your margins and brand reputation.",
    num: "02",
    href: "/commercial-contracts"
  },
  {
    title: "Fashion Tech & Digital Compliance",
    desc: "Navigating the new frontier of fashion. We advise on AI-generated designs, NFT drops, metaverse brand presence, and e-commerce data privacy laws.",
    num: "03",
    href: "/fashion-tech"
  },
  {
    title: "Brand Strategy Consulting",
    desc: "Pre-launch legal audits for emerging designers. We review your naming, branding, and operational structure to prevent costly legal disputes down the line.",
    num: "04",
    href: "/book-consultation"
  }
];

export default function Services() {
  return (
    <Layout>
      <SEO title="Our Services – IP, Contracts & Fashion Tech" description="Fashion law services: trademark & copyright, commercial contracts, fashion tech compliance & brand strategy. Book a consultation." path="/services" />
      <section className="pt-16 sm:pt-20 md:pt-24 pb-10 sm:pb-16 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 text-center">
          <motion.h1 
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="font-display text-4xl sm:text-5xl md:text-6xl text-[#1A1A1A] mb-6 sm:mb-8"
          >
            Bespoke <span className="editorial-italic">Services</span>
          </motion.h1>
          <motion.p 
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.15 }}
            className="font-sans text-base sm:text-lg text-[#5C554D] max-w-2xl mx-auto px-2"
          >
            Tailored legal counsel designed exclusively for the fashion industry's unique demands. From registration to enforcement and digital compliance, we cover the full spectrum.
          </motion.p>
        </div>
      </section>

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
                className="bg-white p-8 sm:p-10 md:p-14 border-t-4 border-[#6B2D3E] shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 cursor-pointer group"
                onClick={() => window.location.href = srv.href}
              >
                <span className="text-[#9E8A5F] font-display text-3xl sm:text-4xl italic mb-4 sm:mb-6 block opacity-50">{srv.num}</span>
                <h3 className="font-display text-xl sm:text-2xl text-[#1A1A1A] mb-4 sm:mb-6 group-hover:text-[#6B2D3E] transition-colors">{srv.title}</h3>
                <p className="font-sans text-[#5C554D] text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">{srv.desc}</p>
                <div className="flex items-center justify-between">
                  <div className="w-12 h-[1px] bg-[#9E8A5F]" />
                  <span className="text-xs uppercase tracking-widest text-[#6B2D3E] transition-opacity hover:opacity-80">
                    Learn More →
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="mt-16 sm:mt-24 text-center"
          >
            <h4 className="font-display text-xl sm:text-2xl text-[#1A1A1A] mb-6 sm:mb-8">Require custom legal advisory?</h4>
            <LuxuryButton href="/book-consultation">Book a Consultation</LuxuryButton>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
