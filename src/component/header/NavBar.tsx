import React from "react";
import type {
  NavItem,
  NavigationProps,
} from "./types";
// import "web_components/src/themes/tailwind.css";

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
        gap-12
        justify-center
        items-center
        absolute
        left-1/2
        -translate-x-1/2
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
            text-lg
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