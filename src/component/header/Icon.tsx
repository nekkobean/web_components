
import React from "react";

import Image from "next/image";

interface IconProps {
  logo?: string;
  title?: string;
  style?: string;
  alt?: string;
}

export const Icon: React.FC<IconProps> = ({
  logo = "/logo.svg",
  title = "my Company",
  style,
  alt = "",
}) => {
  return (
    <div
      className={`
        flex
        items-center

        gap-2
        sm:gap-3

        shrink-0

        ${style || ""}
      `}
    >
      <Image
        src={logo}
        alt={alt}
        width={40}
        height={40}
        className="
          h-8
          w-8

          sm:h-10
          sm:w-10

          object-contain
        "
      />
      <h1
        className="
          text-sm
          sm:text-lg

          font-bold
          text-blue
        "
      >
        {title}
      </h1>
    </div>
  );
};