import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link, useRoute } from "wouter";
import { getArticleBySlug } from "@/data/articles";
import { SEO } from "@/components/SEO";
import { ArrowLeft } from "lucide-react";

export default function Article() {
  const [, params] = useRoute("/journal/:slug");
  const slug = params?.slug ?? "";
  const article = getArticleBySlug(slug);

  if (!article) {
    return (
      <Layout>
        <section className="pt-24 pb-32 px-4 sm:px-6 md:px-12 min-h-[60vh] flex items-center justify-center">
          <div className="text-center max-w-md">
            <h1 className="font-display text-3xl sm:text-4xl text-[#1A1A1A] mb-4">Article not found</h1>
            <p className="font-sans text-[#5C554D] mb-8">The article you're looking for doesn't exist or has been moved.</p>
            <Link href="/journal" className="inline-flex items-center gap-2 text-[#6B2D3E] font-semibold text-sm uppercase tracking-widest hover:underline">
              <ArrowLeft size={16} /> Back to Journal
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <Layout>
      <SEO
        title={article.title}
        description={article.excerpt}
        path={`/journal/${article.slug}`}
        image={article.img}
        type="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: article.title,
          description: article.excerpt,
          image: [article.img],
          datePublished: article.date,
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://yourfashionlawguide.com/journal/${article.slug}`,
          },
          author: {
            "@type": "Organization",
            name: "Your Fashion Law Guide",
          },
          publisher: {
            "@type": "Organization",
            name: "Your Fashion Law Guide",
            logo: {
              "@type": "ImageObject",
              url: "https://yourfashionlawguide.com/favicon.png",
            },
          },
        }}
      />
      <article className="pt-20 sm:pt-24 pb-16 sm:pb-24 md:pb-32 bg-[#FAF7F2]" itemScope itemType="https://schema.org/Article">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-8 sm:mb-10"
          >
            <Link
              href="/journal"
              className="inline-flex items-center gap-2 text-[#9E8A5F] hover:text-[#6B2D3E] text-xs uppercase tracking-widest font-semibold transition-colors mb-6 sm:mb-8"
            >
              <ArrowLeft size={14} /> Back to Journal
            </Link>
            <p className="text-[#9E8A5F] text-xs uppercase tracking-widest mb-3">{article.date}</p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#1A1A1A] leading-tight">
              {article.title}
            </h1>
            {article.excerpt && (
              <p className="font-sans text-lg text-[#5C554D] mt-4 leading-relaxed">
                {article.excerpt}
              </p>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="overflow-hidden mb-8 sm:mb-12 aspect-[16/10] sm:aspect-[2/1] bg-[#F3EDE4]"
          >
            <img
              src={article.img}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.1 }}
            className="prose prose-lg max-w-none font-sans text-[#5C554D] leading-relaxed space-y-6"
          >
            {article.content.split("\n\n").map((paragraph, i) => (
              <p key={i} className="text-base sm:text-lg">
                {paragraph}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-12 pt-8 border-t border-[#9E8A5F]/20"
          >
            <Link
              href="/journal"
              className="inline-flex items-center gap-2 text-[#6B2D3E] font-semibold text-sm uppercase tracking-widest hover:underline"
            >
              <ArrowLeft size={16} /> All articles
            </Link>
          </motion.div>
        </div>
      </article>
    </Layout>
  );
}
