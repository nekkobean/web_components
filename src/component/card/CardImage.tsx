import React from "react";
import "../../themes/tailwind.css";

export interface CardImageProps {
  alt: string;
  image: string;
  children?: React.ReactNode;
}

export const CardImage: React.FC<CardImageProps> = ({
  alt,
  image,
  children,
}) => {
  return (
    <div className="relative w-full h-48">
      <img
        src={image}
        alt={alt}
        className="w-full h-full object-cover"
      />
      {children}
    </div>
  );
};