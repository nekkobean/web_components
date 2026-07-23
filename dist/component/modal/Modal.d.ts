import { default as React } from 'react';
export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
    style?: string;
    bodyClassName?: string;
}
export declare const Modal: React.FC<ModalProps>;
