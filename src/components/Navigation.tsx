import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Send, Wallet, Globe, TrendingUp, FileText, Briefcase, CreditCard } from "lucide-react";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const location = useLocation();

  const dropdowns = [
    {
      label: "PennyTree Technologies for Business",
      items: [
        {
          icon: <Briefcase className="h-5 w-5 text-primary" />,
          name: "Business Accounts",
          description: "Tailored accounts for SMEs",
          bullets: ["Invoice management", "Business payments", "Team access"],
          href: "/accounts"
        },
        {
          icon: <FileText className="h-5 w-5 text-primary" />,
          name: "Invoice Discounting",
          description: "Invest in vetted short-term invoices",
          bullets: ["Fixed ROI", "Short-term deals", "Professionally vetted"],
          href: "/invoice-discounting"
        }
      ]
    },
    {
      label: "Products",
      items: [
        {
          icon: <Send className="h-5 w-5 text-primary" />,
          name: "Send & Receive",
          description: "Send and receive money instantly",
          bullets: ["Free transfers", "Penntag support", "Instant settlement"],
          href: "/send-receive"
        },
        {
          icon: <CreditCard className="h-5 w-5 text-primary" />,
          name: "Bill Payments",
          description: "Pay bills seamlessly from the app",
          bullets: ["Airtime & data", "Electricity", "Cable TV"],
          href: "/send-receive"
        },
        {
          icon: <Globe className="h-5 w-5 text-primary" />,
          name: "Multi-Currency Vaults",
          description: "Save and earn in multiple currencies",
          bullets: ["Up to 27% PA (Naira)", "6 currencies", "Flexible & locked"],
          href: "/vault"
        },
        {
          icon: <TrendingUp className="h-5 w-5 text-primary" />,
          name: "Loans",
          description: "Quick access to flexible financing",
          bullets: ["Fast approval", "Transparent terms", "Flexible repayment"],
          href: "/loans"
        },
        {
          icon: <Briefcase className="h-5 w-5 text-primary" />,
          name: "Private Credit",
          description: "Earn returns from private debt",
          bullets: ["18–24% target returns", "SEC-aligned", "Coming soon"],
          href: "/private-credit"
        }
      ]
    }
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="PennyTree Technologies Logo" className="w-8 h-8 object-contain" />
            <span className="text-xl font-bold text-foreground">PennyTree Technologies</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {dropdowns.map((dropdown) => (
              <div key={dropdown.label} className="relative group">
                <button className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-5">
                  {dropdown.label} <ChevronDown className="h-3.5 w-3.5 ml-1 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-background border border-border rounded-2xl shadow-xl p-4 min-w-[340px]">
                    <div className="space-y-1">
                      {dropdown.items.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="flex gap-3 p-3 rounded-xl hover:bg-muted transition-colors group/item"
                        >
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover/item:bg-primary/20 transition-colors">
                            {item.icon}
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-foreground">{item.name}</p>
                            <p className="text-xs text-muted-foreground mb-1.5">{item.description}</p>
                            <ul className="flex flex-wrap gap-x-3 gap-y-0.5">
                              {item.bullets.map((b) => (
                                <li key={b} className="text-[11px] text-primary font-medium">• {b}</li>
                              ))}
                            </ul>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <Link to="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              About Us
            </Link>
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center">
            <Button size="sm" className="bg-primary hover:bg-primary-dark text-primary-foreground rounded-full px-5" asChild>
              <a target="_blank" rel="noopener noreferrer" href="/download">
                Get PennyTree Technologies
              </a>
            </Button>
          </div>

          {/* Mobile */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors">
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-1">
              {dropdowns.map((dropdown) => (
                <div key={dropdown.label}>
                  <button
                    onClick={() => setMobileDropdown(mobileDropdown === dropdown.label ? null : dropdown.label)}
                    className="flex items-center justify-between w-full text-base font-medium text-muted-foreground py-2"
                  >
                    {dropdown.label}
                    <ChevronDown className={`h-4 w-4 transition-transform ${mobileDropdown === dropdown.label ? "rotate-180" : ""}`} />
                  </button>
                  {mobileDropdown === dropdown.label && (
                    <div className="pl-4 space-y-1 pb-2">
                      {dropdown.items.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center gap-2 py-2 text-sm text-muted-foreground hover:text-primary"
                        >
                          {item.icon}
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link to="/about" onClick={() => setIsOpen(false)} className="text-base font-medium text-muted-foreground hover:text-primary py-2">
                About Us
              </Link>
              <div className="pt-4 border-t border-border">
                <Button className="w-full bg-primary hover:bg-primary-dark text-primary-foreground rounded-full" asChild>
                  <a href="/download" target="_blank" rel="noopener noreferrer">
                    Get PennyTree Technologies
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
