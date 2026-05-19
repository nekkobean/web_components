import React from "react";
import { TableHeadCell } from "./types";
import { alignment } from "./alignment";

interface TableHeadProps {
  rowData: TableHeadCell[];
  style?: string;
}

export const TableHead: React.FC<TableHeadProps> = ({
  rowData,
  style,
}) => {
  return (
    <thead>
      <tr
        className={`
          border-b
          border-gray-200
          bg-gray-50
          ${style || ""}
        `}
      >
        {rowData.map((cell) => (
          <th
            key={cell.key}
            className={`
              px-4
              py-3
              text-sm
              font-medium
              ${alignment[cell.align || "left"]}
              ${cell.style || ""}
            `}
          >
            {cell.value}
          </th>
        ))}
      </tr>
    </thead>
  );
};