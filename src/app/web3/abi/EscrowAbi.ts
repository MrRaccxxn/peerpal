export const escrowAbi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "orderId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "address payable",
            name: "buyer",
            type: "address",
          },
          {
            internalType: "address payable",
            name: "seller",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "sellerfee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "buyerfee",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "idImage",
            type: "string",
          },
          {
            internalType: "contract IERC20",
            name: "currency",
            type: "address",
          },
          {
            internalType: "enum PeerPal.EscrowStatus",
            name: "status",
            type: "uint8",
          },
        ],
        indexed: false,
        internalType: "struct PeerPal.Escrow",
        name: "escrow",
        type: "tuple",
      },
    ],
    name: "EscrowComplete",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "orderId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "address payable",
            name: "buyer",
            type: "address",
          },
          {
            internalType: "address payable",
            name: "seller",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "sellerfee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "buyerfee",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "idImage",
            type: "string",
          },
          {
            internalType: "contract IERC20",
            name: "currency",
            type: "address",
          },
          {
            internalType: "enum PeerPal.EscrowStatus",
            name: "status",
            type: "uint8",
          },
        ],
        indexed: false,
        internalType: "struct PeerPal.Escrow",
        name: "escrow",
        type: "tuple",
      },
    ],
    name: "EscrowDeposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "orderId",
        type: "uint256",
      },
    ],
    name: "EscrowDisputeResolved",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_seller",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "createEscrowNativeCoin",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_orderId",
        type: "uint256",
      },
    ],
    name: "refundBuyerNativeCoin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_orderId",
        type: "uint256",
      },
    ],
    name: "releaseEscrowNativeCoin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_feeBuyer",
        type: "uint256",
      },
    ],
    name: "setFeeBuyer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_feeSeller",
        type: "uint256",
      },
    ],
    name: "setFeeSeller",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_orderId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_idImage",
        type: "string",
      },
    ],
    name: "setOrderSeller",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "ERC20Address",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "_token",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "counter",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "escrows",
    outputs: [
      {
        internalType: "address payable",
        name: "buyer",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "seller",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "sellerfee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "buyerfee",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "idImage",
        type: "string",
      },
      {
        internalType: "contract IERC20",
        name: "currency",
        type: "address",
      },
      {
        internalType: "enum PeerPal.EscrowStatus",
        name: "status",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "feeBuyer",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    name: "feesAvailable",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "feesAvailableNativeCoin",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "feeSeller",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
