import { ReactNode } from 'react';
export interface CardContentProps {
    title: ReactNode;
    description: ReactNode;
    titleClassName?: string;
    descriptionClassName?: string;
}
export declare const CardContent: React.FC<CardContentProps>;
