import { escrowAbi } from "@/app/web3/abi/EscrowAbi";
import { writeContract } from "@wagmi/core";

const OrderDetail = () => {
  const contractAddress =
    process.env.NEXT_PUBLIC_SMART_CONTRACT_ESCROW_ADDRESS ?? "";
  const result = writeContract({
    address: contractAddress as `0x${string}`,
    abi: escrowAbi,
    functionName: "createEscrowNativeCoin",
    args: [3],
  });

  console.log("contract address", contractAddress);
  console.log("result", result);

  return <div>Order detÍÍail</div>;
};

export default OrderDetail;
