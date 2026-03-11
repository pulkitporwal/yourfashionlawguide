import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { LuxuryButton } from "@/components/ui/LuxuryButton";
import { useToast } from "@/hooks/use-toast";
import { getStoreProductBySlug } from "@/data/storeProducts";
import { RAZORPAY_CHECKOUT_URL } from "@/lib/config";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useRoute } from "wouter";
import { z } from "zod";

const detailsSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(7, "Phone is required"),
  brand: z.string().min(2, "Brand/Business name is required"),
  city: z.string().min(2, "City is required"),
  message: z.string().optional(),
});

type DetailsFormData = z.infer<typeof detailsSchema>;

export default function StoreProduct() {
  const { toast } = useToast();
  const [, params] = useRoute("/store/:slug");
  const slug = params?.slug ?? "";
  const product = getStoreProductBySlug(slug);

  const form = useForm<DetailsFormData>({
    resolver: zodResolver(detailsSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      brand: "",
      city: "",
      message: "",
    },
  });

  if (!product) {
    return (
      <Layout>
        <section className="pt-24 pb-32 px-4 sm:px-6 md:px-12 min-h-[60vh] flex items-center justify-center bg-[#FAF7F2]">
          <div className="text-center max-w-md">
            <h1 className="font-display text-3xl sm:text-4xl text-[#1A1A1A] mb-4">Resource not found</h1>
            <p className="font-sans text-[#5C554D] mb-8">The resource you're looking for doesn't exist or has been moved.</p>
            <Link href="/store" className="inline-flex items-center gap-2 text-[#6B2D3E] font-semibold text-sm uppercase tracking-widest hover:underline">
              <ArrowLeft size={16} /> Back to Store
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  const onSubmit = (data: DetailsFormData) => {
    const checkoutUrl = product.razorpayUrl ?? RAZORPAY_CHECKOUT_URL;
    if (!checkoutUrl) {
      toast({
        variant: "destructive",
        title: "Payment link missing",
        description: "Please try again later.",
      });
      return;
    }

    toast({
      title: "Details received",
      description: "Redirecting you to payment.",
    });

    const url = new URL(checkoutUrl);
    url.searchParams.set("name", data.name);
    url.searchParams.set("email", data.email);
    url.searchParams.set("phone", data.phone);
    url.searchParams.set("notes[brand]", data.brand);
    url.searchParams.set("notes[city]", data.city);
    if (data.message) url.searchParams.set("notes[message]", data.message);
    url.searchParams.set("notes[product]", product.title);

    window.open(url.toString(), "_blank", "noopener,noreferrer");
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <Layout>
      <SEO
        title={product.title}
        description={product.desc}
        path={`/store/${product.slug}`}
        type="website"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: product.title,
          description: product.desc,
          offers: {
            "@type": "Offer",
            priceCurrency: "INR",
            price: product.price.replace(/[^0-9]/g, ""),
            availability: "https://schema.org/InStock",
            url: `https://yourfashionlawguide.com/store/${product.slug}`,
          },
          brand: {
            "@type": "Brand",
            name: "Your Fashion Law Guide",
          },
        }}
      />

      <section className="pt-16 sm:pt-20 md:pt-24 pb-20 sm:pb-28 md:pb-32 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-8 sm:mb-10">
            <Link
              href="/store"
              className="inline-flex items-center gap-2 text-[#9E8A5F] hover:text-[#6B2D3E] text-xs uppercase tracking-widest font-semibold transition-colors mb-6"
            >
              <ArrowLeft size={14} /> Back to Store
            </Link>

            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[#9E8A5F] text-[10px] uppercase tracking-[3px] font-semibold mb-2">{product.tag}</p>
                <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#1A1A1A] leading-tight">
                  {product.title}
                </h1>
              </div>
              <span className="border border-[#9E8A5F]/30 text-[#9E8A5F] text-[9px] uppercase tracking-[2px] px-2 py-1 shrink-0">
                {product.badge}
              </span>
            </div>

            <div className="mt-4 flex items-center gap-4">
              <span className="font-display text-2xl text-[#6B2D3E] italic">{product.price}</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10">
            <motion.div initial="hidden" animate="visible" variants={fadeUp} className="lg:col-span-7 bg-white border border-[#9E8A5F]/15 p-6 sm:p-8 md:p-10">
              {product.longDesc.split("\n\n").map((p, i) => (
                <p key={i} className="font-sans text-[#5C554D] text-base sm:text-lg leading-relaxed mb-5 last:mb-0">
                  {p}
                </p>
              ))}
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ delay: 0.1 }}
              className="lg:col-span-5 bg-white border border-[#9E8A5F]/20 p-6 sm:p-8 md:p-10"
            >
              <h2 className="font-display text-xl sm:text-2xl text-[#1A1A1A] mb-2">Get this resource</h2>
              <p className="font-sans text-sm sm:text-base text-[#5C554D] mb-6">
                Fill in your details and click Pay Now to proceed to Razorpay.
              </p>

              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <div>
                  <input {...form.register("name")} placeholder="Your Name" className="luxury-input" />
                  {form.formState.errors.name && <p className="text-red-500 text-xs mt-2">{form.formState.errors.name.message}</p>}
                </div>

                <div>
                  <input {...form.register("email")} placeholder="Your Email Address" className="luxury-input" />
                  {form.formState.errors.email && <p className="text-red-500 text-xs mt-2">{form.formState.errors.email.message}</p>}
                </div>

                <div>
                  <input {...form.register("phone")} placeholder="Your Phone" className="luxury-input" />
                  {form.formState.errors.phone && <p className="text-red-500 text-xs mt-2">{form.formState.errors.phone.message}</p>}
                </div>

                <div>
                  <input {...form.register("brand")} placeholder="Brand/Business Name" className="luxury-input" />
                  {form.formState.errors.brand && <p className="text-red-500 text-xs mt-2">{form.formState.errors.brand.message}</p>}
                </div>

                <div>
                  <input {...form.register("city")} placeholder="City" className="luxury-input" />
                  {form.formState.errors.city && <p className="text-red-500 text-xs mt-2">{form.formState.errors.city.message}</p>}
                </div>

                <div>
                  <textarea {...form.register("message")} placeholder="Any additional details (optional)" rows={4} className="luxury-input resize-none" />
                </div>

                <LuxuryButton type="submit" className="w-full">
                  Pay Now
                </LuxuryButton>

                <p className="font-sans text-[11px] text-[#5C554D] leading-relaxed">
                  You will be redirected to Razorpay in a new tab.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
