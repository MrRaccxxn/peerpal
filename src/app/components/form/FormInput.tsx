import { ErrorMessage } from "@hookform/error-message";
import classNames from "classnames";
import { get } from "lodash";
import {
  DeepMap,
  FieldError,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";
import { Input, InputProps } from "./Input";

export type FormInputProps<TFormValues extends FieldValues> = {
  name: Path<TFormValues>;
  rules?: RegisterOptions;
  register?: UseFormRegister<TFormValues>;
  errors?: Partial<DeepMap<TFormValues, FieldError>>;
  min?: string;
  label?: string;
} & Omit<InputProps, "name">;

export const FormInput = <TFormValues extends Record<string | any, unknown>>({
  name,
  register,
  rules,
  errors,
  className,
  min,
  label,
  ...props
}: FormInputProps<TFormValues>): JSX.Element => {
  const errorMessages = get(errors, name);
  const hasError = !!(errors && errorMessages);

  return (
    <div className={classNames("", className)} aria-live="polite">
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">{label}</span>
        </label>
        <Input
          name={name}
          min={min}
          aria-invalid={hasError}
          className={classNames([className])}
          label={label}
          {...props}
          {...(register && register(name, rules))}
        />
      </div>

      <ErrorMessage
        errors={errors}
        name={name as any}
        render={({ message }: { message: string }) => (
          <p className="mt-1 text-sm text-left block text-red-500">{message}</p>
        )}
      />
    </div>
  );
};
