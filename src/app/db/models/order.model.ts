import { models, model, Schema } from "mongoose";

const OrderSchema: Schema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  cryptoExchangerId: {
    type: String,
    required: true,
  },
  cryptoCurrency: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  fiatCurrency: {
    type: String,
    required: true,
  },
  cityOfTransaction: {
    type: String,
    required: true,
  },
  orderStartedAt: {
    type: Date,
  },
  orderFinishedAt: {
    type: Date,
  },
  orderStatus: {
    type: String,
  },
});

const OrderModel = models.Order || model("Order", OrderSchema);

export default OrderModel;
