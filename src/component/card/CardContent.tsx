import "../../themes/tailwind.css";
import type { ReactNode } from "react";

export interface CardContentProps {

  title: ReactNode;
  description: ReactNode;

  titleClassName?: string;
  descriptionClassName?: string;
}

export const CardContent: React.FC<CardContentProps> = ({
  title,
  description,
  titleClassName,
  descriptionClassName,
}) => {
  return (
    <div className="p-10">
      <h2
        className={`text-lg font-bold mb-2 text-black whitespace-pre-line ${
          titleClassName || ""
        }`}
      >
        {title}
      </h2>
      <p
        className={`text-gray text-sm font-normal whitespace-pre-line ${
          descriptionClassName || ""
        }`}
      >
        {description}
      </p>
    </div>
  );
};