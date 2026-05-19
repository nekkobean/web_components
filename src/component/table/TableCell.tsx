import React from "react";

interface TableCellProps {
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
        px-4 py-3
        border-b
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