import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Shield,
  Send,
  Wallet,
  Receipt,
  Globe,
  TrendingUp,
  FileText,
  Smartphone,
  Lock,
  DollarSign,
  BarChart3,
  Users,
  Briefcase,
  UserPlus,
  CheckCircle,
} from "lucide-react";
import logo from "@/assets/logo.png";
import appScreenshot from "@/assets/pennytree-app-screenshot.png";
import secLogo from "@/assets/sec-logo.svg";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const Home = () => {
  const features = [
    {
      icon: <Send className="h-6 w-6" />,
      title: "Send & Receive Money",
      description: "Instant transfers via account number or Penntag. Fast, free, and secure.",
      href: "/send-receive",
    },
    {
      icon: <Wallet className="h-6 w-6" />,
      title: "Personal & Business Accounts",
      description: "Tailored accounts for individuals and SMEs with full banking features.",
      href: "/accounts",
    },
    {
      icon: <Receipt className="h-6 w-6" />,
      title: "Bill Payments",
      description: "Pay for airtime, data, electricity, cable TV, and more — all in one place.",
      href: "#",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Multi-Currency Vaults",
      description: "Save in Naira and 5 other currencies. Earn up to 27% PA on Naira vaults.",
      href: "/vault",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Loans",
      description: "Quick access to flexible loans with transparent terms and fast approval.",
      href: "/loans",
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Invoice Discounting",
      description: "Invest in vetted short-term business invoices and earn fixed returns.",
      href: "/invoice-discounting",
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Private Credit",
      description: "Earn predictable returns from vetted, short-term private debt opportunities.",
      href: "/private-credit",
    },
  ];

  const regulatoryLogos = [
    { src: secLogo, alt: "Securities and Exchange Commission of Nigeria" },
  ];

  const floatingCards = [
    { icon: <Send className="h-4 w-4" />, label: "Send Money", sub: "Instant Transfer", pos: "top-8 -left-8", delay: 0, anim: { y: [0, -10, 0], rotate: [0, 1, 0] } },
    { icon: <TrendingUp className="h-4 w-4" />, label: "Earn Interest", sub: "Up to 27% PA", pos: "top-24 -right-10", delay: 0.6, anim: { y: [0, 8, 0], rotate: [0, -1, 0] } },
    { icon: <Lock className="h-4 w-4" />, label: "Vault Savings", sub: "Multi-Currency", pos: "bottom-32 -left-6", delay: 1.2, anim: { y: [0, -8, 0], rotate: [0, 1.5, 0] } },
    { icon: <Receipt className="h-4 w-4" />, label: "Bills Payment", sub: "All-in-One", pos: "bottom-16 -right-8", delay: 0.3, anim: { y: [0, 10, 0], rotate: [0, -1.5, 0] } },
    { icon: <Briefcase className="h-4 w-4" />, label: "Business Account", sub: "For SMEs", pos: "top-[45%] -left-12", delay: 0.9, anim: { y: [0, -6, 0], x: [0, 3, 0] } },
    { icon: <UserPlus className="h-4 w-4" />, label: "Personal Account", sub: "Get Started", pos: "top-[55%] -right-12", delay: 1.5, anim: { y: [0, 6, 0], x: [0, -3, 0] } },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-[hsl(142,30%,98%)] to-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-28 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
        {/* Rich gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(142,40%,97%)] via-background to-background"></div>
        {/* Grid texture */}
        <div className="absolute inset-0 data-grid opacity-30"></div>
        {/* Decorative blur shapes */}
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-primary/8 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]"></div>
        <div className="absolute top-[30%] right-[10%] w-[250px] h-[250px] bg-primary/6 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[20%] left-[15%] w-[200px] h-[200px] bg-primary/4 rounded-full blur-[80px]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left - Copy */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.h1
                variants={fadeInUp}
                className="text-4xl md:text-[3.2rem] lg:text-[3.6rem] font-semibold text-foreground leading-[1.15] tracking-[-0.02em] mb-6"
              >
                Grow your money<br />
                <span className="text-primary">with confidence.</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-base md:text-lg text-muted-foreground mb-10 max-w-md leading-relaxed font-normal"
              >
                Send money, save in multiple currencies, access loans, and invest
                in structured opportunities — all in one app.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-3">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-medium px-7 py-5 rounded-xl transition-all hover:shadow-lg hover:-translate-y-0.5"
                  asChild
                >
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="/download"
                  >
                    Download the App
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-sm font-medium px-7 py-5 rounded-xl border border-border text-primary hover:bg-primary/5 transition-all hover:shadow-md hover:-translate-y-0.5"
                  asChild
                >
                  <a
                    href="/download"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get PennyTree Technologies
                  </a>
                </Button>
              </motion.div>

              {/* Trust Badges */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap items-center gap-4 mt-8"
              >
                {[
                  { icon: <Shield className="h-3.5 w-3.5" />, text: "SEC Regulated" },
                  { icon: <Lock className="h-3.5 w-3.5" />, text: "Secure Transfers" },
                  { icon: <Users className="h-3.5 w-3.5" />, text: "10k+ Users" },
                ].map((badge) => (
                  <div
                    key={badge.text}
                    className="flex items-center gap-1.5 text-xs text-muted-foreground bg-muted/60 border border-border/50 rounded-full px-3 py-1.5"
                  >
                    <span className="text-primary">{badge.icon}</span>
                    {badge.text}
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right - Phone Mockup */}
            <motion.div
              className="relative flex justify-center"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Enhanced green radial glow behind phone */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-primary/15 rounded-full blur-[80px]"></div>
              <div className="absolute top-12 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[90px]"></div>
              <div className="absolute bottom-12 left-0 w-48 h-48 bg-primary/8 rounded-full blur-[70px]"></div>

              {/* iPhone frame with float animation */}
              <motion.div
                className="relative"
                style={{ transform: "perspective(1200px) rotateY(-4deg) rotateX(2deg)" }}
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-[270px] md:w-[290px] bg-[hsl(var(--foreground))] rounded-[2.8rem] p-[10px] shadow-2xl">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-[hsl(var(--foreground))] rounded-b-2xl z-10"></div>
                  <div className="rounded-[2.2rem] overflow-hidden bg-primary/10">
                    <img
                      src={appScreenshot}
                      alt="PennyTree Technologies App"
                      className="w-full h-auto block"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Floating UI cards around phone */}
              {floatingCards.map((card) => (
                <motion.div
                  key={card.label}
                  className={`absolute ${card.pos} bg-background/95 backdrop-blur-sm border border-border/80 rounded-2xl px-3.5 py-2.5 shadow-lg hidden md:block`}
                  animate={card.anim}
                  transition={{ duration: 4 + card.delay, repeat: Infinity, ease: "easeInOut", delay: card.delay }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      {card.icon}
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-foreground leading-tight">{card.label}</p>
                      <p className="text-[9px] text-muted-foreground">{card.sub}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gradient separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

      {/* Regulatory Trust Scroll Section */}
      <section className="py-16 md:py-20 bg-[hsl(142,30%,98%)]">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm font-normal text-muted-foreground tracking-widest uppercase mb-10">
            Licensed & Regulated By
          </p>
        </div>
        <div className="flex items-center justify-center gap-16">
          {regulatoryLogos.map((item, i) => (
            <div key={i} className="flex items-center justify-center">
              <img
                src={item.src}
                alt={item.alt}
                className="h-14 w-auto object-contain opacity-[0.7] grayscale-[20%] hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Gradient separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

      {/* Core Features Grid */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        {/* Alternating background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-[hsl(142,30%,98%)]"></div>
        <div className="absolute inset-0 data-grid opacity-15"></div>
        {/* Decorative blurs */}
        <div className="absolute top-10 left-[-5%] w-[300px] h-[300px] bg-primary/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-10 right-[-5%] w-[250px] h-[250px] bg-primary/4 rounded-full blur-[100px]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-5xl font-bold text-foreground mb-4"
            >
              Everything you need, <span className="text-primary">one app</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              From everyday payments to long-term savings and investments — PennyTree Technologies has you covered.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Link to={feature.href}>
                  <Card className="h-full border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 rounded-2xl group cursor-pointer hover:-translate-y-1 bg-background/80 backdrop-blur-sm">
                    <CardContent className="p-8">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/20">
                        {feature.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {feature.description}
                      </p>
                      <div className="mt-4 flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1">
                        Learn more <ArrowRight className="h-4 w-4 ml-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gradient separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

      {/* Vault Highlight Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(142,30%,97%)] via-[hsl(142,25%,98%)] to-background"></div>
        <div className="absolute top-20 right-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-20 left-10 w-[200px] h-[200px] bg-primary/4 rounded-full blur-[90px]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                <Globe className="h-4 w-4" />
                Multi-Currency Vaults
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Earn up to <span className="text-primary">27% PA</span> on your Naira savings
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Save in Naira and 5 additional currencies. Lock funds for higher returns
                or choose flexible options. Watch your money grow while you sleep.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-xs text-muted-foreground mb-8">
                Returns vary by currency. 27% applies to eligible Naira vault products.
              </motion.p>
              <motion.div variants={fadeInUp}>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 hover:shadow-lg hover:-translate-y-0.5 transition-all"
                  asChild
                >
                  <Link to="/vault">
                    Explore Vaults <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Vault growth visual */}
            <motion.div
              className="bg-background/90 backdrop-blur-sm rounded-3xl border border-border p-8 shadow-xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm text-muted-foreground">Naira Vault</p>
                  <p className="text-3xl font-bold text-foreground">₦5,000,000</p>
                </div>
                <div className="bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-semibold flex items-center gap-1">
                  <TrendingUp className="h-4 w-4" /> +27% PA
                </div>
              </div>

              {/* Growth bars */}
              <div className="space-y-4">
                {[
                  { month: "Jan", val: 30 },
                  { month: "Mar", val: 45 },
                  { month: "Jun", val: 62 },
                  { month: "Sep", val: 78 },
                  { month: "Dec", val: 100 },
                ].map((item) => (
                  <div key={item.month} className="flex items-center gap-3">
                    <span className="text-xs text-muted-foreground w-8">{item.month}</span>
                    <div className="flex-1 bg-muted rounded-full h-3 overflow-hidden">
                      <motion.div
                        className="h-full bg-primary rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.val}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-border grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-xl font-bold text-primary">₦1.35M</p>
                  <p className="text-xs text-muted-foreground">Interest Earned</p>
                </div>
                <div>
                  <p className="text-xl font-bold text-foreground">12</p>
                  <p className="text-xs text-muted-foreground">Months</p>
                </div>
                <div>
                  <p className="text-xl font-bold text-foreground">6</p>
                  <p className="text-xs text-muted-foreground">Currencies</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gradient separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

      {/* Private Credit Highlight Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(142,30%,97%)] via-background to-[hsl(142,25%,98%)]"></div>
        <div className="absolute top-10 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-10 right-10 w-[250px] h-[250px] bg-primary/4 rounded-full blur-[100px]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Visual */}
            <motion.div
              className="bg-background/90 backdrop-blur-sm rounded-3xl border border-border p-8 shadow-xl relative overflow-hidden order-2 lg:order-1"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
            >
              {/* Frosted overlay */}
              <div className="absolute inset-0 z-10 flex items-center justify-center rounded-3xl" style={{ backdropFilter: "blur(2px)", background: "rgba(255,255,255,0.15)" }}>
                <span className="px-5 py-2 rounded-full text-sm font-semibold bg-foreground text-background">Coming Soon</span>
              </div>

              <div className="space-y-4">
                {[
                  { sector: "Agriculture", title: "Grain Export Working Capital", rate: "22% p.a.", progress: 72 },
                  { sector: "Healthcare", title: "Pharma Distribution Facility", rate: "20% p.a.", progress: 45 },
                  { sector: "Manufacturing", title: "Packaging LPO Finance", rate: "24% p.a.", progress: 88 },
                ].map((deal) => (
                  <div key={deal.title} className="border border-border rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-primary uppercase tracking-wide">{deal.sector}</span>
                      <span className="text-sm font-semibold text-foreground">{deal.rate}</span>
                    </div>
                    <p className="text-sm font-semibold text-foreground mb-3">{deal.title}</p>
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="h-full bg-primary rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${deal.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1.5">{deal.progress}% funded</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right - Text */}
            <motion.div
              className="order-1 lg:order-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                <Briefcase className="h-4 w-4" />
                Private Credit — Coming Soon
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Earn <span className="text-primary">predictable returns</span> from private debt
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Access vetted, short-term debt opportunities financing real businesses across Nigeria.
                Structured, SEC-aligned, and transparent — with target returns of 18–24% p.a.
              </motion.p>
              <motion.div variants={fadeInUp} className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { value: "18–24%", label: "Target Returns" },
                  { value: "30–180", label: "Days Tenor" },
                  { value: "₦500K", label: "Min. Investment" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center bg-muted/50 rounded-xl p-3 border border-border/50">
                    <p className="text-lg font-bold text-primary">{stat.value}</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
              <motion.div variants={fadeInUp}>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 hover:shadow-lg hover:-translate-y-0.5 transition-all"
                  asChild
                >
                  <Link to="/private-credit">
                    Join the Waitlist <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gradient separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-[hsl(142,30%,97%)]"></div>
        <div className="absolute top-0 right-[20%] w-[300px] h-[300px] bg-primary/4 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-[10%] w-[250px] h-[250px] bg-primary/3 rounded-full blur-[100px]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Why <span className="text-primary">PennyTree Technologies</span>?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built for trust, designed for growth.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            {[
              { icon: <DollarSign className="h-8 w-8" />, value: "Free", label: "Transfers", description: "Send money to anyone at zero cost" },
              { icon: <BarChart3 className="h-8 w-8" />, value: "27%", label: "PA Returns", description: "Earn up to 27% per annum on Naira Vault" },
              { icon: <Shield className="h-8 w-8" />, value: "SEC", label: "Regulated", description: "Licensed & regulated by the Securities and Exchange Commission of Nigeria" },
              { icon: <Smartphone className="h-8 w-8" />, value: "24/7", label: "Mobile Access", description: "Bank anytime, anywhere from your phone" },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/25 group-hover:-translate-y-1">
                  {item.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">{item.value}</div>
                <div className="text-base font-semibold text-primary mb-1">{item.label}</div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28 bg-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-background mb-6">
              Start Growing Today.
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-background/70 mb-10 max-w-xl mx-auto">
              Download PennyTree Technologies and take control of your financial future.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-full hover:shadow-lg hover:-translate-y-0.5 transition-all"
                asChild
              >
                <a href="/download" target="_blank" rel="noopener noreferrer">
                  Download the App
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:-translate-y-0.5 transition-all"
                asChild
              >
                <a href="/download" target="_blank" rel="noopener noreferrer">
                  Get Started
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
