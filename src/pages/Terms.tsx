import Navigation from '@/components/Navigation';
import ComplianceBar from '@/components/ComplianceBar';
import Footer from '@/components/Footer';

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-6">
    <h2 className="text-xl font-semibold text-foreground mb-4">{title}</h2>
    <div className="space-y-3 text-muted-foreground leading-relaxed">{children}</div>
  </div>
);

const Callout = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-6 my-6">
    <p className="font-semibold text-foreground mb-2">{title}</p>
    <div className="text-muted-foreground text-sm">{children}</div>
  </div>
);

const Bullets = ({ items }: { items: string[] }) => (
  <ul className="list-disc pl-6 space-y-2">
    {items.map((i, idx) => <li key={idx}>{i}</li>)}
  </ul>
);

const Terms = () => {
  return (
    <>
      <ComplianceBar />
      <Navigation />
      <main>
        <section className="page-header py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Terms & Conditions</h1>
            <p className="text-muted-foreground mt-4">Effective Date: May 1, 2026 · Version 2.0</p>
          </div>
        </section>

        <section className="page-body py-16">
          <div className="container mx-auto px-4 max-w-4xl">
                <Callout title="Please Read Carefully Before Using the PennyTree Technologies Platform">
                  These Terms and Conditions constitute a legally binding agreement between you and PennyTree Technologies Business Limited.
                  By downloading, accessing, or using the PennyTree Technologies mobile application or website, you confirm that you have
                  read, understood, and agree to be bound by these Terms. If you do not agree, do not access or use our Platform.
                </Callout>

                <Section title="1. Definitions">
                  <Bullets items={[
                    '"PennyTree Technologies," "we," "us," "our" – PennyTree Technologies Business Limited, a SEC and CBN-licensed microfinance bank.',
                    '"Platform" – the PennyTree Technologies mobile application (iOS and Android), website (www.mypennytree.com), and all associated services.',
                    '"User," "you," "your" – any individual who accesses, registers on, or uses the Platform.',
                    '"Account" – your registered PennyTree Technologies user profile and associated financial account.',
                    '"Services" – all financial products and features offered on the Platform, including savings, payments, loans, and associated features.',
                    '"Content" – all text, graphics, data, software, and other material made available through the Platform.',
                    '"Applicable Law" – all Nigerian laws and regulations governing banking, data protection, consumer rights, and financial services, including CBN guidelines.',
                  ]} />
                </Section>

                <Section title="2. Acceptance of Terms">
                  <p>By creating an account or using the Platform in any way, you agree to these Terms and our Privacy Policy, which is incorporated herein by reference. These Terms may be updated periodically. We will notify you of material changes via in-app notification or email. Your continued use of the Platform after such notification constitutes acceptance of the revised Terms.</p>
                  <p>If you are using the Platform on behalf of a business or organisation, you represent that you have authority to bind that entity to these Terms.</p>
                </Section>

                <Section title="3. Eligibility">
                  <p>To use the PennyTree Technologies Platform, you must:</p>
                  <Bullets items={[
                    'Be at least 18 years of age',
                    'Be a resident of or located in the Federal Republic of Nigeria',
                    'Possess a valid Bank Verification Number (BVN)',
                    'Provide accurate and complete identity information for KYC purposes',
                    'Not be barred from receiving financial services under any applicable law',
                    'Not have had a PennyTree Technologies account previously suspended or terminated for breach of these Terms',
                  ]} />
                  <p>PennyTree Technologies reserves the right to verify your eligibility at any time and to suspend or close your account if eligibility requirements are not met.</p>
                </Section>

                <Section title="4. Account Registration & Security">
                  <h3 className="font-semibold text-foreground">4.1 Registration</h3>
                  <p>To access our Services, you must complete the registration process, which includes providing your personal details, BVN verification, and completing any additional KYC steps we may require. You agree to provide accurate, current, and complete information and to update it promptly if it changes.</p>
                  <h3 className="font-semibold text-foreground mt-4">4.2 Account Security</h3>
                  <p>You are solely responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account. You agree to:</p>
                  <Bullets items={[
                    'Never share your login credentials with any third party',
                    'Use a strong, unique PIN or password',
                    'Log out of the Platform after each session on shared devices',
                    'Notify us immediately at support@mypennytree.com if you suspect unauthorised access',
                  ]} />
                  <p>PennyTree Technologies will never ask for your PIN, password, or OTP via phone call, email, or SMS. Any such request is fraudulent.</p>
                  <h3 className="font-semibold text-foreground mt-4">4.3 Single Account</h3>
                  <p>Each user may hold only one personal PennyTree Technologies account. Creating multiple accounts or impersonating another person is prohibited and may result in immediate suspension.</p>
                </Section>

                <Section title="5. Our Services">
                  <h3 className="font-semibold text-foreground">5.1 Overview</h3>
                  <Bullets items={[
                    'Savings accounts and goal-based savings products',
                    'Person-to-person and bill payment services',
                    'Domestic and cross-border payment solutions (in view)',
                    'Virtual and physical debit card services (in view)',
                    'Consumer lending products',
                    'Investment products (where available)',
                  ]} />
                  <h3 className="font-semibold text-foreground mt-4">5.2 Service Availability</h3>
                  <p>Our Services are provided on a best-efforts basis. While we strive for 24/7 availability, we do not guarantee uninterrupted access. We may suspend, modify, or discontinue any feature at any time with reasonable notice where practicable.</p>
                  <h3 className="font-semibold text-foreground mt-4">5.3 Third-Party Services</h3>
                  <p>Some features may involve or link to third-party service providers. Your use of those services is subject to the third party's own terms. PennyTree Technologies is not responsible for the acts or omissions of such third parties.</p>
                </Section>

                <Section title="6. User Obligations">
                  <Bullets items={[
                    'Provide truthful, accurate, and up-to-date information at all times',
                    'Use the Platform only for lawful purposes and in accordance with these Terms',
                    'Comply with all Applicable Laws, including AML and CTF regulations',
                    'Not use the Platform for any commercial purpose without our prior written consent',
                    'Not reverse-engineer, decompile, or attempt to extract source code',
                    'Not interfere with, disrupt, or overload the Platform infrastructure',
                    'Not use automated tools, scripts, or bots to access or scrape the Platform',
                    'Immediately report any suspected fraud, error, or unauthorised transaction',
                  ]} />
                </Section>

                <Section title="7. Prohibited Conduct">
                  <Bullets items={[
                    'Using the Platform to process proceeds of crime, fraud, or any illegal activity',
                    'Submitting false, misleading, or fraudulent information',
                    'Conducting or facilitating money laundering, terrorist financing, or any sanctioned activity',
                    'Impersonating another person or entity',
                    'Attempting to gain unauthorised access to other users\' accounts or our systems',
                    'Uploading or transmitting malware, viruses, or harmful code',
                    'Engaging in any activity that could harm the reputation, systems, or operations of PennyTree Technologies',
                    'Creating accounts on behalf of a third party without their explicit consent',
                  ]} />
                  <p>Violation may result in immediate account suspension, termination, and referral to relevant authorities.</p>
                </Section>

                <Section title="8. Financial Services & Transactions">
                  <h3 className="font-semibold text-foreground">8.1 Accuracy of Instructions</h3>
                  <p>You are responsible for ensuring the accuracy of all payment instructions. PennyTree Technologies processes transactions based on the information you provide. We are not liable for losses resulting from incorrect information supplied by you.</p>
                  <h3 className="font-semibold text-foreground mt-4">8.2 Transaction Limits</h3>
                  <p>Transaction limits apply in accordance with CBN tiered KYC guidelines. You will be notified of any changes through the Platform.</p>
                  <h3 className="font-semibold text-foreground mt-4">8.3 Reversals & Disputes</h3>
                  <p>Completed transactions may not be reversible. If you believe a transaction was made in error, notify us within 48 hours at support@mypennytree.com. We will investigate per the CBN Consumer Protection Framework timelines.</p>
                  <h3 className="font-semibold text-foreground mt-4">8.4 Savings Products</h3>
                  <p>Savings products are subject to their individual product terms, including applicable interest rates, lock-up periods, and early withdrawal conditions.</p>
                  <h3 className="font-semibold text-foreground mt-4">8.5 Lending Products</h3>
                  <p>Loan products are subject to separate loan agreements, credit assessments, and CBN consumer lending guidelines. Approval is not guaranteed. Late repayments may attract penalties and be reported to licensed credit bureaus.</p>
                </Section>

                <Section title="9. Fees and Charges">
                  <p>PennyTree Technologies may charge fees for certain Services. All applicable fees will be disclosed clearly within the Platform before you commit to a transaction. We reserve the right to introduce or modify fees with at least 14 days' prior notice, except where required by regulatory directive. You authorise PennyTree Technologies to deduct applicable fees from your account balance at the time of the relevant transaction.</p>
                </Section>

                <Section title="10. Intellectual Property">
                  <p>All content, trademarks, logos, software, and materials on the PennyTree Technologies Platform are the exclusive property of PennyTree Technologies Business Limited or its licensors. You are granted a limited, non-exclusive, non-transferable, revocable licence to use the Platform solely for personal, non-commercial purposes.</p>
                  <p>You must not copy, reproduce, distribute, modify, create derivative works from, publicly display, or commercially exploit any part of the Platform without our prior written consent.</p>
                </Section>

                <Section title="11. Disclaimer of Warranties">
                  <p>To the fullest extent permitted by law, the PennyTree Technologies Platform and all its Services are provided "AS IS" and "AS AVAILABLE" without warranties of any kind. PennyTree Technologies does not warrant that:</p>
                  <Bullets items={[
                    'The Platform will be uninterrupted, error-free, or free from viruses',
                    'Any information or content is complete, accurate, or current',
                    'The Platform will meet your specific requirements or expectations',
                  ]} />
                  <p>Nothing in this section limits your statutory rights as a consumer under Nigerian consumer protection law.</p>
                </Section>

                <Section title="12. Limitation of Liability">
                  <p>To the maximum extent permitted under Applicable Law, PennyTree Technologies shall not be liable for:</p>
                  <Bullets items={[
                    'Indirect, incidental, special, consequential, or punitive damages',
                    'Loss of profit, revenue, data, goodwill, or opportunity',
                    'Any loss arising from your failure to comply with account security obligations',
                    'Service interruptions caused by third-party providers, network outages, or force majeure',
                    'Any loss resulting from your reliance on inaccurate information you provided',
                  ]} />
                  <p>Our aggregate liability for any claim shall not exceed the total fees paid by you to PennyTree Technologies in the three (3) months immediately preceding the event giving rise to the claim.</p>
                  <Callout title="Important Notice">
                    Nothing in these Terms excludes or limits PennyTree Technologies's liability for fraud, gross negligence, wilful misconduct, or any liability that cannot be excluded under Applicable Law, including the CBN Consumer Protection Framework.
                  </Callout>
                </Section>

                <Section title="13. Indemnification">
                  <p>You agree to indemnify, defend, and hold harmless PennyTree Technologies from any claims, damages, losses, liabilities, costs, and expenses arising from:</p>
                  <Bullets items={[
                    'Your violation of these Terms',
                    'Your misuse of the Platform or its Services',
                    'Any false or misleading information you provide',
                    'Your infringement of any third-party rights',
                  ]} />
                </Section>

                <Section title="14. Suspension and Termination">
                  <h3 className="font-semibold text-foreground">14.1 By You</h3>
                  <p>You may close your account at any time by contacting us at support@mypennytree.com, subject to settling any outstanding obligations.</p>
                  <h3 className="font-semibold text-foreground mt-4">14.2 By PennyTree Technologies</h3>
                  <p>We reserve the right to suspend or terminate your account, with or without notice, where:</p>
                  <Bullets items={[
                    'You breach any provision of these Terms',
                    'We reasonably suspect fraudulent, unlawful, or abusive activity',
                    'We are required to do so by a regulatory authority or court order',
                    'Your account has been inactive for a prolonged period',
                    'Continuing to provide Services poses regulatory, financial, or reputational risk',
                  ]} />
                  <h3 className="font-semibold text-foreground mt-4">14.3 Effect of Termination</h3>
                  <p>Upon termination, your right to use the Platform ceases immediately. Any outstanding balances will be handled in accordance with CBN guidelines. Sections 10–13, 15, and 16 shall survive termination.</p>
                </Section>

                <Section title="15. Governing Law and Dispute Resolution">
                  <h3 className="font-semibold text-foreground">15.1 Governing Law</h3>
                  <p>These Terms are governed by the laws of the Federal Republic of Nigeria.</p>
                  <h3 className="font-semibold text-foreground mt-4">15.2 Internal Complaint Resolution</h3>
                  <p>Contact our support team at support@mypennytree.com. We are committed to resolving complaints within CBN Consumer Protection Framework timeframes.</p>
                  <h3 className="font-semibold text-foreground mt-4">15.3 Regulatory Escalation</h3>
                  <Bullets items={[
                    'The Central Bank of Nigeria (CBN) Consumer Protection Department at www.cbn.gov.ng',
                    'The Federal Competition and Consumer Protection Commission (FCCPC)',
                  ]} />
                  <h3 className="font-semibold text-foreground mt-4">15.4 Arbitration</h3>
                  <p>Any unresolved dispute shall be referred to arbitration in Lagos, Nigeria, conducted under the rules of the Lagos Court of Arbitration or the Arbitration and Mediation Act 2023, with proceedings in English.</p>
                </Section>

                <Section title="16. General Provisions">
                  <h3 className="font-semibold text-foreground">16.1 Entire Agreement</h3>
                  <p>These Terms, together with our Privacy Policy and any product-specific terms, constitute the entire agreement between you and PennyTree Technologies.</p>
                  <h3 className="font-semibold text-foreground mt-4">16.2 Severability</h3>
                  <p>If any provision is found unlawful, void, or unenforceable, that provision shall be deemed severable.</p>
                  <h3 className="font-semibold text-foreground mt-4">16.3 Waiver</h3>
                  <p>Our failure to exercise or enforce any right shall not constitute a waiver of that right.</p>
                  <h3 className="font-semibold text-foreground mt-4">16.4 Assignment</h3>
                  <p>You may not assign your rights without our prior written consent. PennyTree Technologies may assign its rights to an affiliate or successor entity without restriction.</p>
                  <h3 className="font-semibold text-foreground mt-4">16.5 Force Majeure</h3>
                  <p>PennyTree Technologies shall not be liable for any delay or failure resulting from events beyond its reasonable control.</p>
                  <h3 className="font-semibold text-foreground mt-4">16.6 Language</h3>
                  <p>These Terms are made in English. The English version shall prevail in any conflict with a translation.</p>
                </Section>

                <Section title="17. Contact Us">
                  <Callout title="PennyTree Technologies Business Limited – Customer Support">
                    Email: <a href="mailto:support@mypennytree.com" className="text-primary hover:underline">support@mypennytree.com</a><br />
                    Legal enquiries: <a href="mailto:legal@mypennytree.com" className="text-primary hover:underline">legal@mypennytree.com</a><br />
                    Address: Victoria Island, Lagos, Nigeria<br />
                    Website: www.mypennytree.com
                  </Callout>
                  <p className="text-sm text-muted-foreground/70">© 2026 PennyTree Technologies Business Limited. All rights reserved. CBN-Licensed Microfinance Bank.</p>
                </Section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Terms;
