import { z } from "zod";

export const Order = z.object({
    userWallet: z.string(),
    cryptoExchangerWallet: z.string(),
    amount: z.number(),
});

export type Order = z.infer<typeof Order>;
