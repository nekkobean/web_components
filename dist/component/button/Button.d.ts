export interface ButtonProps {
    variant?: "primary" | "secondary" | "restore" | "delete" | "disabled";
    label?: string;
    isLoading?: boolean;
    disabled?: boolean;
    onClick?: () => void;
    style?: string;
    type?: "button" | "submit" | "reset";
}
export declare const Button: React.FC<ButtonProps>;
