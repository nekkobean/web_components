import { default as React } from 'react';
export interface SectionProps {
    id?: string;
    title?: string;
    children?: React.ReactNode;
    style?: string;
}
export declare const Section: React.FC<SectionProps>;
