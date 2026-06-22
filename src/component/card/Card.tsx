import React from "react";
// import "web_components/src/themes/tailwind.css";

export interface CardProps {
  children?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="bg-primary w-full max-w-sm rounded-lg shadow-md overflow-hidden">
      {children}
    </div>
  );
};
