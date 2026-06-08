interface FooterContactProps {
    email: string;
    phone: string;
    socials: {
        id: number;
        label: string;
        href: string;
    }[];
}
export declare const FooterContact: ({ email, phone, socials, }: FooterContactProps) => import("react/jsx-runtime").JSX.Element;
export {};
