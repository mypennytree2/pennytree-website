import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Bullets = ({ items }: { items: string[] }) => (
  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

const Section = ({
  title,
  children,
  highlight = false,
}: {
  title: string;
  children: React.ReactNode;
  highlight?: boolean;
}) => (
  <div className={`policy rounded-2xl p-8 shadow-lg ${highlight ? 'bg-primary/5 border-2 border-primary/30' : 'bg-white border border-gray-100'}`}>
    <h6 className="text-xl font-semibold text-foreground mb-4">{title}</h6>
    <div className={highlight ? 'text-foreground font-medium space-y-4' : 'text-muted-foreground space-y-4'}>{children}</div>
  </div>
);

const TargetSavingsTerms = () => {
  return (
    <>
      <Navigation />
      <main>
        <section className="page-header py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-muted-foreground mb-2">Terms & Conditions</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Personal Target Savings
            </h1>
            <p className="text-lg text-muted-foreground mt-3">PennyTree Technologies Business Ltd</p>
          </div>
        </section>

        <section className="page-body py-16">
          <div className="container mx-auto px-4 max-w-4xl space-y-8">
            <Section title="1. Introduction">
              <p>
                These Terms govern the PennyTree Technologies Personal Target Savings (&quot;Target Savings&quot;), a goal-based
                savings product offered via the PennyTree Technologies app, operated by PennyTree Technologies Business Ltd
                (&quot;PennyTree Technologies&quot;). Target Savings allows you (&quot;Customer&quot;) to save towards a specific financial
                goal and target amount over a selected period.
              </p>
              <p>
                By creating a Target Savings goal, you confirm your full acceptance of these Terms. PennyTree Technologies
                may update these Terms with reasonable notice; continued use constitutes acceptance.
              </p>
            </Section>

            <Section title="2. Eligibility">
              <p>To create a Target Savings goal, you must be:</p>
              <Bullets items={[
                'A verified PennyTree Technologies account holder in good standing;',
                'At least 18 years of age;',
                'Fully KYC-verified; and',
                'Have sufficient funds in your PennyTree Technologies wallet.',
              ]} />
              <p>
                PennyTree Technologies may restrict access to Target Savings where required by law, regulation, compliance
                requirements or its internal policies.
              </p>
            </Section>

            <Section title="3. Target & Interest Rate">
              <p>
                Target Savings allows you to set a savings goal, target amount and target/maturity date. You can make
                contributions towards your target throughout the savings period.
              </p>
              <p>Target Savings earns interest at a fixed rate of 15% p.a.</p>
              <p>
                Interest is calculated on eligible funds based on the amount saved and the period for which the funds remain
                in the Target Savings goal.
              </p>
              <p><strong className="text-foreground">Interest formula:</strong> Principal × (15% ÷ 365) × Eligible Days.</p>
              <p>
                The actual interest accrued is displayed in the PennyTree Technologies app and may change as additional funds
                are added to the Target Savings goal.
              </p>
              <p>
                Interest is separate from the rates applicable to Personal Vault or any other PennyTree Technologies product.
              </p>
            </Section>

            <Section title="4. Interest & Applicable Taxes">
              <p>
                Interest earned on Target Savings is subject to any applicable taxes or statutory deductions required under
                Nigerian law.
              </p>
              <p>
                Where PennyTree Technologies is required to deduct and remit withholding tax or any other statutory deduction,
                the applicable amount will be deducted in accordance with the law.
              </p>
              <p>Customers should seek independent tax advice where appropriate.</p>
            </Section>

            <Section title="5. Creating a Target Savings Goal">
              <p>
                In the app: select Target Savings → create a savings goal → enter your target amount → select your
                target/maturity date → review the applicable terms and projected savings → confirm.
              </p>
              <p>
                Funds are debited from your PennyTree Technologies wallet or other supported funding source when a
                contribution is successfully made.
              </p>
              <p>You may make additional contributions towards your target where supported by the app.</p>
              <p>Multiple Target Savings goals may be permitted subject to applicable product limits.</p>
            </Section>

            <Section title="6. Contributions & Target Date">
              <p>
                The Customer is responsible for making sufficient contributions to reach their chosen target amount.
              </p>
              <p>
                The target date represents the date by which the Customer intends to complete the savings goal.
              </p>
              <p>
                Failure to make planned or scheduled contributions may result in the Customer not reaching the target amount
                by the selected target date.
              </p>
              <p>
                Reaching the target amount does not automatically create a Personal Vault or another investment product. Any
                reinvestment must be separately confirmed by the Customer.
              </p>
            </Section>

            <Section title="7. Early Termination / Breaking a Target" highlight>
              <p>
                Unlike Personal Vault, Target Savings may be broken before its target/maturity date, provided the target has
                not been permanently locked.
              </p>
              <p>If you break your Target Savings goal before its target/maturity date:</p>
              <Bullets items={[
                '100% of interest accrued on the target is forfeited.',
                'An early withdrawal fee of 10% of the amount saved is deducted.',
                'No further interest accrues after the target is broken.',
                'The transaction is irreversible once confirmed and authorised.',
              ]} />
              <p>
                For clarity, forfeited interest is not deducted from the principal amount saved. The accrued interest is
                simply not included in the final payout.
              </p>
              <div className="bg-background/60 rounded-xl p-5 space-y-1 text-sm">
                <p><strong>Example:</strong></p>
                <p>Amount saved: ₦320,000</p>
                <p>Interest accrued: ₦7,759</p>
                <p>Interest forfeited: ₦7,759</p>
                <p>Early withdrawal fee: ₦32,000</p>
                <p>Total payout to wallet: ₦288,000</p>
              </div>
              <p>
                Before confirming an early withdrawal, the app will display the amount saved, accrued interest, interest
                forfeited, early withdrawal fee and total payout.
              </p>
            </Section>

            <Section title="8. Permanent Target Lock" highlight>
              <p>
                Target Savings includes an optional Permanent Lock feature designed to help Customers remain disciplined and
                committed to their savings goals.
              </p>
              <p>
                While a Target Savings goal is ongoing, the Customer may choose to &quot;Lock Target Permanently.&quot; Before
                confirming the Permanent Lock, the Customer will be shown a confirmation screen explaining that the action is
                permanent.
              </p>
              <p>Once a Target Savings goal has been permanently locked:</p>
              <Bullets items={[
                'The Customer cannot break the target before it reaches its target/maturity date;',
                'The Customer cannot withdraw the funds early;',
                'The Customer cannot cancel or unlock the target;',
                'The Customer cannot reverse the Permanent Lock through the app; and',
                "Customer Support cannot ordinarily unlock or break the target at the Customer's request.",
              ]} />
              <p>The Customer cannot choose to pay the 10% early withdrawal fee in order to bypass a Permanent Lock.</p>
              <p>The Permanent Lock does not change the applicable 15% p.a. interest rate.</p>
              <p>Where supported, the Customer may continue making contributions to a permanently locked Target Savings goal.</p>
              <p>
                The Permanent Lock only applies to the specific Target Savings goal that was locked and does not affect other
                Target Savings goals, Personal Vaults or other PennyTree Technologies products.
              </p>
            </Section>

            <Section title="9. Maturity & Payout">
              <p>
                On the target/maturity date, provided the Target Savings goal has not been broken, the principal saved and
                applicable accrued interest will be eligible for payout, less any applicable statutory deductions.
              </p>
              <p>
                Funds will be credited to the Customer&apos;s PennyTree Technologies wallet in accordance with the applicable
                processing timelines.
              </p>
              <p>
                PennyTree Technologies targets same-day processing. Where the target/maturity date falls on a public holiday
                or during system maintenance, payout may occur on the next available business day.
              </p>
              <p>
                Automatic rollover into another Target Savings goal or Personal Vault is not supported unless separately
                introduced and confirmed by the Customer.
              </p>
            </Section>

            <Section title="10. Compliance & Account Suspension">
              <p>PennyTree Technologies may hold, suspend, restrict or terminate a Target Savings goal where:</p>
              <Bullets items={[
                'Fraud, money laundering or financial crime is suspected;',
                'A valid court order or regulatory directive is received;',
                "The Customer's PennyTree Technologies account is suspended or closed; or",
                'KYC information is found to be false, inaccurate or incomplete.',
              ]} />
              <p>
                PennyTree Technologies may also restrict access to funds where required by applicable law or regulatory
                requirements.
              </p>
              <p>
                PennyTree Technologies shall not be liable for interest loss or consequential damages arising from a lawful
                regulatory, legal or compliance hold.
              </p>
            </Section>

            <Section title="11. Customer Obligations">
              <p>By using Target Savings you agree to:</p>
              <Bullets items={[
                'Maintain accurate and current account information;',
                'Make contributions necessary to achieve your savings goal;',
                'Secure your PennyTree Technologies app and registered devices;',
                'Notify PennyTree Technologies immediately of any unauthorised access;',
                'Comply with all applicable Nigerian laws;',
                'Not use Target Savings to receive proceeds of crime or for tax evasion; and',
                'Carefully review the consequences before breaking or permanently locking a Target Savings goal.',
              ]} />
            </Section>

            <Section title="12. Key Risks">
              <dl className="space-y-3">
                <div><dt className="font-semibold text-foreground inline">Target Risk: </dt><dd className="inline">You may not reach your target amount if you do not make sufficient contributions.</dd></div>
                <div><dt className="font-semibold text-foreground inline">Early Withdrawal: </dt><dd className="inline">Breaking a Target Savings goal before its target/maturity date results in the forfeiture of 100% of accrued interest and a 10% early withdrawal fee on the amount saved.</dd></div>
                <div><dt className="font-semibold text-foreground inline">Permanent Lock: </dt><dd className="inline">A permanently locked Target Savings goal cannot ordinarily be broken, withdrawn from or unlocked before its target/maturity date. Customers should only use this feature when they are comfortable committing the funds until maturity.</dd></div>
                <div><dt className="font-semibold text-foreground inline">Interest Rate: </dt><dd className="inline">Target Savings earns 15% p.a. The rate applicable to other PennyTree Technologies products may differ.</dd></div>
                <div><dt className="font-semibold text-foreground inline">Inflation: </dt><dd className="inline">Real returns may be lower than the nominal interest rate in high-inflation environments.</dd></div>
                <div><dt className="font-semibold text-foreground inline">Platform: </dt><dd className="inline">PennyTree Technologies is not a deposit money bank; Target Savings balances are not NDIC-insured unless otherwise stated.</dd></div>
              </dl>
            </Section>

            <Section title="13. Data Privacy">
              <p>
                Personal and financial data is processed in accordance with PennyTree Technologies&apos;s Privacy Policy, the
                Nigeria Data Protection Act 2023 (NDPA), and applicable data protection laws and regulations.
              </p>
              <p>
                Data will not be sold to third parties. It may be shared with licensed partners, regulators, payment
                providers, financial institutions or law enforcement as required or permitted by law.
              </p>
            </Section>

            <Section title="14. Limitation of Liability">
              <p>
                PennyTree Technologies&apos;s total liability in connection with Target Savings shall not exceed the principal
                amount affected by the relevant claim, except where liability cannot legally be limited.
              </p>
              <p>
                PennyTree Technologies is not liable for indirect, incidental, special or consequential damages, or for losses
                arising from events beyond its reasonable control, including force majeure, regulatory actions, banking or
                payment infrastructure failures, or third-party system outages.
              </p>
            </Section>

            <Section title="15. Governing Law & Disputes">
              <p>These Terms are governed by the laws of the Federal Republic of Nigeria.</p>
              <p>
                Disputes shall first be subject to 30 days of good-faith negotiation, failing which they shall be referred to
                arbitration under the Arbitration and Mediation Act 2023, seated in Lagos.
              </p>
              <p>Either party may seek urgent injunctive relief from a court of competent jurisdiction.</p>
            </Section>

            <Section title="16. Contact">
              <div className="overflow-x-auto">
                <table className="w-full border border-gray-200 rounded-lg">
                  <tbody>
                    <tr className="border-b">
                      <td className="p-3 font-semibold text-foreground w-1/3">In-App Support</td>
                      <td className="p-3">Help & Support section within the PennyTree Technologies App</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-semibold text-foreground">Email</td>
                      <td className="p-3"><a href="mailto:support@pennytree.ng" className="text-primary hover:underline">support@pennytree.ng</a></td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-foreground">Website</td>
                      <td className="p-3"><a href="https://www.mypennytree.com" className="text-primary hover:underline">www.mypennytree.com</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Section>

            <Section title="17. Customer Acknowledgement">
              <p>By creating a Target Savings goal, you confirm that you:</p>
              <Bullets items={[
                'Have read and understood these Terms;',
                'Understand that Target Savings is a goal-based savings product and is different from Personal Vault;',
                'Understand that Target Savings earns interest at 15% p.a.;',
                'Understand that interest is calculated based on eligible funds and the period for which they remain in the Target Savings goal;',
                'Understand that breaking the Target before its target/maturity date results in 100% forfeiture of accrued interest and a 10% early withdrawal fee on the amount saved;',
                'Understand that early termination is irreversible once confirmed;',
                'Understand that the Permanent Lock feature is voluntary but cannot be reversed once confirmed;',
                'Understand that a permanently locked Target cannot be broken or withdrawn from before its target/maturity date;',
                'Understand the risks described in these Terms; and',
                'Are acting of your own accord and accept all applicable Product terms and risks.',
              ]} />
              <p>
                By creating a Target Savings goal, you confirm that you have read, understood and accepted these Terms and Conditions.
              </p>
            </Section>

            <p className="text-center text-xs text-muted-foreground pt-4">
              © 2025 PennyTree Technologies Business Ltd. All rights reserved. • Personal Target Savings T&C
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default TargetSavingsTerms;