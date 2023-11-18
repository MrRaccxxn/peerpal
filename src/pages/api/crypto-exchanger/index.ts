import dbConnect from "@/app/db/dbConnection";
import CryptoExchangerModel from "@/app/db/models/cryptoExchanger.model";
import { NextApiRequest, NextApiResponse } from "next";

export default async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    dbConnect();
    const cryptoExchangers = CryptoExchangerModel;

    const cryptoExchanger = await cryptoExchangers.find({});
    res.status(200).json(cryptoExchanger);
  } catch (error) {
    console.error(error);
    res.json({ message: "Internal server error" });
  }
}
