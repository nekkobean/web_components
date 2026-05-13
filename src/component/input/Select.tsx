interface SelectProps {
  label: string;
  options: { value: string; label: string; image?: string }[];
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
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <div className="w-full flex flex-col gap-1">
      <label className="text-sm font-medium text-gray">
        {label} {required && "*"}
      </label>
      <select
        className={`h-10 border-r-8 border-transparent px-4 outline outline-neutral-700 block w-full p-2 bg-neutral-secondary-medium
         border border-default-medium text-heading text-sm font-normal rounded-base focus:ring-brand focus:border-brand shadow-xs 
         placeholder:text-body
         ${disabled ? "cursor-not-allowed" : "hover:cursor-pointer"}`}
        disabled={disabled}
        onChange={handleChange}
        value={value}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {helperText && error && (
        <div className="text-red text-sm font-normal">
          {helperText}
        </div>
      )}
    </div>
  );
};
