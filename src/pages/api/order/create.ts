import dbConnect from "@/app/db/dbConnection";
import { NextApiRequest, NextApiResponse } from "next";
import { Formidable } from "formidable";
import OrderModel from "@/app/db/models/order.model";

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
    const order = OrderModel;

    const data = await new Promise((resolve, reject) => {
      const form = new Formidable();

      form.parse(req, (err, fields, files) => {
        if (err) reject({ err });
        resolve({ err, fields, files });
      });
    });

    const newOrder = await order.create(req.body?.cryptoExchanger);
    res.json({ data: newOrder });
  } catch (error) {
    console.error(error);
    res.json({ message: "Internal server error" });
  }
}
