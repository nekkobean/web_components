import { Loader } from "../spinner/Loader";

//parameters
interface ButtonProps {
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
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  label,
  isLoading = false,
}) => {
  const colors = {
    primary: "bg-blue-600 text-white",
    secondary: "bg-gray-200 text-black border-solid border-gray-400",
    restore: "bg-green-600 text-white",
    delete: "bg-red-600 text-white",
    disabled: "bg-gray-400 text-gray-600",
  };
  const loader = isLoading ? <Loader /> : null;

  return (
    <button
      className={colors[variant] + " px-4 py-2 rounded-2xl"}
      disabled={isLoading}
    >
      {loader}
      {label}
    </button>
  );
};
