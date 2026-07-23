import "../../themes/tailwind.css";
import React from "react";

export interface FooterBottomProps {
  copyright: string;
  footerBottomClassName?: string;
}

export const FooterBottom: React.FC<FooterBottomProps> = ({
  copyright,
  footerBottomClassName = "",
}) => {
  return (
    <div
      className={`
        border-t
        
        py-4

        text-center
       
        ${footerBottomClassName || "text-light-gray bg-gray border-gray text-sm"}
      `}
    >
      {copyright}
    </div>
  );
};