// import React from "react";
// import "../../themes/tailwind.css";

// export interface CheaderProps {
//     children?: React.ReactNode;
//     style?: string;
// }

// export const Cheader: React.FC<CheaderProps> = ({ children, style }) => {
//     return (
//         <header className={`w-full border-b border-light-gray shadow-sm ${style || "bg-white"}`}>
//             <div className="relative flex items-center justify-between gap-3 px-4 sm:px-9 py-3 sm:py-4 min-w-0">
//                 {children}
//             </div>
//         </header>
//     );
// }
export interface CheaderProps {
  children?: React.ReactNode;
  style?: string;
  contentClassName?: string;
}

export const Cheader: React.FC<CheaderProps> = ({ children, style, contentClassName }) => {
  return (
    <header className={`w-full border-b border-light-gray shadow-sm ${style || "bg-white"}`}>
      <div className={contentClassName || "relative flex items-center justify-between gap-3 px-4 sm:px-9 py-3 sm:py-4 min-w-0"}>
        {children}
      </div>
    </header>
  );
};