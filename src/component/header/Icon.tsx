import React from "react";
import "../../themes/tailwind.css";

export interface IconProps {
  logo?: string;
  title?: string;
  style?: string;
  alt?: string;
  titleClassName?: string;
}

export const Icon: React.FC<IconProps> = ({
  logo = "/logo.svg",
  title = "my Company",
  style,
  alt = "",
  titleClassName = "",
  
}) => {
  return (
    <div
      className={`
        flex
        items-center
        gap-2
        sm:gap-3
        shrink-0
        min-w-0
        max-w-28
        sm:max-w-40
        md:max-w-56
        ${style || ""}
      `}
    >
      <img
        src={logo}
        alt={alt}
        className="
          h-8
          w-8
          sm:h-10
          sm:w-10
         object-cover
          rounded-full
          shrink-0
        "
      />
      <h1
        className={`
          text-sm
          sm:text-lg
          font-bold
          truncate
          ${titleClassName || "text-white"}
        `}
        title={title}
      >
        {title}
      </h1>
    </div>
  );
};