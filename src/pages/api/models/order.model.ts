import { z } from "zod";

export const Order = z.object({
    userWallet: z.string(),
    cryptoExchangerWallet: z.string(),
    cryptoCurrency: z.string(),
    amount: z.number(),
    fiatCurrency: z.string().nullish(),
    cityOfTransaction: z.string().nullish(),
    orderStartedAt: z.coerce.date().nullish(),
    orderFinishedAt: z.coerce.date().nullish(),
    orderStatus: z.string().default('started'),
});

export type Order = z.infer<typeof Order>;
