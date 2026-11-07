import React from 'react';
import Navigation from '@/components/Navigation';
import ComplianceBar from '@/components/ComplianceBar';
import Footer from '@/components/Footer';

const ReferralTerms = () => {
  return (
    <>
      <ComplianceBar />
      <Navigation />
      <main>
        <section className="page-header py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-muted-foreground mb-2">Effective: 1 May 2025</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Referral Program – Terms & Conditions
            </h1>
            <p className="text-lg text-muted-foreground mt-3">PennyTree Technologies Business Ltd</p>
          </div>
        </section>

        <section className="page-body py-16">
          <div className="container mx-auto px-4 max-w-4xl space-y-8">
            <div className="policy bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h6 className="text-xl font-semibold text-foreground mb-4">Rules</h6>
              <p className="text-muted-foreground">
                These rules govern participation in the PennyTree Technologies Referral Program. By
                taking part, you agree to the terms below.
              </p>
            </div>

            <div className="policy bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h6 className="text-xl font-semibold text-foreground mb-4">1. How does the referral work?</h6>
              <p className="text-muted-foreground">
                Share your PennTag (this can be found on your dashboard) with a friend who
                doesn't have a PennyTree Technologies account. When they sign up using your PennTag,
                complete KYC, and make a transaction of at least ₦1,000, you earn a reward.
                Simple!
              </p>
            </div>

            <div className="policy bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h6 className="text-xl font-semibold text-foreground mb-4">2. Who counts as a valid referral?</h6>
              <p className="text-muted-foreground">
                A referral is valid when your friend signs up with your PennTag, passes KYC
                verification, funds their account, and completes a minimum ₦1,000
                transaction. App downloads alone do not count.
              </p>
            </div>

            <div className="policy bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h6 className="text-xl font-semibold text-foreground mb-4">3. About Rewards</h6>
              <p className="text-muted-foreground">
                Rewards are distributed on a bi-weekly basis to users who rank highest on
                the leaderboard, based on their referral performance within each cycle.
              </p>
            </div>

            <div className="policy bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h6 className="text-xl font-semibold text-foreground mb-4">4. How can I check my referrals?</h6>
              <p className="text-muted-foreground">
                Log into your PennyTree Technologies account, go to your Profile, then tap Referral to
                see your progress, coin balance, and referral history.
              </p>
            </div>

            <div className="policy bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <p className="text-muted-foreground">
                PennyTree Technologies reserves the right to reverse rewards where fraud is detected and
                to update these terms at any time.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ReferralTerms;