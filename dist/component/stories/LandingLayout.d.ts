import { default as React } from 'react';
import { NavItem } from '../header';
export interface LandingLayoutProps {
    children: React.ReactNode;
    navItems: NavItem[];
    logo?: string;
    companyTitle?: string;
    description?: string;
    email?: string;
    phone?: string;
    socials?: {
        id: number;
        label: string;
        href: string;
    }[];
}
export declare const LandingLayout: React.FC<LandingLayoutProps>;
