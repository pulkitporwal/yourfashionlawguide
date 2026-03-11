import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import {
  Calendar, Clock, Mail, User, Phone, CheckCircle2, ArrowRight,
} from "lucide-react";
import { LuxuryButton } from "@/components/ui/LuxuryButton";

const mentorshipSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number required"),
  package: z.string().min(1, "Please select a session"),
  preferredDate: z.string().min(1, "Preferred date required"),
  preferredTime: z.string().optional(),
  message: z.string().min(10, "Please briefly describe your goals"),
});

type MentorshipFormData = z.infer<typeof mentorshipSchema>;

const PAYMENT_URL =
  "https://razorpay.me/@yourfashionlawguide?amount=6SJpcXZpLevCLtfSbzBENg%3D%3D";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const packages = [
  {
    num: "01",
    title: "Career Clarity Session",
    desc: "A focused session designed to help you understand possible career pathways and identify direction best aligned with your interests and strengths.",
    includes: [
      "Understanding niche legal fields",
      "Career options in fashion law and IP",
      "Identifying strengths and interests",
      "Initial roadmap guidance",
    ],
  },
  {
    num: "02",
    title: "Career Strategy Session",
    desc: "A more detailed discussion aimed at building a structured plan for career progression.",
    includes: [
      "Resume and profile positioning advice",
      "Skill development recommendations",
      "Internship and opportunity strategies",
      "Higher education planning guidance",
      "Long-term career roadmap",
    ],
  },
  {
    num: "03",
    title: "Advanced Mentorship Session",
    desc: "Designed for individuals seeking deeper strategic discussion, including academic or international career planning.",
    includes: [
      "LL.M. planning and application strategy",
      "International opportunities discussion",
      "Niche practice positioning",
      "Personalised career planning",
    ],
  },
];

const whoFor = [
  "Law students exploring specialisations",
  "Young lawyers considering niche practice areas",
  "Professionals transitioning into IP or creative industries",
  "Individuals interested in fashion law careers",
  "Students planning higher education abroad",
  "Anyone seeking structured career direction in specialised legal fields",
];

// ─────────────────────────────────────────────
// Single form component — used for BOTH desktop
// sticky sidebar and mobile. Fixes the reset bug.
// ─────────────────────────────────────────────
function MentorshipForm() {
  const { toast } = useToast();

  const form = useForm<MentorshipFormData>({
    resolver: zodResolver(mentorshipSchema),
    shouldUnregister: false, // ← KEY FIX: prevents fields from clearing on re-render
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      package: "",
      preferredDate: "",
      preferredTime: "",
      message: "",
    },
  });

  // ← KEY FIX: No setTimeout. No implicit form reset.
  // Validation runs, payment opens, form stays exactly as-is.
  const onSubmit = (_data: MentorshipFormData) => {
    toast({
      title: "Request Received",
      description: "Redirecting you to payment...",
    });
    window.open(PAYMENT_URL, "_blank", "noopener,noreferrer");
  };

  const inputClass =
    "w-full bg-transparent border-b border-[#9E8A5F]/40 py-3 pl-7 pr-0 text-[#1A1A1A] text-sm placeholder:text-[#5C554D]/50 focus:outline-none focus:border-[#6B2D3E] transition-colors";

  const selectClass =
    "w-full bg-transparent border-b border-[#9E8A5F]/40 py-3 pl-7 pr-0 text-[#1A1A1A] text-sm focus:outline-none focus:border-[#6B2D3E] transition-colors appearance-none";

  const err = (msg?: string) =>
    msg ? <p className="text-red-500 text-xs mt-1">{msg}</p> : null;

  return (
    // ← KEY FIX: e.preventDefault() is called explicitly before
    // handing off to RHF, preventing any native form reset behavior.
    <form
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit(onSubmit)(e);
      }}
      className="space-y-5"
    >
      {/* Name */}
      <div className="relative">
        <User className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9E8A5F]" />
        <input {...form.register("name")} placeholder="Full Name" className={inputClass} />
        {err(form.formState.errors.name?.message)}
      </div>

      {/* Email */}
      <div className="relative">
        <Mail className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9E8A5F]" />
        <input {...form.register("email")} type="email" placeholder="Email Address" className={inputClass} />
        {err(form.formState.errors.email?.message)}
      </div>

      {/* Phone */}
      <div className="relative">
        <Phone className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9E8A5F]" />
        <input {...form.register("phone")} type="tel" placeholder="Phone Number" className={inputClass} />
        {err(form.formState.errors.phone?.message)}
      </div>

      {/* Package */}
      <div className="relative">
        <ArrowRight className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9E8A5F]" />
        <select {...form.register("package")} className={selectClass}>
          <option value="">Select a Session</option>
          <option value="clarity">Career Clarity Session</option>
          <option value="strategy">Career Strategy Session</option>
          <option value="advanced">Advanced Mentorship Session</option>
        </select>
        {err(form.formState.errors.package?.message)}
      </div>

      {/* Date + Time */}
      <div className="grid grid-cols-2 gap-4">
        <div className="relative">
          <Calendar className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9E8A5F]" />
          <input {...form.register("preferredDate")} type="date" className={inputClass} />
          {err(form.formState.errors.preferredDate?.message)}
        </div>
        <div className="relative">
          <Clock className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9E8A5F]" />
          <select {...form.register("preferredTime")} className={selectClass}>
            <option value="">Time</option>
            <option value="13:30">1:30 PM</option>
            <option value="20:30">8:30 PM</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <textarea
          {...form.register("message")}
          placeholder="Briefly describe your career goals or questions"
          rows={3}
          className="w-full bg-transparent border-b border-[#9E8A5F]/40 py-3 text-[#1A1A1A] text-sm placeholder:text-[#5C554D]/50 focus:outline-none focus:border-[#6B2D3E] transition-colors resize-none"
        />
        {err(form.formState.errors.message?.message)}
      </div>

      <LuxuryButton type="submit" className="w-full mt-2">
        Book a Mentorship Session
      </LuxuryButton>

      <p className="text-center font-sans text-[10px] text-[#9E8A5F] uppercase tracking-[2px] pt-1">
        We'll confirm your slot via email
      </p>
    </form>
  );
}

// Shared shell: dark header + white body wrapping the form
function FormShell() {
  return (
    <div className="bg-white border border-[#9E8A5F]/20 shadow-sm overflow-hidden">
      <div className="bg-[#1A1A1A] px-7 sm:px-8 py-6">
        <span className="text-[#9E8A5F] text-[10px] uppercase tracking-[5px] font-semibold block mb-1.5">
          Get Started
        </span>
        <h3 className="font-display text-xl sm:text-2xl text-white">
          Book a Mentorship <span className="editorial-italic">Session</span>
        </h3>
      </div>
      <div className="px-7 sm:px-8 py-7 sm:py-8">
        <MentorshipForm />
      </div>
    </div>
  );
}

export default function Mentorship() {
  return (
    <Layout>
      <SEO
        title="Mentorship & Career Guidance | Fashion Law"
        description="Personalised career guidance for students and young professionals exploring fashion law, intellectual property, and specialised legal careers."
        path="/mentorship"
      />

      {/* ── HERO ── */}
      <section className="pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 bg-white border-b border-[#9E8A5F]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex items-center gap-5 mb-8 sm:mb-12"
          >
            <div className="h-px flex-1 bg-[#9E8A5F]/25" />
            <span className="text-[#9E8A5F] text-[10px] uppercase tracking-[5px] font-semibold shrink-0">
              Mentorship & Career Guidance
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
                Mentorship and Career{" "}
                <span className="editorial-italic text-[#6B2D3E]">Guidance</span>.
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
                Personalised guidance for students, young professionals, and aspiring lawyers
                exploring careers in fashion law and intellectual property.
              </p>
              <p className="font-sans text-[#5C554D] text-base sm:text-lg leading-relaxed">
                Choosing a legal career path can often feel uncertain, particularly when exploring
                niche areas such as fashion law, intellectual property, or emerging
                industry-focused practice areas.
              </p>
              <p className="font-sans text-[#5C554D] text-base sm:text-lg leading-relaxed">
                These sessions focus on helping individuals understand pathways, skill development,
                and strategic decisions that support long-term career growth.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT + STICKY FORM ── */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:flex lg:gap-14 lg:items-start">

          {/* LEFT — content */}
          <div className="flex-1 min-w-0 space-y-12 sm:space-y-16">

            {/* WHO THIS IS FOR */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
            >
              <span className="text-[#9E8A5F] text-[10px] uppercase tracking-[5px] font-semibold block mb-4">
                Who This Is For
              </span>
              <h2 className="font-display text-2xl sm:text-3xl text-[#1A1A1A] mb-6">
                This guidance is <span className="editorial-italic">suitable for</span>
              </h2>
              <div className="space-y-3">
                {whoFor.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.07 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#6B2D3E] shrink-0 mt-0.5" />
                    <span className="font-sans text-[#5C554D] text-sm sm:text-base leading-relaxed">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* PACKAGES */}
            <div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                className="mb-7"
              >
                <span className="text-[#9E8A5F] text-[10px] uppercase tracking-[5px] font-semibold block mb-4">
                  Packages
                </span>
                <h2 className="font-display text-2xl sm:text-3xl text-[#1A1A1A]">
                  Choose your <span className="editorial-italic">Session</span>
                </h2>
              </motion.div>

              <div className="space-y-px bg-[#9E8A5F]/15">
                {packages.map((pkg, i) => (
                  <motion.div
                    key={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-40px" }}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: {
                        opacity: 1, y: 0,
                        transition: { duration: 0.6, ease: "easeOut", delay: i * 0.1 },
                      },
                    }}
                    className="bg-white p-6 sm:p-8 group"
                  >
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex items-start gap-4">
                        <span className="font-display text-3xl text-[#9E8A5F]/20 leading-none shrink-0 mt-1">
                          {pkg.num}
                        </span>
                        <div>
                          <h3 className="font-display text-lg sm:text-xl text-[#1A1A1A] leading-snug">
                            {pkg.title}
                          </h3>
                          <span className="inline-flex items-center gap-1.5 mt-1.5 text-[#9E8A5F] text-[10px] uppercase tracking-[2.5px] font-semibold">
                            Session
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="w-8 h-px bg-[#9E8A5F]/25 mb-4" />
                    <p className="font-sans text-[#5C554D] text-sm leading-relaxed mb-5">
                      {pkg.desc}
                    </p>
                    <div className="space-y-2">
                      {pkg.includes.map((point, j) => (
                        <div key={j} className="flex items-start gap-2.5">
                          <span className="mt-2 w-1 h-1 rounded-full bg-[#6B2D3E] shrink-0" />
                          <span className="font-sans text-[#5C554D] text-sm leading-relaxed">
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* EXPECTATIONS */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              className="bg-[#1A1A1A] p-7 sm:p-8"
            >
              <span className="text-[#9E8A5F] text-[10px] uppercase tracking-[5px] font-semibold block mb-4">
                Expectations
              </span>
              <p className="font-sans text-white/70 text-sm sm:text-base leading-relaxed">
                Mentorship sessions are intended to provide guidance and perspective rather than
                guaranteed outcomes. The goal is to offer clarity, direction, and informed insights
                based on professional experience.
              </p>
            </motion.div>
          </div>

          {/* RIGHT — sticky form (desktop only) */}
          <div className="hidden lg:block w-[380px] shrink-0 sticky top-20 self-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
            >
              <FormShell />
            </motion.div>
          </div>
        </div>

        {/* MOBILE FORM */}
        <div className="lg:hidden max-w-7xl mx-auto px-4 sm:px-6 mt-10 pb-12">
          <FormShell />
        </div>
      </section>
    </Layout>
  );
}