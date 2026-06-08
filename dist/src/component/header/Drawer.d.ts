import { default as React } from 'react';
interface DrawerProps {
    navDrawer: {
        id: number;
        href: string;
        label: string;
    }[];
    style?: string;
    onItemClick?: (label: string) => void;
}
export declare const Drawer: React.FC<DrawerProps>;
export {};
