interface SelectProps {
    label: string;
    options: {
        key: number;
        name: string;
        value: string;
        image?: string;
    }[];
    required?: boolean;
    disabled?: boolean;
    helperText?: string;
    error?: boolean;
    value?: string;
    onChange?: (value: string) => void;
}
export declare const Select: React.FC<SelectProps>;
export {};
