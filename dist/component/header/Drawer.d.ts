import { default as React } from 'react';
import { NavItem, NavigationProps } from './types';
export interface DrawerProps extends NavigationProps {
    navDrawer: NavItem[];
}
export declare const Drawer: React.FC<DrawerProps>;
