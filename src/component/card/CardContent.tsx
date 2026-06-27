import "../../themes/tailwind.css";
import type { ReactNode } from "react";

export interface CardContentProps {
  /** Accepts plain text or JSX (e.g. <>Line 1<br />Line <b>2</b></>) for full control over bold/italic/line breaks */
  title: ReactNode;
  description: ReactNode;
  /** Optional style overrides if you want to tweak font/size without touching every call site */
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