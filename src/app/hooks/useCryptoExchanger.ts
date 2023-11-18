import { CryptoExchangerInput } from "@/pages/api/models/crypto-exchanger.model";
import apiClient from "../providers/apiClient";
import { useMutation, useQuery } from "react-query";
import cryptoExchangerEndpoints from "@/pages/api/endpoints/crypto-exchanger/crypto-exchanger.endpoint";

export const useCryptoExchangers = () => {
  const useGetAllCryptoExchangers = async () => {
    if (!apiClient) throw new Error("Api client is not defined");

    return useQuery(["get-all-crypto-exchangers"], async () => {
      return apiClient.get("/crypto-exchanger");
    });
  };

  const createCryptoExchanger = useMutation({
    mutationFn: async (cryptoExchanger: CryptoExchangerInput) => {
      const result =
        cryptoExchangerEndpoints.createCryptoExchanger(cryptoExchanger);

      return result;
    },
  });

  return {
    useGetAllCryptoExchangers,
    createCryptoExchanger,
  };
};
