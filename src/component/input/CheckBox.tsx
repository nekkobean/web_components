import React, { useState } from "react";
import "../../themes/tailwind.css";

export interface CheckBoxProps {
  id: string;
  label: string;
  required?: boolean;
  disabled?: boolean;
  defaultChecked?: boolean;
  error?: boolean;
  helperText?: string;
  onChange?: (checked: boolean) => void;
}

export const CheckBox: React.FC<CheckBoxProps> = ({
  id,
  label,
  required,
  disabled,
  defaultChecked,
  error,
  helperText,
  onChange,
}) => {
  const [isChecked, setIsChecked] = useState(defaultChecked || false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setIsChecked(checked);
    onChange?.(checked);
  };

  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-start gap-2">
        <input
          id={id}
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
          disabled={disabled}
          className={`w-5 h-5 mt-1 shrink-0 border rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft ${
            disabled
              ? "border-light cursor-not-allowed"
              : "border-default-medium hover:cursor-pointer"
          }`}
        />

        <label
          htmlFor={id}
          className={`select-none text-lg md:text-lg lg:text-xl font-medium ${
            disabled ? "text-light-gray" : "text-heading"
          }`}
        >
          {label} {required && <span className="text-red">*</span>}
        </label>
      </div>

      {helperText && (
        <div
          className={`text-sm md:text-base font-medium ${
            error ? "text-red" : "text-gray"
          }`}
        >
          {helperText}
        </div>
      )}
    </div>
  );
};