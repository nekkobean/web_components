export interface QuickLinkProps {
    title: string;
    links: {
        id: number;
        label: string;
        href: string;
    }[];
    onItemClick?: (label: string) => void;
}
export declare const QuickLink: ({ title, links, onItemClick, }: QuickLinkProps) => import("react/jsx-runtime").JSX.Element;
