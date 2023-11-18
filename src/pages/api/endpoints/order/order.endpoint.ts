import apiClient from "@/app/providers/apiClient";
import {
  CryptoExchanger,
  CryptoExchangerInput,
} from "../../models/crypto-exchanger.model";

const CRYPTO_EXCHANGER_ENDPOINT = "/order";

const orderEndpoints = {
  async createCryptoExchanger(
    cryptoExchanger: CryptoExchangerInput
  ): Promise<CryptoExchanger> {
    return apiClient.post<CryptoExchanger>(
      `${CRYPTO_EXCHANGER_ENDPOINT}/create`,
      {
        cryptoExchanger,
      }
    );
  },
};

export default orderEndpoints;
