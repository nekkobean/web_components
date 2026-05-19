import React from "react";
import { TableRowCell } from "./types";
import { alignment } from "./alignment";

interface TableRowProps {
  rowData: TableRowCell[];
  style?: string;
}

export const TableRow: React.FC<TableRowProps> = ({ rowData, style }) => {
  return (
    <tr
      className={`
        border-b
        border-gray-200
        last:border-b-0
        hover:bg-gray-50
        ${style || ""}
      `}
    >
      {rowData.map((cell) => (
        <td
          key={cell.key}
          className={`
            px-4
            py-3
            text-sm
            ${alignment[cell.align || "left"]}
            ${cell.style || ""}
          `}
        >
          {cell.value}
        </td>
      ))}
    </tr>
  );
};
