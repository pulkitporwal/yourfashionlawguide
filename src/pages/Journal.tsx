import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { articles } from "@/data/articles";
import { SEO } from "@/components/SEO";

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };

export default function Journal() {
  return (
    <Layout>
      <SEO title="Journal – Fashion Law Insights" description="Insights, analysis and updates on fashion law, IP protection, trademarks and brand strategy." path="/journal" />
      <section className="pt-16 sm:pt-20 md:pt-24 pb-10 sm:pb-16 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl text-[#1A1A1A] mb-6 sm:mb-8"
          >
            The <span className="editorial-italic">Journal</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-sans text-base sm:text-lg text-[#5C554D] max-w-2xl mx-auto px-2"
          >
            Insights, analysis, and updates on the ever-evolving landscape of fashion law.
          </motion.p>
        </div>
      </section>

      <section className="pb-20 sm:pb-24 md:pb-32 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-x-8 md:gap-y-16">
            {articles.map((post, i) => (
              <motion.div
                key={post.slug}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeUp}
                transition={{ delay: (i % 3) * 0.1, duration: 0.6 }}
                className="group/card"
              >
                <Link href={`/journal/${post.slug}`} className="group cursor-pointer block">
                  <div className="overflow-hidden mb-4 sm:mb-6 aspect-[4/3] bg-[#F3EDE4]">
                    <img
                      src={post.img}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="text-[10px] text-[#9E8A5F] uppercase tracking-widest mb-2 sm:mb-3 flex items-center gap-2">
                    <span>{post.date}</span>
                    <div className="h-[1px] bg-[#9E8A5F]/30 flex-grow" />
                  </div>
                  <h4 className="font-display text-xl sm:text-2xl text-[#1A1A1A] group-hover:text-[#6B2D3E] transition-colors">
                    {post.title}
                  </h4>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
