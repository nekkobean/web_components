export interface BreadcrumbsProps {
    items: {
        id: number;
        label: string;
        href: string;
    }[];
}
export declare const Breadcrumbs: React.FC<BreadcrumbsProps>;
