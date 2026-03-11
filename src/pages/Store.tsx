import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { LuxuryButton } from "@/components/ui/LuxuryButton";
import { SEO } from "@/components/SEO";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { storeProducts } from "@/data/storeProducts";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const categories = [
  { num: "01", label: "Legal Toolkits" },
  { num: "02", label: "Contract Templates" },
  { num: "03", label: "Educational Guides" },
  { num: "04", label: "Books" },
];

export default function Store() {
  return (
    <Layout>
      <SEO
        title="Store – Fashion Law Resources & Toolkits"
        description="Practical legal toolkits, contract templates, educational guides, and books for fashion designers, entrepreneurs, and professionals."
        path="/store"
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
              Resources & Materials
            </span>
            <div className="h-px flex-1 bg-[#9E8A5F]/25" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 md:gap-16 items-start">

            {/* Left — title */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="md:col-span-5"
            >
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] leading-[1.1]">
                The <span className="editorial-italic text-[#6B2D3E]">Store</span>.
              </h1>
              <div className="mt-6 h-px w-10 bg-[#6B2D3E]" />

              {/* Category list */}
              <div className="mt-8 divide-y divide-[#9E8A5F]/15">
                {categories.map((cat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 + i * 0.08 }}
                    className="flex items-center gap-4 py-3 group"
                  >
                    <span className="font-display text-xs text-[#9E8A5F]/50 w-5 shrink-0">{cat.num}</span>
                    <span className="font-display text-base sm:text-lg text-[#1A1A1A]/60 group-hover:text-[#1A1A1A] transition-colors duration-300">
                      {cat.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right — intro copy */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
              className="md:col-span-7 space-y-4 sm:space-y-5"
            >
              <p className="font-sans text-[#1A1A1A] text-base sm:text-lg leading-relaxed border-l-2 border-[#6B2D3E] pl-5">
                The store offers practical materials designed to help individuals and businesses understand and apply legal concepts more effectively.
              </p>
              <p className="font-sans text-[#5C554D] text-base sm:text-lg leading-relaxed">
                Resources focus on clarity, usability, and real-world relevance, enabling users to navigate common situations with greater confidence.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
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
              Available Now
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-[#1A1A1A]">
              All <span className="editorial-italic">Resources</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#9E8A5F]/15">
            {storeProducts.map((product, i) => (
              <motion.div
                key={product.slug}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: i * 0.08 } },
                }}
                className="bg-white p-7 sm:p-9 flex flex-col group"
              >
                <Link href={`/store/${product.slug}`} className="flex flex-col h-full">
                  {/* Top row */}
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <span className="text-[#9E8A5F] text-[10px] uppercase tracking-[3px] font-semibold">
                      {product.tag}
                    </span>
                    <span className="border border-[#9E8A5F]/30 text-[#9E8A5F] text-[9px] uppercase tracking-[2px] px-2 py-1 shrink-0">
                      {product.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-lg sm:text-xl text-[#1A1A1A] leading-snug mb-4 flex-1 group-hover:text-[#6B2D3E] transition-colors">
                    {product.title}
                  </h3>

                  {/* Divider */}
                  <div className="w-8 h-px bg-[#9E8A5F]/25 mb-4" />

                  {/* Description */}
                  <p className="font-sans text-[#5C554D] text-sm leading-relaxed mb-7">{product.desc}</p>

                  {/* Bottom row — price + CTA */}
                  <div className="flex items-center justify-between gap-4 mt-auto">
                    <span className="font-display text-xl text-[#6B2D3E] italic">{product.price}</span>
                    <span className="inline-flex items-center gap-2 border border-[#1A1A1A]/20 text-[#1A1A1A] text-[10px] uppercase tracking-[2.5px] px-4 py-2.5 group-hover:bg-[#1A1A1A] group-hover:text-white group-hover:border-[#1A1A1A] transition-all duration-300">
                      View Details
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-300" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NOTE ── */}
      <section className="py-10 sm:py-12 bg-white border-t border-[#9E8A5F]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
          >
            <p className="font-sans text-[#5C554D] text-sm sm:text-base leading-relaxed max-w-xl">
              All resources are delivered as instant digital downloads. For bulk orders, institutional access, or bespoke materials,{" "}
              <a href="/contact" className="text-[#6B2D3E] border-b border-[#6B2D3E]/30 hover:border-[#6B2D3E] transition-colors">
                get in touch
              </a>.
            </p>
            <LuxuryButton href="/contact" variant="outline" className="shrink-0">
              Contact Us
            </LuxuryButton>
          </motion.div>
        </div>
      </section>

    </Layout>
  );
}