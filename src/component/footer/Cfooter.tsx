import type { ReactNode } from "react";

interface CfooterProps {
  children?: ReactNode;
}

export const Cfooter = ({ children }: CfooterProps) => {
  return (
    <footer
      className="
        w-full
        bg-gray
        text-white
      "
    >
      <div
        className="
          mx-auto
          max-w-7xl
          grid
          grid-cols-1
          gap-8
          px-6
          py-10
          md:grid-cols-3
        "
      >
        {children}
      </div>
    </footer>
  );
};