import React from "react";
import "web_components/src/themes/tailwind.css";

export interface TableBodyProps {
  children?: React.ReactNode;
  style?: string;
}

export const TableBody: React.FC<TableBodyProps> = ({ children, style }) => {
  return <tbody className={style}>{children}</tbody>;
};
