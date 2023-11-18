import dbConnect from "@/app/db/dbConnection";
import CryptoExchangerModel from "@/app/db/models/cryptoExchanger.model";
import { NextApiRequest, NextApiResponse } from "next";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    dbConnect();

    const cryptoExchangers = CryptoExchangerModel;
    const cryptoExchanger = await cryptoExchangers.create(
      req.body?.cryptoExchanger
    );
    res.json({ data: cryptoExchanger });
  } catch (error) {
    console.error(error);
    res.json({ message: "Internal server error" });
  }
}
