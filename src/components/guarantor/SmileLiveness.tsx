import { useEffect, useRef, useState } from "react";
import type { LivenessInitiateResult } from "@/lib/guarantorApi";

/**
 * Smile ID hosted Web Integration for guarantor liveness.
 *
 * Flow: POST liveness/initiate returns a reference (and a Smile web token).
 * The SDK captures the selfie and submits it directly to Smile ID, using the
 * reference as job_id/user_id. Smile then notifies the loan service by webhook,
 * and the parent page polls the guarantor endpoint for `liveness_passed`.
 *
 * Settings come from the initiate response first, then from env vars:
 *   token          — required; the backend generates it with Smile's get_web_token
 *   partner_id     — VITE_SMILE_PARTNER_ID
 *   callback_url   — optional, VITE_SMILE_CALLBACK_URL; the backend already receives Smile's callback
 *   environment    — VITE_SMILE_ENVIRONMENT ("sandbox" or "production", default production)
 */

const ENV = {
  partnerId: import.meta.env.VITE_SMILE_PARTNER_ID as string | undefined,
  callbackUrl: import.meta.env.VITE_SMILE_CALLBACK_URL as string | undefined,
  environment: (import.meta.env.VITE_SMILE_ENVIRONMENT as string | undefined) ?? "production",
};

const SDK_SRC = "https://cdn.smileidentity.com/inline/v1/js/script.min.js";

export const resolveSmileConfig = (liveness: LivenessInitiateResult) => {
  const config = {
    // Backend says the initiate reference doubles as the Smile web token.
    token: liveness.token ?? liveness.reference,
    partnerId: liveness.partner_id ?? ENV.partnerId,
    callbackUrl: liveness.callback_url ?? ENV.callbackUrl,
    environment: liveness.environment ?? ENV.environment,
    product: liveness.product ?? "biometric_kyc",
  };
  const missing = [
    !config.token && "token",
    !config.partnerId && "partner_id",
  ].filter(Boolean) as string[];
  return { ...config, missing, ready: missing.length === 0 };
};

interface Props {
  liveness: LivenessInitiateResult;
  onCaptured: () => void;
  onError: (message: string) => void;
  onClose?: () => void;
}

// The Smile hosted SDK attaches a constructor to window.
type SmileConfig = {
  token: string;
  product: string;
  callback_url?: string;
  environment: string;
  partner_details: {
    partner_id: string;
    name: string;
    logo_url: string;
    policy_url: string;
    theme_color: string;
  };
  id_selection?: Record<string, string[]>;
  user_id?: string;
  job_id?: string;
  onSuccess?: () => void;
  onClose?: () => void;
  onError?: (err: unknown) => void;
};
type SmileGlobal = (config: SmileConfig) => void;

const SmileLiveness = ({ liveness, onCaptured, onError, onClose }: Props) => {
  const config = resolveSmileConfig(liveness);
  const mounted = useRef(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!config.ready) return;
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
  }, [config.ready, onError]);

  const launch = () => {
    if (mounted.current || !config.ready) return;
    const SmileIdentity = (window as unknown as { SmileIdentity?: SmileGlobal }).SmileIdentity;
    if (!SmileIdentity) {
      onError("The face check isn't ready yet. Please wait a moment and try again.");
      return;
    }
    mounted.current = true;
    try {
      SmileIdentity({
        token: config.token as string,
        product: config.product,
        // Omitted unless set: the backend's Smile account callback handles results.
        ...(config.callbackUrl ? { callback_url: config.callbackUrl } : {}),
        environment: config.environment,
        partner_details: {
          partner_id: config.partnerId as string,
          name: "PennyTree Technologies",
          logo_url: "https://mypennytree.com/favicon-pt-v6.png",
          policy_url: "https://mypennytree.com/privacy",
          theme_color: "#0F7B53",
        },
        id_selection:
          liveness.id_type && liveness.id_number ? { NG: [liveness.id_type] } : undefined,
        user_id: liveness.reference,
        job_id: liveness.reference,
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

  if (!config.ready) {
    if (import.meta.env.DEV) {
      console.warn("Smile ID not configured; missing:", config.missing.join(", "));
    }
    return (
      <div className="rounded-xl border border-border bg-muted/50 p-4 text-sm text-muted-foreground">
        The face check is not available right now. Please try again shortly or contact
        support@mypennytree.com.
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
