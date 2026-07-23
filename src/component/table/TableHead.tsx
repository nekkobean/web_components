import React from "react";
import { TableHeadCell } from "./types";
import { alignment } from "./alignment";
import "../../themes/tailwind.css";

export interface TableHeadProps {
  rowData: TableHeadCell[];
}

export const TableHead: React.FC<TableHeadProps> = ({ rowData }) => {
  return (
    <thead>
      <tr
        className="
          sticky
          top-0
          z-10
          bg-white
        "
      >
        {rowData.map((cell) => (
          <th
            key={cell.key}
            className={`
              px-3 sm:px-4 md:px-6
              py-2 md:py-4
              text-xs sm:text-sm
              text-gray
              font-semibold

              border-b
              border-light-gray
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
