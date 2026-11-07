import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SendReceive from "./pages/SendReceive";
import Accounts from "./pages/Accounts";
import Vault from "./pages/Vault";
import ProductLoans from "./pages/ProductLoans";
import InvoiceDiscounting from "./pages/InvoiceDiscounting";
import Business from "./pages/Business";
import Security from "./pages/Security";
import Investors from "./pages/Investors";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Download from "./pages/Download";
import PrivateCredit from "./pages/PrivateCredit";
import PersonalVaultTerms from "./pages/PersonalVaultTerms";
import ReferralTerms from "./pages/ReferralTerms";
import LoanTerms from "./pages/LoanTerms";
import TargetSavingsTerms from "./pages/TargetSavingsTerms";
import GuarantorForm from "./pages/GuarantorForm";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/send-receive" element={<SendReceive />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/vault" element={<Vault />} />
          <Route path="/loans" element={<ProductLoans />} />
          <Route path="/products/loans" element={<ProductLoans />} />
          <Route path="/invoice-discounting" element={<InvoiceDiscounting />} />
          <Route path="/about" element={<Business />} />
          <Route path="/business" element={<Business />} />
          <Route path="/security" element={<Security />} />
          <Route path="/investors" element={<Investors />} />
          <Route path="/policy" element={<Terms />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/download" element={<Download />} />
          <Route path="/private-credit" element={<PrivateCredit />} />
          <Route path="/personal-vault-terms" element={<PersonalVaultTerms />} />
          <Route path="/referall-terms" element={<ReferralTerms />} />
          <Route path="/loan-terms" element={<LoanTerms />} />
          <Route path="/target-savings-terms" element={<TargetSavingsTerms />} />
          <Route path="/guarantor/:token" element={<GuarantorForm />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
