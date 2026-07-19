import React from "react";
import "../../themes/tailwind.css";

export interface TextFieldProps {
  id: string;
  labelText: string;
  placeholder: string;
  error?: boolean;
  helperText?: string;
  type: "text" | "email" | "password" | "number";
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const errorColor = "border-red";
const errorTextColor = "text-red";
const defaultColor = "border-gray";

export const TextField: React.FC<TextFieldProps> = ({
  id,
  labelText,
  placeholder,
  type,
  error,
  helperText,
  name,
  value,
  onChange,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-sm font-medium text-gray">
        {labelText}
      </label>
      <input
        id={id}
        name={name ?? id}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        className={`block w-full px-3 py-2.5 bg-neutral-secondary-medium border ${
          error ? errorColor : defaultColor
        } text-heading text-sm rounded-base shadow-xs placeholder:text-body focus:ring-brand focus:border-brand`}
      />
      {helperText && (
        <p className={`${error ? errorTextColor : "text-light-gray"} text-xs`}>
          {helperText}
        </p>
      )}
    </div>
  );
};