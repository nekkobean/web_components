import React, { useState } from "react";

interface CheckBoxProps {
  id: string;
  label: string;
  required?: boolean;
  disabled?: boolean;
  defaultChecked?: boolean;
  error?: boolean;
  helperText?: string;
}

export const CheckBox: React.FC<CheckBoxProps> = ({
  id,
  label,
  required,
  disabled,
  defaultChecked,
  error,
  helperText, 
}) => {
  const [isChecked, setIsChecked] = useState(defaultChecked || false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setIsChecked(checked);
  };

  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2">
        <input
          id={id}
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
          disabled={disabled}
          className={`
            w-4 h-4 border rounded-xs
            bg-neutral-secondary-medium
            focus:ring-2 focus:ring-brand-soft
            ${disabled ? "border-light cursor-not-allowed" : "border-default-medium hover:cursor-pointer"}
          `}
        />

        <label
          htmlFor={id}
          className={`
            select-none ms-2 text-sm font-medium
            ${disabled ? "text-fg-disabled text-light-gray" : "text-heading"}
          `}
        >
          {label} {required && <span className="text-red">*</span>}
        </label>
      </div>
      <div className={error ? "text-red text-sm font-medium" : "text-gray text-sm font-medium"}>
        {helperText}
      </div>
    </div>
  );
};



