import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { TrendingUp, CheckCircle, ArrowRight, Users, Briefcase, GraduationCap, Home } from "lucide-react";

const ProductLoans = () => {
  const features = [
    "Easy loan access from your phone",
    "Transparent terms — no hidden fees",
    "Fast approval within hours",
    "Flexible repayment options",
    "Credit decisions based on BVN, income, and history",
  ];

  const useCases = [
    { icon: <GraduationCap className="h-6 w-6" />, title: "Education", description: "School fees and tuition" },
    { icon: <Home className="h-6 w-6" />, title: "Rent", description: "Housing and accommodation" },
    { icon: <Briefcase className="h-6 w-6" />, title: "Business", description: "Working capital and inventory" },
    { icon: <Users className="h-6 w-6" />, title: "Personal", description: "Emergencies and life events" },
  ];

  const steps = [
    { number: "1", title: "Apply", description: "Complete your application in under 5 minutes on the app" },
    { number: "2", title: "Get Approved", description: "We review and approve eligible applications within hours" },
    { number: "3", title: "Receive Funds", description: "Funds are disbursed directly to your PennyTree Technologies account" },
  ];

  const qualifications = [
    "Nigerian citizen with valid BVN",
    "Age 18–65 years",
    "Verifiable source of income",
    "Active PennyTree Technologies account",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Loans That <span className="text-primary">Fit Your Life</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Quick access to flexible loans with transparent terms and fast approval. No surprises.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary-dark text-primary-foreground text-lg px-8 py-6 rounded-xl" asChild>
              <a href="/download" target="_blank" rel="noopener noreferrer">
                Apply via the PennyTree Technologies App
                <ArrowRight className="h-5 w-5 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Why Choose Our Loans?</h2>
              <div className="space-y-4">
                {features.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Use Cases */}
            <div className="grid grid-cols-2 gap-4">
              {useCases.map((item, i) => (
                <Card key={i} className="border border-border rounded-2xl">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3 text-primary">
                      {item.icon}
                    </div>
                    <h3 className="font-semibold text-foreground text-sm">{item.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">How It Works</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8">Who Qualifies?</h2>
            <div className="space-y-3">
              {qualifications.map((item, i) => (
                <div key={i} className="flex items-center gap-3 justify-center">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Disclosure */}
      <section className="py-8 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs text-muted-foreground max-w-2xl mx-auto">
            <strong>Important Disclosure:</strong> Loan APRs from 15% to 35% per annum.
            Terms and conditions apply. Key Facts Statement available before acceptance.
            Review the <Link to="/loan-terms" className="text-primary hover:underline">Loan Terms & Conditions</Link>.
            All loans subject to affordability checks and approval criteria.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Ready to Apply?</h2>
          <Button size="lg" className="bg-primary hover:bg-primary-dark text-primary-foreground text-lg px-8 py-6 rounded-xl" asChild>
            <a href="/download" target="_blank" rel="noopener noreferrer">
              Apply via the PennyTree Technologies App
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductLoans;
