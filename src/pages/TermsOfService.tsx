import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { SEO } from "@/components/SEO";
import { FileText, Users, Shield, AlertCircle, Scale, Clock } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };

export default function TermsOfService() {
  return (
    <Layout>
      <SEO 
        title="Terms of Service – Your Fashion Law Guide" 
        description="Terms of service governing the use of our website, legal consultation services, and professional engagement with Your Fashion Law Guide." 
        path="/terms-of-service" 
      />
      
      {/* HERO SECTION */}
      <section className="pt-16 sm:pt-20 md:pt-24 pb-10 sm:pb-16 bg-[#FAF7F2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="text-center">
            <FileText className="w-12 h-12 text-[#6B2D3E] mx-auto mb-6" />
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#1A1A1A] mb-6 sm:mb-8">
              Terms of <span className="editorial-italic">Service</span>
            </h1>
            <p className="font-sans text-base sm:text-lg text-[#5C554D] max-w-2xl mx-auto leading-relaxed">
              These terms govern your use of our website and engagement with our legal services. By accessing our services, you agree to be bound by these terms.
            </p>
            <p className="font-sans text-sm text-[#9E8A5F] mt-4">Last updated: February 2026</p>
          </motion.div>
        </div>
      </section>

      {/* CONTENT SECTIONS */}
      <section className="pb-20 sm:pb-28 md:pb-32 bg-[#FAF7F2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 space-y-12 sm:space-y-16">
          
          {/* ACCEPTANCE OF TERMS */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center gap-4 mb-6">
              <Users className="w-6 h-6 text-[#6B2D3E]" />
              <h2 className="font-display text-2xl text-[#1A1A1A]">Acceptance of Terms</h2>
            </div>
            <div className="bg-white p-6 sm:p-8 border border-[#9E8A5F]/20">
              <p className="font-sans text-[#5C554D] text-sm leading-relaxed">
                By accessing and using Your Fashion Law Guide website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
              </p>
            </div>
          </motion.div>

          {/* SERVICES DESCRIPTION */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center gap-4 mb-6">
              <Shield className="w-6 h-6 text-[#6B2D3E]" />
              <h2 className="font-display text-2xl text-[#1A1A1A]">Legal Services</h2>
            </div>
            <div className="bg-white p-6 sm:p-8 border border-[#9E8A5F]/20">
              <p className="font-sans text-[#5C554D] text-sm leading-relaxed mb-4">
                Your Fashion Law Guide provides legal consulting services including:
              </p>
              <ul className="space-y-2 mb-4">
                {[
                  "Intellectual property protection and registration",
                  "Commercial contract drafting and review",
                  "Fashion technology and digital compliance",
                  "Brand strategy and legal audits",
                  "Legal consultations and advisory services"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#9E8A5F] rounded-full mt-2 shrink-0" />
                    <span className="font-sans text-[#5C554D] text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-sans text-[#5C554D] text-sm leading-relaxed">
                All services are provided on a case-by-case basis and require formal engagement through consultation booking.
              </p>
            </div>
          </motion.div>

          {/* CLIENT RESPONSIBILITIES */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center gap-4 mb-6">
              <Users className="w-6 h-6 text-[#6B2D3E]" />
              <h2 className="font-display text-2xl text-[#1A1A1A]">Client Responsibilities</h2>
            </div>
            <div className="bg-white p-6 sm:p-8 border border-[#9E8A5F]/20">
              <p className="font-sans text-[#5C554D] text-sm leading-relaxed mb-4">
                As a client, you agree to:
              </p>
              <ul className="space-y-2">
                {[
                  "Provide accurate and complete information",
                  "Respond promptly to requests for information",
                  "Pay fees for services rendered as agreed",
                  "Maintain confidentiality of shared strategies",
                  "Follow professional advice and recommendations",
                  "Respect appointment schedules and communication protocols"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#9E8A5F] rounded-full mt-2 shrink-0" />
                    <span className="font-sans text-[#5C554D] text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* FEES AND PAYMENTS */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center gap-4 mb-6">
              <Scale className="w-6 h-6 text-[#6B2D3E]" />
              <h2 className="font-display text-2xl text-[#1A1A1A]">Fees and Payments</h2>
            </div>
            <div className="bg-white p-6 sm:p-8 border border-[#9E8A5F]/20">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-[#1A1A1A] mb-2">Consultation Fees</h4>
                  <p className="font-sans text-[#5C554D] text-sm leading-relaxed">
                    Initial consultation fees are payable at the time of booking. Detailed fee structures for ongoing services will be provided in engagement letters.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#1A1A1A] mb-2">Payment Methods</h4>
                  <p className="font-sans text-[#5C554D] text-sm leading-relaxed">
                    We accept payments through bank transfers, UPI, and other digital payment methods as specified in invoices.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#1A1A1A] mb-2">Refund Policy</h4>
                  <p className="font-sans text-[#5C554D] text-sm leading-relaxed">
                    Consultation fees are non-refundable once services are rendered. Refunds for prepaid services may be considered with 24-hour notice.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CONFIDENTIALITY */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center gap-4 mb-6">
              <Shield className="w-6 h-6 text-[#6B2D3E]" />
              <h2 className="font-display text-2xl text-[#1A1A1A]">Confidentiality</h2>
            </div>
            <div className="bg-white p-6 sm:p-8 border border-[#9E8A5F]/20">
              <p className="font-sans text-[#5C554D] text-sm leading-relaxed mb-4">
                We maintain strict confidentiality of all client information and communications. However, confidentiality may be limited in circumstances including:
              </p>
              <ul className="space-y-2">
                {[
                  "With your explicit consent",
                  "When required by law or court order",
                  "To prevent imminent harm or illegal activity",
                  "In professional consultation with other legal experts",
                  "For professional insurance or regulatory compliance"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#9E8A5F] rounded-full mt-2 shrink-0" />
                    <span className="font-sans text-[#5C554D] text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* INTELLECTUAL PROPERTY */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center gap-4 mb-6">
              <Shield className="w-6 h-6 text-[#6B2D3E]" />
              <h2 className="font-display text-2xl text-[#1A1A1A">Intellectual Property</h2>
            </div>
            <div className="bg-white p-6 sm:p-8 border border-[#9E8A5F]/20">
              <p className="font-sans text-[#5C554D] text-sm leading-relaxed mb-4">
                All content on this website, including text, graphics, logos, and materials, is owned by Your Fashion Law Guide and protected by copyright and trademark laws.
              </p>
              <p className="font-sans text-[#5C554D] text-sm leading-relaxed">
                You may not use, reproduce, or distribute our content without prior written consent. Legal advice and strategies provided are for your use only and may not be shared or resold.
              </p>
            </div>
          </motion.div>

          {/* DISCLAIMER OF WARRANTIES */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center gap-4 mb-6">
              <AlertCircle className="w-6 h-6 text-[#6B2D3E]" />
              <h2 className="font-display text-2xl text-[#1A1A1A]">Disclaimer of Warranties</h2>
            </div>
            <div className="bg-white p-6 sm:p-8 border border-[#9E8A5F]/20">
              <p className="font-sans text-[#5C554D] text-sm leading-relaxed mb-4">
                Our website and services are provided "as is" without warranties of any kind. We do not guarantee:
              </p>
              <ul className="space-y-2">
                {[
                  "Specific legal outcomes or case results",
                  "Uninterrupted or error-free website operation",
                  "Complete accuracy of all legal information",
                  "Suitability for your specific business needs",
                  "Timeliness of legal advice or responses"
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
              <AlertCircle className="w-6 h-6 text-[#6B2D3E]" />
              <h2 className="font-display text-2xl text-[#1A1A1A]">Limitation of Liability</h2>
            </div>
            <div className="bg-white p-6 sm:p-8 border border-[#9E8A5F]/20">
              <p className="font-sans text-[#5C554D] text-sm leading-relaxed">
                To the fullest extent permitted by law, Your Fashion Law Guide shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our website or services.
              </p>
              <p className="font-sans text-[#5C554D] text-sm leading-relaxed mt-4">
                Our total liability for any claims shall not exceed the amount paid for the specific service giving rise to the claim.
              </p>
            </div>
          </motion.div>

          {/* TERMINATION */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center gap-4 mb-6">
              <Clock className="w-6 h-6 text-[#6B2D3E]" />
              <h2 className="font-display text-2xl text-[#1A1A1A]">Termination</h2>
            </div>
            <div className="bg-white p-6 sm:p-8 border border-[#9E8A5F]/20">
              <p className="font-sans text-[#5C554D] text-sm leading-relaxed mb-4">
                We may terminate or suspend your access to our services immediately, without prior notice, for conduct that we believe:
              </p>
              <ul className="space-y-2">
                {[
                  "Violates these terms of service",
                  "Is unlawful or fraudulent",
                  "Harasses or harms other users",
                  "Compromises website security or functionality"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#9E8A5F] rounded-full mt-2 shrink-0" />
                    <span className="font-sans text-[#5C554D] text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* GOVERNING LAW */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center gap-4 mb-6">
              <Scale className="w-6 h-6 text-[#6B2D3E]" />
              <h2 className="font-display text-2xl text-[#1A1A1A]">Governing Law</h2>
            </div>
            <div className="bg-white p-6 sm:p-8 border border-[#9E8A5F]/20">
              <p className="font-sans text-[#5C554D] text-sm leading-relaxed">
                These Terms of Service shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in India.
              </p>
            </div>
          </motion.div>

          {/* CONTACT INFORMATION */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center gap-4 mb-6">
              <Users className="w-6 h-6 text-[#6B2D3E]" />
              <h2 className="font-display text-2xl text-[#1A1A1A]">Contact Information</h2>
            </div>
            <div className="bg-white p-6 sm:p-8 border border-[#9E8A5F]/20">
              <p className="font-sans text-[#5C554D] text-sm leading-relaxed mb-4">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2 font-sans text-[#5C554D] text-sm">
                <p><strong>Email:</strong> diyakumar531@gmail.com</p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </Layout>
  );
}
