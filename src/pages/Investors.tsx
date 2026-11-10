import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { TrendingUp, Shield, Users, Download, Eye, BarChart3, Target, Clock } from "lucide-react";

const Investors = () => {
  const highlights = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Regulated License",
      description: "CBN-licensed Microfinance Bank with full regulatory oversight"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Proven Track Record",
      description: "98% on-time loan repayment rate with disciplined lending practices"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Growing Customer Base",
      description: "50,000+ active customers with strong customer retention"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Scalable Business Model",
      description: "Technology-driven operations with clear path to profitability"
    }
  ];

  const debtTerms = [
    { label: "Target Amount", value: "₦200 million" },
    { label: "Interest Rate", value: "22% per annum" },
    { label: "Tenor", value: "36 months" },
    { label: "Interest Payment", value: "Quarterly" },
    { label: "Use of Funds", value: "Loan book (₦120m) & FX liquidity (₦80m)" },
    { label: "Security", value: "Loan receivables pledge + reserve account" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-primary">
              <TrendingUp className="h-10 w-10 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Built for scale,{" "}
              <span className="text-gradient">governed for safety</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              We combine a regulated license with disciplined lending and risk controls to grow responsibly. 
              Invest in Nigeria's financial inclusion future.
            </p>
          </div>
        </div>
      </section>

      {/* Business Highlights */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Investment Highlights
            </h2>
            <p className="text-xl text-muted-foreground">
              Strong fundamentals with regulatory backing
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {highlights.map((highlight, index) => (
              <Card key={index} className="glass-card border-card-border text-center p-6">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 text-primary-foreground">
                    {highlight.icon}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{highlight.title}</h3>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Debt Raise Card */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="glass-card glow-on-hover border-card-border p-8">
              <CardContent className="p-0">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
                    <Target className="h-4 w-4" />
                    <span className="font-semibold">Debt Fundraising Opportunity</span>
                  </div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    ₦200 Million Debt Raise
                  </h2>
                  <p className="text-muted-foreground">
                    High-yield investment opportunity with strong collateral backing
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  {debtTerms.map((term, index) => (
                    <div key={index} className="border-l-4 border-primary pl-4">
                      <dt className="font-semibold text-foreground">{term.label}</dt>
                      <dd className="text-muted-foreground">{term.value}</dd>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-gradient-primary hover:shadow-primary">
                    <Download className="mr-2 h-4 w-4" />
                    Download One-Pager
                  </Button>
                  <Button variant="outline">
                    <Eye className="mr-2 h-4 w-4" />
                    Request Data Room Access
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Key Performance Metrics
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                50,000+
              </div>
              <div className="text-muted-foreground font-medium">
                Active Customers
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                ₦2.5bn
              </div>
              <div className="text-muted-foreground font-medium">
                Loans Disbursed
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                98%
              </div>
              <div className="text-muted-foreground font-medium">
                Repayment Rate
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                22%
              </div>
              <div className="text-muted-foreground font-medium">
                Target Return
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-2xl md:text-3xl font-medium text-foreground mb-6 italic">
              "Return of capital comes before return on capital. We service debt first."
            </blockquote>
            <cite className="text-muted-foreground">— PennyTree Technologies Investment Philosophy</cite>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Investors;