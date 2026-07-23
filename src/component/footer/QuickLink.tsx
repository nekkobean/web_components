import React from "react";
import "../../themes/tailwind.css";

export interface QuickLinkProps {
  title: string;
  links: { id: number; label: string; href: string }[];
  onItemClick?: (label: string) => void;
}

export const QuickLink = ({
  title,
  links,
  onItemClick,
}: QuickLinkProps) => {
  return (
    <div className="text-white">
      <h3
        className="
          mb-3
          text-lg
          font-semibold
        "
      >
        {title}
      </h3>

      <div className="flex flex-col gap-2">
        {links.map((link) => (
          <a
            key={link.id}
            href={link.href}
            onClick={() => onItemClick?.(link.label)}
            className="hover:underline"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};