import { default as React } from 'react';
export interface CardImageProps {
    alt: string;
    image: string;
    children?: React.ReactNode;
}
export declare const CardImage: React.FC<CardImageProps>;
