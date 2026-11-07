// Client for the PennyTree Technologies loan guarantor API.
// The token in the URL is the only credential — no bearer token, no session.

const RAW_BASE =
  (import.meta.env.VITE_LOAN_API_BASE_URL as string | undefined) ??
  "https://api.mypennytree.com";
const BASE = RAW_BASE.replace(/\/+$/, "");

export const isApiConfigured = BASE.length > 0;

export interface GuarantorProgress {
  details_saved: boolean;
  liveness_passed: boolean;
  bank_linked: boolean;
  signature_uploaded: boolean;
  submitted: boolean;
}

export interface GuarantorInvitation {
  borrower_name: string;
  reference_number: string | null;
  amount: number;
  tenor: number;
  rate: string;
  purpose: string;
  status: string;
  expires_at: string;
  progress: GuarantorProgress;
}

export interface GuarantorDetails {
  first_name: string;
  middle_name?: string;
  last_name: string;
  bvn: string;
  nin: string;
  phone_number: string;
  email: string;
  occupation?: string;
  employer?: string;
  monthly_income?: number;
  relationship: string;
  home_address: string;
}

export interface LivenessInitiateResult {
  reference: string;
  id_type: string;
  id_number: string;
  progress: GuarantorProgress;
}

export class GuarantorApiError extends Error {
  statusCode: string;
  httpStatus: number;

  constructor(message: string, statusCode: string, httpStatus: number) {
    super(message);
    this.name = "GuarantorApiError";
    this.statusCode = statusCode;
    this.httpStatus = httpStatus;
  }
}

const endpoint = (token: string, suffix = "") =>
  `${BASE}/api/v2/loan-guarantors/${encodeURIComponent(token)}${suffix}`;

async function request<T>(url: string, init?: RequestInit): Promise<T> {
  if (!isApiConfigured) {
    throw new GuarantorApiError(
      "This form is not connected to the loan service yet.",
      "CONFIG",
      0,
    );
  }

  let response: Response;
  try {
    response = await fetch(url, init);
  } catch {
    throw new GuarantorApiError(
      "We could not reach the service. Please check your connection and try again.",
      "NETWORK",
      0,
    );
  }

  let body: { status_code?: string; message?: string; data?: T } | null = null;
  try {
    body = await response.json();
  } catch {
    body = null;
  }

  const statusCode = body?.status_code ?? String(response.status);

  if (!response.ok || (body?.status_code && body.status_code !== "00")) {
    throw new GuarantorApiError(
      body?.message || "Something went wrong. Please try again.",
      statusCode,
      response.status,
    );
  }

  return (body?.data ?? (body as unknown as T)) as T;
}

export const getInvitation = (token: string) =>
  request<GuarantorInvitation>(endpoint(token), { method: "GET" });

export const saveDetails = (token: string, details: GuarantorDetails) =>
  request<{ progress: GuarantorProgress }>(endpoint(token, "/details"), {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(details),
  });

export const initiateLiveness = (token: string) =>
  request<LivenessInitiateResult>(endpoint(token, "/liveness/initiate"), {
    method: "POST",
  });

export const initiateBankLink = (token: string) =>
  request<{ mono_url: string }>(endpoint(token, "/bank/mono-initiate"), {
    method: "POST",
  });

export const uploadSignature = (token: string, file: File) => {
  const form = new FormData();
  form.append("file", file);
  return request<{ url: string; progress?: GuarantorProgress }>(
    endpoint(token, "/signature"),
    { method: "POST", body: form },
  );
};

export const submitUndertaking = (token: string) =>
  request<unknown>(endpoint(token, "/submit"), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ consent_accepted: true }),
  });

export const declineUndertaking = (token: string) =>
  request<unknown>(endpoint(token, "/decline"), { method: "POST" });

/**
 * Polls the invitation until `check` passes. Stops after ~2 minutes.
 * Resolves with the latest invitation and whether the flag turned true.
 */
export async function pollProgress(
  token: string,
  check: (progress: GuarantorProgress) => boolean,
  options: { intervalMs?: number; timeoutMs?: number; signal?: AbortSignal } = {},
): Promise<{ passed: boolean; invitation?: GuarantorInvitation }> {
  const interval = options.intervalMs ?? 4000;
  const timeout = options.timeoutMs ?? 120000;
  const started = Date.now();

  while (Date.now() - started < timeout) {
    if (options.signal?.aborted) return { passed: false };
    try {
      const invitation = await getInvitation(token);
      if (check(invitation.progress)) return { passed: true, invitation };
    } catch (error) {
      // A dead link during polling is terminal — surface it.
      if (error instanceof GuarantorApiError && error.statusCode.startsWith("LN4")) {
        throw error;
      }
    }
    await new Promise((resolve) => setTimeout(resolve, interval));
  }

  return { passed: false };
}

export const formatNaira = (amount: number) =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(amount);
