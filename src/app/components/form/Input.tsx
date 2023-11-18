import classNames from "classnames";
import { forwardRef } from "react";
export type InputSize = "medium" | "large";
export type InputType =
  | "text"
  | "email"
  | "password"
  | "date"
  | "datetime-local"
  | "checkbox";

export type InputProps = {
  id: string;
  name: string;
  label: string;
  type?: InputType;
  size?: InputSize;
  placeholder: string;
  className?: string;
};

const sizeMap: { [key in InputSize]: string } = {
  medium: "p-3 text-base",
  large: "p-4 text-base",
};

export const Input: React.FC<InputProps> = forwardRef<
  HTMLInputElement,
  InputProps
>(
  (
    {
      id,
      name,
      label,
      type = "text",
      size = "medium",
      className = "",
      placeholder,
      ...props
    },
    ref
  ) => {
    return (
      <input
        id={id}
        ref={ref}
        name={name}
        type={type}
        aria-label={label}
        placeholder={placeholder}
        autoComplete="off"
        className={classNames([
          "relative inline-flex w-full rounded leading-none transition-colors ease-in-out placeholder-gray-500 text-gray-700 bg-gray-50 border-b-2 border-b-gray-300 hover:border-b-blue-400 focus:outline-none focus:border-b-blue-400",
          sizeMap[size],
          className,
        ])}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
