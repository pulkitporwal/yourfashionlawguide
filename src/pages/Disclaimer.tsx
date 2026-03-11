import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { SEO } from "@/components/SEO";
import { AlertTriangle, Scale, Eye, Shield, Info, Clock } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };

export default function Disclaimer() {
  return (
    <Layout>
      <SEO 
        title="Disclaimer – Your Fashion Law Guide" 
        description="Legal disclaimer for Your Fashion Law Guide website and services. Important information about the limitations of our legal advice and services." 
        path="/disclaimer" 
      />
      
      {/* HERO SECTION */}
      <section className="pt-16 sm:pt-20 md:pt-24 pb-10 sm:pb-16 bg-[#FAF7F2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="text-center">
            <AlertTriangle className="w-12 h-12 text-[#6B2D3E] mx-auto mb-6" />
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#1A1A1A] mb-6 sm:mb-8">
              Legal <span className="editorial-italic">Disclaimer</span>
            </h1>
            <p className="font-sans text-base sm:text-lg text-[#5C554D] max-w-2xl mx-auto leading-relaxed">
              Please read this disclaimer carefully before using our website or engaging with our legal services.
            </p>
            <p className="font-sans text-sm text-[#9E8A5F] mt-4">Last updated: February 2026</p>
          </motion.div>
        </div>
      </section>

      {/* CONTENT SECTIONS */}
      <section className="pb-20 sm:pb-28 md:pb-32 bg-[#FAF7F2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 space-y-12 sm:space-y-16">
          
          {/* NOT A SUBSTITUTE FOR LEGAL ADVICE */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center gap-4 mb-6">
              <Scale className="w-6 h-6 text-[#6B2D3E]" />
              <h2 className="font-display text-2xl text-[#1A1A1A">Not Legal Advice</h2>
            </div>
            <div className="bg-white p-6 sm:p-8 border border-[#9E8A5F]/20">
              <p className="font-sans text-[#5C554D] text-sm leading-relaxed mb-4">
                <strong>Important:</strong> The information provided on this website is for general informational purposes only and does not constitute legal advice.
              </p>
              <ul className="space-y-2">
                {[
                  "Website content is not a substitute for professional legal advice",
                  "Information may not apply to your specific situation",
                  "Legal outcomes depend on individual circumstances and jurisdiction",
                  "Always consult with a qualified attorney for your specific legal needs"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#9E8A5F] rounded-full mt-2 shrink-0" />
                    <span className="font-sans text-[#5C554D] text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* NO ATTORNEY-CLIENT RELATIONSHIP */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center gap-4 mb-6">
              <Shield className="w-6 h-6 text-[#6B2D3E]" />
              <h2 className="font-display text-2xl text-[#1A1A1A]">No Attorney-Client Relationship</h2>
            </div>
            <div className="bg-white p-6 sm:p-8 border border-[#9E8A5F]/20">
              <p className="font-sans text-[#5C554D] text-sm leading-relaxed mb-4">
                No attorney-client relationship is formed by:
              </p>
              <ul className="space-y-2">
                {[
                  "Visiting this website or browsing its content",
                  "Subscribing to our newsletter or updates",
                  "Sending general inquiries through contact forms",
                  "Reading our articles, guides, or resources"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#9E8A5F] rounded-full mt-2 shrink-0" />
                    <span className="font-sans text-[#5C554D] text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-sans text-[#5C554D] text-sm leading-relaxed mt-4">
                An attorney-client relationship is only established through formal engagement agreement and consultation booking.
              </p>
            </div>
          </motion.div>

          {/* ACCURACY OF INFORMATION */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center gap-4 mb-6">
              <Eye className="w-6 h-6 text-[#6B2D3E]" />
              <h2 className="font-display text-2xl text-[#1A1A1A]">Accuracy of Information</h2>
            </div>
            <div className="bg-white p-6 sm:p-8 border border-[#9E8A5F]/20">
              <p className="font-sans text-[#5C554D] text-sm leading-relaxed mb-4">
                While we strive to provide accurate and up-to-date information:
              </p>
              <ul className="space-y-2">
                {[
                  "Laws and regulations change frequently",
                  "Information may become outdated over time",
                  "Different jurisdictions may have varying requirements",
                  "We do not guarantee the completeness or accuracy of all content"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#9E8A5F] rounded-full mt-2 shrink-0" />
                    <span className="font-sans text-[#5C554D] text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-sans text-[#5C554D] text-sm leading-relaxed mt-4">
                Always verify current legal requirements with a qualified legal professional.
              </p>
            </div>
          </motion.div>

          {/* NO GUARANTEE OF RESULTS */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center gap-4 mb-6">
              <AlertTriangle className="w-6 h-6 text-[#6B2D3E]" />
              <h2 className="font-display text-2xl text-[#1A1A1A]">No Guarantee of Results</h2>
            </div>
            <div className="bg-white p-6 sm:p-8 border border-[#9E8A5F]/20">
              <p className="font-sans text-[#5C554D] text-sm leading-relaxed mb-4">
                We do not guarantee specific outcomes for legal matters, including:
              </p>
              <ul className="space-y-2">
                {[
                  "Trademark registration approvals",
                  "Contract negotiation results",
                  "Litigation outcomes or settlements",
                  "Timeline predictions for legal processes",
                  "Business success or profitability"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#9E8A5F] rounded-full mt-2 shrink-0" />
                    <span className="font-sans text-[#5C554D] text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-sans text-[#5C554D] text-sm leading-relaxed mt-4">
                Legal outcomes depend on many factors beyond our control, including third-party actions and judicial decisions.
              </p>
            </div>
          </motion.div>

          {/* THIRD-PARTY LINKS */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center gap-4 mb-6">
              <Info className="w-6 h-6 text-[#6B2D3E]" />
              <h2 className="font-display text-2xl text-[#1A1A1A]">Third-Party Links</h2>
            </div>
            <div className="bg-white p-6 sm:p-8 border border-[#9E8A5F]/20">
              <p className="font-sans text-[#5C554D] text-sm leading-relaxed mb-4">
                Our website may contain links to third-party websites and resources. We are not responsible for:
              </p>
              <ul className="space-y-2">
                {[
                  "The content, accuracy, or availability of external websites",
                  "The privacy practices or policies of third-party sites",
                  "Any damages or losses from using external links",
                  "Third-party products, services, or opinions"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#9E8A5F] rounded-full mt-2 shrink-0" />
                    <span className="font-sans text-[#5C554D] text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-sans text-[#5C554D] text-sm leading-relaxed mt-4">
                External links do not imply endorsement or affiliation.
              </p>
            </div>
          </motion.div>

          {/* PROFESSIONAL RESPONSIBILITY */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center gap-4 mb-6">
              <Scale className="w-6 h-6 text-[#6B2D3E]" />
              <h2 className="font-display text-2xl text-[#1A1A1A]">Professional Responsibility</h2>
            </div>
            <div className="bg-white p-6 sm:p-8 border border-[#9E8A5F]/20">
              <p className="font-sans text-[#5C554D] text-sm leading-relaxed mb-4">
                Our legal services are bound by professional ethics and responsibilities, including:
              </p>
              <ul className="space-y-2">
                {[
                  "Maintaining client confidentiality and privilege",
                  "Avoiding conflicts of interest",
                  "Providing competent and diligent representation",
                  "Communicating honestly about legal matters",
                  "Following applicable rules of professional conduct"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#9E8A5F] rounded-full mt-2 shrink-0" />
                    <span className="font-sans text-[#5C554D] text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* LIMITATION OF LIABILITY */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center gap-4 mb-6">
              <AlertTriangle className="w-6 h-6 text-[#6B2D3E]" />
              <h2 className="font-display text-2xl text-[#1A1A1A]">Limitation of Liability</h2>
            </div>
            <div className="bg-white p-6 sm:p-8 border border-[#9E8A5F]/20">
              <p className="font-sans text-[#5C554D] text-sm leading-relaxed mb-4">
                Your Fashion Law Guide and its representatives shall not be liable for:
              </p>
              <ul className="space-y-2">
                {[
                  "Any direct, indirect, or consequential damages",
                  "Losses arising from reliance on website information",
                  "Business interruptions or lost opportunities",
                  "Legal costs or penalties from third-party actions",
                  "Damages exceeding the fees paid for specific services"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#9E8A5F] rounded-full mt-2 shrink-0" />
                    <span className="font-sans text-[#5C554D] text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* JURISDICTIONAL LIMITATIONS */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center gap-4 mb-6">
              <Clock className="w-6 h-6 text-[#6B2D3E]" />
              <h2 className="font-display text-2xl text-[#1A1A1A]">Jurisdictional Limitations</h2>
            </div>
            <div className="bg-white p-6 sm:p-8 border border-[#9E8A5F]/20">
              <p className="font-sans text-[#5C554D] text-sm leading-relaxed mb-4">
                Important limitations regarding jurisdiction:
              </p>
              <ul className="space-y-2">
                {[
                  "We are primarily licensed to practice law in India",
                  "Information may not apply to laws in other jurisdictions",
                  "International clients should seek local legal counsel",
                  "Cross-border matters require specialized legal expertise",
                  "Website access from other jurisdictions is at your own risk"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#9E8A5F] rounded-full mt-2 shrink-0" />
                    <span className="font-sans text-[#5C554D] text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* INDEMNIFICATION */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center gap-4 mb-6">
              <Shield className="w-6 h-6 text-[#6B2D3E]" />
              <h2 className="font-display text-2xl text-[#1A1A1A]">Indemnification</h2>
            </div>
            <div className="bg-white p-6 sm:p-8 border border-[#9E8A5F]/20">
              <p className="font-sans text-[#5C554D] text-sm leading-relaxed">
                You agree to indemnify and hold Your Fashion Law Guide harmless from any claims, damages, or expenses arising from your use of our website or services, including violations of these terms or infringement of third-party rights.
              </p>
            </div>
          </motion.div>

          {/* CONTACT FOR LEGAL ADVICE */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center gap-4 mb-6">
              <Info className="w-6 h-6 text-[#6B2D3E]" />
              <h2 className="font-display text-2xl text-[#1A1A1A]">Need Legal Advice?</h2>
            </div>
            <div className="bg-white p-6 sm:p-8 border border-[#9E8A5F]/20">
              <p className="font-sans text-[#5C554D] text-sm leading-relaxed mb-4">
                If you need specific legal advice for your fashion business or brand:
              </p>
              <div className="space-y-2 font-sans text-[#5C554D] text-sm">
                <p><strong>Email:</strong> diyakumar531@gmail.com</p>
              </div>
              <p className="font-sans text-[#5C554D] text-sm leading-relaxed mt-4">
                Professional legal advice is essential for protecting your fashion business and intellectual property rights.
              </p>
            </div>
          </motion.div>

        </div>
      </section>
    </Layout>
  );
}
