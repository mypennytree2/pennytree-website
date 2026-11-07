import React from 'react';
import Navigation from '@/components/Navigation';
import ComplianceBar from '@/components/ComplianceBar';
import Footer from '@/components/Footer';

const regularVaultRates = [
  ['30 days', '1 Month', '2.25% interest'],
  ['60 days', '2 Months', '4.5% interest'],
  ['90 days', '3 Months', '6.75% interest'],
  ['180 days', '6 Months', '13.5% interest'],
  ['270 days', '9 Months', '20.25% interest'],
  ['360 days', '12 Months', '27.0% interest'],
];

const upfrontVaultRates = [
  ['30 days', '1 Month', '1.25% interest'],
  ['60 days', '2 Months', '2.7% interest'],
  ['90 days', '3 Months', '4.05% interest'],
  ['180 days', '6 Months', '8.1% interest'],
  ['270 days', '9 Months', '12.15% interest'],
  ['360 days', '12 Months', '16.2% interest'],
];

const RateTable = ({ title, rows }: { title: string; rows: string[][] }) => (
  <div>
    <h6 className="text-lg font-semibold text-foreground mb-3">{title}</h6>
    <div className="overflow-x-auto mb-6">
      <table className="w-full border border-gray-200 rounded-lg">
        <thead className="bg-muted">
          <tr>
            <th className="text-left p-3 font-semibold text-foreground border-b">Tenor (Days)</th>
            <th className="text-left p-3 font-semibold text-foreground border-b">Tenor (Months)</th>
            <th className="text-left p-3 font-semibold text-foreground border-b">Indicative Interest</th>
          </tr>
        </thead>
        <tbody className="text-muted-foreground">
          {rows.map((row, i) => (
            <tr key={i} className="border-b last:border-b-0">
              <td className="p-3">{row[0]}</td>
              <td className="p-3">{row[1]}</td>
              <td className="p-3 font-medium text-primary">{row[2]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const PersonalVaultTerms = () => {
  return (
    <>
      <ComplianceBar />
      <Navigation />
      <main>
        <section className="page-header py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-muted-foreground mb-2">v1.0 | Effective: 1 May 2025</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Personal Vault – Fixed Deposit
            </h1>
            <p className="text-lg text-muted-foreground mt-3">Terms & Conditions | PennyTree Technologies Business Ltd</p>
          </div>
        </section>

        <section className="page-body py-16">
          <div className="container mx-auto px-4 max-w-4xl space-y-8">
            <div className="policy bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h6 className="text-xl font-semibold text-foreground mb-4">1. Introduction</h6>
              <p className="text-muted-foreground mb-4">
                These Terms govern the PennyTree Technologies Personal Vault ("Vault"), a fixed deposit product
                offered via the PennyTree Technologies app, operated by PennyTree Technologies Business Ltd ("PennyTree Technologies").
                The Vault may be offered in different payout options, including Regular Vault and Upfront Vault, as made available in the app.
              </p>
              <p className="text-muted-foreground">
                By activating a Vault, you ("Customer") confirm your full acceptance of these Terms.
                PennyTree Technologies may update these Terms with reasonable notice; continued use constitutes acceptance.
              </p>
            </div>

            <div className="policy bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h6 className="text-xl font-semibold text-foreground mb-4">2. Eligibility</h6>
              <p className="text-muted-foreground">
                To open a Vault, you must be: a verified PennyTree Technologies account holder in good standing;
                at least 18 years of age; fully KYC-verified; and have sufficient funds in your
                PennyTree Technologies wallet or linked account.
              </p>
            </div>

            <div className="policy bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h6 className="text-xl font-semibold text-foreground mb-4">3. Vault Types, Tenor & Interest Rates</h6>
              <p className="text-muted-foreground mb-4">
                The Personal Vault is available in two payout options: Regular Vault and Upfront Vault. Both options
                operate within the same Personal Vault product and are subject to the applicable tenor, interest rate
                and payout terms displayed in the app at the time of booking.
              </p>
              <p className="text-muted-foreground mb-6">
                Six fixed tenors are available. Rates are indicative, applied on a simple interest basis, and are fixed
                at the time of booking. Actual rates are displayed in-app before confirmation and will not change for
                the duration of your Vault.
              </p>
              <RateTable title="Regular Vault Rates" rows={regularVaultRates} />
              <RateTable title="Upfront Vault Rates" rows={upfrontVaultRates} />
              <p className="text-muted-foreground mb-2">
                The interest rate applicable to a Vault is determined by the selected Vault type and tenor and is
                displayed to the Customer before confirmation.
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>Interest formula:</strong> Principal × Applicable Interest Rate for the selected tenor.
              </p>
              <p className="text-muted-foreground mb-2">
                For Regular Vault, interest is accrued during the tenor and paid at maturity, subject to applicable deductions.
              </p>
              <p className="text-muted-foreground">
                For Upfront Vault, the applicable interest is paid to the Customer at the beginning of the Vault term,
                while the principal remains locked until the maturity date.
              </p>
            </div>

            <div className="policy bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h6 className="text-xl font-semibold text-foreground mb-4">4. Withholding Tax (WHT)</h6>
              <p className="text-muted-foreground mb-4">
                A statutory 10% Withholding Tax is deducted from applicable interest and remitted to the FIRS on your behalf.
                For Regular Vault, the applicable WHT is deducted from accrued interest at maturity.
              </p>
              <p className="text-muted-foreground mb-4">
                For Upfront Vault, where interest is paid upfront, the applicable WHT will be deducted or otherwise
                accounted for from the interest payable at the time of the upfront interest payment, in accordance with
                applicable law and PennyTree Technologies' processing procedures.
              </p>
              <p className="text-muted-foreground">
                WHT is non-negotiable and non-remissible by PennyTree Technologies. A WHT credit note is available upon
                request and may offset personal income tax liability where applicable. Customers should seek independent tax advice.
              </p>
            </div>

            <div className="policy bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h6 className="text-xl font-semibold text-foreground mb-4">5. Booking a Vault</h6>
              <p className="text-muted-foreground mb-4">
                In the app, select 'Personal Vault' → choose the applicable Vault option → choose tenor → enter deposit
                amount → review the applicable interest rate, maturity date and estimated payout → confirm.
              </p>
              <p className="text-muted-foreground mb-4">
                The selected Vault option, applicable rate, tenor, maturity date and applicable interest treatment will
                be displayed before confirmation.
              </p>
              <p className="text-muted-foreground">
                Funds are debited immediately upon successful booking. An in-app confirmation with all Vault details is
                issued upon successful booking. Multiple concurrent Vaults are permitted subject to minimum deposit requirements.
              </p>
            </div>

            <div className="policy bg-primary/5 rounded-2xl p-8 shadow-lg border-2 border-primary/30">
              <h6 className="text-xl font-semibold text-foreground mb-4">6. No Pre-Liquidation</h6>
              <p className="text-foreground font-medium mb-4">
                Funds are strictly locked for the full tenor. Pre-liquidation, partial withdrawal,
                and early termination are not permitted under any circumstances, including emergencies.
              </p>
              <p className="text-foreground font-medium mb-4">
                For Regular Vault, no interest accrues for incomplete tenors.
              </p>
              <p className="text-foreground font-medium mb-4">
                For Upfront Vault, the principal remains locked until the maturity date. Where an Upfront Vault is subject
                to any exceptional reversal, recovery, regulatory requirement or other legally required adjustment,
                PennyTree Technologies may make the necessary adjustment in accordance with applicable law and its procedures.
              </p>
              <p className="text-foreground font-medium">
                By activating a Vault, you expressly acknowledge this restriction.
              </p>
            </div>

            <div className="policy bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h6 className="text-xl font-semibold text-foreground mb-4">7. Maturity & Payout</h6>
              <p className="text-muted-foreground mb-4">
                For a Regular Vault, on the maturity date, the principal and applicable net interest after WHT are
                automatically credited to your PennyTree Technologies wallet and you will receive an in-app notification.
              </p>
              <p className="text-muted-foreground mb-4">
                For an Upfront Vault, the applicable interest is paid at the beginning of the Vault term, while the
                principal remains locked until the maturity date. On the maturity date, the principal is automatically
                credited to your PennyTree Technologies wallet and you will receive an in-app notification.
              </p>
              <p className="text-muted-foreground mb-4">
                PennyTree Technologies targets same-day processing. Where a maturity date falls on a public holiday or
                during system maintenance, payout will occur on the next available business day.
              </p>
              <p className="text-muted-foreground">
                Automatic rollover is not supported. A new Vault must be booked to reinvest.
              </p>
            </div>

            <div className="policy bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h6 className="text-xl font-semibold text-foreground mb-4">8. Compliance & Account Suspension</h6>
              <p className="text-muted-foreground">
                PennyTree Technologies may hold, suspend, or terminate a Vault where: (a) fraud, money
                laundering, or financial crime is suspected; (b) a valid court order or regulatory
                directive is received; (c) the Customer's PennyTree Technologies account is suspended or
                closed; or (d) KYC information is found to be false or incomplete. PennyTree Technologies shall
                not be liable for interest loss or consequential damages arising from a regulatory
                or legal hold.
              </p>
            </div>

            <div className="policy bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h6 className="text-xl font-semibold text-foreground mb-4">9. Customer Obligations</h6>
              <p className="text-muted-foreground">
                By using the Vault you agree to: maintain accurate and current account
                information; secure your app and registered devices; notify PennyTree Technologies immediately
                of any unauthorised access; comply with all applicable Nigerian laws; and not use
                the Vault to receive proceeds of crime or for tax evasion.
              </p>
            </div>

            <div className="policy bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h6 className="text-xl font-semibold text-foreground mb-4">10. Key Risks</h6>
              <dl className="space-y-3 text-muted-foreground">
                <div><dt className="font-semibold text-foreground inline">Liquidity: </dt><dd className="inline">Funds are fully illiquid for the selected tenor. The principal cannot be withdrawn before maturity.</dd></div>
                <div><dt className="font-semibold text-foreground inline">Interest Rate: </dt><dd className="inline">The applicable rate is locked at booking. Customers will not benefit from subsequent rate increases during the selected tenor.</dd></div>
                <div><dt className="font-semibold text-foreground inline">Payout Structure: </dt><dd className="inline">Regular Vault pays applicable interest at maturity, while Upfront Vault pays applicable interest at the beginning of the Vault term. The rates applicable to the two options are different and are displayed separately in the app.</dd></div>
                <div><dt className="font-semibold text-foreground inline">Inflation: </dt><dd className="inline">Real returns may be lower than nominal rates in high-inflation environments.</dd></div>
                <div><dt className="font-semibold text-foreground inline">Platform: </dt><dd className="inline">PennyTree Technologies is not a deposit money bank; Vault deposits are not NDIC-insured unless otherwise stated.</dd></div>
              </dl>
            </div>

            <div className="policy bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h6 className="text-xl font-semibold text-foreground mb-4">11. Data Privacy</h6>
              <p className="text-muted-foreground">
                Personal and financial data is processed in accordance with PennyTree Technologies's Privacy
                Policy, the Nigeria Data Protection Act 2023 (NDPA), and the Nigeria Data
                Protection Regulation (NDPR). Data will not be sold to third parties; it may be
                shared with licensed partners, regulators, or law enforcement as required by law.
              </p>
            </div>

            <div className="policy bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h6 className="text-xl font-semibold text-foreground mb-4">12. Limitation of Liability</h6>
              <p className="text-muted-foreground">
                PennyTree Technologies's total liability in connection with the Vault shall not exceed the
                principal amount deposited. PennyTree Technologies is not liable for indirect, incidental,
                special, or consequential damages, or for losses arising from events beyond its
                reasonable control (including force majeure, regulatory actions, or third-party
                system outages).
              </p>
            </div>

            <div className="policy bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h6 className="text-xl font-semibold text-foreground mb-4">13. Governing Law & Disputes</h6>
              <p className="text-muted-foreground">
                These Terms are governed by the laws of the Federal Republic of Nigeria. Disputes
                shall first be subject to 30 days of good-faith negotiation, failing which they
                shall be referred to arbitration under the Arbitration and Mediation Act 2023,
                seated in Lagos. Either party may seek urgent injunctive relief from a court of
                competent jurisdiction.
              </p>
            </div>

            <div className="policy bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h6 className="text-xl font-semibold text-foreground mb-4">14. Contact</h6>
              <div className="overflow-x-auto">
                <table className="w-full border border-gray-200 rounded-lg">
                  <tbody className="text-muted-foreground">
                    <tr className="border-b">
                      <td className="p-3 font-semibold text-foreground w-1/3">In-App Support</td>
                      <td className="p-3">Help & Support section within the PennyTree Technologies App</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-semibold text-foreground">Email</td>
                      <td className="p-3"><a href="mailto:support@pennytree.com" className="text-primary hover:underline">support@pennytree.com</a></td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-foreground">Website</td>
                      <td className="p-3"><a href="https://www.mypennytree.com" className="text-primary hover:underline">www.mypennytree.com</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="policy bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h6 className="text-xl font-semibold text-foreground mb-4">15. Customer Acknowledgement</h6>
              <p className="text-muted-foreground">
                By activating a Personal Vault, you confirm you have read and understood these Terms; accept that funds
                are locked until maturity with no pre-liquidation; acknowledge the applicable WHT deduction on interest;
                understand that Regular Vault and Upfront Vault have different interest rates and payout structures;
                are acting of your own accord; and accept all product risks described in Section 10.
              </p>
              <p className="text-xs text-muted-foreground mt-6 italic">
                In-app confirmation serves as binding acceptance.
              </p>
            </div>

            <p className="text-center text-xs text-muted-foreground pt-4">
              © 2025 PennyTree Technologies Business Ltd. All rights reserved. • Personal Vault T&C v1.0 • May 2025
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PersonalVaultTerms;