import { Layout } from "@/components/layout/Layout";
import { LuxuryButton } from "@/components/ui/LuxuryButton";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useSubscribeNewsletter } from "@/hooks/use-newsletter";
import { useToast } from "@/hooks/use-toast";
import { Link } from "wouter";
import { articles } from "@/data/articles";
import { SEO } from "@/components/SEO";
import { ArrowRight, Plus, Minus } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const faqs = [
  {
    q: "What is fashion law?",
    a: "Fashion law refers to the legal frameworks that affect the fashion industry, including intellectual property, contracts, business regulation, employment, and emerging technology."
  },
  {
    q: "Who is this platform for?",
    a: "The platform is designed for designers, entrepreneurs, lawyers, students, influencers, and anyone interested in understanding the legal aspects of fashion and creative industries."
  },
  {
    q: "Do you provide legal services?",
    a: "This platform focuses on education and insights. Consultation services are available separately for personalised guidance."
  },
  {
    q: "Are the resources beginner friendly?",
    a: "Yes. Content is designed to be accessible to individuals with varying levels of legal knowledge."
  }
];

export default function Home() {
  const { toast } = useToast();
  const subscribeMutation = useSubscribeNewsletter();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const newsletterForm = useForm({
    resolver: zodResolver(z.object({ email: z.string().email() })),
    defaultValues: { email: "" }
  });

  const onSubscribe = (data: { email: string }) => {
    subscribeMutation.mutate(data, {
      onSuccess: () => {
        toast({ title: "Subscribed!", description: "Welcome to our exclusive list." });
        newsletterForm.reset();
      },
      onError: (err) => toast({ variant: "destructive", title: "Error", description: err.message })
    });
  };

  return (
    <Layout>
      <SEO
        title="Fashion Lawyer & IP Protection | India"
        description="Bespoke legal strategies for fashion brands, designers & creatives. IP protection, contracts & fashion tech compliance. Book a consultation."
        path="/"
      />

      {/* WEBINAR BANNER */}
      {/* <motion.section
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-[#6B2D3E] text-white py-3 px-4 sm:py-4 sm:px-6 border-b border-[#5a2533]"
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-center sm:text-left">
          <div className="flex items-center justify-center gap-2">
            <Calendar className="w-5 h-5 shrink-0" />
            <span className="font-display text-sm sm:text-base uppercase tracking-wider">
              Upcoming Webinar — {WEBINAR_DATE}
            </span>
          </div>
          <span className="font-sans text-sm sm:text-base opacity-95">
            {WEBINAR_TITLE}: Protect your brand & designs. Limited seats.
          </span>
          <Link
            href="/workshop"
            className="inline-flex items-center gap-1.5 bg-white text-[#6B2D3E] px-4 py-2 text-xs font-semibold uppercase tracking-widest hover:bg-[#FAF7F2] transition-colors"
          >
            Register <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </motion.section> */}

      {/* HERO SECTION */}
      <section className="relative min-h-[55vh] sm:min-h-[60vh] md:min-h-[70vh] flex items-center pt-2 sm:pt-4 md:pt-8 lg:pt-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="z-10">
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl leading-tight text-[#1A1A1A] mb-4 sm:mb-6">
              Understanding Fashion Through the Lens of <span className="editorial-italic">Law</span>.
            </h1>
            <p className="font-sans text-base sm:text-lg text-[#5C554D] mb-8 sm:mb-10 max-w-md leading-relaxed">
              Insights on intellectual property, brand strategy, collaborations, and the legal realities that shape the fashion industry.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <LuxuryButton href="/journal">Explore the Journal</LuxuryButton>
              <LuxuryButton href="/contact" variant="outline">Join the Community</LuxuryButton>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[260px] sm:h-[320px] md:h-[420px] lg:h-[500px] w-full order-first md:order-none"
          >
            <div className="absolute inset-0 bg-[#F3EDE4] translate-x-2 translate-y-2 sm:translate-x-4 sm:translate-y-4" />
            <img
              src="https://i0.wp.com/yourfashionlawguide.com/wp-content/uploads/2025/07/img_0437-1.jpg?resize=1200%2C1800&ssl=1"
              alt="Fashion Runway"
              className="absolute inset-0 w-full h-full object-cover shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="bg-[#1A1A1A] py-4 sm:py-6 overflow-hidden flex whitespace-nowrap">
        <div className="animate-marquee flex gap-8 sm:gap-12 items-center text-[#FAF7F2] font-display text-sm sm:text-base md:text-xl uppercase tracking-widest">
          <span>◆ INTELLECTUAL PROPERTY</span>
          <span>◆ BRAND PROTECTION</span>
          <span>◆ CONTRACT NEGOTIATION</span>
          <span>◆ FASHION TECH COMPLIANCE</span>
          <span>◆ SUSTAINABILITY LAW</span>
          <span>◆ INTELLECTUAL PROPERTY</span>
          <span>◆ BRAND PROTECTION</span>
          <span>◆ CONTRACT NEGOTIATION</span>
        </div>
      </div>

      {/* PLATFORM INTRO */}
      <section className="py-12 sm:py-16 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="flex items-center gap-5 mb-6 sm:mb-10"
          >
            <div className="h-px flex-1 bg-[#9E8A5F]/30" />
            <span className="text-[#9E8A5F] text-[10px] uppercase tracking-[5px] font-semibold shrink-0">
              About the Platform
            </span>
            <div className="h-px flex-1 bg-[#9E8A5F]/30" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 md:gap-12 items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="md:col-span-5 md:sticky md:top-16"
            >
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#1A1A1A] leading-[1.15]">
                A Space for{" "}
                <span className="editorial-italic text-[#6B2D3E]">Law</span>,{" "}
                Creativity,{" "}
                <br className="hidden md:block" />
                and Industry{" "}
                <span className="editorial-italic">Insight</span>.
              </h2>
              <div className="mt-8 sm:mt-10 hidden sm:flex items-start gap-3">
                <div className="w-px h-16 bg-[#9E8A5F]/40 mt-1" />
                <p className="font-sans text-[#9E8A5F] text-xs uppercase tracking-[3px] leading-relaxed">
                  Law · Fashion · Strategy
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut", delay: 0.15 } }
              }}
              className="md:col-span-7 md:pl-6 lg:pl-10"
            >
              <div className="space-y-4 sm:space-y-6">
                <p className="font-sans text-[#1A1A1A] text-lg sm:text-xl leading-relaxed border-l-2 border-[#6B2D3E] pl-5">
                  Your Fashion Law Guide is an educational and thought-leadership platform
                  dedicated to exploring how law operates within the fashion and creative industries.
                </p>
                <p className="font-sans text-[#5C554D] text-base sm:text-lg leading-relaxed">
                  The fashion ecosystem is shaped not only by creativity and design, but also by
                  intellectual property, contracts, business strategy, and regulation. Yet, legal
                  concepts often feel complex, inaccessible, or disconnected from the realities of
                  the industry.
                </p>
                <p className="font-sans text-[#5C554D] text-base sm:text-lg leading-relaxed">
                  This platform was created to bridge that gap. Through articles, resources,
                  workshops, and practical discussions, it aims to translate legal frameworks into
                  insights that are understandable, relevant, and applicable to real-world situations.
                </p>
                <p className="font-sans text-[#5C554D] text-base sm:text-lg leading-relaxed">
                  Whether you are a designer, entrepreneur, student, lawyer, or industry professional,
                  the goal is to help you understand how legal awareness strengthens creative and
                  business decisions.
                </p>
              </div>
              <div className="mt-6 sm:mt-8 flex flex-wrap gap-2 sm:gap-3">
                {["Designers", "Entrepreneurs", "Students", "Lawyers", "Industry Professionals"].map((tag) => (
                  <span
                    key={tag}
                    className="border border-[#9E8A5F]/40 text-[#5C554D] text-[10px] uppercase tracking-[2.5px] px-3 py-1.5 hover:border-[#6B2D3E] hover:text-[#6B2D3E] transition-colors cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="mt-8 sm:mt-12 h-px bg-[#9E8A5F]/20 origin-left"
          />
        </div>
      </section>

      {/* HOW THE PLATFORM WORKS */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#FAF7F2] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="mb-6 sm:mb-10"
          >
            <span className="text-[#9E8A5F] text-[10px] uppercase tracking-[5px] font-semibold">
              How This Platform Works
            </span>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 md:gap-12 items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="md:col-span-4 md:sticky md:top-16"
            >
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#1A1A1A] leading-[1.15]">
                How the Platform <span className="editorial-italic">Works</span>.
              </h2>
              <div className="mt-8 h-px w-12 bg-[#6B2D3E]" />
            </motion.div>

            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#9E8A5F]/15">
              {[
                {
                  step: "01",
                  title: "Learn",
                  desc: "Explore articles that break down legal concepts, industry developments, and real-world case studies in fashion law."
                },
                {
                  step: "02",
                  title: "Understand",
                  desc: "Access resources designed to explain how intellectual property, contracts, and regulation operate in practical scenarios."
                },
                {
                  step: "03",
                  title: "Engage",
                  desc: "Participate in workshops and educational sessions that focus on application rather than theory."
                },
                {
                  step: "04",
                  title: "Apply",
                  desc: "For personalised guidance, consultation packages are available for individuals, brands, and professionals seeking tailored insights."
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  variants={{
                    hidden: { opacity: 0, y: 24 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut", delay: i * 0.12 } }
                  }}
                  className="bg-white p-6 sm:p-8 group hover:bg-[#6B2D3E] transition-colors duration-500"
                >
                  <span className="font-display text-4xl sm:text-5xl text-[#9E8A5F]/25 group-hover:text-white/20 transition-colors duration-500 block mb-5 leading-none">
                    {item.step}
                  </span>
                  <h4 className="font-display text-xl sm:text-2xl text-[#1A1A1A] group-hover:text-white mb-3 transition-colors duration-500">
                    {item.title}
                  </h4>
                  <div className="w-8 h-px bg-[#9E8A5F] group-hover:bg-white/50 transition-colors duration-500 mb-4" />
                  <p className="font-sans text-[#5C554D] text-sm sm:text-base leading-relaxed group-hover:text-white/80 transition-colors duration-500">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SNIPPET */}
      <section className="py-10 sm:py-14 md:py-18 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 items-center">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            className="md:col-span-5"
          >
            <img
              src="https://i0.wp.com/yourfashionlawguide.com/wp-content/uploads/2025/05/SAVE_20250527_165648-1-edited.jpg?resize=1179%2C1572&ssl=1"
              alt="Diya"
              className="w-full h-auto object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            className="md:col-span-7 md:pl-8 lg:pl-12"
          >
            <h2 className="text-[#9E8A5F] text-xs uppercase tracking-[4px] font-semibold mb-3 sm:mb-4">Meet Your Guide</h2>
            <h3 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#1A1A1A] mb-4 sm:mb-5">
              Advocating for the <span className="editorial-italic">creators</span>.
            </h3>
            <p className="font-sans text-[#5C554D] text-base sm:text-lg leading-relaxed mb-4 sm:mb-5">
              Founded by Diya, a dedicated fashion attorney, Your Fashion Law Guide exists to bridge the gap between creative vision and legal security. We understand that in the world of fashion, your ideas are your currency.
            </p>
            <LuxuryButton href="/about" variant="outline" className="gap-2">
              Read Her Story <ArrowRight size={16} />
            </LuxuryButton>
          </motion.div>
        </div>
      </section>

      {/* SERVICES STRIP */}
      {/* <section className="py-10 sm:py-12 md:py-16 bg-white border-y border-[#9E8A5F]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="text-center mb-6 sm:mb-10">
            <h2 className="font-display text-3xl sm:text-4xl text-[#1A1A1A]">Our <span className="editorial-italic">Expertise</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3">
            {[
              { title: "Brand Protection", desc: "Trademark registration and copyright enforcement to secure your identity." },
              { title: "Commercial Contracts", desc: "Drafting robust agreements for suppliers, models, and partnerships." },
              { title: "Fashion Tech", desc: "Navigating AI, NFTs, and digital compliance in modern fashion." }
            ].map((srv, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.2 }}
                className={`p-6 sm:p-8 md:p-10 text-center group ${i !== 2 ? 'md:border-r border-[#9E8A5F]/20' : ''} ${i !== 0 ? 'border-t md:border-t-0 border-[#9E8A5F]/20' : ''}`}
              >
                <h4 className="font-display text-xl sm:text-2xl text-[#1A1A1A] mb-3 sm:mb-4 group-hover:text-[#6B2D3E] transition-colors">{srv.title}</h4>
                <p className="font-sans text-[#5C554D] text-sm leading-relaxed">{srv.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* LEARNING & RESOURCES */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#1A1A1A] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 md:gap-14 items-center">

            {/* Left — label, title, body, CTA */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="md:col-span-5"
            >
              <span className="text-[#9E8A5F] text-[10px] uppercase tracking-[5px] font-semibold block mb-5">
                Learning and Resources
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white leading-[1.15] mb-4 sm:mb-5">
                Beyond the <span className="editorial-italic text-[#9E8A5F]">Article</span>.
              </h2>
              <p className="font-sans text-white/60 text-base sm:text-lg leading-relaxed mb-10">
                Beyond articles, the platform offers structured learning opportunities and practical
                materials designed to bridge theory and industry application.
              </p>
              <Link
                href="/store"
                className="inline-flex items-center gap-2 border border-white/20 text-white text-xs uppercase tracking-widest px-6 py-3.5 hover:bg-white hover:text-[#1A1A1A] transition-all duration-300 group w-fit"
              >
                Explore Resources
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>

            {/* Right — stacked resource rows */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut", delay: 0.15 } }
              }}
              className="md:col-span-7"
            >
              <div className="divide-y divide-white/10">
                {[
                  "Workshops and Masterclasses",
                  "Educational Guides and Toolkits",
                  "Legal Templates and Resources",
                  "Career Insights for Students and Professionals",
                  "Industry Analysis and Commentary",
                ].map((label, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 + i * 0.08 }}
                    className="flex items-center justify-between gap-6 py-4 sm:py-5 group cursor-default"
                  >
                    <div className="flex items-center gap-5 sm:gap-8 flex-1 min-w-0">
                      <span className="font-display text-xs text-[#9E8A5F]/40 group-hover:text-[#9E8A5F] transition-colors duration-300 shrink-0">
                        0{i + 1}
                      </span>
                      <span className="font-display text-lg sm:text-xl md:text-2xl text-white/60 group-hover:text-white transition-colors duration-300 truncate">
                        {label}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#9E8A5F]/0 group-hover:text-[#9E8A5F] transition-all duration-300 -translate-x-2 group-hover:translate-x-0 shrink-0" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* RECENT JOURNAL STRIP */}
      <section className="py-10 sm:py-14 md:py-18 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-6 sm:mb-10">
            <h2 className="font-display text-3xl sm:text-4xl text-[#1A1A1A]">From the <span className="editorial-italic">Journal</span></h2>
            <Link href="/journal" className="text-[#1A1A1A] hover:text-[#6B2D3E] text-xs uppercase tracking-widest font-semibold pb-1 border-b border-[#1A1A1A] hover:border-[#6B2D3E] transition-colors w-fit">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {articles.slice(0, 4).map((post, i) => (
              <motion.div
                key={post.slug}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={`/journal/${post.slug}`} className="group cursor-pointer block">
                  <div className="overflow-hidden mb-4 sm:mb-6 aspect-[4/5] bg-[#F3EDE4]">
                    <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="text-[10px] text-[#9E8A5F] uppercase tracking-widest mb-2 sm:mb-3">{post.date}</div>
                  <h4 className="font-display text-lg sm:text-xl text-[#1A1A1A] group-hover:text-[#6B2D3E] transition-colors">{post.title}</h4>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-10 sm:py-12 md:py-16 bg-[#F3EDE4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 text-center">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-[#1A1A1A] mb-6 sm:mb-10">Client <span className="editorial-italic">Perspectives</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { img: "https://i0.wp.com/yourfashionlawguide.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-28-at-5.42.06-AM.jpeg", name: "Nandini", review: "YFLG made fashion law finally make sense. " },
              { img: "https://i0.wp.com/yourfashionlawguide.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-28-at-5.42.05-AM-3.jpeg", name: "Ankita", review: "A rare platform that explains fashion law in a way that’s actually easy to understand." },
              { img: "https://i0.wp.com/yourfashionlawguide.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-28-at-8.10.27-AM-1-1-1.jpeg", name: "Hunnar", review: "The perfect starting point for anyone curious about fashion law." },
              { img: "https://i0.wp.com/yourfashionlawguide.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-28-at-8.10.27-AM-2-1.jpeg", name: "Raashee", review: "YFLG bridges the gap between fashion and the law beautifully." },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white p-4 sm:p-5 border border-[#9E8A5F]/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden mb-4 sm:mb-6 border-2 border-[#FAF7F2]">
                  <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <p className="font-display italic text-[#5C554D] text-base sm:text-lg mb-3 sm:mb-4 text-center">"Impeccable legal foresight for our brand's launch."</p>
                <h5 className="text-[11px] uppercase tracking-widest text-[#1A1A1A] font-semibold">— {t.name}</h5>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      {/* <section className="py-10 sm:py-12 md:py-16 bg-white border-y border-[#9E8A5F]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-8 sm:mb-10"
          >
            <h2 className="font-display text-3xl sm:text-4xl text-[#1A1A1A] mb-4">Recent <span className="editorial-italic">Success Stories</span></h2>
            <p className="font-sans text-[#5C554D] max-w-2xl mx-auto">
              Real outcomes for fashion brands we've represented
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Luxury Brand IP Protection",
                client: "Premium Fashion House",
                outcome: "Successfully secured trademark registration across 15 jurisdictions",
                timeline: "3 months"
              },
              {
                title: "Manufacturing Agreement",
                client: "Emerging Designer",
                outcome: "Negotiated favorable terms saving ₹2Cr in potential losses",
                timeline: "6 weeks"
              },
              {
                title: "NFT Collection Launch",
                client: "Digital Fashion Brand",
                outcome: "Comprehensive legal framework for ₹5Cr NFT drop",
                timeline: "2 months"
              }
            ].map((study, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: i * 0.1 }}
                className="bg-[#FAF7F2] p-4 sm:p-5 border border-[#9E8A5F]/10 hover:shadow-lg transition-all duration-300"
              >
                <h4 className="font-display text-lg text-[#1A1A1A] mb-3">{study.title}</h4>
                <div className="text-xs text-[#9E8A5F] uppercase tracking-widest mb-3">{study.client}</div>
                <p className="font-sans text-[#5C554D] text-sm leading-relaxed mb-4">{study.outcome}</p>
                <div className="flex items-center justify-between text-xs text-[#6B2D3E]">
                  <span className="uppercase tracking-widest">{study.timeline}</span>
                  <span>✓ Completed</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* FAQ */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 md:gap-14 items-start">

            {/* Left — label + title */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="md:col-span-4 md:sticky md:top-16"
            >
              <span className="text-[#9E8A5F] text-[10px] uppercase tracking-[5px] font-semibold block mb-5">
                FAQ
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#1A1A1A] leading-[1.15]">
                Frequently Asked <span className="editorial-italic">Questions</span>.
              </h2>
              <div className="mt-8 h-px w-12 bg-[#6B2D3E]" />
              <p className="mt-6 font-sans text-[#5C554D] text-sm sm:text-base leading-relaxed">
                Can't find what you're looking for?{" "}
                <Link href="/contact" className="text-[#6B2D3E] border-b border-[#6B2D3E]/40 hover:border-[#6B2D3E] transition-colors">
                  Get in touch.
                </Link>
              </p>
            </motion.div>

            {/* Right — accordion */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut", delay: 0.15 } }
              }}
              className="md:col-span-8"
            >
              <div className="divide-y divide-[#9E8A5F]/20 border-t border-[#9E8A5F]/20">
                {faqs.map((faq, i) => {
                  const isOpen = openFaq === i;
                  return (
                    <div key={i}>
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : i)}
                        className="w-full flex items-center justify-between gap-6 py-4 sm:py-5 text-left group"
                      >
                        <span className="font-display text-lg sm:text-xl text-[#1A1A1A] group-hover:text-[#6B2D3E] transition-colors duration-300 leading-snug">
                          {faq.q}
                        </span>
                        <span className={`shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300 ${
                          isOpen
                            ? "bg-[#6B2D3E] border-[#6B2D3E] text-white"
                            : "border-[#9E8A5F]/40 text-[#9E8A5F] group-hover:border-[#6B2D3E] group-hover:text-[#6B2D3E]"
                        }`}>
                          {isOpen
                            ? <Minus className="w-3.5 h-3.5" />
                            : <Plus className="w-3.5 h-3.5" />
                          }
                        </span>
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            key="answer"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <p className="font-sans text-[#5C554D] text-base sm:text-lg leading-relaxed pb-4 sm:pb-5 max-w-2xl">
                              {faq.a}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-10 sm:py-14 md:py-18 bg-[#6B2D3E] text-center px-4 sm:px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-2xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl text-white mb-4 sm:mb-6">Join the <span className="italic font-light">Inner Circle</span></h2>
          <p className="font-sans text-white/80 text-sm sm:text-base mb-8 sm:mb-10">Receive exclusive insights on fashion law, IP protection, and industry updates directly in your inbox.</p>
          <form onSubmit={newsletterForm.handleSubmit(onSubscribe)} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-xs sm:max-w-none mx-auto sm:mx-0">
            <input
              {...newsletterForm.register("email")}
              type="email"
              placeholder="Your email address"
              className="bg-transparent border-b border-white/30 text-white placeholder:text-white/50 px-4 py-3 focus:outline-none focus:border-white w-full sm:w-80 transition-colors rounded-none text-base"
            />
            <button
              type="submit"
              disabled={subscribeMutation.isPending}
              className="bg-white text-[#6B2D3E] px-8 py-3 text-xs uppercase tracking-widest font-semibold hover:bg-[#F3EDE4] transition-colors disabled:opacity-50"
            >
              {subscribeMutation.isPending ? "Subscribing..." : "Subscribe"}
            </button>
          </form>
          {newsletterForm.formState.errors.email && (
            <p className="text-white/80 text-sm mt-3">{newsletterForm.formState.errors.email.message}</p>
          )}
        </motion.div>
      </section>

    </Layout>
  );
}