import React from "react";
import "../../themes/tailwind.css";

export interface TableCellProps {
  children: React.ReactNode;
  align?: string;
  style?: string;
}

export const TableCell: React.FC<TableCellProps> = ({
  children,
  align = "left",
  style,
}) => {
  return (
    <td
      className={`
        px-4 
        py-3
        text-sm
        ${align === "center" ? "text-center" : ""}
        ${align === "right" ? "text-right" : ""}
        ${align === "left" ? "text-left" : ""}
        ${style || ""}
      `}
    >
      {children}
    </td>
  );
};