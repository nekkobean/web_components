import React from "react";

interface TextFieldProps {
  id: string;
  labelText: string;
  placeholder: string;
  error?: boolean;
  helperText?: string;
  type: "text" | "email" | "password" | "number";
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
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-sm font-medium text-gray-700">
        {labelText}
      </label>
      <input
        id={id}
        placeholder={placeholder}
        type={type}
        className={`border ${error ? errorColor : defaultColor} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
      />
      {helperText && (
        <p className={`${error ? errorTextColor : "text-gray-500"} text-xs`}>
          {helperText}
        </p>
      )}
    </div>
  );
};
