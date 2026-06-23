import React from "react";
import "../../themes/tailwind.css";

export interface TableBodyProps {
  children?: React.ReactNode;
  style?: string;
}

export const TableBody: React.FC<TableBodyProps> = ({ children, style }) => {
  return <tbody className={style}>{children}</tbody>;
};
