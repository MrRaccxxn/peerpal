import { z } from "zod";

export const CryptoExchanger = z.object({
  id: z.string(),
  email: z.string().email(),
  fullName: z.string(),
  walletAddress: z.string(),
  exchangeRate: z.number(),
  limitAvailable: z.number(),
});

export const CryptoExchangerInput = CryptoExchanger.omit({
  id: true,
});

export type CryptoExchanger = z.infer<typeof CryptoExchanger>;
export type CryptoExchangerInput = z.infer<typeof CryptoExchangerInput>;
