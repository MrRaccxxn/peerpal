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
  countryOfResidence: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
});

const CryptoExchangerModel =
  models.CryptoExchanger || model("CryptoExchanger", CryptoExchangerSchema);

export default CryptoExchangerModel;
