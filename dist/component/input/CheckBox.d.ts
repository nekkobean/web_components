import { default as React } from 'react';
export interface CheckBoxProps {
    id: string;
    label: string;
    required?: boolean;
    disabled?: boolean;
    defaultChecked?: boolean;
    error?: boolean;
    helperText?: string;
    onChange?: (checked: boolean) => void;
}
export declare const CheckBox: React.FC<CheckBoxProps>;
