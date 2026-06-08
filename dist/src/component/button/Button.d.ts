export interface ButtonProps {
    variant?: "primary" | "secondary" | "restore" | "delete" | "disabled";
    label?: string;
    isLoading?: boolean;
    disabled?: boolean;
    onClick?: () => void;
}
export declare const Button: React.FC<ButtonProps>;
