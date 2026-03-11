import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "wouter";

interface LuxuryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  href?: string;
  className?: string;
  target?: string;
  rel?: string;
}

export function LuxuryButton({ children, variant = "primary", href, className = "", target, rel, ...props }: LuxuryButtonProps) {
  const baseStyles = "inline-flex items-center justify-center min-h-[44px] px-6 sm:px-8 py-3 sm:py-4 text-xs uppercase tracking-[2px] font-semibold transition-all duration-300 relative overflow-hidden group";
  
  const variants = {
    primary: "bg-[#6B2D3E] text-white hover:bg-[#5a2533] hover:shadow-lg hover:-translate-y-0.5",
    secondary: "bg-[#F3EDE4] text-[#1A1A1A] hover:bg-[#e8decb] hover:shadow-md hover:-translate-y-0.5",
    outline: "bg-transparent text-[#1A1A1A] border border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white"
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    // Check if it's an external link
    if (href.startsWith('http')) {
      return (
        <a href={href} className={combinedClassName} target={target} rel={rel}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}
