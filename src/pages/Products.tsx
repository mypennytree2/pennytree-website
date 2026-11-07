import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import ComplianceBar from "@/components/ComplianceBar";
import Footer from "@/components/Footer";
import { TrendingUp, DollarSign, CreditCard, Target, ArrowRight, Vault, Store, Smartphone, Apple } from "lucide-react";
const Products = () => {
  const products = [{
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Loans",
    description: "Flexible amounts and tenors. Transparent pricing. No hidden fees. Credit decisions with BVN, income, and history.",
    href: "/products/loans",
    gradient: "from-emerald-500 to-teal-600"
  }, {
    icon: <DollarSign className="h-8 w-8" />,
    title: "Cross-Border Payments",
    description: "Send and receive to major corridors. Competitive FX. Compliance checks for safety. Settlement updates in app.",
    href: "/products/cross-border",
    gradient: "from-blue-500 to-cyan-600"
  }, {
    icon: <CreditCard className="h-8 w-8" />,
    title: "Dollar Cards",
    description: "Virtual and physical USD cards. Controls in app. Spend alerts. Top‑up from NGN or USD wallet.",
    href: "/products/dollar-cards",
    gradient: "from-purple-500 to-indigo-600"
  }, {
    icon: <Target className="h-8 w-8" />,
    title: "Target Savings",
    description: "Goal vaults, auto‑debits, progress tracker, withdrawal rules to keep you on track.",
    href: "/target-savings-terms",
    gradient: "from-orange-500 to-red-600"
  }, {
    icon: <Vault className="h-8 w-8" />,
    title: "Personal Vault",
    description: "Save in multiple currencies: NGN, USD, GBP, and EUR. Secure multi-currency savings with competitive rates.",
    href: "/products/personal-vault",
    gradient: "from-green-500 to-emerald-600"
  }, {
    icon: <Store className="h-8 w-8" />,
    title: "POS Services",
    description: "Complete point-of-sale solutions for your business. Accept payments, track sales, and manage inventory.",
    href: "/products/pos-services",
    gradient: "from-pink-500 to-rose-600"
  }];
  return <div className="min-h-screen bg-background">
      <Navigation />
      <ComplianceBar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Everything money,{" "}
              <span className="text-gradient">in one app</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Built for everyday life. Save, borrow, pay, and go global from your phone.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {products.map((product, index) => <Card key={index} className="glass-card glow-on-hover border-card-border rounded-md overflow-hidden transition-all duration-300">
                <CardContent className="p-0">
                  <div className={`bg-gradient-to-br ${product.gradient} p-8 text-white`}>
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6">
                      {product.icon}
                    </div>
                    <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
                    <p className="text-white/90 leading-relaxed mb-6">
                      {product.description}
                    </p>
                    <Link to={product.href}>
                      <Button variant="secondary" className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30">
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to get started?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of Nigerians who trust PennyTree Technologies for their financial needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              
              <Button variant="outline" size="lg" className="text-lg px-8">
                <Apple className="h-4 w-4 mr-2" />
                AppStore
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8" asChild>
                <a href="/download" target="_blank" rel="noopener noreferrer">
                  <Smartphone className="h-4 w-4 mr-2" />
                  PlayStore
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Products;