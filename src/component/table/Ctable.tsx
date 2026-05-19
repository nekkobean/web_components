import React from "react";

interface CtableProps {
  children?: React.ReactNode;
  style?: string;
}

export const Ctable: React.FC<CtableProps> = ({ children, style }) => {
  return (
    <div
      className={`
        w-full
        overflow-x-auto
        border
        border-gray-200
        bg-white
        ${style || ""}
      `}
    >
      <table className="w-full border-collapse border-spacing-0">
        {children}
      </table>
    </div>
  );
};
