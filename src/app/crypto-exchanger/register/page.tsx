"use client";

import Container from "@/app/components/layout/Container";
import { CryptoExchangerRegisterForm } from "../registerForm/CryptoExchangerRegisterForm";
import { useAccount } from "wagmi";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Register = () => {
  const { address } = useAccount();
  const router = useRouter();

  return (
    <Container>
      {address ? (
        <CryptoExchangerRegisterForm />
      ) : (
        <div
          style={{
            height: "100dvh",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            role="alert"
            className="w-full h-fit justify-center items-center alert shadow-lg mt-24 flex max-w-lg"
          >
            <Image alt="beer" src="/head-beer.png" width={80} height={80} />
            <div>
              <h3 className="font-bold">Warning!</h3>
              <div className="text-xs">
                You have to be connected in order to be register as crypto
                exchanger
              </div>
            </div>
            <button
              className="btn btn-sm"
              onClick={() => {
                router.push("/");
              }}
            >
              See
            </button>
          </div>
        </div>
      )}
    </Container>
  );
};

export default Register;
