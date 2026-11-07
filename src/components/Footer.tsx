import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/80">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="PennyTree Technologies Logo" className="w-8 h-8 object-contain" />
              <span className="text-xl font-bold text-background">PennyTree Technologies</span>
            </div>
            <p className="text-sm leading-relaxed text-background/60">
              A modern financial platform for payments, savings, business accounts, and investment opportunities. Licensed by CBN.
            </p>
            <div className="flex gap-3">
              <Button size="sm" className="bg-primary text-foreground hover:bg-primary/90 rounded-full font-semibold px-5 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300" asChild>
                <a href="/download" target="_blank" rel="noopener noreferrer">
                  App Store
                </a>
              </Button>
              <Button size="sm" className="bg-primary text-foreground hover:bg-primary/90 rounded-full font-semibold px-5 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300" asChild>
                <a href="/download" target="_blank" rel="noopener noreferrer">
                  Google Play
                </a>
              </Button>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-background mb-4">Products</h3>
            <ul className="space-y-2.5">
              <li><Link to="/send-receive" className="text-sm text-background/60 hover:text-primary transition-colors">Send & Receive</Link></li>
              <li><Link to="/accounts" className="text-sm text-background/60 hover:text-primary transition-colors">Accounts</Link></li>
              <li><Link to="/vault" className="text-sm text-background/60 hover:text-primary transition-colors">Multi-Currency Vaults</Link></li>
              <li><Link to="/loans" className="text-sm text-background/60 hover:text-primary transition-colors">Loans</Link></li>
              <li><Link to="/invoice-discounting" className="text-sm text-background/60 hover:text-primary transition-colors">Invoice Discounting</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-background mb-4">Company</h3>
            <ul className="space-y-2.5">
              <li><Link to="/about" className="text-sm text-background/60 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/security" className="text-sm text-background/60 hover:text-primary transition-colors">Security</Link></li>
              <li><Link to="/investors" className="text-sm text-background/60 hover:text-primary transition-colors">Investors</Link></li>
              <li><Link to="/terms" className="text-sm text-background/60 hover:text-primary transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="text-sm text-background/60 hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/loan-terms" className="text-sm text-background/60 hover:text-primary transition-colors">Loan Terms</Link></li>
              <li><Link to="/target-savings-terms" className="text-sm text-background/60 hover:text-primary transition-colors">Target Savings Terms</Link></li>
              <li><Link to="/referall-terms" className="text-sm text-background/60 hover:text-primary transition-colors">Referral Terms</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-background mb-4">Contact</h3>
            <ul className="space-y-2.5 text-sm text-background/60">
              <li>
                <a href="mailto:support@mypennytree.com" className="hover:text-primary transition-colors">
                  support@mypennytree.com
                </a>
              </li>
              <li>
                <a href="tel:+2348152846097" className="hover:text-primary transition-colors">
                  +234 815 284 6097
                </a>
              </li>
              <li>No 37, Lagos road epe, Lagos state</li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-background/60 hover:text-primary transition-colors text-sm">Twitter</a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors text-sm">LinkedIn</a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors text-sm">Instagram</a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/40">© 2025 PennyTree Technologies. All rights reserved.</p>
          <p className="text-xs text-background/30">
            Licensed by Central Bank of Nigeria 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
