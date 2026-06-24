import React from "react";
import "../../themes/tailwind.css";

export interface SectionProps {
  id?: string;
  title?: string;
  children?: React.ReactNode;
  style?: string;
  
}

export const Section: React.FC<SectionProps> = ({
  id,
  title,
  children,
  style,
}) => {
  return (
    <section
      id={id}
      className={`
        min-h-screen
        w-full
        px-6
        py-6
        scroll-mt-32
        md:px-10
        lg:px-16

        ${style || ""}
      `}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10">
        {title && (
          <h2
            className="
              text-3xl
              font-bold
              md:text-4xl
            "
          >
            {title}
          </h2>
        )}

        {children}
      </div>
    </section>
  );
};
