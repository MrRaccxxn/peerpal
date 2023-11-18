import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormInput } from "@/app/components/form/FormInput";
import { NounsIcon } from "@/app/components/Icons/Icons";

const CryptoExchangerPersonalDetailsProps = z.object({
  email: z.string().email(),
  fullName: z.string(),
  countryOfResidence: z.string(),
  dob: z.coerce.date(),
});

type CryptoExchangerPersonalDetailsProps = z.infer<
  typeof CryptoExchangerPersonalDetailsProps
>;

export const CryptoExchangerRegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CryptoExchangerPersonalDetailsProps>({
    resolver: zodResolver(CryptoExchangerPersonalDetailsProps),
  });

  return (
    <form className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
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
          id="countryOfResidence"
          type="text"
          name="countryOfResidence"
          label="Country of residence"
          placeholder="Country of residence"
          className="w-full focus:outline-none"
          register={register}
          rules={{ required: "You must enter your contry of residence." }}
          errors={errors}
        />
        <FormInput<CryptoExchangerPersonalDetailsProps>
          id="title"
          type="date"
          name="dob"
          label="Date of birth"
          placeholder="dd/mm/yyyy"
          className="w-full focus:outline-none"
          register={register}
          rules={{ required: "You must enter a title." }}
          errors={errors}
        />
      </div>

      <button
        type="submit"
        className="button w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};
