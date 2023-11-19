import { models, model, Schema } from "mongoose";

const CryptoExchangerSchema: Schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  exchangeRate: {
    type: Number,
    required: true,
  },
  limitAvailable: {
    type: Number,
    required: true,
  },
  walletAddress: {
    type: String,
    required: true,
  },
});

const CryptoExchangerModel =
  models.CryptoExchanger || model("CryptoExchanger", CryptoExchangerSchema);

export default CryptoExchangerModel;
