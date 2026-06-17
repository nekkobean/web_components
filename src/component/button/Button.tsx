import { Loader } from "../spinner/Loader";
import "web_components/src/themes/tailwind.css";

//parameters
export interface ButtonProps {
  /* The variant prop determines the styling of the button. It can be one of the following values:
   * - "primary": A blue button with white text, used for primary actions.
   * - "secondary": A gray button with black text and a border, used for secondary actions.
   * - "restore": A green button with white text, used for restore actions.
   * - "delete": A red button with white text, used for delete actions.
   * - "disabled": A gray button with gray text, used for disabled state.
   * @default "primary"
   */
  variant?: "primary" | "secondary" | "restore" | "delete" | "disabled";
  // The label prop is the text that will be displayed on the button. It is optional, but if provided, it will be rendered inside the button.
  label?: string;
  /*
   * Optional: If true, the button will show a loading state.
   * This can be used to indicate that an action is in progress.
   * @default false
   */
  isLoading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  label,
  isLoading = false,
  disabled = false,
  onClick,
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
    <div>
      <button
        className={`${
          colors[variant]
        } flex items-center gap-3 px-4 py-2 rounded-2xl text-sm font-medium w-full justify-center md:w-70 lg:w-25
       ${
         isDisabled ? "cursor-not-allowed opacity-50" : "hover:cursor-pointer"
       }`}
        disabled={isDisabled}
        onClick={onClick}
      >
        {loader}
        {label}
      </button>
    </div>
  );
};
