import { Loader } from "../spinner/Loader";
import "../../themes/tailwind.css";

export interface ButtonProps {
  variant?: "primary" | "secondary" | "restore" | "delete" | "disabled";
  label?: string;
  isLoading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  style?: string;
  type?: "button" | "submit" | "reset";
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  label,
  isLoading = false,
  disabled = false,
  onClick,
  style,
  type = "button",
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
        className={`${colors[variant]} ${style || ""} flex items-center gap-3 px-5 py-2.5 rounded-2xl text-lg md:text-lg lg:text-xl font-medium w-full md:w-auto md:max-w-full justify-center whitespace-nowrap
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