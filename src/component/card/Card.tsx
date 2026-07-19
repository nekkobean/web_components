
import React from "react";
import "../../themes/tailwind.css";

export interface CardProps {
  children?: React.ReactNode;
  style?: string;
}

export const Card: React.FC<CardProps> = ({ children, style }) => {
  return (
    <div
      className={`
        w-full max-w-sm rounded-lg shadow-md overflow-hidden
       
        ${style || "bg-primary"}
      `}
    >
      {children}
    </div>
  );
};