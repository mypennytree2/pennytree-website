import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Send, UserCheck, Zap, Shield, ArrowRight, CheckCircle } from "lucide-react";

const SendReceive = () => {
  const capabilities = [
    "Send money via account number",
    "Send money via Penntag (unique username-style ID)",
    "Receive instant transfers",
    "Enjoy free transfers",
    "Secure, encrypted transactions",
  ];

  const steps = [
    { number: "1", title: "Choose Recipient", description: "Select from contacts or enter account number / Penntag" },
    { number: "2", title: "Enter Penntag", description: "Use their unique Penntag for instant identification" },
    { number: "3", title: "Confirm Transfer", description: "Review details and confirm — funds arrive instantly" },
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
              <Send className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Send & Receive <span className="text-primary">Money</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Transfer money instantly via account number or Penntag. Free, fast, and fully secure.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary-dark text-primary-foreground text-lg px-8 py-6 rounded-xl" asChild>
              <a href="/download" target="_blank" rel="noopener noreferrer">
                Send Money via the PennyTree Technologies App
                <ArrowRight className="h-5 w-5 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">What you can do</h2>
              <div className="space-y-4">
                {capabilities.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mock Transaction UI */}
            <Card className="border border-border rounded-2xl shadow-lg">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-muted rounded-xl">
                    <div>
                      <p className="text-xs text-muted-foreground">To</p>
                      <p className="font-semibold text-foreground">@chika_lagos</p>
                    </div>
                    <UserCheck className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-muted rounded-xl">
                    <div>
                      <p className="text-xs text-muted-foreground">Amount</p>
                      <p className="text-2xl font-bold text-foreground">₦50,000</p>
                    </div>
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-primary/5 rounded-xl border border-primary/20">
                    <div>
                      <p className="text-xs text-muted-foreground">Fee</p>
                      <p className="font-semibold text-primary">FREE</p>
                    </div>
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary-dark text-primary-foreground rounded-xl py-6">
                    Confirm Transfer
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How Penntag Works */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">How Penntag Works</h2>
            <p className="text-muted-foreground">Send money with just a username. No account numbers needed.</p>
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

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Ready to send money?</h2>
          <Button size="lg" className="bg-primary hover:bg-primary-dark text-primary-foreground text-lg px-8 py-6 rounded-xl" asChild>
            <a href="/download" target="_blank" rel="noopener noreferrer">
              Send Money via the PennyTree Technologies App
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SendReceive;
