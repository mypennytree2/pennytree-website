import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Globe, TrendingUp, Lock, ArrowRight, CheckCircle } from "lucide-react";

const Vault = () => {
  const currencies = [
    { code: "NGN", name: "Nigerian Naira", rate: "Up to 27% PA", highlight: true },
    { code: "USD", name: "US Dollar", rate: "Competitive rates", highlight: false },
    { code: "GBP", name: "British Pound", rate: "Competitive rates", highlight: false },
    { code: "EUR", name: "Euro", rate: "Competitive rates", highlight: false },
    { code: "CAD", name: "Canadian Dollar", rate: "Competitive rates", highlight: false },
    { code: "AUD", name: "Australian Dollar", rate: "Competitive rates", highlight: false },
  ];

  const features = [
    "Save in Naira and 5 additional currencies",
    "Earn up to 27% per annum (Naira only)",
    "Lock funds for higher returns",
    "Choose flexible or fixed options",
    "Track growth in real-time",
    "Withdraw anytime on flexible vaults",
  ];

  const projection = [
    { period: "3 Months", amount: "₦1,067,500" },
    { period: "6 Months", amount: "₦1,135,000" },
    { period: "12 Months", amount: "₦1,270,000" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-background to-primary/3"></div>
        <div className="absolute top-32 right-10 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <TrendingUp className="h-4 w-4" />
              Earn up to 27% PA on Naira Vault
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Let Your Money Grow <span className="text-primary">While You Sleep.</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-4 max-w-xl mx-auto">
              Save in multiple currencies, earn competitive returns, and watch your wealth grow securely.
            </p>
            <p className="text-xs text-muted-foreground mb-8 max-w-md mx-auto">
              Returns vary by currency. 27% applies to eligible Naira vault products.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary-dark text-primary-foreground text-lg px-8 py-6 rounded-xl" asChild>
              <a href="/download" target="_blank" rel="noopener noreferrer">
                Open a Vault in the App
                <ArrowRight className="h-5 w-5 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Currency Selector */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Choose Your Currency</h2>
            <p className="text-muted-foreground">Save in the currency that works for you</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {currencies.map((currency) => (
              <Card
                key={currency.code}
                className={`rounded-2xl text-center transition-all duration-300 hover:shadow-lg cursor-pointer ${
                  currency.highlight
                    ? "border-2 border-primary bg-primary/5"
                    : "border border-border hover:border-primary/30"
                }`}
              >
                <CardContent className="p-6">
                  <div className="text-2xl font-bold text-foreground mb-1">{currency.code}</div>
                  <p className="text-xs text-muted-foreground mb-2">{currency.name}</p>
                  <p className={`text-xs font-semibold ${currency.highlight ? "text-primary" : "text-muted-foreground"}`}>
                    {currency.rate}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features + Projection */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Vault Features</h2>
              <div className="space-y-4">
                {features.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Growth Projection */}
            <Card className="border border-border rounded-2xl">
              <CardContent className="p-8">
                <div className="flex items-center gap-2 mb-6">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">Example Growth (₦1,000,000 at 27% PA)</h3>
                </div>
                <div className="space-y-4">
                  {projection.map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-muted rounded-xl">
                      <span className="text-muted-foreground">{item.period}</span>
                      <span className="text-lg font-bold text-primary">{item.amount}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  Illustration only. Actual returns depend on product terms and market conditions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-background mb-6">Start Growing Your Wealth</h2>
          <p className="text-background/70 mb-8 max-w-md mx-auto">
            Open a vault today and let your money work for you.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary-dark text-primary-foreground text-lg px-8 py-6 rounded-xl" asChild>
            <a href="/download" target="_blank" rel="noopener noreferrer">
              Open a Vault in the App
            </a>
          </Button>
          <p className="text-background/60 text-sm mt-6">
            Review the <a href="/personal-vault-terms" className="text-primary hover:underline">Personal Vault Terms & Conditions</a> before booking.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Vault;
