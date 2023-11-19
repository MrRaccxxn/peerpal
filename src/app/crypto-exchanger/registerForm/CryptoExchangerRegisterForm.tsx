"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormInput } from "@/app/components/form/FormInput";
import { NounsIcon, Spinner } from "@/app/components/Icons/Icons";
import { useCryptoExchangers } from "@/app/hooks/useCryptoExchanger";
import { useRouter } from "next/navigation";
import { useAccount } from "wagmi";
import { CryptoExchangerInput } from "@/pages/api/models/crypto-exchanger.model";
import { toast } from "react-toastify";

const CryptoExchangerPersonalDetailsProps = z.object({
  email: z.string().email(),
  fullName: z.string(),
  exchangeRate: z.coerce.number(),
  limitAvailable: z.coerce.number(),
});

type CryptoExchangerPersonalDetailsProps = z.infer<
  typeof CryptoExchangerPersonalDetailsProps
>;

export const CryptoExchangerRegisterForm = () => {
  const { address } = useAccount();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CryptoExchangerPersonalDetailsProps>({
    resolver: zodResolver(CryptoExchangerPersonalDetailsProps),
  });
  const router = useRouter();
  const { createCryptoExchanger } = useCryptoExchangers({
    onSuccess: () => {
      router.push("/crypto-exchanger");
    },
    onError: () => {
      toast.error("An error occured, please try again later");
    },
  });
  const onSubmit = (data: CryptoExchangerPersonalDetailsProps) => {
    if (!address) return toast.error("You must be connected to a wallet");
    createCryptoExchanger.mutate({
      ...data,
      walletAddress: address ?? "",
    });
  };

  return (
    <form
      className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="py-6 flex flex-col gap-3">
        <div className="flex flex-row gap-8 items-center">
          <NounsIcon />
          <h3 className="text-gray-600 font-semibold text-xl">
            Personal Details Collection
          </h3>
        </div>
        <p className="text-gray-400 text-sm">
          Gathering personal details bolsters security by verifying identities
          and safeguarding sensitive information from unauthorized access.
        </p>
        <FormInput<CryptoExchangerPersonalDetailsProps>
          id="fullName"
          type="text"
          name="fullName"
          label="Full name"
          placeholder="Full name"
          className="w-full focus:outline-none"
          register={register}
          rules={{ required: "You must enter your full name." }}
          errors={errors}
        />
        <FormInput<CryptoExchangerPersonalDetailsProps>
          id="email"
          type="text"
          name="email"
          label="Email"
          placeholder="example@gmail.com"
          className="w-full focus:outline-none"
          register={register}
          rules={{ required: "You must enter a valid email." }}
          errors={errors}
        />
        <FormInput<CryptoExchangerPersonalDetailsProps>
          id="limitAvailable"
          type="number"
          name="limitAvailable"
          label="Fiat available"
          placeholder="100"
          className="w-full focus:outline-none"
          register={register}
          rules={{ required: "You must enter a valid quantity." }}
          errors={errors}
        />
        <FormInput<CryptoExchangerPersonalDetailsProps>
          id="exchangeRate"
          type="number"
          name="exchangeRate"
          label="Exchange rate per each fiat"
          className="w-full focus:outline-none"
          placeholder="Exchange rate per each fiat"
          register={register}
          rules={{ required: "You must enter a valid exchange rate." }}
          errors={errors}
        />
      </div>
      <button
        type="submit"
        className="button text-center w-full flex justify-center items-center py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        onClick={handleSubmit(onSubmit)}
      >
        {createCryptoExchanger.isLoading ? <Spinner /> : <span>Submit</span>}
      </button>
    </form>
  );
};
