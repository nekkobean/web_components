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
    copyright?: string;
    socials?: {
        id: number;
        label: string;
        href: string;
    }[];
    headerClassName?: string;
    companyTitleClassName?: string;
    breadcrumbClassName?: string;
    breadcrumbTextClassName?: string;
    footerClassName?: string;
    footerBottomClassName?: string;
    navLabelClassName?: string;
}
export declare const LandingLayout: React.FC<LandingLayoutProps>;
