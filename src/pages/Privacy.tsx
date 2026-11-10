import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

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

const Privacy = () => {
  return (
    <>
      <Navigation />
      <main>
        <section className="page-header py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Privacy Policy</h1>
            <p className="text-muted-foreground mt-4">Effective Date: May 1, 2026 · Version 2.0</p>
          </div>
        </section>

        <section className="page-body py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <Section title="1. Introduction">
              <p>PennyTree Technologies Business Limited ("PennyTree Technologies," "we," "us," or "our") is a SEC and CBN-licensed microfinance bank incorporated under the laws of the Federal Republic of Nigeria. We operate a digital banking platform accessible via our mobile application and website, enabling Nigerians to save, borrow, pay, and invest with ease.</p>
              <p>We are deeply committed to protecting your personal information and your right to privacy. This Privacy Policy explains what information we collect, why, how we use it, and what rights you have. It applies to all users of the PennyTree Technologies mobile application, website, and any related services (the "Platform").</p>
              <Callout title="Regulatory Context">
                This Policy is issued in compliance with the Nigeria Data Protection Act 2023 (NDPA), the Nigeria Data Protection Regulation 2019 (NDPR), the CBN Consumer Protection Framework, and applicable guidelines issued by the Nigeria Data Protection Commission (NDPC).
              </Callout>
            </Section>

            <Section title="2. Who We Are & How to Contact Us">
              <p>PennyTree Technologies Business Limited is the Data Controller responsible for your personal data.</p>
              <Table>
                <TableBody>
                  <TableRow><TableCell className="font-semibold">Registered Name</TableCell><TableCell>PennyTree Technologies Business Limited</TableCell></TableRow>
                  <TableRow><TableCell className="font-semibold">Address</TableCell><TableCell>Victoria Island, Lagos, Nigeria</TableCell></TableRow>
                  <TableRow><TableCell className="font-semibold">Email</TableCell><TableCell>support@mypennytree.com</TableCell></TableRow>
                  <TableRow><TableCell className="font-semibold">Website</TableCell><TableCell>www.mypennytree.com</TableCell></TableRow>
                  <TableRow><TableCell className="font-semibold">Data Protection Officer</TableCell><TableCell>ops@mypennytree.com</TableCell></TableRow>
                  <TableRow><TableCell className="font-semibold">Regulator</TableCell><TableCell>CBN; SEC</TableCell></TableRow>
                </TableBody>
              </Table>
            </Section>

            <Section title="3. Information We Collect">
              <h3 className="font-semibold text-foreground">3.1 Identity & Account Information</h3>
              <Bullets items={['Full legal name','Date of birth','Bank Verification Number (BVN)','National Identification Number (NIN) or passport number','Photograph and selfie (for identity verification)']} />
              <h3 className="font-semibold text-foreground mt-4">3.2 Contact Information</h3>
              <Bullets items={['Phone number','Email address','Residential address','Next of kin details']} />
              <h3 className="font-semibold text-foreground mt-4">3.3 Financial Information</h3>
              <Bullets items={['Bank account numbers and sort codes','Transaction history, amounts, and counterparties','Savings goals, targets, and balances','Loan applications, repayment history, and credit profile','Wallet and payment card details']} />
              <h3 className="font-semibold text-foreground mt-4">3.4 Device & Technical Information</h3>
              <Bullets items={['Device type, model, and operating system','Mobile device identifiers (device ID, advertising ID)','App version, crash logs, and performance data','IP address and network type','Browser type and settings (for web access)']} />
              <h3 className="font-semibold text-foreground mt-4">3.5 Usage & Behavioural Data</h3>
              <Bullets items={['Features accessed, screens viewed, and time spent','Interactions with notifications and in-app messages','Search queries within the Platform']} />
              <h3 className="font-semibold text-foreground mt-4">3.6 Location Information</h3>
              <Bullets items={['Precise GPS coordinates from your device','Approximate location derived from network signals where precise GPS is unavailable']} />
              <h3 className="font-semibold text-foreground mt-4">3.7 Communications Data</h3>
              <Bullets items={['Messages you send to our customer support team','Responses to surveys, feedback forms, or promotions','Records of calls made to our support lines (where applicable)']} />
            </Section>

            <Section title="4. How We Collect Your Information">
              <Bullets items={[
                'Directly from you, when you register, complete your profile, or use our services',
                'Automatically, through your use of the app or website',
                'From third-party identity and KYC verification providers',
                'From credit bureaus and financial intelligence databases as permitted by law',
                'From your device sensors, with your permission (including GPS for location-based features)',
                'From government or regulatory databases to fulfil compliance obligations',
              ]} />
            </Section>

            <Section title="5. Location Information">
              <p>This section provides a comprehensive disclosure of how PennyTree Technologies accesses, collects, and uses location data, in compliance with Google Play Store and Apple App Store privacy requirements.</p>
              <h3 className="font-semibold text-foreground mt-4">5.1 What Location Data We Collect</h3>
              <p>When you enable the Snap and Save feature, you will be prompted to grant PennyTree Technologies permission to access your device's location services:</p>
              <Bullets items={[
                'Precise location data – your exact GPS coordinates, to the extent supported by your device.',
                'Approximate location data – a general geographic area derived from network, Wi-Fi, or cellular signals.',
              ]} />
              <p>Location data is collected only while the app is in active foreground use and only when Snap and Save is enabled. We do not collect location data in the background.</p>
              <h3 className="font-semibold text-foreground mt-4">5.2 Why We Collect Location Data</h3>
              <p>Solely to detect when you enter a geographic area you have pre-configured in Snap and Save and automatically initiate a savings action on your behalf. We do not use your location data for advertising, marketing profiling, or behavioural analytics.</p>
              <h3 className="font-semibold text-foreground mt-4">5.3 Legal Basis for Processing Location Data</h3>
              <p>We process your location data on the legal basis of your explicit and freely given consent, provided at the time you grant location permission via your device settings and activate Snap and Save.</p>
              <h3 className="font-semibold text-foreground mt-4">5.4 Sharing of Location Data</h3>
              <p>Your precise or approximate location data is not sold, rented, or disclosed to third parties for their independent use. It may be processed by our cloud hosting providers solely to deliver Snap and Save functionality, subject to strict data processing agreements.</p>
              <h3 className="font-semibold text-foreground mt-4">5.5 Retention of Location Data</h3>
              <p>Location data used to trigger a savings event is retained only for as long as necessary to complete, record, and reconcile that transaction. After that, it is deleted or de-identified.</p>
              <h3 className="font-semibold text-foreground mt-4">5.6 Your Controls Over Location Access</h3>
              <Bullets items={[
                'iOS: Settings → PennyTree Technologies → Location, and select "Never" or "While Using the App."',
                'Android: Settings → Apps → PennyTree Technologies → Permissions → Location.',
                'You may disable Snap and Save entirely from within the app without changing device-level permissions.',
              ]} />
              <p>Revoking location permission disables Snap and Save but will not affect any other core PennyTree Technologies service.</p>
              <Callout title="Important">
                PennyTree Technologies will never make access to location data a condition of using our core banking, savings, payment, or lending services. Location permission is strictly optional and feature-specific.
              </Callout>
            </Section>

            <Section title="6. How We Use Your Information">
              <Bullets items={[
                'Account creation, verification, and management',
                'Delivering and improving our financial products and services',
                'Processing transactions, payments, and fund transfers',
                'Fulfilling KYC/AML obligations under CBN regulations',
                'Communicating about your account, transactions, and service updates',
                'Sending marketing communications (only with your consent)',
                'Detecting, investigating, and preventing fraud and security threats',
                'Complying with legal and regulatory obligations',
                'Improving app performance, troubleshooting errors, and internal analytics',
                'Activating location-triggered savings (Snap and Save) when permission is granted',
              ]} />
            </Section>

            <Section title="7. Legal Basis for Processing">
              <Bullets items={[
                'Consent – where you have given explicit consent (e.g., marketing, location).',
                'Contract performance – where processing is necessary to deliver services you have requested.',
                'Legal obligation – to comply with CBN, SEC, FIRS, NFIU, or other regulatory requirements.',
                'Legitimate interests – for fraud prevention, security, and improving our services.',
              ]} />
            </Section>

            <Section title="8. Data Sharing and Disclosure">
              <p>We do not sell your personal data. We may share data with the following recipients, strictly as necessary:</p>
              <h3 className="font-semibold text-foreground mt-4">8.1 Service Providers & Processors</h3>
              <Bullets items={[
                'Identity verification and KYC providers (e.g., QoreID or equivalent)',
                'Cloud infrastructure and hosting providers',
                'Payment processors and interbank settlement platforms',
                'Customer support tools and CRM platforms',
                'Analytics and fraud detection services',
              ]} />
              <h3 className="font-semibold text-foreground mt-4">8.2 Regulatory & Government Bodies</h3>
              <Bullets items={[
                'Central Bank of Nigeria (CBN) and NDPC, as required by law',
                'Nigeria Financial Intelligence Unit (NFIU) for AML reporting',
                'Law enforcement agencies, pursuant to valid legal process',
                'Nigeria Deposit Insurance Corporation (NDIC)',
              ]} />
              <h3 className="font-semibold text-foreground mt-4">8.3 Business Transfers</h3>
              <p>In a merger, acquisition, or asset sale, your data may be transferred to the acquiring entity, subject to equivalent privacy protections and prior notification.</p>
              <h3 className="font-semibold text-foreground mt-4">8.4 With Your Consent</h3>
              <p>We may share your data with other third parties where you have given specific, informed consent.</p>
            </Section>

            <Section title="9. Cookies and Tracking Technologies">
              <Bullets items={[
                'Session identifiers – temporary tokens to maintain your logged-in session.',
                'Analytics SDKs – aggregate, anonymised usage and crash data.',
                'Push notification tokens – to deliver alerts and transactional messages.',
                'Device identifiers – to recognise your device and prevent unauthorised access.',
              ]} />
              <p>Our website additionally uses browser cookies for session management and basic analytics. You may disable cookies via your browser settings; some functionality may be affected. Our app does not rely on browser cookies.</p>
            </Section>

            <Section title="10. Data Retention">
              <p>We retain your personal data only for as long as necessary to fulfil the purposes for which it was collected, including legal, regulatory, and accounting obligations.</p>
              <Table>
                <TableHeader>
                  <TableRow><TableHead>Data Category</TableHead><TableHead>Retention Period</TableHead></TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow><TableCell>Account & identity data</TableCell><TableCell>Duration of account + 7 years after closure</TableCell></TableRow>
                  <TableRow><TableCell>Transaction records</TableCell><TableCell>7 years (CBN requirement)</TableCell></TableRow>
                  <TableRow><TableCell>KYC/AML records</TableCell><TableCell>5–10 years as required by NFIU guidelines</TableCell></TableRow>
                  <TableRow><TableCell>Location data (Snap and Save)</TableCell><TableCell>Deleted after transaction completion</TableCell></TableRow>
                  <TableRow><TableCell>Customer support records</TableCell><TableCell>3 years from last interaction</TableCell></TableRow>
                  <TableRow><TableCell>Marketing consent records</TableCell><TableCell>Until consent is withdrawn + 1 year</TableCell></TableRow>
                  <TableRow><TableCell>Device & technical data</TableCell><TableCell>12 months rolling</TableCell></TableRow>
                </TableBody>
              </Table>
            </Section>

            <Section title="11. Data Security">
              <Bullets items={[
                'End-to-end encryption for data in transit (TLS 1.2+)',
                'Encryption of sensitive data at rest (AES-256)',
                'Multi-factor authentication for user accounts and internal systems',
                'Role-based access controls limiting staff access to personal data',
                'Regular penetration testing and security audits',
                'Incident response procedures aligned to NDPC notification requirements',
              ]} />
              <p>While we take reasonable steps to protect your information, no method of transmission or storage is 100% secure. In the event of a data breach posing risk to your rights, we will notify you and the NDPC within the timeframes required by the NDPA 2023.</p>
            </Section>

            <Section title="12. Children's Privacy">
              <p>The PennyTree Technologies Platform is intended solely for individuals 18 years of age or older. We do not knowingly collect personal data from anyone under 18. If you believe your child has provided personal information to us, please contact ops@mypennytree.com and we will delete such information promptly.</p>
            </Section>

            <Section title="13. Your Data Rights">
              <p>Under the NDPA 2023, you have the following rights with respect to your personal data:</p>
              <Bullets items={[
                'Right of Access – request a copy of the personal data we hold about you.',
                'Right to Rectification – request correction of inaccurate or incomplete data.',
                'Right to Erasure – request deletion, subject to legal retention obligations.',
                'Right to Restriction – request that we limit how we use your data.',
                'Right to Data Portability – receive your data in a structured, machine-readable format.',
                'Right to Object – object to processing based on legitimate interests or for direct marketing.',
                'Right to Withdraw Consent – at any time where processing is based on consent.',
                'Right to Lodge a Complaint – with the Nigeria Data Protection Commission (NDPC) at ndpc.gov.ng.',
              ]} />
              <p>To exercise any of these rights, contact our Data Protection Officer at ops@mypennytree.com. We will respond within 30 days in accordance with the NDPA 2023.</p>
            </Section>

            <Section title="14. International Data Transfers">
              <p>Your personal data is primarily stored and processed within Nigeria. Where we engage service providers outside Nigeria, we ensure appropriate safeguards – such as standard contractual clauses or adequacy decisions – to ensure equivalent protection.</p>
            </Section>

            <Section title="15. Changes to This Policy">
              <p>We may update this Privacy Policy from time to time. When we make material changes, we will notify you via in-app notification, email, or a prominent notice on our website at least 14 days before the changes take effect. Your continued use of the Platform after the effective date constitutes acceptance.</p>
            </Section>

            <Section title="16. Contact Us">
              <Callout title="Data Protection Officer – PennyTree Technologies Business Limited">
                Email: <a href="mailto:ops@mypennytree.com" className="text-primary hover:underline">ops@mypennytree.com</a><br />
                General enquiries: <a href="mailto:support@mypennytree.com" className="text-primary hover:underline">support@mypennytree.com</a><br />
                Address: Victoria Island, Lagos, Nigeria<br />
                Website: www.mypennytree.com
              </Callout>
              <p>You also have the right to lodge a complaint with the Nigeria Data Protection Commission (NDPC) at www.ndpc.gov.ng if you believe we have not handled your data appropriately.</p>
              <p className="text-sm text-muted-foreground/70">© 2026 PennyTree Technologies Business Limited. All rights reserved. CBN-Licensed Microfinance Bank.</p>
            </Section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Privacy;