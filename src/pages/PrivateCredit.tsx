import { useEffect, useState, useRef, useCallback } from "react";
import { toast } from "@/hooks/use-toast";
import {
  Shield, CheckCircle, Lock, PlusCircle, Menu, X,
  ArrowDown, ArrowUp, Clock, DollarSign, ChevronDown
} from "lucide-react";
import logo from "@/assets/logo.png";

/* ─── Intersection Observer Hook ─── */
function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.15, ...options });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, inView };
}

/* ─── Shared Styles ─── */
const font = { serif: "font-['DM_Serif_Display']", body: "font-['Outfit']", mono: "font-['JetBrains_Mono']" };
const colors = {
  ink: "#0a0f1a", paper: "#f8f7f4", cream: "#f0ede6", sage: "#2d6a4f", sageLight: "#40916c",
  sageMuted: "rgba(45,106,79,0.08)", gold: "#c9a227", goldLight: "#e2c44f", slate: "#4a5568",
  mist: "#e8e5de", redSoft: "#c0392b",
};

/* ─── Coming Soon Badge ─── */
const ComingSoonBadge = () => (
  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase"
    style={{ background: `linear-gradient(135deg, ${colors.gold}, ${colors.goldLight})`, color: colors.ink, animation: "pcPulseGlow 2.5s ease-in-out infinite" }}>
    <span className="w-2 h-2 rounded-full bg-white" style={{ animation: "pcBlink 1.5s infinite" }} />
    Coming Soon
  </span>
);

/* ─── Frosted Overlay ─── */
const FrostedOverlay = ({ label = "Coming Soon" }: { label?: string }) => (
  <div className="absolute inset-0 z-10 flex items-center justify-center rounded-xl" style={{ backdropFilter: "blur(3px)", background: "rgba(255,255,255,0.25)" }}>
    <span className="px-5 py-2 rounded-full text-sm font-semibold" style={{ background: colors.ink, color: "#fff" }}>{label}</span>
  </div>
);

/* ─── Fade-Up Wrapper ─── */
const FadeUp = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className={className}
      style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(24px)", transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms` }}>
      {children}
    </div>
  );
};

/* ─── Section Header ─── */
const SectionHeader = ({ overline, headline, sub, light = false, overlineColor }: { overline: string; headline: string; sub?: string; light?: boolean; overlineColor?: string }) => (
  <div className="text-center mb-16">
    <p className={`text-xs font-semibold tracking-[0.2em] uppercase mb-3 ${font.body}`} style={{ color: overlineColor || colors.sage }}>{overline}</p>
    <h2 className={`text-3xl md:text-4xl mb-4 ${font.serif}`} style={{ color: light ? "#fff" : colors.ink }}>{headline}</h2>
    {sub && <p className="max-w-xl mx-auto text-base" style={{ color: light ? "rgba(255,255,255,0.6)" : colors.slate }}>{sub}</p>}
  </div>
);

/* ═══════════════════════ NAV ═══════════════════════ */
const PCNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => { const h = () => setScrolled(window.scrollY > 20); window.addEventListener("scroll", h); return () => window.removeEventListener("scroll", h); }, []);
  const links = [
    { label: "Opportunities", href: "#opportunities" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Wallet", href: "#wallet" },
    { label: "Why Us", href: "#why-us" },
    { label: "FAQ", href: "#faq" },
  ];
  const scrollTo = (href: string) => { setMobileOpen(false); document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }); };
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${font.body}`}
      style={{ backdropFilter: "blur(20px)", background: scrolled ? "rgba(248,247,244,0.92)" : "rgba(248,247,244,0.8)", boxShadow: scrolled ? "0 1px 12px rgba(0,0,0,0.08)" : "none" }}>
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <img src={logo} alt="PennyTree Technologies Logo" className="w-8 h-8 object-contain" />
          <span className={`text-lg ${font.serif}`} style={{ color: colors.ink }}>PennyTree Technologies</span>
          <span className="text-[10px] font-semibold tracking-[0.15em] uppercase px-1.5 py-0.5 rounded" style={{ background: colors.sageMuted, color: colors.sage }}>Private Credit</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          {links.map(l => <button key={l.href} onClick={() => scrollTo(l.href)} className="text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: colors.slate }}>{l.label}</button>)}
          <button onClick={() => scrollTo("#waitlist")} className="px-5 py-2 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90" style={{ background: colors.sage }}>Join Waitlist</button>
        </div>
        <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <X size={22} /> : <Menu size={22} />}</button>
      </div>
      {mobileOpen && (
        <div className="md:hidden border-t px-4 pb-4 pt-2" style={{ borderColor: colors.mist }}>
          {links.map(l => <button key={l.href} onClick={() => scrollTo(l.href)} className="block w-full text-left py-2.5 text-sm font-medium" style={{ color: colors.slate }}>{l.label}</button>)}
          <button onClick={() => scrollTo("#waitlist")} className="w-full mt-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white" style={{ background: colors.sage }}>Join Waitlist</button>
        </div>
      )}
    </nav>
  );
};

/* ═══════════════════════ HERO ═══════════════════════ */
const HeroSection = () => {
  const scrollTo = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  const deals = [
    { sector: "Agriculture", title: "Grain Export Working Capital", pct: 72, raised: "₦36M", rate: "22% p.a.", delay: "0s", dur: "6s" },
    { sector: "Healthcare", title: "Pharma Distribution Facility", pct: 45, raised: "₦22.5M", rate: "20% p.a.", delay: "0.5s", dur: "7s" },
    { sector: "Manufacturing", title: "Packaging LPO Finance", pct: 88, raised: "₦44M", rate: "24% p.a.", delay: "1s", dur: "8s" },
  ];
  return (
    <section className="pt-28 pb-20 px-4" style={{ background: colors.paper }}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <FadeUp>
          <ComingSoonBadge />
          <h1 className={`text-4xl md:text-5xl lg:text-[3.5rem] leading-tight mt-6 mb-5 ${font.serif}`} style={{ color: colors.ink }}>
            Earn <span style={{ color: colors.sage, fontStyle: "italic" }}>predictable returns</span> from private debt
          </h1>
          <p className="text-base md:text-lg mb-8 leading-relaxed" style={{ color: colors.slate }}>
            Access vetted, short-term debt opportunities financing real businesses across Nigeria. Structured, SEC-aligned, and transparent.
          </p>
          <div className="rounded-xl p-5 border grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-0 sm:divide-x" style={{ background: colors.cream, borderColor: colors.mist, ["--tw-divide-opacity" as any]: 1, ["--tw-divide-color" as any]: colors.mist }}>
            {[
              { val: "18–24%", label: "Target Returns" },
              { val: "30–180", label: "Days Tenor" },
              { val: "₦500K", label: "Min. Investment" },
            ].map(m => (
              <div key={m.label} className="text-center px-3">
                <p className={`text-2xl font-bold ${font.mono}`} style={{ color: colors.sage }}>{m.val}</p>
                <p className="text-[11px] font-semibold tracking-wider uppercase mt-1" style={{ color: colors.slate }}>{m.label}</p>
              </div>
            ))}
          </div>
          <button onClick={() => scrollTo("#waitlist")} className="mt-8 px-8 py-3 rounded-full text-base font-semibold text-white transition-all hover:opacity-90" style={{ background: colors.sage }}>Join the Waitlist</button>
        </FadeUp>
        <FadeUp delay={200}>
          <div className="relative">
            {deals.map((d, i) => (
              <div key={i} className="relative rounded-xl border p-4 mb-3 bg-white" style={{ borderColor: colors.mist, animation: `pcFloat ${d.dur} ease-in-out infinite`, animationDelay: d.delay }}>
                <span className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: colors.sage }}>{d.sector}</span>
                <p className={`text-sm mt-1 ${font.serif}`} style={{ color: colors.ink }}>{d.title}</p>
                <div className="w-full h-2 rounded-full mt-3 mb-2" style={{ background: colors.mist }}>
                  <div className="h-full rounded-full" style={{ width: `${d.pct}%`, background: `linear-gradient(90deg, ${colors.sage}, ${colors.sageLight})` }} />
                </div>
                <div className="flex justify-between text-xs" style={{ color: colors.slate }}>
                  <span>{d.raised} raised</span><span className={font.mono} style={{ color: colors.sage }}>{d.rate}</span>
                </div>
              </div>
            ))}
            <FrostedOverlay label="Launching Soon" />
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

/* ═══════════════════════ HOW IT WORKS ═══════════════════════ */
const HowItWorks = () => {
  const steps = [
    { n: "01", title: "Sign Up & KYC", desc: "Create your account, verify your identity (BVN/NIN), and complete KYC in minutes." },
    { n: "02", title: "Get Your Virtual Account", desc: "A dedicated virtual account is generated for you. All investments are funded from it, and all returns land back in it." },
    { n: "03", title: "Fund Wallet", desc: "Transfer funds to your virtual account via bank transfer. Your balance updates automatically and is ready to deploy." },
    { n: "04", title: "Browse & Invest", desc: "Explore vetted deals, review terms, risk bands, and collateral — then allocate from your wallet balance." },
    { n: "05", title: "Earn Returns", desc: "Receive interest payments on schedule — bullet or amortised. Payments are credited directly to your virtual account." },
    { n: "06", title: "Withdraw or Reinvest", desc: "At maturity, principal + interest land in your wallet. Withdraw to your bank account or roll into a new deal." },
  ];
  return (
    <section id="how-it-works" className="py-20 px-4" style={{ background: colors.cream }}>
      <div className="max-w-6xl mx-auto">
        <FadeUp><SectionHeader overline="HOW IT WORKS" headline="Six steps from sign-up to returns" sub="A simple, structured path from onboarding to earning." /></FadeUp>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <FadeUp key={s.n} delay={i * 100}>
              <div className="bg-white rounded-xl p-6 border h-full transition-all hover:-translate-y-1 hover:shadow-lg" style={{ borderColor: colors.mist }}>
                <div className={`w-10 h-10 rounded-full border flex items-center justify-center text-sm font-bold mb-4 ${font.mono}`} style={{ borderColor: colors.mist, color: colors.sage }}>{s.n}</div>
                <h3 className={`text-lg mb-2 ${font.serif}`} style={{ color: colors.ink }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: colors.slate }}>{s.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════ WALLET ═══════════════════════ */
const WalletSection = () => {
  const txns = [
    { icon: <ArrowDown size={16} />, label: "Wallet Funded", date: "Mar 28, 2026", amount: "+₦2,000,000", positive: true },
    { icon: <ArrowUp size={16} />, label: "Invested — Grain Export Facility", date: "Mar 28, 2026", amount: "−₦1,500,000", positive: false },
    { icon: <ArrowDown size={16} />, label: "Interest — Pharma Facility", date: "Mar 25, 2026", amount: "+₦125,000", positive: true },
  ];
  const features = [
    { icon: <DollarSign size={18} />, title: "Fund via Bank Transfer", desc: "Transfer to your unique virtual account number. Balance updates in real-time." },
    { icon: <CheckCircle size={18} />, title: "Auto-Credit on Returns", desc: "Interest payments and principal repayments are credited directly to your wallet — no manual claims." },
    { icon: <Clock size={18} />, title: "Withdraw Anytime", desc: "Move available (uninvested) funds back to your bank account whenever you choose." },
    { icon: <Lock size={18} />, title: "Secure & Segregated", desc: "Your funds sit in a segregated account. Investment allocations are ring-fenced per deal." },
  ];
  return (
    <section id="wallet" className="py-20 px-4" style={{ background: colors.paper }}>
      <div className="max-w-6xl mx-auto">
        <FadeUp><SectionHeader overline="YOUR INVESTMENT WALLET" headline="One account. All money flows." sub="When you sign up, we generate a dedicated virtual account linked to your profile. It's the single point for every naira in and out." /></FadeUp>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Text first on mobile via order */}
          <FadeUp delay={200} className="order-2 md:order-1">
            <div className="relative rounded-2xl border bg-white overflow-hidden" style={{ borderColor: colors.mist, boxShadow: "0 8px 30px rgba(0,0,0,0.06)" }}>
              <div className="px-5 py-4 flex justify-between items-center border-b" style={{ borderColor: colors.mist }}>
                <span className="text-sm font-semibold" style={{ color: colors.ink }}>Investment Wallet</span>
                <span className="flex items-center gap-1.5 text-xs font-semibold" style={{ color: colors.sage }}>
                  <span className="w-2 h-2 rounded-full" style={{ background: colors.sage, animation: "pcBlink 1.5s infinite" }} /> Active
                </span>
              </div>
              <div className="p-5 text-white" style={{ background: `linear-gradient(135deg, ${colors.sage}, #1b4332)` }}>
                <p className="text-[10px] tracking-wider uppercase opacity-70 mb-1">Available Balance</p>
                <p className={`text-3xl font-bold ${font.mono}`}>₦ 4,250,000.00</p>
              </div>
              <div className="p-4" style={{ background: colors.cream }}>
                <div className="flex justify-between text-xs">
                  <span style={{ color: colors.slate }}>Virtual Account</span>
                  <span className={`font-semibold ${font.mono}`} style={{ color: colors.ink }}>801 234 5678</span>
                </div>
                <div className="flex justify-between text-xs mt-1.5">
                  <span style={{ color: colors.slate }}>Bank</span>
                  <span className="font-bold" style={{ color: colors.ink }}>PennyTree Technologies MFB</span>
                </div>
              </div>
              <div className="px-4 pb-4">
                <p className="text-[10px] font-semibold tracking-wider uppercase mb-3" style={{ color: colors.slate }}>Recent Activity</p>
                {txns.map((t, i) => (
                  <div key={i} className="flex items-center justify-between py-2.5 border-t" style={{ borderColor: colors.mist }}>
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: t.positive ? "rgba(45,106,79,0.1)" : "rgba(192,57,43,0.1)", color: t.positive ? colors.sage : colors.redSoft }}>{t.icon}</div>
                      <div>
                        <p className="text-xs font-medium" style={{ color: colors.ink }}>{t.label}</p>
                        <p className="text-[10px]" style={{ color: colors.slate }}>{t.date}</p>
                      </div>
                    </div>
                    <span className={`text-xs font-semibold ${font.mono}`} style={{ color: t.positive ? colors.sage : colors.redSoft }}>{t.amount}</span>
                  </div>
                ))}
              </div>
              <FrostedOverlay label="Preview Only" />
            </div>
          </FadeUp>
          <FadeUp className="order-1 md:order-2">
            <div className="space-y-5">
              {features.map((f, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: colors.sageMuted, color: colors.sage }}>{f.icon}</div>
                  <div>
                    <p className="text-sm font-bold mb-0.5" style={{ color: colors.ink }}>{f.title}</p>
                    <p className="text-sm leading-relaxed" style={{ color: colors.slate }}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════ OPPORTUNITIES ═══════════════════════ */
const OpportunitiesSection = () => {
  const deals = [
    { sector: "Agriculture · Export", title: "Grain Commodity Export Facility", risk: "Band A", riskColor: colors.sage, ret: "22% p.a.", tenor: "90 Days", repay: "Bullet", collateral: "Receivables", pct: 72, raised: "₦36M", target: "₦50M" },
    { sector: "Healthcare · Distribution", title: "Pharma Inventory Finance", risk: "Band A", riskColor: colors.sage, ret: "20% p.a.", tenor: "60 Days", repay: "Bullet", collateral: "Inventory + PG", pct: 45, raised: "₦22.5M", target: "₦50M" },
    { sector: "Manufacturing · LPO", title: "Packaging LPO Bridge Facility", risk: "Band B", riskColor: colors.gold, ret: "24% p.a.", tenor: "120 Days", repay: "Amortised", collateral: "LPO + Guarantee", pct: 88, raised: "₦44M", target: "₦50M" },
  ];
  const scrollTo = () => document.querySelector("#waitlist")?.scrollIntoView({ behavior: "smooth" });
  return (
    <section id="opportunities" className="py-20 px-4" style={{ background: colors.paper }}>
      <div className="max-w-6xl mx-auto">
        <FadeUp><SectionHeader overline="OPPORTUNITIES" headline="Sample deal structures" sub="Here's the type of investment-grade debt you'll have access to at launch." /></FadeUp>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {deals.map((d, i) => (
            <FadeUp key={i} delay={i * 100}>
              <div className="relative rounded-xl border bg-white overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg" style={{ borderColor: colors.mist }}>
                <div className="p-5 border-b" style={{ borderColor: colors.mist }}>
                  <p className="text-[10px] font-semibold uppercase tracking-wider mb-1" style={{ color: colors.sage }}>{d.sector}</p>
                  <h3 className={`text-base mb-2 ${font.serif}`} style={{ color: colors.ink }}>{d.title}</h3>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ background: d.riskColor === colors.sage ? colors.sageMuted : "rgba(201,162,39,0.12)", color: d.riskColor }}>{d.risk}</span>
                </div>
                <div className="p-5 space-y-2.5">
                  {[["Return", d.ret], ["Tenor", d.tenor], ["Repayment", d.repay], ["Collateral", d.collateral]].map(([l, v]) => (
                    <div key={l} className="flex justify-between text-xs">
                      <span style={{ color: colors.slate }}>{l}</span>
                      <span className={`font-semibold ${font.mono}`} style={{ color: colors.ink }}>{v}</span>
                    </div>
                  ))}
                  <div className="pt-2">
                    <div className="w-full h-2 rounded-full" style={{ background: colors.mist }}>
                      <div className="h-full rounded-full" style={{ width: `${d.pct}%`, background: `linear-gradient(90deg, ${colors.sage}, ${colors.sageLight})` }} />
                    </div>
                    <div className="flex justify-between text-[10px] mt-1.5" style={{ color: colors.slate }}>
                      <span>{d.raised} raised</span><span>{d.target} target</span>
                    </div>
                  </div>
                </div>
                <button onClick={scrollTo} className="w-full py-3 text-sm font-semibold border-t text-center transition-colors hover:bg-[rgba(45,106,79,0.04)]" style={{ borderColor: colors.mist, color: colors.sage }}>View Deal →</button>
                <FrostedOverlay />
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════ WHY US ═══════════════════════ */
const WhyUsSection = () => {
  const cards = [
    { icon: <Shield size={22} />, title: "SEC-Aligned Structure", desc: "Investment framework designed in compliance with applicable SEC Nigeria rules for crowdfunding activities." },
    { icon: <CheckCircle size={22} />, title: "Rigorous Underwriting", desc: "Multi-stage screening: sourcing, financial analysis, credit assessment, collateral review, and ongoing monitoring." },
    { icon: <Lock size={22} />, title: "Collateral Backed", desc: "Deals are secured by receivables, inventory, guarantees, or a combination — with documented coverage ratios." },
    { icon: <PlusCircle size={22} />, title: "Transparent Risk", desc: "Every deal includes risk bands, scenario analysis, key risks, and mitigants. No hidden surprises." },
  ];
  return (
    <section id="why-us" className="py-20 px-4" style={{ background: colors.ink }}>
      <div className="max-w-6xl mx-auto">
        <FadeUp><SectionHeader overline="WHY PENNYTREE PRIVATE CREDIT" headline="Built on structure, not speculation" sub="Every layer of our platform is designed to protect capital and deliver transparency." light overlineColor={colors.gold} /></FadeUp>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, i) => (
            <FadeUp key={i} delay={i * 100}>
              <div className="rounded-xl p-6 border transition-all hover:-translate-y-1 hover:bg-[rgba(255,255,255,0.06)]" style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.1)" }}>
                <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-4" style={{ background: "rgba(201,162,39,0.15)", color: colors.gold }}>{c.icon}</div>
                <h3 className={`text-base mb-2 ${font.serif}`} style={{ color: "#fff" }}>{c.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>{c.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════ TRACK RECORD ═══════════════════════ */
const TrackRecord = () => (
  <section className="py-20 px-4" style={{ background: colors.paper }}>
    <div className="max-w-6xl mx-auto">
      <FadeUp><SectionHeader overline="PLATFORM TRACK RECORD" headline="Numbers that speak" /></FadeUp>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {["Total Funded", "Repayment Rate", "Default Rate", "Active Investors"].map((l, i) => (
          <FadeUp key={l} delay={i * 100}>
            <div className="text-center py-6">
              <p className={`text-4xl font-bold mb-2 ${font.mono}`} style={{ color: colors.sage }}>—</p>
              <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: colors.slate }}>{l}</p>
            </div>
          </FadeUp>
        ))}
      </div>
      <FadeUp><p className={`text-center text-sm italic ${font.serif}`} style={{ color: colors.slate }}>Track record metrics will populate once live deals begin. These are illustrative placeholders.</p></FadeUp>
    </div>
  </section>
);

/* ═══════════════════════ FAQ ═══════════════════════ */
const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);
  const items = [
    { q: "What happens if a borrower defaults?", a: "In the event of default, the platform initiates recovery procedures against available collateral. Investors are notified immediately, and the recovery timeline and outcome depend on the collateral type and legal enforcement. Capital is at risk and returns are not guaranteed." },
    { q: "When do I get paid?", a: "Payment depends on the deal structure. Bullet repayment deals pay principal plus interest at maturity. Amortised deals pay at regular intervals (e.g. monthly). Payment schedules are disclosed upfront on each deal page." },
    { q: "Is my capital guaranteed?", a: "No. As with all investments, capital is at risk. However, deals are structured with collateral, risk mitigants, and underwriting standards designed to minimise loss exposure. We encourage investors to diversify." },
    { q: "Can I exit early?", a: "Early exit is generally not available during the investment tenor. A secondary market feature is planned for a future phase. All investments should be considered illiquid until maturity." },
    { q: "How are deals selected and vetted?", a: "Every deal undergoes a four-stage process: sourcing, screening, credit committee approval, and ongoing monitoring. We review financials, collateral, industry risk, borrower history, and repayment capacity before any deal is listed." },
    { q: "Who is eligible to invest?", a: "Nigerian residents who complete the KYC onboarding process (BVN/NIN verification, ID, and address confirmation) are eligible. Investor eligibility criteria may apply depending on deal type and regulatory requirements." },
  ];
  return (
    <section id="faq" className="py-20 px-4" style={{ background: colors.cream }}>
      <div className="max-w-2xl mx-auto">
        <FadeUp><SectionHeader overline="FAQ" headline="Common questions" /></FadeUp>
        <div className="space-y-3">
          {items.map((item, i) => (
            <FadeUp key={i} delay={i * 80}>
              <div className="rounded-xl border bg-white overflow-hidden" style={{ borderColor: colors.mist }}>
                <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between px-5 py-4 text-left">
                  <span className="text-sm font-semibold pr-4" style={{ color: colors.ink }}>{item.q}</span>
                  <span className="shrink-0 text-lg transition-transform duration-300" style={{ color: colors.sage, transform: open === i ? "rotate(45deg)" : "rotate(0)" }}>+</span>
                </button>
                <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: open === i ? "300px" : "0" }}>
                  <p className="px-5 pb-4 text-sm leading-relaxed" style={{ color: colors.slate }}>{item.a}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════ WAITLIST ═══════════════════════ */
const WaitlistSection = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { toast({ title: "Invalid email", description: "Please enter a valid email address.", variant: "destructive" }); return; }
    toast({ title: "You're on the list! 🎉", description: "We'll notify you at launch." });
    setEmail("");
  };
  return (
    <section id="waitlist" className="py-20 px-4 relative overflow-hidden" style={{ background: colors.paper }}>
      <div className="absolute inset-0 opacity-[0.03]" style={{ background: `linear-gradient(135deg, ${colors.sage}, ${colors.gold})` }} />
      <div className="max-w-xl mx-auto text-center relative z-10">
        <FadeUp>
          <ComingSoonBadge />
          <h2 className={`text-3xl md:text-4xl mt-6 mb-4 ${font.serif}`} style={{ color: colors.ink }}>Be first in line</h2>
          <p className="text-base mb-8" style={{ color: colors.slate }}>Join the waitlist to get early access when PennyTree Technologies Private Credit launches.</p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-4">
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email address"
              className={`flex-1 px-4 py-3 rounded-full border text-sm outline-none focus:ring-2 ${font.body}`}
              style={{ borderColor: colors.mist, background: "#fff", ["--tw-ring-color" as any]: colors.sage }} />
            <button type="submit" className="px-8 py-3 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90 whitespace-nowrap" style={{ background: colors.sage }}>Join Waitlist</button>
          </form>
          <p className="text-xs" style={{ color: colors.slate }}>🔒 Your information is secure and will only be used for launch notifications.</p>
        </FadeUp>
      </div>
    </section>
  );
};

/* ═══════════════════════ RISK DISCLOSURE ═══════════════════════ */
const RiskDisclosure = () => (
  <div className="py-5 px-4 text-center" style={{ background: colors.ink }}>
    <p className="text-xs max-w-4xl mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
      <span className="font-bold" style={{ color: colors.gold }}>Risk Disclosure:</span>{" "}
      Capital is at risk. Returns are not guaranteed. Past performance is not indicative of future results. Investments in private debt instruments are illiquid. PennyTree Technologies Private Credit operates in compliance with applicable SEC Nigeria rules.
    </p>
  </div>
);

/* ═══════════════════════ FOOTER ═══════════════════════ */
const PCFooter = () => {
  const scrollTo = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  return (
    <footer className="py-16 px-4 border-t" style={{ background: colors.cream, borderColor: colors.mist }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img src={logo} alt="PennyTree Technologies Logo" className="w-7 h-7 object-contain" />
              <span className={`text-base ${font.serif}`} style={{ color: colors.ink }}>PennyTree Technologies</span>
            </div>
            <p className="text-xs leading-relaxed" style={{ color: colors.slate }}>PennyTree Technologies Private Credit provides access to short-term, investment-grade debt opportunities under a structured and compliant framework.</p>
          </div>
          {[
            { title: "Product", links: [{ l: "Opportunities", h: "#opportunities" }, { l: "How It Works", h: "#how-it-works" }, { l: "Why Us", h: "#why-us" }, { l: "FAQ", h: "#faq" }] },
            { title: "Company", links: [{ l: "About PennyTree Technologies", h: "#" }, { l: "Treegar Capital", h: "#" }, { l: "Careers", h: "#" }, { l: "Contact", h: "#" }] },
            { title: "Legal", links: [{ l: "Terms of Use", h: "#" }, { l: "Privacy Policy", h: "#" }, { l: "Risk Disclosure", h: "#" }, { l: "SEC Compliance", h: "#" }] },
          ].map(col => (
            <div key={col.title}>
              <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: colors.ink }}>{col.title}</p>
              {col.links.map(lk => (
                <button key={lk.l} onClick={() => scrollTo(lk.h)} className="block text-sm mb-2 hover:opacity-70 transition-opacity" style={{ color: colors.slate }}>{lk.l}</button>
              ))}
            </div>
          ))}
        </div>
        <div className="border-t pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs" style={{ borderColor: colors.mist, color: colors.slate }}>
          <span>© {new Date().getFullYear()} PennyTree Technologies Business Limited. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:opacity-70">Terms</a>
            <a href="#" className="hover:opacity-70">Privacy</a>
            <a href="#" className="hover:opacity-70">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

/* ═══════════════════════ MAIN PAGE ═══════════════════════ */
const PrivateCredit = () => (
  <div className={`min-h-screen ${font.body}`} style={{ background: colors.paper }}>
    <style>{`
      @keyframes pcFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
      @keyframes pcPulseGlow { 0%,100%{box-shadow:0 0 8px rgba(201,162,39,0.3)} 50%{box-shadow:0 0 20px rgba(201,162,39,0.6)} }
      @keyframes pcBlink { 0%,100%{opacity:1} 50%{opacity:0.3} }
    `}</style>
    <PCNav />
    <HeroSection />
    <HowItWorks />
    <WalletSection />
    <OpportunitiesSection />
    <WhyUsSection />
    <TrackRecord />
    <FAQSection />
    <WaitlistSection />
    <RiskDisclosure />
    <PCFooter />
  </div>
);

export default PrivateCredit;
