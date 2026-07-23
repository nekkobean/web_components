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
        rounded-lg shadow-md overflow-hidden
        ${style || "w-full bg-primary"}
      `}
    >
      {children}
    </div>
  );
};