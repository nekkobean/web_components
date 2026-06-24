export interface ButtonProps {
    variant?: "primary" | "secondary" | "restore" | "delete" | "disabled";
    label?: string;
    isLoading?: boolean;
    disabled?: boolean;
    onClick?: () => void;
    style?: string;
}
export declare const Button: React.FC<ButtonProps>;
