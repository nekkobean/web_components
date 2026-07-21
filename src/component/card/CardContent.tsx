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
    <div className="p-6">
      <h2
        className={`font-bold mb-2 text-black whitespace-pre-line ${
          titleClassName || "text-lg"
        }`}
      >
        {title}
      </h2>
      <p
        className={`text-gray font-normal whitespace-pre-line ${
          descriptionClassName || "text-sm"
        }`}
      >
        {description}
      </p>
    </div>
  );
};