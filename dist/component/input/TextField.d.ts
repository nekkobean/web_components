import { default as React } from 'react';
export interface TextFieldProps {
    id: string;
    labelText: string;
    placeholder: string;
    error?: boolean;
    helperText?: string;
    type: "text" | "email" | "password" | "number";
    name?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export declare const TextField: React.FC<TextFieldProps>;
