import { default as React } from 'react';
interface NavBarProps {
    navBar: {
        id: number;
        href: string;
        label: string;
    }[];
    style?: string;
    onItemClick?: (label: string) => void;
}
export declare const NavBar: React.FC<NavBarProps>;
export {};
