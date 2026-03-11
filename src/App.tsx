import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";

// Pages
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Journal from "@/pages/Journal";
import Article from "@/pages/Article";
import Workshop from "@/pages/Workshop";
import Store from "@/pages/Store";
import StoreProduct from "@/pages/StoreProduct";
import Contact from "@/pages/Contact";
import BookConsultation from "@/pages/BookConsultation";
import IntellectualProperty from "@/pages/IntellectualProperty";
import CommercialContracts from "@/pages/CommercialContracts";
import FashionTech from "@/pages/FashionTech";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import Disclaimer from "@/pages/Disclaimer";
import "./App.css"

// Component to handle scroll restoration on route change
function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/intellectual-property" component={IntellectualProperty} />
        <Route path="/commercial-contracts" component={CommercialContracts} />
        <Route path="/fashion-tech" component={FashionTech} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/terms-of-service" component={TermsOfService} />
        <Route path="/disclaimer" component={Disclaimer} />
        <Route path="/journal/:slug" component={Article} />
        <Route path="/journal" component={Journal} />
        <Route path="/workshop" component={Workshop} />
        <Route path="/store" component={Store} />
        <Route path="/store/:slug" component={StoreProduct} />
        <Route path="/contact" component={Contact} />
        <Route path="/book-consultation" component={BookConsultation} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
