"use client";

import { ToastClassName, ToastContainer, TypeOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const WrappedToastContainer = () => {
  const contextClass = {
    success: "bg-transparency-peppermint-10",
    error: "bg-red-600",
    info: "bg-gray-600",
    warning: "bg-orange-400",
    default: "bg-indigo-600",
    dark: "bg-white-600 font-gray-300",
  };
  const bodyClass = {
    success: "text-alert-peppermint",
    error: "text-transparency-titanium-60",
    info: "text-transparency-titanium-60",
    warning: "text-transparency-titanium-60",
    default: "text-transparency-titanium-60",
    dark: "text-transparency-titanium-60",
  };
  return (
    <ToastContainer
      toastClassName={({ ...params }) =>
        contextClass[params.type || "default"] +
        "  w-full flex items-center gap-2 self-stretch py-2.5 px-3.5 rounded-lg cursor-pointer"
      }
      bodyClassName={({ ...params }) =>
        bodyClass[params.type || "default"] +
        " w-full flex flex-row items-center gap-2 cursor-pointer typography-caption"
      }
      position="bottom-right"
      hideProgressBar={true}
      autoClose={3000}
    />
  );
};
