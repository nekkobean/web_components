import React from "react";

interface TableBodyProps {
  children?: React.ReactNode;
  style?: string;
}

export const TableBody: React.FC<TableBodyProps> = ({ children, style }) => {
  return <tbody className={style}>{children}</tbody>;
};
