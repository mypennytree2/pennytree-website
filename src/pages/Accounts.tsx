import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { User, Building2, CheckCircle, ArrowRight } from "lucide-react";

const Accounts = () => {
  const personal = [
    "For individuals",
    "Daily transactions & transfers",
    "Vault savings access",
    "Bill payments",
    "Penntag for instant transfers",
  ];

  const business = [
    "For SMEs & businesses",
    "Invoice discounting access",
    "Business payments & payroll",
    "Account management tools",
    "Dedicated business support",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Personal & Business <span className="text-primary">Accounts</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Tailored banking solutions for individuals and businesses. One app, two powerful account types.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Personal */}
            <Card className="border border-border rounded-2xl overflow-hidden">
              <div className="bg-primary/5 p-8 border-b border-border">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <User className="h-7 w-7 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Personal Account</h2>
                <p className="text-muted-foreground mt-1">For everyday banking</p>
              </div>
              <CardContent className="p-8">
                <ul className="space-y-4 mb-8">
                  {personal.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-primary hover:bg-primary-dark text-primary-foreground rounded-xl py-6" asChild>
                  <a href="/download" target="_blank" rel="noopener noreferrer">
                    Open an Account on the App
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Business */}
            <Card className="border-2 border-primary rounded-2xl overflow-hidden relative">
              <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                For SMEs
              </div>
              <div className="bg-primary/10 p-8 border-b border-primary/20">
                <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center mb-4">
                  <Building2 className="h-7 w-7 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Business Account</h2>
                <p className="text-muted-foreground mt-1">For growing businesses</p>
              </div>
              <CardContent className="p-8">
                <ul className="space-y-4 mb-8">
                  {business.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-primary hover:bg-primary-dark text-primary-foreground rounded-xl py-6" asChild>
                  <a href="/download" target="_blank" rel="noopener noreferrer">
                    Open an Account on the App
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Accounts;
