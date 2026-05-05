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

export const CheckBox: React.FC<CheckBoxProps> = ({ id, label, required, disabled, defaultChecked, error, helperText }) => {
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
              ${disabled ? 'bg-gray-200 border-gray-400 cursor-not-allowed' : 'border-blue-500'}
              ${isChecked && !disabled ? 'bg-white' : ''}`}
          >
            {isChecked && (
              <svg className="w-full h-full text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            )}
          </label>
        </div>
        <label htmlFor={id} className="text-sm font-medium text-gray-700 cursor-pointer">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      </div>
      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
};