import React from "react";

interface  NavBarProps {
    navBar: { id: number; href: string; label: string; }[];
    style?: string;
}
export const NavBar: React.FC<NavBarProps> = ({ 
    navBar = [],
    style,

}) => {

    return (
    
        <nav className={`hidden md:flex gap-12 justify-center items-center absolute left-1/2 -translate-x-1/2 ${style || ""}`}>
            {navBar.map((item) => (
                <a key={item.id} href={item.href || "#"} className="text-lg font-bold text-black hover:text-green cursor-pointer">
                    {item.label}
                </a>
            ))}
        </nav>
        
    );
}