import type { ReactNode } from "react";
import "../../themes/tailwind.css";

export interface CfooterProps {
  children?: ReactNode;
  className?: string;
}

export const Cfooter = ({ children, className }: CfooterProps) => {
  return (
    <footer
      className={`
        w-full
        text-white
        ${className || "bg-gray"}
      `}
    >
      <div
        className="
          mx-auto
          max-w-7xl
          grid
          grid-cols-1
          gap-8
          px-6
          py-10
          md:grid-cols-3
        "
      >
        {children}
      </div>
    </footer>
  );
};