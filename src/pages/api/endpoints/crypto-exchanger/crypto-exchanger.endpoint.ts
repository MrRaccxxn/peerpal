import apiClient from "@/app/providers/apiClient";
import {
  CryptoExchanger,
  CryptoExchangerInput,
} from "../../models/crypto-exchanger.model";

const CRYPTO_EXCHANGER_ENDPOINT = "/crypto-exchanger";

const cryptoExchangerEndpoints = {
  async getAllCryptoExchangers(): Promise<CryptoExchanger[]> {
    return apiClient.get<CryptoExchanger[]>(CRYPTO_EXCHANGER_ENDPOINT);
  },

  async getCryptoExchangerById(id: number): Promise<CryptoExchanger> {
    return apiClient.get<CryptoExchanger>(`${CRYPTO_EXCHANGER_ENDPOINT}/${id}`);
  },

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

export default cryptoExchangerEndpoints;
