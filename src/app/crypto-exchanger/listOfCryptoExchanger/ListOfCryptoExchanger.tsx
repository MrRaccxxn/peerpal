"use client";

import { DragAndDrop } from "@/app/components/form/DragNDrop";
import { FormInput } from "@/app/components/form/FormInput";
import { Input } from "@/app/components/form/Input";
import { useCryptoExchangers } from "@/app/hooks/useCryptoExchanger";
import orderEndpoints from "@/pages/api/endpoints/order/order.endpoint";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  RegisterOptions,
  UseFormRegisterReturn,
  useForm,
} from "react-hook-form";
import { toast } from "react-toastify";
import { useAccount } from "wagmi";
import lighthouse from "@lighthouse-web3/sdk";
import { randomUUID } from "crypto";
import { Spinner } from "@/app/components/Icons/Icons";
import { useState } from "react";

type INewOrder = {
  amount: number;
  image: FileList;
};

export const ListOfCryptoExchanger = () => {
  const { useGetAllCryptoExchangers } = useCryptoExchangers({});
  const { address } = useAccount();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<INewOrder>();

  const uploadFile = async (files: FileList) => {
    const output = await lighthouse
      .upload(files, process.env.NEXT_PUBLIC_LIGHTHOUSE_API_KEY ?? "")
      .then((res) => res);

    return output;
  };

  const onSubmit = handleSubmit(async (data: INewOrder) => {
    setIsLoading(true);
    const fileResponse = await uploadFile(data.image);
    console.log(fileResponse);

    setIsLoading(false);
  });

  return (
    <>
      {useGetAllCryptoExchangers.isLoading ? (
        <span className="loading loading-spinner text-primary"></span>
      ) : (
        <div className="flex flex-wrap m-12">
          <div className="w-full max-w-full px-3 mb-6  mx-auto">
            <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
              <div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
                <div className="px-9 pt-5 flex justify-between items-stretch flex-wrap min-h-[70px] pb-0 bg-transparent">
                  <h3 className="flex flex-col items-start justify-center m-2 ml-0 font-medium text-xl/tight text-dark">
                    <span className="flex flex-row gap-2 mt-1 font-medium text-secondary-dark text-lg/normal text-gray-700">
                      Last active Buyers{" "}
                      <Image
                        src={`/head-lightning.png`}
                        alt="head-lightning"
                        width={24}
                        height={24}
                      />
                    </span>
                  </h3>
                </div>
                <div className="flex-auto block py-8 pt-6 px-9">
                  <div className="overflow-x-auto">
                    <table className="w-full my-0 align-middle text-dark border-neutral-200 text-black">
                      <thead className="align-bottom">
                        <tr className="font-semibold text-[0.95rem] text-secondary-dark">
                          <th className="pb-3 text-start min-w-[175px]">
                            TASK
                          </th>
                          <th className="pb-3 text-end min-w-[100px]">BUYER</th>
                          <th className="pb-3 text-end min-w-[100px]">PRICE</th>
                          <th className="pb-3 pr-12 text-end min-w-[175px]">
                            RANK
                          </th>
                          <th className="pb-3 pr-12 text-end min-w-[100px]">
                            LAST ACTIVE
                          </th>
                          <th className="pb-3 text-end min-w-[50px]">
                            DETAILS
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {useGetAllCryptoExchangers.data?.map((item) => {
                          return (
                            <tr
                              className="border-b border-dashed last:border-b-0 cursor-pointer"
                              key={item.id}
                              onClick={() => {
                                const documentModal =
                                  document?.getElementById("my_modal_1");
                                if (documentModal && documentModal?.showModal)
                                  documentModal.showModal();
                              }}
                            >
                              <td className="p-3 pl-0">
                                <div className="flex flex-row items-center">
                                  <div className="avatar placeholder">
                                    <div className="bg-neutral text-neutral-content rounded-full w-12">
                                      <span className="text-lg">
                                        {item.fullName[0].toUpperCase()}
                                      </span>
                                    </div>
                                  </div>
                                  <span className="text-sm text-black">
                                    {item.walletAddress}
                                  </span>
                                </div>
                              </td>
                              <td className="p-3 pr-0 text-end">
                                <span className="font-semibold text-light-inverse text-md/normal">
                                  {item.fullName}
                                </span>
                              </td>
                              <td className="p-3 pr-0 text-end">
                                <span className="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none text-success bg-success-light rounded-lg">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-5 h-5 mr-1"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                                    />
                                  </svg>{" "}
                                  {item.exchangeRate}
                                </span>
                              </td>
                              <td className="p-3 pr-12 text-end">
                                <span className="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-primary bg-primary-light rounded-lg">
                                  {" "}
                                  In Progress{" "}
                                </span>
                              </td>
                              <td className="pr-0 text-start">
                                <span className="font-semibold text-light-inverse text-md/normal">
                                  2023-08-23
                                </span>
                              </td>
                              <td className="p-3 pr-0 text-end">
                                <button className="ml-auto relative text-secondary-dark bg-light-dark hover:text-primary flex items-center h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center">
                                  <span className="flex items-center justify-center p-0 m-0 leading-none shrink-0 ">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      strokeWidth="1.5"
                                      stroke="currentColor"
                                      className="w-4 h-4"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                      />
                                    </svg>
                                  </span>
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold flex flex-row gap-2 items-end text-2xl">
            Almost there!{" "}
            <Image
              src={"/head-beer.png"}
              width={32}
              height={32}
              alt="head beer"
            />
          </h3>
          <p className="text-gray-400 pt-2">
            To start the order, introduce the amount that you need to be payed
            in fiat, and be careful that the amount in the image is the same
            that the input one
          </p>
          <div className="modal-action">
            <form method="dialog" className="w-full">
              <FormInput<INewOrder>
                id="Amount"
                type="number"
                name="amount"
                label="Amount in USD Currency"
                placeholder="Amount"
                className="w-full focus:outline-none !text-gray-300 "
                register={register}
                rules={{ required: "You must enter the amount." }}
                errors={errors}
              />

              <DragAndDrop
                helperText={"PNG, Max. upload size : 10Mb"}
                register={register}
                inputName={"image"}
                className={"w-96 h-72 m-0"}
                label={"PDF"}
              />
              <div>
                {isLoading ? (
                  <Spinner />
                ) : (
                  <div className="flex flex-row gap-2 justify-end">
                    <button className="btn btn-primary" onClick={onSubmit}>
                      Start order
                    </button>
                    <button className="btn">Close</button>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};