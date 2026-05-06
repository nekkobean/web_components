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
        <div className="relative">
          <input
            type="checkbox"
            id={id}
            checked={isChecked}
            onChange={handleChange}
            disabled={disabled}
            className="sr-only peer"
          />
          <label
            htmlFor={id}
            className={`block w-6 h-6 border-2 rounded-sm cursor-pointer transition-colors
              ${disabled ? "bg-gray-200 border-gray-400 cursor-not-allowed" : "border-blue-500"}
              ${isChecked && !disabled ? "bg-white" : ""}`}
          >
            {isChecked && (
              <svg
                className="w-full h-full text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
          </label>
        </div>
        <label
          htmlFor={id}
          className="text-sm font-medium text-gray-700 cursor-pointer"
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      </div>
      {error && <p className="text-red-500 text-xs">{error}</p>}
      {helperText && !error && (
        <p className="text-gray-500 text-xs">{helperText}</p>
      )}
    </div>
  );
};
{/* <div class="flex items-center mb-4">
    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
    <label for="default-checkbox" class="select-none ms-2 text-sm font-medium text-heading">Default checkbox</label>
</div>
<div class="flex items-center">
    <input checked id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
    <label for="checked-checkbox" class="select-none ms-2 text-sm font-medium text-heading">Checked state</label>
</div>
<div class="flex items-center mb-4">
    <input disabled id="disabled-checkbox" type="checkbox" value="" class="w-4 h-4 border border-light rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
    <label for="disabled-checkbox" class="select-none ms-2 text-sm font-medium text-fg-disabled">Disabled checkbox</label>
</div>
<div class="flex items-center">
    <input disabled checked id="disabled-checked-checkbox" type="checkbox" value="" class="w-4 h-4 border border-light rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
    <label for="disabled-checked-checkbox" class="select-none ms-2 text-sm font-medium text-fg-disabled">Disabled checked</label>
</div> */}