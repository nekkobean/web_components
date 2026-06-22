import React from "react";
// import "web_components/src/themes/tailwind.css";

export interface CtableProps {
  children?: React.ReactNode;
  style?: string;
  maxRows?: number;
}

export const Ctable: React.FC<CtableProps> = ({
  children,
  style,
  maxRows = 5,
}) => {
  return (
    <div
      className={`
        w-full
        overflow-hidden
        rounded-md
        bg-white
       shadow-lg
        ${style || ""}
      `}
    >
      <div
        className="overflow-auto"
        style={{
          maxHeight: `${maxRows * 56}px`,
        }}
      >
        <table className="w-full border-separate border-spacing-0">
          {children}
        </table>
      </div>
    </div>
  );
};