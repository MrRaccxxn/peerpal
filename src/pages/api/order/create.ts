import dbConnect from "@/app/db/dbConnection";
import { NextApiRequest, NextApiResponse } from "next";
import { Formidable } from "formidable";
import OrderModel from "@/app/db/models/order.model";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    dbConnect();
    const order = OrderModel;
    const newOrder = await order.create(req.body?.order);
    res.json({ data: newOrder });
  } catch (error) {
    console.error(error);
    res.json({ message: "Internal server error" });
  }
}
