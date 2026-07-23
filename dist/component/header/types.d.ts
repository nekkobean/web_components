export interface NavItem {
    id: number;
    href: string;
    label: string;
}
export interface NavigationProps {
    style?: string;
    onItemClick?: (label: string) => void;
}
