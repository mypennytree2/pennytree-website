import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Shield, Lock, Fingerprint, Server, Eye, FileCheck } from "lucide-react";

const Security = () => {
  const securityFeatures = [
    {
      icon: <Lock className="h-7 w-7" />,
      title: "Bank-Grade Encryption",
      description: "All data encrypted using AES-256 encryption both in transit and at rest. Your information is always protected.",
    },
    {
      icon: <Fingerprint className="h-7 w-7" />,
      title: "Biometric Authentication",
      description: "Optional passkeys and two-factor authentication for enhanced account security on every login.",
    },
    {
      icon: <Eye className="h-7 w-7" />,
      title: "KYC & AML Compliance",
      description: "Comprehensive know-your-customer and anti-money laundering procedures to protect against fraud.",
    },
    {
      icon: <Server className="h-7 w-7" />,
      title: "Secure Infrastructure",
      description: "Industry-standard secure key management, regular penetration testing, and infrastructure monitoring.",
    },
  ];

  const complianceItems = [
    { title: "CBN Microfinance Bank License", description: "Licensed under the Central Bank of Nigeria regulatory framework", badge: "Active" },
    { title: "PCI Compliance", description: "Payment Card Industry security standards for card data protection", badge: "Compliant" },
    { title: "GSI Recovery", description: "Global Standing Instruction compliant recovery procedures", badge: "Compliant" },
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
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Security & <span className="text-primary">Compliance</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Your financial security is our top priority. Licensed, regulated, and built with bank-grade protection.
            </p>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {securityFeatures.map((feature, i) => (
              <Card key={i} className="border border-border rounded-2xl hover:border-primary/30 transition-all">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 text-primary">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dark Authority Section */}
      <section className="py-20 bg-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-background mb-4">Regulatory Compliance</h2>
            <p className="text-background/60">Licensed and regulated by Nigerian financial authorities</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {complianceItems.map((item, i) => (
              <div key={i} className="bg-background/5 border border-background/10 rounded-2xl p-6 text-center backdrop-blur-sm">
                <FileCheck className="h-10 w-10 text-primary mx-auto mb-4" />
                <span className="inline-block bg-primary/20 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {item.badge}
                </span>
                <h3 className="font-semibold text-background mb-2 text-sm">{item.title}</h3>
                <p className="text-xs text-background/50">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border border-border rounded-2xl">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">Regulatory Oversight</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We operate under strict CBN regulations with periodic audits and compliance checks to ensure your funds are handled according to the highest banking standards.
                </p>
              </CardContent>
            </Card>
            <Card className="border border-border rounded-2xl">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">Transparent Operations</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Advanced fraud detection, transaction monitoring, and risk assessment algorithms protect against unauthorized access and suspicious activities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Security;
