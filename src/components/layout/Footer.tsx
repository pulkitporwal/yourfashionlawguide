import { Link } from "wouter";
import { Instagram, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white pt-16 sm:pt-20 md:pt-24 pb-6 sm:pb-8 border-t border-[#9E8A5F]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 sm:gap-12 mb-12 sm:mb-16">
          
          {/* Brand Info */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="font-display text-xl tracking-wide text-[#1A1A1A]">
                your<span className="editorial-italic mx-0.5">fashion</span>lawguide
              </span>
            </Link>
            <p className="text-[#5C554D] text-sm leading-relaxed mb-6 font-sans">
              Navigating the intersection of creativity and compliance. Protecting your brand's legacy with tailored legal strategies.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/yourfashionlawguide" className="text-[#1A1A1A] hover:text-[#6B2D3E] transition-colors" target="_blank" rel="noopener noreferrer" aria-label="Instagram: @yourfashionlawguide">
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a href="https://www.linkedin.com/in/diya-m-kumar-637312a7" className="text-[#1A1A1A] hover:text-[#6B2D3E] transition-colors" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn: diya-m-kumar-637312a7">
                <Linkedin size={18} strokeWidth={1.5} />
              </a>
              <a href="mailto:diyakumar531@gmail.com" className="text-[#1A1A1A] hover:text-[#6B2D3E] transition-colors" aria-label="Email: diyakumar531@gmail.com">
                <Mail size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="font-display text-[#1A1A1A] text-lg mb-6">Navigate</h4>
            <ul className="space-y-4 font-sans text-sm">
              <li><Link href="/" className="text-[#5C554D] hover:text-[#6B2D3E] transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-[#5C554D] hover:text-[#6B2D3E] transition-colors">About Diya</Link></li>
              <li><Link href="/store" className="text-[#5C554D] hover:text-[#6B2D3E] transition-colors">Store</Link></li>
              <li><Link href="/book-consultation" className="text-[#5C554D] hover:text-[#6B2D3E] transition-colors">Book Consultation</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display text-[#1A1A1A] text-lg mb-6">Resources</h4>
            <ul className="space-y-4 font-sans text-sm">
              <li><Link href="/journal" className="text-[#5C554D] hover:text-[#6B2D3E] transition-colors">Journal</Link></li>
              <li><Link href="/workshop" className="text-[#5C554D] hover:text-[#6B2D3E] transition-colors">Webinar</Link></li>
              <li><Link href="/contact" className="text-[#5C554D] hover:text-[#6B2D3E] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display text-[#1A1A1A] text-lg mb-6">Legal</h4>
            <ul className="space-y-4 font-sans text-sm">
              <li><Link href="/privacy-policy" className="text-[#5C554D] hover:text-[#6B2D3E] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="text-[#5C554D] hover:text-[#6B2D3E] transition-colors">Terms of Service</Link></li>
              <li><Link href="/disclaimer" className="text-[#5C554D] hover:text-[#6B2D3E] transition-colors">Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-[#9E8A5F]/20 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-[#5C554D] text-xs font-sans uppercase tracking-wider">
            © {new Date().getFullYear()} Your Fashion Law Guide. All rights reserved.
          </p>
          <p className="font-display text-[#6B2D3E] italic text-sm">
            Because Fashion Is Never Just Fashion.
          </p>
        </div>
      </div>
    </footer>
  );
}
