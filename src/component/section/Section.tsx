// import React from "react";
// import "../../themes/tailwind.css";

// export interface SectionProps {
//   id?: string;
//   title?: string;
//   children?: React.ReactNode;
//   style?: string;
//   sectionTitleClassName?: string;
//   fullHeight?: boolean;
// }

// export const Section: React.FC<SectionProps> = ({
//   id,
//   title,
//   children,
//   style = "",
//   sectionTitleClassName,
//   fullHeight = false,
// }) => {
//   return (
//     <section
//       id={id}
//       className={`
//         w-full
//         px-4
//         py-8
//         scroll-mt-24
//         sm:px-6
//         sm:py-10
//         sm:scroll-mt-28
//         md:px-10
//         md:py-14
//         md:scroll-mt-32
//         lg:px-16
//         lg:py-16
//         ${fullHeight ? "md:min-h-screen" : ""}
//         ${style || ""}
//       `}
//     >
//       <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 sm:gap-8 md:gap-10">
//         {title && (
//           <h2
//             className={`font-bold ${
//               sectionTitleClassName || "text-black text-2xl sm:text-3xl md:text-4xl"
//             }`}
//           >
//             {title}
//           </h2>
//         )}

//         {children}
//       </div>
//     </section>
//   );
// };

import React from "react";
import "../../themes/tailwind.css";

export interface SectionProps {
  id?: string;
  title?: string;
  children?: React.ReactNode;
  style?: string;
  sectionTitleClassName?: string;
  fullHeight?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  id,
  title,
  children,
  style = "",
  sectionTitleClassName,
  fullHeight = false,
}) => {
  return (
    <section
      id={id}
      className={`
        w-full
        px-4
        py-6
        scroll-mt-[80px]
        sm:px-6
        sm:py-8
        md:px-10
        md:py-10
        lg:px-16
        lg:py-12
        ${fullHeight ? "md:min-h-screen" : ""}
        ${style || ""}
      `}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 sm:gap-8 md:gap-10">
        {title && (
          <h2
            className={`font-bold ${
              sectionTitleClassName || "text-black text-2xl sm:text-3xl md:text-4xl"
            }`}
          >
            {title}
          </h2>
        )}

        {children}
      </div>
    </section>
  );
};