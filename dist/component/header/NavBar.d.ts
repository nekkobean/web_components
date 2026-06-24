import { default as React } from 'react';
import { NavItem, NavigationProps } from './types';
export interface NavBarProps extends NavigationProps {
    navBar: NavItem[];
}
export declare const NavBar: React.FC<NavBarProps>;
