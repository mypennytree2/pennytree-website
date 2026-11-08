import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Loader2, CheckCircle2, AlertCircle, Upload, User, Check } from "lucide-react";
import logo from "@/assets/logo.png";
import SmileLiveness, { resolveSmileConfig } from "@/components/guarantor/SmileLiveness";
import {
  GuarantorApiError,
  declineUndertaking,
  formatNaira,
  getInvitation,
  initiateBankLink,
  initiateLiveness,
  isApiConfigured,
  pollProgress,
  saveDetails,
  submitUndertaking,
  uploadSignature,
  type GuarantorInvitation,
  type LivenessInitiateResult,
} from "@/lib/guarantorApi";

type Screen =
  | { kind: "loading" }
  | { kind: "form"; invitation: GuarantorInvitation }
  | { kind: "invalid" }
  | { kind: "submitted"; invitation?: GuarantorInvitation }
  | { kind: "withdrawn" }
  | { kind: "expired" }
  | { kind: "declined" }
  | { kind: "unconfigured" }
  | { kind: "error"; message: string };

const detailsSchema = z.object({
  first_name: z.string().trim().min(1, "Enter your first name").max(80),
  middle_name: z.string().trim().max(80).optional(),
  last_name: z.string().trim().min(1, "Enter your last name").max(80),
  bvn: z.string().trim().regex(/^\d{11}$/, "BVN must be 11 digits"),
  nin: z.string().trim().regex(/^\d{11}$/, "NIN must be 11 digits"),
  phone_number: z.string().trim().regex(/^[0-9+\s-]{7,20}$/, "Enter a valid phone number"),
  email: z.string().trim().email("Enter a valid email address").max(255),
  occupation: z.string().trim().max(120).optional(),
  employer: z.string().trim().max(120).optional(),
  monthly_income: z.string().trim().max(15).optional(),
  relationship: z.string().trim().min(1, "How do you know the borrower?").max(120),
  home_address: z.string().trim().min(5, "Enter your home address").max(300),
});

const emptyDetails = {
  first_name: "",
  middle_name: "",
  last_name: "",
  bvn: "",
  nin: "",
  phone_number: "",
  email: "",
  occupation: "",
  employer: "",
  monthly_income: "",
  relationship: "",
  home_address: "",
};

const STEPS = ["Personal details", "Liveness Check", "Link Bank Account", "Sign and submit"];

const Brand = () => (
  <div className="text-center">
    <div className="flex items-center justify-center gap-2">
      <img src={logo} alt="PennyTree Technologies" className="h-8 w-8 object-contain" />
      <span className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
        PennyTree Technologies
      </span>
    </div>
    <p className="mt-1 text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
      Powered by Quadtrust Finance
    </p>
  </div>
);

const StateScreen = ({
  icon,
  title,
  body,
  reference,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
  reference?: string;
}) => (
  <main className="min-h-screen bg-background px-5 py-16">
    <div className="mx-auto max-w-xl">
      <Brand />
      <section className="mt-8 rounded-2xl bg-cream p-10 text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground">
          {icon}
        </div>
        <h1 className="text-2xl font-extrabold text-foreground sm:text-3xl">{title}</h1>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">{body}</p>
      </section>
      <p className="mt-6 text-center text-sm text-muted-foreground">
        {reference && (
          <>
            Reference: {reference}
            <br />
          </>
        )}
        Questions? Email support@mypennytree.com
      </p>
    </div>
  </main>
);

const PrimaryButton = ({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    {...props}
    className="w-full rounded-xl bg-ink py-4 text-sm font-bold text-ink-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:bg-muted-foreground/70"
  >
    <span className="flex items-center justify-center gap-2">{children}</span>
  </button>
);

const GhostButton = ({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    {...props}
    className="w-full rounded-xl border border-border bg-background py-4 text-sm font-bold text-foreground transition-colors hover:bg-muted/60"
  >
    <span className="flex items-center justify-center gap-2">{children}</span>
  </button>
);

const GuarantorForm = () => {
  const { token = "" } = useParams();
  const [screen, setScreen] = useState<Screen>({ kind: "loading" });
  const [details, setDetails] = useState(emptyDetails);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [notice, setNotice] = useState<string | null>(null);
  const [busy, setBusy] = useState<string | null>(null);
  const [liveness, setLiveness] = useState<LivenessInitiateResult | null>(null);
  const [livenessAttempts, setLivenessAttempts] = useState(0);
  const [waiting, setWaiting] = useState<"liveness" | "bank" | null>(null);
  const [signatureName, setSignatureName] = useState<string | null>(null);
  const [consent, setConsent] = useState(false);
  const signatureInput = useRef<HTMLInputElement>(null);

  const mapError = useCallback((error: unknown): Screen | null => {
    if (!(error instanceof GuarantorApiError))
      return { kind: "error", message: "Something went wrong. Please try again." };
    const message = error.message.toLowerCase();
    if (error.statusCode === "LN404") return { kind: "invalid" };
    if (error.statusCode === "LN410") {
      if (message.includes("submit")) return { kind: "submitted" };
      if (message.includes("expire")) return { kind: "expired" };
      return { kind: "withdrawn" };
    }
    return null;
  }, []);

  const load = useCallback(async () => {
    if (!isApiConfigured) {
      setScreen({ kind: "unconfigured" });
      return;
    }
    try {
      const invitation = await getInvitation(token);
      if (invitation.progress.submitted) {
        setScreen({ kind: "submitted", invitation });
        return;
      }
      setScreen({ kind: "form", invitation });
    } catch (error) {
      const mapped = mapError(error);
      setScreen(mapped ?? { kind: "error", message: (error as Error).message });
    }
  }, [token, mapError]);

  useEffect(() => {
    void load();
  }, [load]);

  const invitation = screen.kind === "form" ? screen.invitation : null;
  const progress = invitation?.progress;

  const currentStep = useMemo(() => {
    if (!progress) return 1;
    if (!progress.details_saved) return 1;
    if (!progress.liveness_passed) return 2;
    if (!progress.bank_linked) return 3;
    return 4;
  }, [progress]);

  const refresh = async () => {
    try {
      const next = await getInvitation(token);
      if (next.progress.submitted) setScreen({ kind: "submitted", invitation: next });
      else setScreen({ kind: "form", invitation: next });
    } catch (error) {
      const mapped = mapError(error);
      if (mapped) setScreen(mapped);
    }
  };

  const handleStepError = (error: unknown) => {
    const mapped = mapError(error);
    if (mapped && mapped.kind !== "error") {
      setScreen(mapped);
      return;
    }
    // LN400 = steps done out of order. Re-read progress so the guarantor lands
    // on the step the server is actually expecting, no error dialog.
    if (error instanceof GuarantorApiError && error.statusCode === "LN400") {
      setNotice(error.message);
      void refresh();
      return;
    }
    setNotice(error instanceof Error ? error.message : "Something went wrong.");
  };

  const onSaveDetails = async (event: React.FormEvent) => {
    event.preventDefault();
    setNotice(null);
    const parsed = detailsSchema.safeParse(details);
    if (!parsed.success) {
      const errors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        errors[String(issue.path[0])] = issue.message;
      }
      setFieldErrors(errors);
      return;
    }
    setFieldErrors({});
    setBusy("details");
    try {
      const value = parsed.data;
      await saveDetails(token, {
        first_name: value.first_name,
        middle_name: value.middle_name,
        last_name: value.last_name,
        bvn: value.bvn,
        nin: value.nin,
        phone_number: value.phone_number,
        email: value.email,
        occupation: value.occupation,
        employer: value.employer,
        relationship: value.relationship,
        home_address: value.home_address,
        monthly_income: value.monthly_income ? Number(value.monthly_income) : undefined,
      });
      await refresh();
    } catch (error) {
      handleStepError(error);
    } finally {
      setBusy(null);
    }
  };

  const startLiveness = async () => {
    setNotice(null);
    setBusy("liveness");
    try {
      const result = await initiateLiveness(token);
      setLiveness(result);
      setLivenessAttempts((n) => n + 1);
    } catch (error) {
      handleStepError(error);
    } finally {
      setBusy(null);
    }
  };

  const waitForLiveness = async () => {
    setWaiting("liveness");
    try {
      const { passed } = await pollProgress(token, (p) => p.liveness_passed);
      if (passed) {
        setLiveness(null);
        await refresh();
      } else {
        setNotice("Still checking your face verification. This can take a moment — tap to check again.");
      }
    } catch (error) {
      handleStepError(error);
    } finally {
      setWaiting(null);
    }
  };

  const startBankLink = async () => {
    setNotice(null);
    setBusy("bank");
    try {
      const { mono_url } = await initiateBankLink(token);
      window.open(mono_url, "_blank", "noopener,noreferrer");
      setWaiting("bank");
      const { passed } = await pollProgress(token, (p) => p.bank_linked);
      if (passed) await refresh();
      else setNotice("Still confirming your bank link. This can take a moment — tap to check again.");
    } catch (error) {
      handleStepError(error);
    } finally {
      setBusy(null);
      setWaiting(null);
    }
  };

  const onSignatureChosen = async (file: File) => {
    setNotice(null);
    if (file.size > 5 * 1024 * 1024) {
      setNotice("That file is too large. Please use one under 5MB.");
      return;
    }
    setBusy("signature");
    try {
      await uploadSignature(token, file);
      setSignatureName(file.name);
      await refresh();
    } catch (error) {
      handleStepError(error);
    } finally {
      setBusy(null);
    }
  };

  const onSubmit = async () => {
    setNotice(null);
    setBusy("submit");
    try {
      await submitUndertaking(token);
      setScreen({ kind: "submitted", invitation: invitation ?? undefined });
    } catch (error) {
      handleStepError(error);
    } finally {
      setBusy(null);
    }
  };

  const onDecline = async () => {
    setNotice(null);
    setBusy("decline");
    try {
      await declineUndertaking(token);
      setScreen({ kind: "declined" });
    } catch (error) {
      handleStepError(error);
    } finally {
      setBusy(null);
    }
  };

  if (screen.kind === "loading") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <Loader2 className="h-6 w-6 animate-spin text-primary" />
      </div>
    );
  }

  if (screen.kind === "submitted") {
    return (
      <StateScreen
        icon={<Check className="h-10 w-10" strokeWidth={3} />}
        title="Undertaking Submitted"
        body={`Thank you. Your guarantor undertaking${
          screen.invitation ? ` for ${screen.invitation.borrower_name}` : ""
        } has been received and your identity verified. Our loan officers will be in touch if anything further is needed.`}
        reference={screen.invitation?.reference_number ?? undefined}
      />
    );
  }

  if (screen.kind !== "form") {
    const screens: Record<string, { icon: React.ReactNode; title: string; body: string }> = {
      invalid: {
        icon: <AlertCircle className="h-9 w-9" />,
        title: "This link isn't valid",
        body: "Please use the exact link sent to you. If you copied it by hand, ask the borrower to resend it.",
      },
      withdrawn: {
        icon: <AlertCircle className="h-9 w-9" />,
        title: "This invitation was withdrawn",
        body: "The borrower has cancelled or replaced this guarantor request. No action is needed from you.",
      },
      expired: {
        icon: <AlertCircle className="h-9 w-9" />,
        title: "This link has expired",
        body: "Guarantor links stay open for 14 days. Please ask the borrower to send you a new one.",
      },
      declined: {
        icon: <CheckCircle2 className="h-9 w-9" />,
        title: "You have declined",
        body: "Thank you for letting us know. The application is not rejected — the borrower will be asked to nominate someone else.",
      },
      unconfigured: {
        icon: <AlertCircle className="h-9 w-9" />,
        title: "Not available yet",
        body: "This guarantor form is not connected to the loan service yet. Please try again later.",
      },
      error: {
        icon: <AlertCircle className="h-9 w-9" />,
        title: "Something went wrong",
        body: screen.kind === "error" ? screen.message : "Please try again shortly.",
      },
    };
    return <StateScreen {...screens[screen.kind]} />;
  }

  const inv = screen.invitation;

  const field = (
    name: keyof typeof emptyDetails,
    label: string,
    placeholder: string,
    props: React.InputHTMLAttributes<HTMLInputElement> = {},
  ) => (
    <div className="space-y-1.5">
      <Label htmlFor={name} className="text-sm font-normal text-foreground">
        {label}
      </Label>
      <Input
        id={name}
        placeholder={placeholder}
        value={details[name]}
        onChange={(e) => setDetails({ ...details, [name]: e.target.value })}
        className="h-12 rounded-lg border-border bg-background"
        {...props}
      />
      {fieldErrors[name] && <p className="text-xs text-destructive">{fieldErrors[name]}</p>}
    </div>
  );

  const facts = [
    { label: "Loan amount", value: formatNaira(inv.amount) },
    { label: "Tenure", value: `${inv.tenor} Months` },
    { label: "Interest", value: inv.rate },
    { label: "Purpose", value: inv.purpose },
  ];

  const obligations = [
    "You are jointly and severally liable for this loan if the borrower defaults.",
    "PennyTree Technologies (Quadtrust Finance) may debit any BVN-linked account you own if the borrower fails to repay.",
    "Your credit bureau record will reflect this guarantor commitment.",
    "You remain liable until the full loan, interest, and all penalties are repaid.",
  ];

  return (
    <main className="min-h-screen bg-background px-5 py-8 pb-16">
      <div className="mx-auto max-w-3xl">
        <Brand />

        {/* Invitation banner */}
        <section className="mt-6 rounded-2xl bg-sand px-6 py-7 text-center text-sand-foreground">
          <p className="text-xs font-bold uppercase tracking-wide">
            Guarantor invitation{inv.reference_number ? ` · Ref ${inv.reference_number}` : ""}
          </p>
          <h1 className="mt-3 text-2xl font-extrabold">{inv.borrower_name}</h1>
          <p className="mt-3 text-sm leading-relaxed">
            Has named you as a guarantor for a PennyTree Technologies Standard Loan.
            <br />
            Please complete all steps carefully.
          </p>
        </section>

        {/* Loan facts */}
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact.label} className="rounded-2xl bg-cream px-4 py-5 text-center">
              <p className="text-sm text-muted-foreground">{fact.label}</p>
              <p className="mt-1 text-base font-bold leading-snug text-foreground">{fact.value}</p>
            </div>
          ))}
        </div>

        {/* Stepper */}
        <nav className="mt-4 grid grid-cols-4 gap-3" aria-label="Progress">
          {STEPS.map((label, index) => {
            const active = index + 1 <= currentStep;
            return (
              <div key={label}>
                <div
                  className={`h-[3px] rounded-full ${active ? "bg-ink" : "bg-sand"}`}
                  aria-hidden
                />
                <p
                  className={`mt-3 text-center text-xs font-semibold sm:text-sm ${
                    active ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {label}
                </p>
              </div>
            );
          })}
        </nav>

        <h2 className="mt-10 text-center text-2xl font-extrabold text-foreground">
          {currentStep === 1 && "Your Personal Details"}
          {currentStep === 2 && "Liveness Check"}
          {currentStep === 3 && "Link Your Bank Account"}
          {currentStep === 4 && "Sign and Submit"}
        </h2>
        {currentStep === 2 && (
          <p className="mt-1 text-center text-sm text-muted-foreground">Powered by Smile ID</p>
        )}

        {notice && (
          <div className="mx-auto mt-5 flex max-w-xl items-start gap-2 rounded-xl bg-sand p-4 text-sm text-sand-foreground">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
            <span>{notice}</span>
          </div>
        )}

        <div className="mx-auto mt-6 max-w-xl rounded-2xl border border-border/60 bg-cream/60 p-4 sm:p-6">
          {/* Step 1 — details */}
          {currentStep === 1 && (
            <form onSubmit={onSaveDetails} className="space-y-5">
              <div className="rounded-2xl bg-cream p-5">
                <h3 className="mb-4 text-base font-bold text-foreground">
                  What being a guarantor means?
                </h3>
                <ol className="space-y-3">
                  {obligations.map((text, index) => (
                    <li key={text} className="flex gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink text-xs font-bold text-ink-foreground">
                        {index + 1}
                      </span>
                      <span className="text-sm leading-relaxed text-foreground">{text}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {field("first_name", "First name", "As on your government-issued ID", {
                autoComplete: "given-name",
              })}
              {field("middle_name", "Middle name (Optional)", "Leave blank if not applicable")}
              {field("last_name", "Last name / Surname", "As on your government-issued ID", {
                autoComplete: "family-name",
              })}
              {field("bvn", "BVN", "Bank Verification Number", {
                inputMode: "numeric",
                maxLength: 11,
              })}
              {field("nin", "NIN", "National Identification Number", {
                inputMode: "numeric",
                maxLength: 11,
              })}
              {field("phone_number", "Phone Number", "Active phone number", {
                inputMode: "tel",
                autoComplete: "tel",
              })}
              {field("email", "Email Address", "For correspondence", {
                type: "email",
                autoComplete: "email",
              })}
              {field("occupation", "Occupation", "Your occupation")}
              {field("employer", "Employer", "Current employer or business name")}
              {field("monthly_income", "Gross Monthly Income", "Approximate amount in Naira", {
                inputMode: "numeric",
              })}
              {field(
                "relationship",
                "Relationship To Borrower",
                "E.g Sibling, Colleague, Business partner",
              )}
              <div className="space-y-1.5">
                <Label htmlFor="home_address" className="text-sm font-normal text-foreground">
                  Current Home Address
                </Label>
                <Textarea
                  id="home_address"
                  placeholder="House number, street, area, state"
                  value={details.home_address}
                  onChange={(e) => setDetails({ ...details, home_address: e.target.value })}
                  maxLength={300}
                  className="min-h-[88px] rounded-lg bg-background"
                />
                {fieldErrors.home_address && (
                  <p className="text-xs text-destructive">{fieldErrors.home_address}</p>
                )}
              </div>

              <PrimaryButton type="submit" disabled={busy === "details"}>
                {busy === "details" && <Loader2 className="h-4 w-4 animate-spin" />}
                Continue to Liveness Check
              </PrimaryButton>
            </form>
          )}

          {/* Step 2 — liveness */}
          {currentStep === 2 && (
            <div className="space-y-5">
              <p className="rounded-2xl bg-cream p-5 text-sm leading-relaxed text-foreground">
                We need to confirm that you are the person submitting this form. Your face will be
                verified against the photo on your NIN record. Please ensure you are in a well-lit
                area before starting.
              </p>

              <div className="rounded-2xl bg-cream p-8 text-center">
                <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-sand">
                  <User className="h-16 w-16 text-foreground/70" strokeWidth={2.5} />
                </div>
                <p className="mt-5 text-base font-bold text-foreground">
                  Ready to verify your identity
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Your face will be matched against your NIN photo.
                  <br />
                  This takes about 10 seconds
                </p>
              </div>

              {liveness ? (
                <div className="space-y-4">
                  <SmileLiveness
                    liveness={liveness}
                    onCaptured={waitForLiveness}
                    onError={setNotice}
                  />
                  {!resolveSmileConfig(liveness).ready && (
                    <GhostButton onClick={waitForLiveness}>Check verification status</GhostButton>
                  )}
                  {waiting === "liveness" && (
                    <p className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <Loader2 className="h-4 w-4 animate-spin" /> Checking your verification…
                    </p>
                  )}
                </div>
              ) : (
                <PrimaryButton
                  onClick={startLiveness}
                  disabled={busy === "liveness" || livenessAttempts >= 3}
                >
                  {busy === "liveness" && <Loader2 className="h-4 w-4 animate-spin" />}
                  {livenessAttempts === 0 ? "Continue to Liveness Check" : "Try again"}
                </PrimaryButton>
              )}

              {livenessAttempts >= 3 && (
                <p className="text-sm text-muted-foreground">
                  We could not verify your face after three attempts. Please contact support at
                  support@mypennytree.com.
                </p>
              )}
            </div>
          )}

          {/* Step 3 — bank */}
          {currentStep === 3 && (
            <div className="space-y-5">
              <div className="rounded-2xl bg-cream p-5">
                <h3 className="text-base font-bold text-foreground">Confirm your bank account</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground">
                  Choose your bank and confirm the account on your bank's own secure page. You will
                  be asked for the one-time password your bank sends you. We never see your bank
                  password.
                </p>
              </div>
              <PrimaryButton onClick={startBankLink} disabled={busy === "bank"}>
                {busy === "bank" && <Loader2 className="h-4 w-4 animate-spin" />}
                {waiting === "bank" ? "Waiting for confirmation…" : "Select bank and verify"}
              </PrimaryButton>
              <p className="text-center text-xs text-muted-foreground">
                Keep this page open — confirmation can take up to a minute after you finish.
              </p>
            </div>
          )}

          {/* Step 4 — signature, undertaking and submit */}
          {currentStep === 4 && (
            <div className="space-y-5">
              <div className="rounded-2xl border border-border/70 p-5">
                <h3 className="text-base font-bold text-foreground">Signature and Undertaking</h3>
                <p className="mt-3 text-xs uppercase tracking-wide text-muted-foreground">
                  Upload your signature
                </p>
                <p className="mt-1 text-sm leading-relaxed text-foreground">
                  Please sign your name on a plain white sheet of paper, take a clear photograph of
                  it, and upload the image below. The signature must match your official bank
                  records.
                </p>
              </div>

              <input
                ref={signatureInput}
                type="file"
                accept="image/*,application/pdf"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) void onSignatureChosen(file);
                }}
              />
              <button
                type="button"
                onClick={() => signatureInput.current?.click()}
                disabled={busy === "signature"}
                className="w-full rounded-2xl border-2 border-dashed border-border bg-cream px-6 py-10 text-center"
              >
                {busy === "signature" ? (
                  <Loader2 className="mx-auto h-10 w-10 animate-spin text-muted-foreground" />
                ) : progress?.signature_uploaded ? (
                  <>
                    <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <Check className="h-7 w-7" strokeWidth={3} />
                    </span>
                    <span className="mt-4 block text-sm font-bold text-foreground">
                      {signatureName ?? "Signature uploaded"}
                    </span>
                    <span className="mt-1 block text-sm text-muted-foreground">Tap to change</span>
                  </>
                ) : (
                  <>
                    <Upload className="mx-auto h-8 w-8 text-foreground" />
                    <span className="mt-4 block text-base font-bold text-foreground">
                      Upload Signature Photo
                    </span>
                    <span className="mt-2 block text-sm text-muted-foreground">
                      Sign on white paper, photograph it, upload here
                      <br />
                      JPG, PNG or PDF · Max 5MB
                    </span>
                  </>
                )}
              </button>

              <div className="space-y-4 rounded-2xl border border-border/70 p-5 text-sm leading-relaxed text-foreground">
                <h3 className="text-base font-bold">Irrevocable Guarantor Undertaking</h3>
                <p>
                  I, the undersigned, hereby confirm that I have read and fully understood my
                  obligations as a guarantor for the borrower named above. I unconditionally accept
                  joint and several liability for the full loan principal, all accrued interest, and
                  any applicable default penalties charged by PennyTree Technologies Business Limited
                  (powered by Quadtrust Finance).
                </p>
                <p>
                  I acknowledge that PennyTree Technologies Business Limited may, without prior
                  notice, debit any bank account linked to my Bank Verification Number (BVN) to
                  recover any outstanding amounts if the borrower defaults on repayment obligations.
                </p>
                <p>
                  I consent to my personal information, BVN, NIN, and financial data being verified,
                  stored, and shared with licensed Nigerian credit bureaus and with lawful recovery
                  agents where necessary for the purpose of loan administration and debt recovery.
                </p>
                <p>
                  I confirm that all information provided in this form is accurate, complete, and
                  truthful. I understand that providing false or misleading information constitutes a
                  criminal offence under Nigerian law and may result in legal action.
                </p>
                <p>
                  This undertaking is irrevocable and shall remain in full force and effect until the
                  entire loan obligation has been fully discharged.
                </p>
              </div>

              <label className="flex items-start gap-3 rounded-2xl bg-cream p-5 text-sm leading-relaxed text-foreground">
                <Checkbox
                  checked={consent}
                  onCheckedChange={(v) => setConsent(v === true)}
                  className="mt-0.5"
                />
                <span>
                  I have read the Irrevocable Guarantor Undertaking above and I agree that it is
                  legally binding on me.
                </span>
              </label>

              <PrimaryButton
                onClick={onSubmit}
                disabled={!consent || !progress?.signature_uploaded || busy === "submit"}
              >
                {busy === "submit" && <Loader2 className="h-4 w-4 animate-spin" />}
                Submit Undertaking
              </PrimaryButton>
            </div>
          )}
        </div>

        <div className="mx-auto mt-6 max-w-xl">
          <GhostButton onClick={onDecline} disabled={busy === "decline"}>
            {busy === "decline" && <Loader2 className="h-4 w-4 animate-spin" />}
            Decline this request
          </GhostButton>
          <p className="mt-3 text-center text-xs leading-relaxed text-muted-foreground">
            Declining does not reject the application — {inv.borrower_name} will be asked to nominate
            someone else. Need help? Email support@mypennytree.com. This link expires 14 days after
            it was sent.
          </p>
        </div>
      </div>
    </main>
  );
};

export default GuarantorForm;
