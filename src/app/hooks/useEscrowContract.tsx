import { writeContract } from "wagmi/actions";
import { escrowAbi } from "../web3/abi/EscrowAbi";
import { useNetwork, usePrepareContractWrite } from "wagmi";

export const useEscrowContract = () => {
  const { chain } = useNetwork();
  let contractAddress = "";

  //linea goerli
  if (chain?.id === 59140)
    contractAddress =
      process.env.NEXT_PUBLIC_SMART_CONTRACT_ESCROW_ADDRESS_LINEA ?? "";
  //scroll
  if (chain?.id === 534351)
    contractAddress =
      process.env.NEXT_PUBLIC_SMART_CONTRACT_ESCROW_ADDRESS_SCROLL ?? "";

  const writeContract = usePrepareContractWrite({
    address: contractAddress as `0x${string}`,
    abi: escrowAbi,
    functionName: "createEscrowNativeCoin",
    args: ["0x197a05BC77152D9018432970EB7736B4461a5691", Number(1)],
    value: BigInt(1),
  });

  return {
    writeContract,
  };
};
