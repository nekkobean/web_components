import React from "react";
import type {
  NavItem,
  NavigationProps,
} from "./types";
import "../../themes/tailwind.css";

export interface NavBarProps extends NavigationProps {
  navBar: NavItem[];
}

export const NavBar: React.FC<NavBarProps> = ({
  navBar = [],
  style,
  onItemClick,
}) => {
  return (
    <nav
      className={`
        hidden
        md:flex
        flex-1
        gap-6
        lg:gap-12
        justify-center
        items-center
       
        absolute
        left-1/2
        -translate-x-1/2
        
        min-w-0
        overflow-x-auto
        whitespace-nowrap
        ${style || ""}
      `}
    >
      {navBar.map((item) => (
        <a
          key={item.id}
          href={item.href || "#"}
          onClick={() =>
            onItemClick?.(item.label)
          }
          className="
            text-base
            lg:text-lg
            font-bold
            text-black
            hover:text-green
            cursor-pointer
          "
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
};