import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

// Source: "PennyTree Loan Terms and Conditions", last updated September 2026.

const Section = ({
  title,
  children,
  highlight = false,
}: {
  title: string;
  children: React.ReactNode;
  highlight?: boolean;
}) => (
  <div
    className={
      highlight
        ? 'policy bg-primary/5 rounded-2xl p-8 shadow-lg border-2 border-primary/30'
        : 'policy bg-white rounded-2xl p-8 shadow-lg border border-gray-100'
    }
  >
    <h2 className="text-xl font-semibold text-foreground mb-4">{title}</h2>
    <div className={`space-y-4 ${highlight ? 'text-foreground' : 'text-muted-foreground'}`}>{children}</div>
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

const FeatureTable = ({ rows }: { rows: [string, string][] }) => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead>Feature</TableHead>
        <TableHead>Term</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {rows.map(([feature, term]) => (
        <TableRow key={feature}>
          <TableCell className="font-semibold text-foreground">{feature}</TableCell>
          <TableCell>{term}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

const ScheduleTable = ({ rows }: { rows: string[][] }) => (
  <Table>
    <TableHeader>
      <TableRow>
        {['Month', 'Opening Balance', 'Principal', 'Interest', 'Repayment', 'Closing Balance'].map((h) => (
          <TableHead key={h} className="whitespace-nowrap">{h}</TableHead>
        ))}
      </TableRow>
    </TableHeader>
    <TableBody>
      {rows.map((row) => (
        <TableRow key={row[0]}>
          {row.map((cell, i) => (
            <TableCell key={i} className="whitespace-nowrap">{cell}</TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

const standardSchedule = [
  ['1', '₦1,500,000.00', '₦250,000.00', '₦105,000.00', '₦355,000.00', '₦1,250,000.00'],
  ['2', '₦1,250,000.00', '₦250,000.00', '₦105,000.00', '₦355,000.00', '₦1,000,000.00'],
  ['3', '₦1,000,000.00', '₦250,000.00', '₦105,000.00', '₦355,000.00', '₦750,000.00'],
  ['4', '₦750,000.00', '₦250,000.00', '₦105,000.00', '₦355,000.00', '₦500,000.00'],
  ['5', '₦500,000.00', '₦250,000.00', '₦105,000.00', '₦355,000.00', '₦250,000.00'],
  ['6', '₦250,000.00', '₦250,000.00', '₦105,000.00', '₦355,000.00', '₦0.00'],
];

const microSchedule = [
  ['1', '₦100,000.00', '₦33,333.33', '₦20,000.00', '₦53,333.33', '₦66,666.67'],
  ['2', '₦66,666.67', '₦33,333.33', '₦20,000.00', '₦53,333.33', '₦33,333.34'],
  ['3', '₦33,333.34', '₦33,333.34', '₦20,000.00', '₦53,333.34', '₦0.00'],
];

const LoanTerms = () => {
  return (
    <>
      <Navigation />
      <main>
        <section className="page-header py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Loan Terms & Conditions
            </h1>
            <p className="text-lg text-muted-foreground mt-3">Last updated: September 2026</p>
          </div>
        </section>

        <section className="page-body py-16">
          <div className="container mx-auto px-4 max-w-4xl space-y-8">
            <div className="policy bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <p className="text-muted-foreground">
                These Terms and Conditions (&apos;Loan Terms&apos;) govern every loan product offered through the PennyTree
                mobile application and website (&apos;the Platform&apos;) by Penny Tree Business Limited, a company licensed by
                the Securities and Exchange Commission of Nigeria (&apos;PennyTree&apos;, &apos;the Lender&apos;, &apos;we&apos;,
                &apos;us&apos;). By applying for, accepting, or drawing down any loan through the Platform, you (&apos;the
                Borrower&apos;, &apos;you&apos;) agree to be bound by these Loan Terms, in addition to PennyTree&apos;s general
                Terms of Use and Privacy Policy.
              </p>
            </div>

            <Section title="1. Definitions">
              <Bullets
                items={[
                  <>&quot;Loan&quot; means any sum advanced to the Borrower under the Micro Loan track or the Standard Loan track described below.</>,
                  <>&quot;Principal&quot; means the amount approved and disbursed, before deduction of the Processing Fee.</>,
                  <>&quot;Tenor&quot; means the agreed repayment period of a Loan, stated in months at the point of approval.</>,
                  <>&quot;Guarantor&quot; means a person who guarantees repayment of a Standard Loan under Section 7.</>,
                  <>&quot;Collateral&quot; means any asset or assets pledged to secure a Standard Loan under Section 9.</>,
                  <>&quot;Default&quot; means any of the events described in Section 6.1.</>,
                ]}
              />
            </Section>

            <Section title="2. Eligibility">
              <p>To apply for a Loan, you must:</p>
              <Bullets
                items={[
                  'Hold a verified PennyTree account in good standing;',
                  'Be at least 18 years of age and a Nigerian resident;',
                  'Have completed at least the first stage of identity (KYC) verification on the PennyTree app;',
                  "Meet a minimum credit score of 90% at the point of application, determined by PennyTree's credit bureau check;",
                  'Link a bank account, used alongside your Credit Bureau Check to determine the loan amount you are eligible for;',
                  'Not have any existing Loan with PennyTree in Default at the time of a new application.',
                ]}
              />
              <p>
                Meeting these minimum criteria does not guarantee approval. PennyTree reserves the right to decline any
                application at its sole discretion, including on the basis of the Full Analysis described in Section 4.
              </p>
            </Section>

            <Section title="3. Loan Types">
              <Sub title="3.1 Micro Loan">
                <FeatureTable
                  rows={[
                    ['Maximum amount', '₦100,000.00 (₦20,000.00 for first-time borrowers)'],
                    ['Collateral', 'Not required'],
                    ['Guarantor', 'Not required'],
                    ['Electronic signature', 'Not required; acceptance is by liveness check and transaction PIN authorization'],
                  ]}
                />
              </Sub>
              <Sub title="3.2 Standard Loan">
                <FeatureTable
                  rows={[
                    ['Maximum amount', '₦100,000,000.00'],
                    ['Collateral', 'Required, at a Forced Sale Value of at least 150% of the Loan amount (see Section 9)'],
                    ['Guarantor', 'At least one required, bound by joint and several liability (see Section 7)'],
                    ['Electronic signature', 'Required, together with a liveness check and transaction PIN authorization'],
                  ]}
                />
              </Sub>
              <p>
                A Borrower chooses one track at the start of an application. Switching tracks requires starting a new
                application. Both tracks also accept applications for Personal, SME, Business, Asset, Working Capital, LPO, or
                Invoice financing purposes, as offered on the Platform from time to time.
              </p>
            </Section>

            <Section title="4. Application, Assessment, and Approval">
              <Bullets
                items={[
                  'PennyTree will conduct a Credit Bureau Check against your BVN as part of every application, Micro or Standard.',
                  'For a Standard Loan, PennyTree additionally conducts a Full Analysis, reviewing cashflow consistency, spending patterns, credit history, and repayment behaviour on any other facilities.',
                  'An approved offer states the Principal, Processing Fee, Amount to Receive, Monthly Repayment, Total Repayable, and (for a Standard Loan) the Disbursement Account and an Offer Expiry Date. An offer not accepted before its expiry date lapses and must be reapplied for.',
                  'Acceptance of a Standard Loan offer requires a liveness check and an electronic signature, authorized by your transaction PIN. Acceptance of a Micro Loan offer requires a liveness check and PIN authorization; no separate electronic signature is required.',
                ]}
              />
            </Section>

            <Section title="5. Formal Loan Terms and Conditions (The Agreement)">
              <p>
                By accepting a Loan offer, the Borrower unconditionally agrees to be bound by the terms below, as completed by
                the Lender upon approval:
              </p>
              <Sub title="5.1 Principal Sum and Duration">
                <p>
                  Penny Tree Business Limited (&quot;Lender&quot;) agrees to grant the Borrower a loan of the Approved Principal
                  stated on the Borrower&apos;s offer, for a fixed period stated in months (the Tenor).
                </p>
              </Sub>
              <Sub title="5.2 Applied Interest Rate">
                <p>
                  Interest is charged as a fixed flat rate on the original approved Principal for the full Tenor, and does not
                  reduce as the Principal is repaid:
                </p>
                <Bullets items={['Standard Loan: 7% per month.', 'Micro Loan: 20% per month.']} />
              </Sub>
              <Sub title="5.3 Total Payable Obligation">
                <p>
                  The Borrower agrees that the total amount payable is the Principal plus Interest, as stated on the
                  Borrower&apos;s offer (the Total Payable Obligation). The repayment schedules below illustrate how this is
                  worked out for each Loan type.
                </p>
                <p className="font-medium text-foreground pt-2">
                  Worked example, Standard Loan (₦1,500,000.00 over 6 months at 7% per month)
                </p>
                <ScheduleTable rows={standardSchedule} />
                <p>Total Payable Obligation: ₦2,130,000.00 (6 x ₦355,000.00).</p>
                <p className="font-medium text-foreground pt-2">
                  Worked example, Micro Loan (₦100,000.00 over 3 months at 20% per month)
                </p>
                <ScheduleTable rows={microSchedule} />
                <p>
                  Total Payable Obligation: ₦160,000.00 (₦100,000.00 principal + ₦60,000.00 interest). Figures shown are for
                  illustration only; the actual Principal, Tenor, and resulting schedule for any Loan are those stated on that
                  Borrower&apos;s own offer.
                </p>
              </Sub>
              <Sub title="5.4 Repayment Structure">
                <p>Repayment is Monthly. Repayments start 30 days after disbursement of the Loan.</p>
              </Sub>
              <Sub title="5.5 Irrevocable Repayment Authorization">
                <p>
                  The Borrower authorizes PennyTree to debit the Borrower&apos;s PennyTree balance, or any bank account linked
                  to the Borrower, and to execute direct debit mandates, in the event of Default, in accordance with the
                  amount owed.
                </p>
              </Sub>
            </Section>

            <Section title="6. Consequences of Default and Penalty Structure" highlight>
              <p className="font-medium">The Borrower acknowledges and accepts these binding clauses:</p>
              <Sub title="6.1 Definition of Default">
                <p>
                  A Default occurs when: the Borrower misses a payment, disables debit mandates, has insufficient funds in
                  linked bank accounts, becomes unreachable, misrepresents information, or attempts to evade payment.
                </p>
              </Sub>
              <Sub title="6.2 Mandatory Daily Default Penalty">
                <p>
                  If the Borrower fails to repay on or before the due date, the Borrower agrees to an immediate default
                  penalty of 1% daily on the Outstanding Principal plus Outstanding Interest. This penalty accrues daily until
                  the full balance is paid.
                </p>
              </Sub>
              <Sub title="6.3 Lender's Rights on Default">
                <p>
                  Upon Default, Penny Tree may: debit any account linked to the Borrower&apos;s BVN, contact the Borrower,
                  Guarantors, or Employer, enforce collateral rights, report to credit bureaus, engage lawful recovery agents,
                  and charge all recovery costs to the Borrower.
                </p>
              </Sub>
            </Section>

            <Section title="7. Irrevocable Guarantor Undertaking (Binding on Both), Standard Loan only">
              <p>Each Guarantor confirms that they:</p>
              <Bullets
                items={[
                  "Accept joint and several liability for the Borrower's obligations; Penny Tree may pursue either Guarantor directly for full repayment;",
                  'Consent to verification of their BVN, NIN, employer, and credit bureau record;',
                  'Remain liable until the full loan, interest, and penalties (including the 1% daily default rate) are paid;',
                  'Waive any right to prior notice before recovery action is taken against them.',
                ]}
              />
              <p>
                A Guarantor is invited via a secure one-time link sent to their phone and email, valid for 48 hours, and does
                not need a PennyTree account to complete this undertaking.
              </p>
            </Section>

            <Section title="8. Data Consent and Authorization">
              <p>The Borrower and any Guarantors consent to Penny Tree:</p>
              <Bullets
                items={[
                  'Verifying BVN, NIN, identity, and bank details;',
                  'Accessing credit history;',
                  'Using open banking data;',
                  'Storing and using information for administration;',
                  'Reporting performance or Default to credit bureaus;',
                  'Escalating information to recovery agents for lawful collection.',
                ]}
              />
              <p>
                This information is processed in accordance with PennyTree&apos;s Privacy Policy and the Nigeria Data
                Protection Act.
              </p>
            </Section>

            <Section title="9. Collateral Details and Pledge (If Required), Standard Loan only">
              <p>
                Where a Standard Loan requires Collateral, the Borrower provides its type, location, description, estimated
                value, ownership documents, and condition at the point of application. The pledged Collateral&apos;s Forced
                Sale Value must be at least 150% of the Loan amount.
              </p>
              <Sub title="Formal Collateral Pledge">
                <p>
                  The Borrower agrees that: Collateral is pledged until full repayment; PennyTree may possess or sell the
                  Collateral in case of Default, applying the proceeds first to the outstanding Principal, then accrued
                  interest, then any penalties, and returning any surplus to the Borrower; and the Borrower will not transfer,
                  hide, or damage the Collateral during the loan period.
                </p>
              </Sub>
            </Section>

            <Section title="10. Early and On-Schedule Repayment">
              <Bullets
                items={[
                  'A Loan may be repaid in full at any time before the end of its Tenor. Doing so in one payment that covers the full outstanding balance closes the Loan immediately and is confirmed on the Platform, together with a summary of total interest paid.',
                  'Early repayment does not reduce the Total Payable Obligation. Because interest is charged as a flat rate on the original Principal for the full Tenor, the full interest amount remains payable even where the Loan is settled ahead of schedule; early repayment does not equate to reduced interest or no interest.',
                  "A positive repayment record, whether completed on schedule or early, is reported to credit bureaus and may improve the Borrower's credit score and future loan limit.",
                  'PennyTree does not charge a separate early repayment penalty beyond the Total Payable Obligation described above.',
                ]}
              />
            </Section>

            <Section title="11. Amendments">
              <p>
                PennyTree may update these Loan Terms from time to time. Changes will not apply to a Loan already disbursed
                under earlier terms, except where required by law or regulation. Continued use of the Platform&apos;s loan
                features after an update constitutes acceptance of the revised Loan Terms.
              </p>
            </Section>

            <Section title="12. Governing Law and Dispute Resolution">
              <p>
                These Loan Terms are governed by the laws of the Federal Republic of Nigeria. Any dispute arising from a Loan
                should first be raised with PennyTree customer support; unresolved disputes are subject to the exclusive
                jurisdiction of the courts of Lagos State.
              </p>
            </Section>

            <Section title="13. Contact">
              <p>
                Questions about these Loan Terms, or about a specific Loan, can be directed to PennyTree support through the
                app&apos;s Live Chat, by email at{' '}
                <a href="mailto:support@mypennytree.com" className="text-primary hover:underline">support@mypennytree.com</a>,
                or by phone at{' '}
                <a href="tel:+2348152846097" className="text-primary hover:underline">+234 815 284 6097</a>.
              </p>
            </Section>

            <p className="text-center text-xs text-muted-foreground pt-4">
              © {new Date().getFullYear()} PennyTree Technologies Business Ltd. All rights reserved. • Loan T&C
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default LoanTerms;
