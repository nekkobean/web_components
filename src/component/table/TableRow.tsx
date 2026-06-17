import React from "react";
import { TableRowCell } from "./types";
import { alignment } from "./alignment";
import "web_components/src/themes/tailwind.css";

export interface TableRowProps {
  rowData: TableRowCell[];
  style?: string;
}

export const TableRow: React.FC<TableRowProps> = ({ rowData, style }) => {
  return (
    <tr
      className={`

        transition-colors
        hover:bg-gray-50
          [&:last-child_td]:border-b-0

       
        ${style || ""}
      `}
    >
      {rowData.map((cell) => (
        <td
          key={cell.key}
          className={`
            px-3 sm:px-4 md:px-6
            py-2 md:py-4
            text-xs sm:text-sm
            text-gray
            whitespace-nowrap

            border-b
            border-light-gray
          
        
            
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
