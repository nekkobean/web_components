import type { ReactNode } from "react";

interface FooterIconProps {
  children?: ReactNode;
  description: string;
}

export const FooterIcon = ({
  children,
  description,
}: FooterIconProps) => {
  return (
    <div className="flex flex-col gap-4">
      {children}

      <p
        className="
          max-w-sm
          text-sm
          text-white
        "
      >
        {description}
      </p>
    </div>
  );
};