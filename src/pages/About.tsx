import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { SEO } from "@/components/SEO";
import { LuxuryButton } from "@/components/ui/LuxuryButton";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function About() {
  return (
    <Layout>
      <SEO title="About Diya – Fashion Attorney" description="Meet Diya, founder of Your Fashion Law Guide. IP, contracts & fashion tech compliance for designers and brands in India." path="/about" />

      {/* ── ABOUT DIYA — unchanged ── */}
      <section className="pt-16 sm:pt-20 md:pt-24 pb-20 sm:pb-28 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center mb-20 sm:mb-28 md:mb-32">
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] mb-6 sm:mb-8">
                About <span className="editorial-italic">Diya</span>
              </h1>
              <div className="space-y-4 sm:space-y-6 font-sans text-base sm:text-lg text-[#5C554D] leading-relaxed">
                <p>
                  As the founder of Your Fashion Law Guide, my mission has always been clear: to empower creatives by demystifying the legal frameworks that govern the fashion industry.
                </p>
                <p>
                  With years of specialized experience in Intellectual Property, commercial contracts, and fashion tech compliance, I act as the shield for your brand's most valuable assets. Fashion is an art, but running a fashion brand is a business.
                </p>
                <p>
                  I've represented emerging designers, established luxury houses, and innovative fashion-tech startups, ensuring their creative legacies are protected against modern threats like superficial knockoffs, AI-generated IP conflicts, and complex supply chain liabilities.
                </p>
                <p>
                  With a practice that spans India and international clients, I combine rigorous legal expertise with a genuine understanding of the creative process. Whether you're launching your first collection or scaling a global brand, my goal is to make legal protection accessible and strategic—not an afterthought.
                </p>
                <LuxuryButton href="/book-consultation" variant="outline" className="mt-4">Book a Consultation</LuxuryButton>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.3 }}
              className="relative aspect-[3/4] w-full max-w-sm sm:max-w-md mx-auto lg:mx-0 lg:ml-auto"
            >
              <div className="absolute inset-0 bg-[#9E8A5F] translate-x-4 translate-y-4 opacity-20" />
              <img
                src="https://i0.wp.com/yourfashionlawguide.com/wp-content/uploads/2025/05/SAVE_20250527_165648-1-edited.jpg?resize=1179%2C1572&ssl=1"
                alt="Diya - Fashion Attorney"
                className="absolute inset-0 w-full h-full object-cover z-10 shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WHY THIS PLATFORM EXISTS ── */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#1A1A1A] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            className="flex items-center gap-5 mb-8 sm:mb-12"
          >
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-[#9E8A5F] text-[10px] uppercase tracking-[5px] font-semibold shrink-0">
              Why This Platform Exists
            </span>
            <div className="h-px flex-1 bg-white/10" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 md:gap-14 items-start">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              className="md:col-span-4 md:sticky md:top-16"
            >
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white leading-[1.15]">
                The <span className="editorial-italic text-[#9E8A5F]">reason</span>{" "}
                behind the guide.
              </h2>
              <div className="mt-6 h-px w-10 bg-[#6B2D3E]" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
              className="md:col-span-8 space-y-5 sm:space-y-6"
            >
              <p className="font-sans text-white text-base sm:text-lg leading-relaxed border-l-2 border-[#6B2D3E] pl-5">
                The fashion industry exists at the intersection of creativity, commerce, and intellectual property. Designers create, brands build identities, entrepreneurs develop businesses, and professionals collaborate across borders.
              </p>
              <p className="font-sans text-white/60 text-base sm:text-lg leading-relaxed">
                Despite this complexity, legal understanding often remains limited or misunderstood. Many creatives encounter legal challenges only after problems arise, rather than recognising how proactive knowledge could prevent them.
              </p>
              <p className="font-sans text-white/60 text-base sm:text-lg leading-relaxed">
                Your Fashion Law Guide was created to address this gap. The purpose is not simply to explain legal doctrines, but to contextualise them within the realities of the industry.
              </p>
              <p className="font-sans text-white/60 text-base sm:text-lg leading-relaxed">
                Law should not feel intimidating or distant. It should feel like a tool that enables better decisions, stronger protection, and more confident innovation.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── MY APPROACH TO FASHION LAW ── */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#FAF7F2] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            className="mb-8 sm:mb-12"
          >
            <span className="text-[#9E8A5F] text-[10px] uppercase tracking-[5px] font-semibold">
              My Approach to Fashion Law
            </span>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 md:gap-14 items-start">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              className="md:col-span-4 md:sticky md:top-16"
            >
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#1A1A1A] leading-[1.15]">
                Clarity,{" "}
                prevention,{" "}
                <span className="editorial-italic text-[#6B2D3E]">strategy</span>.
              </h2>
              <div className="mt-6 h-px w-10 bg-[#9E8A5F]" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
              className="md:col-span-8"
            >
              <p className="font-sans text-[#1A1A1A] text-base sm:text-lg leading-relaxed border-l-2 border-[#6B2D3E] pl-5 mb-8">
                My approach to fashion law is grounded in clarity, prevention, and strategic thinking.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[#9E8A5F]/15">
                {[
                  {
                    num: "01",
                    title: "Proactive Protection",
                    body: "Legal protection is most effective when it is proactive. Understanding risks early allows individuals and businesses to make informed decisions rather than reacting to disputes later."
                  },
                  {
                    num: "02",
                    title: "Empowering Creativity",
                    body: "Legal knowledge should empower creativity rather than restrict it. When designers and entrepreneurs understand their rights and obligations, they are better positioned to innovate confidently and build sustainable ventures."
                  },
                  {
                    num: "03",
                    title: "Both Dimensions",
                    body: "Fashion is an art form, but it also operates within a commercial and regulatory framework. Recognising both dimensions is essential."
                  }
                ].map((card, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
                    className="bg-white p-6 sm:p-8 group hover:bg-[#6B2D3E] transition-colors duration-500"
                  >
                    <span className="font-display text-3xl text-[#9E8A5F]/20 group-hover:text-white/15 transition-colors duration-500 block mb-4 leading-none">
                      {card.num}
                    </span>
                    <h4 className="font-display text-base sm:text-lg text-[#1A1A1A] group-hover:text-white mb-3 transition-colors duration-500">
                      {card.title}
                    </h4>
                    <div className="w-6 h-px bg-[#9E8A5F] group-hover:bg-white/40 transition-colors duration-500 mb-3" />
                    <p className="font-sans text-[#5C554D] text-sm leading-relaxed group-hover:text-white/75 transition-colors duration-500">
                      {card.body}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      
    </Layout>
  );
}