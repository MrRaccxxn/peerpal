import { models, model, Schema } from "mongoose";

const OrderSchema: Schema = new Schema({
  userWallet: {
    type: String,
    required: true,
  },
  cryptoExchangerWallet: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});

const OrderModel = models.Order || model("Order", OrderSchema);

export default OrderModel;
