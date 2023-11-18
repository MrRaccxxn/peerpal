import dbConnect from "@/app/db/dbConnection";
import CryptoExchangerModel from "@/app/db/models/cryptoExchanger.model";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    dbConnect();
    const cryptoExchangers = CryptoExchangerModel;

    const cryptoExchanger = await cryptoExchangers.find({});
    res.status(200).json({ data: cryptoExchanger });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}
