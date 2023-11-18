import { z } from "zod";

export const CryptoExchanger = z.object({
  id: z.string(),
  email: z.string().email(),
  fullName: z.string(),
  countryOfResidence: z.string(),
  dob: z.coerce.date(),
});

export const CryptoExchangerInput = CryptoExchanger.omit({
  id: true,
});

export type CryptoExchanger = z.infer<typeof CryptoExchanger>;
export type CryptoExchangerInput = z.infer<typeof CryptoExchangerInput>;
