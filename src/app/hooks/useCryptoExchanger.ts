"use client";

import { CryptoExchangerInput } from "@/pages/api/models/crypto-exchanger.model";
import { useMutation, useQuery } from "react-query";
import cryptoExchangerEndpoints from "@/pages/api/endpoints/crypto-exchanger/crypto-exchanger.endpoint";

export const useCryptoExchangers = ({
  onSuccess,
  onError,
}: {
  onSuccess?: () => void;
  onError?: () => void;
}) => {
  const useGetAllCryptoExchangers = useQuery(
    ["get-all-crypto-exchangers"],
    async () => {
      return await cryptoExchangerEndpoints
        .getAllCryptoExchangers()
        .then((res) => res);
    }
  );

  const createCryptoExchanger = useMutation({
    mutationFn: async (cryptoExchanger: CryptoExchangerInput) => {
      const result =
        cryptoExchangerEndpoints.createCryptoExchanger(cryptoExchanger);

      return result;
    },
    onSuccess: () => {
      onSuccess && onSuccess();
    },
    onError: () => {
      onError && onError();
    },
  });

  return {
    useGetAllCryptoExchangers,
    createCryptoExchanger,
  };
};
