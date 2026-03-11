import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#FAF7F2] px-4 sm:px-6">
      <Card className="w-full max-w-md border-[#9E8A5F]/20">
        <CardContent className="pt-6 sm:pt-8 pb-8">
          <div className="flex items-start gap-3 mb-4">
            <AlertCircle className="h-8 w-8 sm:h-10 sm:w-10 shrink-0 text-[#6B2D3E]" />
            <h1 className="text-xl sm:text-2xl font-display font-bold text-[#1A1A1A]">Page Not Found</h1>
          </div>
          <p className="mt-4 text-sm sm:text-base text-[#5C554D] font-sans">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            href="/"
            className="mt-6 inline-block text-[#6B2D3E] font-semibold text-sm uppercase tracking-widest hover:underline"
          >
            Back to Home
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
