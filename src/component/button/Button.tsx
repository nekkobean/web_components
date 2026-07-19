import { Loader } from "../spinner/Loader";
import "../../themes/tailwind.css";

export interface ButtonProps {
  variant?: "primary" | "secondary" | "restore" | "delete" | "disabled";
  label?: string;
  isLoading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  style?: string;
  type?: "button" | "submit" | "reset"; // add this
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  label,
  isLoading = false,
  disabled = false,
  onClick,
  style,
  type = "button", // default to "button" so it never accidentally submits
}) => {
  const colors = {
    primary: "bg-primary-button text-primary",
    secondary: "bg-secondary-button text-primary",
    restore: "bg-restore-button text-primary",
    delete: "bg-delete-button text-primary",
    disabled: "bg-disabled-button text-primary",
  };

  const loader = isLoading ? <Loader /> : null;
  const isDisabled = disabled || isLoading;

  return (
    <div className="w-full md:w-auto">
      <button
  type={type} 
  className={`${style || colors[variant]} flex items-center gap-3 px-4 py-2 rounded-2xl text-sm font-medium w-full md:w-auto md:max-w-full justify-center whitespace-nowrap
   ${isDisabled ? "cursor-not-allowed opacity-50" : "hover:cursor-pointer"}`}
  disabled={isDisabled}
  onClick={onClick}
>
        {loader}
        {label}
      </button>
    </div>
  );
};