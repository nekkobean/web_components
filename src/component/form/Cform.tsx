import React from "react";
// import "web_components/src/themes/tailwind.css";

export interface CformProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children?: React.ReactNode;
}

export const Cform: React.FC<CformProps> = ({
  children,
  onSubmit,
  className = "",
  ...props
}) => {
  return (
    <form
      onSubmit={onSubmit}
      className={`w-full max-w-sm ${className}`}
      {...props}
    >
      <div className="flex flex-col gap-1">{children}</div>
    </form>
  );
};
