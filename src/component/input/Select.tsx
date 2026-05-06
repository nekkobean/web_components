interface SelectProps {
  label: string;
  options: { value: string; label: string; image?: string }[];
  required?: boolean;
  disabled?: boolean;
  helperText?: string;
  error?: string;
  onChange?: (value: string) => void;
}

export const Select: React.FC<SelectProps> = ({
  label,
  options,
  required,
  disabled,
  helperText,
  error,
  onChange,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <div className="max-w-sm mx-auto">
      <label>
        {label} {required && "*"}
      </label>
      <select
        className="block w-full px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
        disabled={disabled}
        onChange={handleChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {helperText && <small>{helperText}</small>}
    </div>
  );
};
