import { useMutation, useQuery, type UseQueryOptions } from "@tanstack/react-query";
import {
  declineUndertaking,
  getInvitation,
  initiateBankLink,
  initiateLiveness,
  saveDetails,
  submitUndertaking,
  uploadSignature,
  type GuarantorDetails,
  type GuarantorInvitation,
} from "@/lib/guarantorApi";

// React Query hooks for the guarantor flow.
// The token in the URL is the only credential — no bearer token.

export const guarantorKeys = {
  invitation: (token: string) => ["guarantor", token] as const,
};

export const useGuarantorToken = (
  token: string,
  options?: Omit<UseQueryOptions<GuarantorInvitation>, "queryKey" | "queryFn">,
) =>
  useQuery<GuarantorInvitation>({
    queryKey: guarantorKeys.invitation(token),
    queryFn: () => getInvitation(token),
    // Never prefetch — the first GET flips the invitation to "Opened".
    enabled: Boolean(token),
    retry: false,
    refetchOnWindowFocus: false,
    ...options,
  });

export const useSaveDetails = (token: string) =>
  useMutation({
    mutationFn: (details: GuarantorDetails) => saveDetails(token, details),
  });

export const useInitiateLiveness = (token: string) =>
  useMutation({ mutationFn: () => initiateLiveness(token) });

export const useInitiateBank = (token: string) =>
  useMutation({ mutationFn: () => initiateBankLink(token) });

export const useUploadSignature = (token: string) =>
  useMutation({ mutationFn: (file: File) => uploadSignature(token, file) });

export const useSubmitGuarantor = (token: string) =>
  useMutation({ mutationFn: () => submitUndertaking(token) });

export const useDeclineGuarantor = (token: string) =>
  useMutation({ mutationFn: () => declineUndertaking(token) });
