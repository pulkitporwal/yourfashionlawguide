import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/journal", label: "Journal" },
  { href: "/workshop", label: "Workshop" },
  { href: "/store", label: "Store" },
  { href: "/book-consultation", label: "Book Consultation" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent ${
          scrolled ? "bg-white/95 backdrop-blur-md border-[#9E8A5F]/20 shadow-sm py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex justify-between items-center min-h-[56px] sm:min-h-[64px]">
          {/* Logo */}
          <Link href="/" className="z-50 cursor-pointer">
            <span className="font-display text-lg sm:text-xl md:text-2xl tracking-wide text-[#1A1A1A]">
              your<span className="editorial-italic mx-0.5">fashion</span>lawguide
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = location === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[10.5px] uppercase tracking-[2.5px] font-semibold relative group transition-colors duration-300 ${
                    isActive ? "text-[#6B2D3E]" : "text-[#1A1A1A] hover:text-[#6B2D3E]"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1.5 left-1/2 -translate-x-1/2 h-[1px] bg-[#6B2D3E] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden z-50 text-[#1A1A1A]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#FAF7F2] flex flex-col justify-center items-center"
          >
            <nav className="flex flex-col items-center space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-display text-2xl sm:text-3xl transition-colors py-3 px-6 min-h-[48px] flex items-center justify-center ${
                    location === link.href ? "editorial-italic" : "text-[#1A1A1A]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
