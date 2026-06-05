import React from "react";

interface CformProps {
  children?: React.ReactNode;
}

export const Cform: React.FC<CformProps> = ({ children }) => {
  return (
    <form className="w-full max-w-sm">
      <div className="flex flex-col gap-1 ">{children}</div>
    </form>
  );
};
