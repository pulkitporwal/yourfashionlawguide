import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { LuxuryButton } from "@/components/ui/LuxuryButton";
import { SEO } from "@/components/SEO";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateContactMessage } from "@/hooks/use-contact";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(2, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const { toast } = useToast();
  const mutation = useCreateContactMessage();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" }
  });

  const onSubmit = (data: ContactFormData) => {
    mutation.mutate(data, {
      onSuccess: () => {
        toast({
          title: "Message Sent",
          description: "We have received your inquiry and will respond shortly.",
        });
        form.reset();
      },
      onError: (error) => {
        toast({
          variant: "destructive",
          title: "Error",
          description: error.message,
        });
      }
    });
  };

  const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };

  return (
    <Layout>
      <SEO title="Contact Us – Fashion Law Enquiry" description="Get in touch for fashion law advice. New Delhi & virtual consultations. Email and contact form." path="/contact" />
      <section className="pt-16 sm:pt-20 md:pt-24 pb-20 sm:pb-28 md:pb-32 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20">
          
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] mb-6 sm:mb-8">
              Get In <span className="editorial-italic">Touch</span>
            </h1>
            <p className="font-sans text-base sm:text-lg text-[#5C554D] leading-relaxed mb-8 sm:mb-12 max-w-md">
              Whether you are an emerging designer looking for foundational protection or an established house managing complex IP issues, we are here to assist. Reach out for a no-obligation conversation about your legal needs.
            </p>
            
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h4 className="font-display text-lg sm:text-xl text-[#1A1A1A] mb-2">Direct Inquiry</h4>
                <a href="mailto:diyakumar531@gmail.com" className="font-sans text-[#6B2D3E] hover:underline transition-all">
                  diyakumar531@gmail.com
                </a>
              </div>
              <div>
                <h4 className="font-display text-lg sm:text-xl text-[#1A1A1A] mb-2">Consultations</h4>
                <p className="font-sans text-[#5C554D]">
                  Available globally via virtual appointment
                </p>
              </div>
              <LuxuryButton href="/book-consultation" variant="outline" className="mt-6">
                Book a Consultation
              </LuxuryButton>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 sm:p-8 md:p-10 lg:p-14 shadow-sm border border-[#9E8A5F]/20"
          >
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 sm:space-y-8">
              <div>
                <input 
                  {...form.register("name")}
                  placeholder="Your Name" 
                  className="luxury-input"
                />
                {form.formState.errors.name && <p className="text-red-500 text-xs mt-2">{form.formState.errors.name.message}</p>}
              </div>

              <div>
                <input 
                  {...form.register("email")}
                  placeholder="Your Email Address" 
                  className="luxury-input"
                />
                {form.formState.errors.email && <p className="text-red-500 text-xs mt-2">{form.formState.errors.email.message}</p>}
              </div>

              <div>
                <input 
                  {...form.register("subject")}
                  placeholder="Subject" 
                  className="luxury-input"
                />
                {form.formState.errors.subject && <p className="text-red-500 text-xs mt-2">{form.formState.errors.subject.message}</p>}
              </div>

              <div>
                <textarea 
                  {...form.register("message")}
                  placeholder="Your Message" 
                  rows={4}
                  className="luxury-input resize-none"
                />
                {form.formState.errors.message && <p className="text-red-500 text-xs mt-2">{form.formState.errors.message.message}</p>}
              </div>

              <LuxuryButton type="submit" disabled={mutation.isPending} className="w-full">
                {mutation.isPending ? "Sending..." : "Send Message"}
              </LuxuryButton>
            </form>
          </motion.div>

        </div>
      </section>
    </Layout>
  );
}
