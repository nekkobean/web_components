import React from "react";
import "../../themes/tailwind.css";

export interface SelectProps {
  label: string;
  options: { key: number; name: string; value: string; image?: string }[];
  required?: boolean;
  disabled?: boolean;
  helperText?: string;
  error?: boolean;
  value?: string;
  onChange?: (value: string) => void;
}

export const Select: React.FC<SelectProps> = ({
  label,
  options,
  required,
  disabled,
  helperText,
  error,
  value,
  onChange,
}) => {
  return (
    <div className="w-full flex flex-col gap-1">
      <label className="text-lg md:text-lg lg:text-xl font-medium text-gray">
        {label} {required && "*"}
      </label>

      <select
        className={`h-12 px-4 w-full bg-neutral-secondary-medium border border-default-medium text-heading text-lg md:text-lg lg:text-xl rounded-base shadow-xs focus:ring-brand focus:border-brand ${
          disabled ? "cursor-not-allowed" : "hover:cursor-pointer"
        }`}
        disabled={disabled}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
      >
        {options.map((option) => (
          <option key={option.key} value={option.name}>
            {option.value}
          </option>
        ))}
      </select>

      {helperText && error && (
        <div className="text-red text-sm md:text-base font-normal">{helperText}</div>
      )}
    </div>
  );
};