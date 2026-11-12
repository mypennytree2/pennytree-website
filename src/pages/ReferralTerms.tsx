import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

// Source: "PennyTree Refer & Earn Terms and Conditions", last updated September 2026.

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="policy bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
    <h2 className="text-xl font-semibold text-foreground mb-4">{title}</h2>
    <div className="space-y-4 text-muted-foreground">{children}</div>
  </div>
);

const Sub = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="space-y-2">
    <h3 className="font-semibold text-foreground">{title}</h3>
    {children}
  </div>
);

const Bullets = ({ items }: { items: React.ReactNode[] }) => (
  <ul className="list-disc pl-5 space-y-2">
    {items.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>
);

const SimpleTable = ({ head, rows }: { head: string[]; rows: string[][] }) => (
  <Table>
    <TableHeader>
      <TableRow>
        {head.map((h) => (
          <TableHead key={h}>{h}</TableHead>
        ))}
      </TableRow>
    </TableHeader>
    <TableBody>
      {rows.map((row) => (
        <TableRow key={row[0]}>
          {row.map((cell, i) => (
            <TableCell key={i} className={i === 0 ? 'font-semibold text-foreground' : undefined}>
              {cell}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

const ReferralTerms = () => {
  return (
    <>
      <Navigation />
      <main>
        <section className="page-header py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Refer & Earn Terms & Conditions
            </h1>
            <p className="text-lg text-muted-foreground mt-3">Last updated: September 2026</p>
          </div>
        </section>

        <section className="page-body py-16">
          <div className="container mx-auto px-4 max-w-4xl space-y-8">
            <div className="policy bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <p className="text-muted-foreground">
                These Terms and Conditions (&apos;Referral Terms&apos;) govern participation in the PennyTree Refer &amp; Earn
                program (&apos;the Program&apos;) operated through the PennyTree mobile application (&apos;the Platform&apos;)
                by Penny Tree Business Limited (&apos;PennyTree&apos;, &apos;we&apos;, &apos;us&apos;). By activating a
                Referrer profile or referring anyone through the Platform, you (&apos;the Referrer&apos;, &apos;you&apos;)
                agree to be bound by these Referral Terms, in addition to PennyTree&apos;s general Terms of Use and Privacy
                Policy.
              </p>
            </div>

            <Section title="1. Definitions">
              <Bullets
                items={[
                  '"Referrer" means a PennyTree account holder participating in the Program.',
                  '"Referee" means a person who signs up for PennyTree using the Referrer\'s referral code or link.',
                  '"Funded Referral" means a referee who has completed at least the first stage of identity (KYC) verification on the PennyTree app, and has funded their account with a minimum of ₦500.00. A signup, app download, or completed KYC alone does not make someone a Funded Referral; all requirements must be met.',
                  '"Cycle" means a rolling 7-day window within which the user must complete at least 5 Funded Referrals to unlock the Cycle Reward described in Section 3.',
                  '"Bonus" means any of the Milestone Bonus or Leaderboard Prize described in these Referral Terms.',
                ]}
              />
            </Section>

            <Section title="2. Eligibility">
              <Bullets
                items={[
                  'You must hold a verified PennyTree account in good standing to participate in the Program.',
                  'You may not refer yourself, an existing PennyTree account holder, or create duplicate or fictitious accounts to generate Referees. See Section 7.',
                  'PennyTree may suspend or remove any Referrer from the Program at its discretion, including for suspected abuse under Section 7.',
                ]}
              />
            </Section>

            <Section title="3. How You Earn">
              <Sub title="3.1 Referral Reward">
                <p>
                  You earn ₦400.00 for every Funded Referral, credited toward your Cycle balance on an ongoing basis as each
                  referee becomes a Funded Referral.
                </p>
              </Sub>
              <Sub title="3.2 Cycle Reward">
                <p>
                  The ₦400.00 earned per Funded Referral is not immediately withdrawable. It becomes withdrawable to your
                  PennyTree wallet once you have accrued at least ₦2,000.00 (5 Funded Referrals) within a single rolling 7-day
                  Cycle. This is not an additional ₦2,000.00 on top of your Referral Reward; it is the point at which your
                  accrued Referral Reward for that Cycle unlocks for withdrawal.
                </p>
                <Bullets
                  items={[
                    'If 7 days elapse before you accrue ₦2,000.00 (5 Funded Referrals) in that Cycle, the Cycle resets. Funded Referrals already counted in that Cycle do not carry over into a new Cycle.',
                    'Each withdrawal releases ₦2,000.00 for that Cycle only; accruing a further ₦2,000.00 (5 Funded Referrals) in a new Cycle unlocks a further withdrawal.',
                  ]}
                />
              </Sub>
            </Section>

            <Section title="4. Milestone Bonuses">
              <p>
                In addition to the Referral Reward and Cycle Reward, cumulative lifetime Funded Referrals unlock the following
                Milestone Bonuses. There are three tiers, and each pays out once, the first time you reach it:
              </p>
              <SimpleTable
                head={['Funded Referrals', 'Milestone Bonus']}
                rows={[
                  ['100', '₦10,000.00'],
                  ['250', '₦25,000.00'],
                  ['500', '₦60,000.00'],
                ]}
              />
              <p>
                Reaching a Milestone triggers a congratulations notification on your Refer &amp; Earn dashboard. Payout
                follows the manual review described in Section 6.
              </p>
            </Section>

            <Section title="5. Monthly and All-Time Leaderboard">
              <p>
                PennyTree maintains a Monthly Leaderboard (reset each calendar month) and an All-Time Leaderboard (cumulative
                since the Program launched), ranked by Funded Referral count.
              </p>
              <Bullets
                items={[
                  "Only the top 10 ranked Referrers on the Monthly Leaderboard receive a Leaderboard Prize for that month. This has two requirements: being ranked within the top 10, and meeting a rank's minimum Funded Referral count. Meeting at least one of these requirements does not by itself qualify you for a prize; all requirements must be met.",
                ]}
              />
              <SimpleTable
                head={['Rank', 'Minimum Funded Referrals', 'Prize']}
                rows={[
                  ['1st', '100+', '₦100,000.00'],
                  ['2nd', '80+', '₦75,000.00'],
                  ['3rd', '60+', '₦50,000.00'],
                  ['4th to 10th', '40+', '₦20,000.00 each'],
                ]}
              />
              <p>
                The All-Time Leaderboard is for standing and recognition; it does not carry its own separate cash prize under
                these Referral Terms.
              </p>
            </Section>

            <Section title="6. Verification and Payout">
              <Bullets
                items={[
                  'The Referral Reward and Cycle Reward described in Section 3 are credited immediately as each Funded Referral, and each ₦2,000.00 Cycle threshold, is reached.',
                  "Milestone Bonuses and Leaderboard Prizes are subject to manual review before payout, to confirm that the underlying Funded Referrals are genuine. Leaderboard Prize payout is typically processed within 48 hours of that month's ranking being confirmed.",
                  'PennyTree may withhold or reverse any Referral Reward, Cycle Reward, or Bonus, including one already credited under the first bullet above, where a Funded Referral is later found not to meet the definition in Section 1, or where Section 7 applies.',
                ]}
              />
            </Section>

            <Section title="7. Prohibited Conduct">
              <p>Cheating and gaming the system in any form is strictly prohibited. This includes:</p>
              <Bullets
                items={[
                  'Referring yourself, an existing account, or an account you control or co-own;',
                  'Creating or facilitating fictitious, duplicate, or shell accounts to generate Referees;',
                  "Paying, funding, or artificially operating a Referee's account solely to meet the Funded Referral definition without genuine use;",
                  'Any other conduct intended to manipulate Referral counts, Cycle timing, Milestones, or Leaderboard rank.',
                ]}
              />
              <p>
                Where PennyTree determines that a Referrer has engaged in any of the above, all Bonuses and rewards earned by
                that Referrer, whether already paid out or pending, including Referral Rewards, Cycle Rewards, Milestone
                Bonuses, and Leaderboard Prizes, will be withdrawn and taken back, not only the Bonus connected to the
                specific conduct in question. PennyTree may also remove the Referrer from the Program and take any other
                lawful action available to it.
              </p>
            </Section>

            <Section title="8. Amendments">
              <p>
                PennyTree may update these Referral Terms, the Referral Reward rate, Cycle rules, Milestone tiers, or
                Leaderboard Prizes at any time. Changes apply prospectively and do not affect a Bonus already confirmed through
                the review described in Section 6. Continued participation in the Program after a change constitutes
                acceptance of the revised Referral Terms.
              </p>
            </Section>

            <Section title="9. Governing Law and Dispute Resolution">
              <p>
                These Referral Terms are governed by the laws of the Federal Republic of Nigeria. Any dispute arising from the
                Program should first be raised with PennyTree customer support; unresolved disputes are subject to the
                exclusive jurisdiction of the courts of Lagos State.
              </p>
            </Section>

            <Section title="10. Contact">
              <p>
                Questions about the Program, a specific Referral, or a Bonus can be directed to PennyTree support through the
                app&apos;s Live Chat, by email at{' '}
                <a href="mailto:support@mypennytree.com" className="text-primary hover:underline">support@mypennytree.com</a>,
                or by phone at{' '}
                <a href="tel:+2348152846097" className="text-primary hover:underline">+234 815 284 6097</a>.
              </p>
            </Section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ReferralTerms;
