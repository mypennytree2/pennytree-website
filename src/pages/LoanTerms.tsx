import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

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
            <p className="text-lg text-muted-foreground mt-3">PennyTree Technologies Business Ltd</p>
          </div>
        </section>

        <section className="page-body py-16">
          <div className="container mx-auto px-4 max-w-4xl space-y-8">
            <div className="policy bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h6 className="text-xl font-semibold text-foreground mb-4">1. Formal Loan Terms & Conditions (The Agreement)</h6>
              <p className="text-muted-foreground mb-4">
                By signing the loan application document, the Borrower unconditionally agrees to be bound by the terms below, as completed by the Lender upon approval.
              </p>
              <div className="space-y-5 text-muted-foreground">
                <div>
                  <h6 className="font-semibold text-foreground mb-2">1.1 Principal Sum and Duration</h6>
                  <p>
                    PennyTree Technologies Business Limited (&quot;Lender&quot;) agrees to grant the Borrower a loan of the approved principal amount for the fixed period stated in the approved loan offer.
                  </p>
                </div>
                <div>
                  <h6 className="font-semibold text-foreground mb-2">1.2 Applied Interest Rate</h6>
                  <p>
                    Interest will be charged at the approved monthly interest rate on the original or approved principal.
                  </p>
                </div>
                <div>
                  <h6 className="font-semibold text-foreground mb-2">1.3 Total Payable Obligation</h6>
                  <p>
                    The Borrower agrees that the total amount payable is the approved principal plus all applicable interest.
                  </p>
                </div>
                <div>
                  <h6 className="font-semibold text-foreground mb-2">1.4 Repayment Structure</h6>
                  <p>
                    Repayment will be daily, weekly, or monthly, as approved. Repayments start on the date stated in the approved loan offer.
                  </p>
                </div>
                <div>
                  <h6 className="font-semibold text-foreground mb-2">1.5 Irrevocable Repayment Authorization</h6>
                  <p>
                    The Borrower authorizes PennyTree Technologies to debit any bank account linked to the Borrower&apos;s BVN, execute direct debit mandates, and sweep funds automatically from any associated account.
                  </p>
                </div>
              </div>
            </div>

            <div className="policy bg-primary/5 rounded-2xl p-8 shadow-lg border-2 border-primary/30">
              <h6 className="text-xl font-semibold text-foreground mb-4">2. Consequences of Default and Penalty Structure</h6>
              <p className="text-foreground font-medium mb-5">
                The Borrower acknowledges and accepts these binding default clauses.
              </p>
              <div className="space-y-5 text-foreground">
                <div>
                  <h6 className="font-semibold mb-2">2.1 Definition of Default</h6>
                  <p>
                    A default occurs when the Borrower misses a payment, disables debit mandates, has insufficient funds in bank accounts, becomes unreachable, misrepresents information, or attempts to evade payment.
                  </p>
                </div>
                <div>
                  <h6 className="font-semibold mb-2">2.2 Mandatory Daily Default Penalty</h6>
                  <p>
                    If the Borrower fails to repay on or before the due date, the Borrower agrees to an immediate default penalty of 1% daily on the outstanding principal plus outstanding interest. This penalty accrues daily until the full balance is paid.
                  </p>
                </div>
                <div>
                  <h6 className="font-semibold mb-2">2.3 Lender&apos;s Rights on Default</h6>
                  <p>
                    Upon default, PennyTree Technologies may debit any account linked to the Borrower&apos;s BVN, contact the Borrower, guarantors, or employer, enforce collateral rights, report to credit bureaus, engage lawful recovery agents, and charge all recovery costs to the Borrower.
                  </p>
                </div>
              </div>
            </div>

            <div className="policy bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h6 className="text-xl font-semibold text-foreground mb-4">3. Irrevocable Guarantor Undertaking (Binding on Both Guarantors)</h6>
              <p className="text-muted-foreground">
                Each guarantor confirms that they accept joint and several liability for the Borrower&apos;s obligations. PennyTree Technologies may pursue either guarantor directly for full repayment. Each guarantor consents to verification, including BVN, NIN, employer, and credit bureau checks. Each guarantor remains liable until the full loan, interest, and penalties, including the 1% daily default rate, are paid. Each guarantor waives any right to prior notice before recovery action.
              </p>
            </div>

            <div className="policy bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h6 className="text-xl font-semibold text-foreground mb-4">4. Data Consent & Authorization</h6>
              <p className="text-muted-foreground">
                The Borrower and guarantors consent to PennyTree Technologies verifying BVN, NIN, identity, and bank details; accessing credit history; using open banking data; storing and using information for loan administration; reporting performance or default; and escalating information to recovery agents for lawful collection.
              </p>
            </div>

            <p className="text-center text-xs text-muted-foreground pt-4">
              © 2025 PennyTree Technologies Business Ltd. All rights reserved. • Loan T&C
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default LoanTerms;
