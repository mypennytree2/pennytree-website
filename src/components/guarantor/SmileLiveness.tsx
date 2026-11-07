import { useEffect, useRef, useState } from "react";

/**
 * Smile Identity hosted Web Integration for guarantor liveness.
 *
 * The SDK submits the capture directly to Smile Identity. Smile then notifies
 * the loan service by webhook. This component never uploads anything itself —
 * the parent page polls the guarantor endpoint for `liveness_passed`.
 *
 * Configure with:
 *   VITE_SMILE_PARTNER_ID     your Smile Identity partner id (e.g. "2187")
 *   VITE_SMILE_ENVIRONMENT    "sandbox" or "production"
 *   VITE_SMILE_CALLBACK_URL   the loan service webhook Smile will POST results to
 */

const PARTNER_ID = import.meta.env.VITE_SMILE_PARTNER_ID as string | undefined;
const ENVIRONMENT = (import.meta.env.VITE_SMILE_ENVIRONMENT as string | undefined) ?? "sandbox";
const CALLBACK_URL = import.meta.env.VITE_SMILE_CALLBACK_URL as string | undefined;

const SDK_SRC = "https://cdn.smileidentity.com/inline/v1/js/script.min.js";

export const isSmileConfigured = Boolean(PARTNER_ID && CALLBACK_URL);

interface Props {
  /** Job/user reference returned by POST liveness/initiate. */
  reference: string;
  idType: string;
  idNumber: string;
  onCaptured: () => void;
  onError: (message: string) => void;
  onClose?: () => void;
}

// The Smile hosted SDK attaches a constructor to window.
type SmileConfig = {
  token?: string;
  product: string;
  callback_url: string;
  environment: string;
  partner_details: {
    partner_id: string;
    name: string;
    logo_url?: string;
    policy_url?: string;
    theme_color?: string;
  };
  id_selection?: Record<string, string[]>;
  consent_required?: Record<string, unknown>;
  user_id?: string;
  job_id?: string;
  onSuccess?: () => void;
  onClose?: () => void;
  onError?: (err: unknown) => void;
};
type SmileGlobal = (config: SmileConfig) => void;

const SmileLiveness = ({ reference, idType, idNumber, onCaptured, onError, onClose }: Props) => {
  const mounted = useRef(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!isSmileConfigured) return;
    if ((window as unknown as { SmileIdentity?: SmileGlobal }).SmileIdentity) {
      setReady(true);
      return;
    }
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${SDK_SRC}"]`);
    if (existing) {
      existing.addEventListener("load", () => setReady(true), { once: true });
      return;
    }
    const script = document.createElement("script");
    script.src = SDK_SRC;
    script.async = true;
    script.onload = () => setReady(true);
    script.onerror = () => onError("The face check could not load. Please try again.");
    document.body.appendChild(script);
  }, [onError]);

  const launch = () => {
    if (mounted.current) return;
    const SmileIdentity = (window as unknown as { SmileIdentity?: SmileGlobal }).SmileIdentity;
    if (!SmileIdentity) {
      onError("The face check isn't ready yet. Please wait a moment and try again.");
      return;
    }
    mounted.current = true;
    try {
      SmileIdentity({
        product: "biometric_kyc",
        callback_url: CALLBACK_URL as string,
        environment: ENVIRONMENT,
        partner_details: {
          partner_id: PARTNER_ID as string,
          name: "PennyTree Technologies",
          policy_url: "https://mypennytree.com/privacy",
          theme_color: "#0F7B53",
        },
        id_selection: idType && idNumber ? { NG: [idType] } : undefined,
        user_id: reference,
        job_id: reference,
        onSuccess: () => {
          mounted.current = false;
          onCaptured();
        },
        onClose: () => {
          mounted.current = false;
          onClose?.();
        },
        onError: () => {
          mounted.current = false;
          onError("The face check didn't complete. Please try again.");
        },
      });
    } catch {
      mounted.current = false;
      onError("The face check could not start. Please try again.");
    }
  };

  if (!isSmileConfigured) {
    return (
      <div className="rounded-xl border border-border bg-muted/50 p-4 text-sm text-muted-foreground">
        The face check is not set up yet. Once the Smile Identity details are added, this step will
        open your camera here.
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={launch}
      disabled={!ready}
      className="w-full rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground disabled:opacity-60"
    >
      {ready ? "Open camera and start face check" : "Loading face check…"}
    </button>
  );
};

export default SmileLiveness;
