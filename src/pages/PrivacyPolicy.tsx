import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { SEO } from "@/components/SEO";
import { Shield, Eye, Database, Lock, Globe, Mail } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };

export default function PrivacyPolicy() {
  return (
    <Layout>
      <SEO 
        title="Privacy Policy – Your Fashion Law Guide" 
        description="Our comprehensive privacy policy explaining how we collect, use, and protect your personal information in compliance with Indian data protection laws." 
        path="/privacy-policy" 
      />
      
      {/* HERO SECTION */}
      <section className="pt-16 sm:pt-20 md:pt-24 pb-10 sm:pb-16 bg-[#FAF7F2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="text-center">
            <Shield className="w-12 h-12 text-[#6B2D3E] mx-auto mb-6" />
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#1A1A1A] mb-6 sm:mb-8">
              Privacy <span className="editorial-italic">Policy</span>
            </h1>
            <p className="font-sans text-base sm:text-lg text-[#5C554D] max-w-2xl mx-auto leading-relaxed">
              Your privacy is fundamental to our practice. This policy explains how we collect, use, and protect your personal information in compliance with applicable data protection laws.
            </p>
            <p className="font-sans text-sm text-[#9E8A5F] mt-4">Last updated: February 2026</p>
          </motion.div>
        </div>
      </section>

      {/* CONTENT SECTIONS */}
      <section className="pb-20 sm:pb-28 md:pb-32 bg-[#FAF7F2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 space-y-12 sm:space-y-16">
          
          {/* INFORMATION WE COLLECT */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center gap-4 mb-6">
              <Eye className="w-6 h-6 text-[#6B2D3E]" />
              <h2 className="font-display text-2xl text-[#1A1A1A]">Information We Collect</h2>
            </div>
            <div className="bg-white p-6 sm:p-8 border border-[#9E8A5F]/20">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-[#1A1A1A] mb-2">Personal Information</h3>
                  <p className="font-sans text-[#5C554D] text-sm leading-relaxed">
                    Name, email address, phone number, professional details, and communication preferences when you contact us, subscribe to our newsletter, or book consultations.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-[#1A1A1A] mb-2">Professional Information</h3>
                  <p className="font-sans text-[#5C554D] text-sm leading-relaxed">
                    Business name, brand details, and industry-specific information relevant to providing legal services for fashion brands and designers.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-[#1A1A1A] mb-2">Technical Information</h3>
                  <p className="font-sans text-[#5C554D] text-sm leading-relaxed">
                    IP address, browser type, device information, and usage data to improve our website performance and user experience.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* HOW WE USE YOUR INFORMATION */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center gap-4 mb-6">
              <Database className="w-6 h-6 text-[#6B2D3E]" />
              <h2 className="font-display text-2xl text-[#1A1A1A]">How We Use Your Information</h2>
            </div>
            <div className="bg-white p-6 sm:p-8 border border-[#9E8A5F]/20">
              <ul className="space-y-3">
                {[
                  "To provide legal consultation and services",
                  "To respond to inquiries and schedule appointments",
                  "To send newsletter updates and legal insights",
                  "To improve our website and service offerings",
                  "To comply with legal and regulatory requirements",
                  "To protect against fraudulent activities"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#9E8A5F] rounded-full mt-2 shrink-0" />
                    <span className="font-sans text-[#5C554D] text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* DATA PROTECTION */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center gap-4 mb-6">
              <Lock className="w-6 h-6 text-[#6B2D3E]" />
              <h2 className="font-display text-2xl text-[#1A1A1A]">Data Protection & Security</h2>
            </div>
            <div className="bg-white p-6 sm:p-8 border border-[#9E8A5F]/20">
              <p className="font-sans text-[#5C554D] text-sm leading-relaxed mb-4">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes:
              </p>
              <ul className="space-y-2">
                {[
                  "Secure SSL encryption for data transmission",
                  "Restricted access to personal information",
                  "Regular security audits and updates",
                  "Secure storage systems with backup protocols",
                  "Employee training on data protection"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#9E8A5F] rounded-full mt-2 shrink-0" />
                    <span className="font-sans text-[#5C554D] text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* YOUR RIGHTS */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center gap-4 mb-6">
              <Globe className="w-6 h-6 text-[#6B2D3E]" />
              <h2 className="font-display text-2xl text-[#1A1A1A]">Your Rights</h2>
            </div>
            <div className="bg-white p-6 sm:p-8 border border-[#9E8A5F]/20">
              <p className="font-sans text-[#5C554D] text-sm leading-relaxed mb-4">
                Under the Digital Personal Data Protection Act 2023 and applicable regulations, you have the right to:
              </p>
              <ul className="space-y-2">
                {[
                  "Access and obtain a copy of your personal information",
                  "Request correction of inaccurate information",
                  "Request deletion of your personal information",
                  "Object to processing of your information",
                  "Request data portability",
                  "Withdraw consent where processing is based on consent"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#9E8A5F] rounded-full mt-2 shrink-0" />
                    <span className="font-sans text-[#5C554D] text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* COOKIES */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center gap-4 mb-6">
              <Globe className="w-6 h-6 text-[#6B2D3E]" />
              <h2 className="font-display text-2xl text-[#1A1A1A]">Cookies & Tracking</h2>
            </div>
            <div className="bg-white p-6 sm:p-8 border border-[#9E8A5F]/20">
              <p className="font-sans text-[#5C554D] text-sm leading-relaxed mb-4">
                We use cookies and similar technologies to enhance your browsing experience and analyze website traffic. You can control cookie settings through your browser preferences.
              </p>
              <div className="space-y-2">
                <div>
                  <h4 className="font-semibold text-[#1A1A1A] mb-1">Essential Cookies</h4>
                  <p className="font-sans text-[#5C554D] text-sm">Required for website functionality and security.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#1A1A1A] mb-1">Analytics Cookies</h4>
                  <p className="font-sans text-[#5C554D] text-sm">Help us understand how visitors interact with our website.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#1A1A1A] mb-1">Marketing Cookies</h4>
                  <p className="font-sans text-[#5C554D] text-sm">Used to personalize advertisements and content.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* THIRD-PARTY SHARING */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center gap-4 mb-6">
              <Mail className="w-6 h-6 text-[#6B2D3E]" />
              <h2 className="font-display text-2xl text-[#1A1A1A]">Third-Party Sharing</h2>
            </div>
            <div className="bg-white p-6 sm:p-8 border border-[#9E8A5F]/20">
              <p className="font-sans text-[#5C554D] text-sm leading-relaxed mb-4">
                We do not sell, rent, or trade your personal information. We may share your information only with:
              </p>
              <ul className="space-y-2">
                {[
                  "Service providers who assist in our operations (e.g., email marketing, web hosting)",
                  "Legal authorities when required by law or to protect our rights",
                  "Professional advisors for business purposes",
                  "Successors in interest in case of business transfer"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#9E8A5F] rounded-full mt-2 shrink-0" />
                    <span className="font-sans text-[#5C554D] text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* CONTACT INFORMATION */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center gap-4 mb-6">
              <Mail className="w-6 h-6 text-[#6B2D3E]" />
              <h2 className="font-display text-2xl text-[#1A1A1A]">Contact Us</h2>
            </div>
            <div className="bg-white p-6 sm:p-8 border border-[#9E8A5F]/20">
              <p className="font-sans text-[#5C554D] text-sm leading-relaxed mb-4">
                If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
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
