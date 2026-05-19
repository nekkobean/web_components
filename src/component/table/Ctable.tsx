import React from "react";

interface CtableProps {
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
       shadow-[0px_2px_6px_rgba(0,0,0,0.08),0px_8px_24px_rgba(0,0,0,0.06)]
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