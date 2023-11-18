"use client";

import { useContractRead } from "wagmi";
import { dataReaderAbi } from "../web3/abi/dataReaderAbi";

const OrderPage = () => {
  const smartContractData =
    process.env.NEXT_PUBLIC_SMART_CONTRACT_DATA_READER_ADDRESS ?? "";

  const { data, isError, isLoading } = useContractRead({
    address: smartContractData as `0x${string}`,
    abi: dataReaderAbi,
    functionName: "readDataFeed",
  });

  console.log("data received", data);

  return <></>;
};

export default OrderPage;
