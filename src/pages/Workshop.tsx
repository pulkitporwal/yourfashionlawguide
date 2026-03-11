import { Layout } from "@/components/layout/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { SEO } from "@/components/SEO";
import { CheckCircle2, X, ArrowRight } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };

const pastWorkshops = [
  {
    num: "01",
    title: "Fashion Law and Influencer Collaboration Agreements",
    tag: "Contracts & Partnerships",
    tagline: "Understanding legal risks, contract structures, and industry practices in brand partnerships.",
    overview: "This session explored the intersection of fashion law and the influencer economy. Participants gained a thorough understanding of how collaboration agreements work in practice — from initial negotiations to final execution.",
    covered: [
      "Types of influencer agreements: paid, gifted, and affiliate structures",
      "Key clauses every brand partnership contract must include",
      "Exclusivity, IP ownership, and usage rights in sponsored content",
      "Disclosure obligations and advertising standards compliance",
      "Risk areas: late delivery, content disputes, and termination rights",
      "How to negotiate and review agreements as a creator or brand"
    ],
    takeaways: [
      "Legal clarity on what you are agreeing to before signing",
      "Practical checklist for reviewing collaboration contracts",
      "Understanding of how IP is transferred or licensed in content deals",
      "Awareness of regulatory disclosure requirements for sponsored posts"
    ]
  },
  {
    num: "02",
    title: "Intellectual Property for Creatives",
    tag: "IP & Brand Protection",
    tagline: "Exploring copyright, trademarks, and protection strategies for designers and entrepreneurs.",
    overview: "Designed for designers, brand founders, and creative professionals, this session broke down the core IP frameworks that govern the fashion industry — explained in plain language with direct industry application.",
    covered: [
      "Copyright in fashion: what is protected, what is not, and why",
      "Trademark registration process, classes, and enforcement basics",
      "Design rights and how they apply to garments, accessories, and branding",
      "Trade secrets and confidentiality in creative businesses",
      "Common infringement scenarios and how to respond",
      "Building a proactive IP strategy from the ground up"
    ],
    takeaways: [
      "Clear understanding of which IP tools apply to your creative work",
      "Step-by-step overview of trademark and copyright registration",
      "Practical awareness of where legal risks commonly arise",
      "Framework for thinking about IP as a business asset, not a formality"
    ]
  },
  {
    num: "03",
    title: "Careers in Fashion Law",
    tag: "Career & Industry Insight",
    tagline: "Understanding career pathways, skill development, and opportunities within niche legal fields.",
    overview: "A practical career guidance session for law students, young professionals, and those exploring the intersection of fashion and legal practice. The session covered the realities of working in fashion law — from entry paths to building expertise.",
    covered: [
      "What fashion law actually involves day-to-day",
      "Pathways into the field: litigation, corporate, advisory, and in-house roles",
      "Skills and knowledge areas that distinguish fashion lawyers",
      "How to build experience when the field is niche and competitive",
      "Networking, positioning, and making yourself visible in the industry",
      "International opportunities and how the field differs across jurisdictions"
    ],
    takeaways: [
      "Realistic picture of the fashion law career landscape",
      "Actionable steps to start building relevant experience now",
      "Understanding of which practice areas are most active and growing",
      "Clarity on how to position yourself within a niche legal market"
    ]
  }
];

export default function Workshop() {
  const [activeWorkshop, setActiveWorkshop] = useState<typeof pastWorkshops[0] | null>(null);

  return (
    <Layout>
      <SEO
        title="Workshops & Learning Sessions | Fashion Law"
        description="Practical workshops on fashion law, IP, contracts, and creative industry legal frameworks. Suitable for students, professionals, and entrepreneurs."
        path="/workshop"
      />

      {/* ── HERO ── */}
      <section className="pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 md:pb-20 bg-white border-b border-[#9E8A5F]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex items-center gap-5 mb-8 sm:mb-12"
          >
            <div className="h-px flex-1 bg-[#9E8A5F]/25" />
            <span className="text-[#9E8A5F] text-[10px] uppercase tracking-[5px] font-semibold shrink-0">
              Workshops and Learning Sessions
            </span>
            <div className="h-px flex-1 bg-[#9E8A5F]/25" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 md:gap-16 items-start">

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="md:col-span-5"
            >
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] leading-[1.1]">
                Learn through <span className="editorial-italic text-[#6B2D3E]">practice</span>.
              </h1>
              <div className="mt-6 h-px w-10 bg-[#6B2D3E]" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
              className="md:col-span-7 space-y-4 sm:space-y-5"
            >
              <p className="font-sans text-[#1A1A1A] text-base sm:text-lg leading-relaxed border-l-2 border-[#6B2D3E] pl-5">
                Workshops are designed to provide practical understanding of legal concepts within the fashion and creative industries. The focus is on clarity, real-world application, and actionable insights rather than purely theoretical discussion.
              </p>
              <p className="font-sans text-[#5C554D] text-base sm:text-lg leading-relaxed">
                Sessions are suitable for students, professionals, entrepreneurs, and creatives seeking to understand how legal frameworks operate in practice.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── PREVIOUS WORKSHOPS ── */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            className="mb-8 sm:mb-12"
          >
            <span className="text-[#9E8A5F] text-[10px] uppercase tracking-[5px] font-semibold block mb-3">
              Previous Workshops
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-[#1A1A1A]">
              Past <span className="editorial-italic">Sessions</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#9E8A5F]/15">
            {pastWorkshops.map((ws, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: i * 0.1 } } }}
                onClick={() => setActiveWorkshop(ws)}
                className="bg-white p-7 sm:p-8 group cursor-pointer hover:bg-[#1A1A1A] transition-colors duration-500 flex flex-col"
              >
                <span className="font-display text-4xl text-[#9E8A5F]/20 group-hover:text-white/10 transition-colors duration-500 block mb-4 leading-none">
                  {ws.num}
                </span>
                <span className="text-[#9E8A5F] group-hover:text-[#9E8A5F]/70 text-[10px] uppercase tracking-[3px] font-semibold block mb-3 transition-colors duration-500">
                  {ws.tag}
                </span>
                <h3 className="font-display text-lg sm:text-xl text-[#1A1A1A] group-hover:text-white leading-snug mb-4 transition-colors duration-500 flex-1">
                  {ws.title}
                </h3>
                <div className="w-8 h-px bg-[#9E8A5F]/30 group-hover:bg-white/20 transition-colors duration-500 mb-4" />
                <p className="font-sans text-[#5C554D] group-hover:text-white/60 text-sm leading-relaxed mb-6 transition-colors duration-500">
                  {ws.tagline}
                </p>
                <div className="flex items-center gap-2 text-[#6B2D3E] group-hover:text-[#9E8A5F] transition-colors duration-500">
                  <span className="text-[10px] uppercase tracking-[3px] font-semibold">View Session Recap</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── POPUP ── */}
      <AnimatePresence>
        {activeWorkshop && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setActiveWorkshop(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />

            <motion.div
              key="modal"
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.97 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="fixed inset-x-4 top-[5vh] bottom-[5vh] sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 sm:w-full sm:max-w-2xl md:max-w-3xl z-50 overflow-hidden flex flex-col bg-white shadow-2xl"
            >
              {/* Header */}
              <div className="bg-[#1A1A1A] px-7 sm:px-10 py-6 flex items-start justify-between gap-4 shrink-0">
                <div>
                  <span className="text-[#9E8A5F] text-[10px] uppercase tracking-[4px] font-semibold block mb-2">
                    {activeWorkshop.tag} · Session Recap
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl text-white leading-snug">
                    {activeWorkshop.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveWorkshop(null)}
                  className="shrink-0 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/60 transition-colors mt-1"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Body */}
              <div className="overflow-y-auto flex-1 px-7 sm:px-10 py-8 space-y-8">
                <p className="font-sans text-[#1A1A1A] text-base sm:text-lg leading-relaxed border-l-2 border-[#6B2D3E] pl-5">
                  {activeWorkshop.overview}
                </p>

                <div>
                  <h4 className="font-display text-lg text-[#1A1A1A] mb-4 flex items-center gap-3">
                    <span className="w-5 h-px bg-[#9E8A5F] inline-block" />
                    What Was Covered
                  </h4>
                  <ul className="space-y-3">
                    {activeWorkshop.covered.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#6B2D3E] shrink-0" />
                        <span className="font-sans text-sm sm:text-base text-[#5C554D] leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#FAF7F2] p-6 border border-[#9E8A5F]/15">
                  <h4 className="font-display text-lg text-[#1A1A1A] mb-4 flex items-center gap-3">
                    <span className="w-5 h-px bg-[#9E8A5F] inline-block" />
                    Key Takeaways
                  </h4>
                  <ul className="space-y-3">
                    {activeWorkshop.takeaways.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#6B2D3E] shrink-0 mt-0.5" />
                        <span className="font-sans text-sm sm:text-base text-[#5C554D] leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-[#9E8A5F]/15 px-7 sm:px-10 py-5 flex items-center justify-between gap-4 shrink-0 bg-white">
                <p className="font-sans text-xs text-[#9E8A5F] uppercase tracking-widest">Session Complete</p>
                <button
                  onClick={() => setActiveWorkshop(null)}
                  className="font-sans text-xs uppercase tracking-widest text-[#1A1A1A] border border-[#1A1A1A]/20 px-5 py-2.5 hover:bg-[#1A1A1A] hover:text-white transition-colors duration-300"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </Layout>
  );
}