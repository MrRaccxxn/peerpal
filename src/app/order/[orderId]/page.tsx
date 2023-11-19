"use client";

import { useEscrowContract } from "@/app/hooks/useEscrowContract";
import { escrowAbi } from "@/app/web3/abi/EscrowAbi";
import { useContractWrite, usePrepareContractWrite } from "wagmi";

const OrderDetail = () => {
  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={async () => {
          writeContract.refetch();
        }}
      >
        Refectch
      </button>
    </div>
  );
};

export default OrderDetail;
