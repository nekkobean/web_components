import React from "react";
import "web_components/src/themes/tailwind.css";

export interface CheaderProps {
    children?: React.ReactNode;
    style?: string;
}
export const Cheader: React.FC<CheaderProps> = ({ children, style }) => {
    return (
        <header className={`w-full bg-white border-b border-light-gray shadow-sm ${style}`}>
            <div className="flex items-center justify-between px-6 py-4">

                {children}
            </div>
        </header>
    );
}




