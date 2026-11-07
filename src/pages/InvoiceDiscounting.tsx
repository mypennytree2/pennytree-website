import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FileText, Shield, Clock, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";

const InvoiceDiscounting = () => {
  const benefits = [
    "Structured, professionally vetted deals",
    "Fixed ROI on each investment",
    "Short-term durations (30–180 days)",
    "Limited-time campaigns",
    "Transparent terms and reporting",
  ];

  const campaigns = [
    { name: "Agro Supply Co.", roi: "24%", duration: "90 Days", progress: 72 },
    { name: "MedTech Solutions", roi: "22%", duration: "60 Days", progress: 88 },
    { name: "BuildRight Ltd.", roi: "26%", duration: "120 Days", progress: 45 },
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
              <FileText className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Invoice <span className="text-primary">Discounting</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Invest in vetted short-term business invoices and earn fixed returns over a defined period. SEC-regulated and professionally structured.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works + Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">How It Works</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Invoice discounting allows users to invest in vetted short-term business invoices 
                and earn fixed returns over a defined period. Each opportunity is professionally 
                assessed and structured by our risk team.
              </p>
              <div className="space-y-4">
                {benefits.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Example Campaign Cards */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground mb-6">Example Campaigns</h2>
              {campaigns.map((campaign, i) => (
                <Card key={i} className="border border-border rounded-2xl">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-foreground">{campaign.name}</h3>
                      <span className="bg-primary/10 text-primary text-sm font-semibold px-3 py-1 rounded-full">
                        {campaign.roi} ROI
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" /> {campaign.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <TrendingUp className="h-4 w-4" /> Fixed Return
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2.5">
                      <div
                        className="bg-primary h-2.5 rounded-full transition-all"
                        style={{ width: `${campaign.progress}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">{campaign.progress}% funded</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="h-5 w-5 text-primary" />
            <p className="text-sm text-muted-foreground">SEC-licensed crowdfunding platform</p>
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-6">Invest With Confidence</h2>
          <Button size="lg" className="bg-primary hover:bg-primary-dark text-primary-foreground text-lg px-8 py-6 rounded-xl" asChild>
            <a href="/download" target="_blank" rel="noopener noreferrer">
              Available in the PennyTree Technologies App
              <ArrowRight className="h-5 w-5 ml-2" />
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InvoiceDiscounting;
