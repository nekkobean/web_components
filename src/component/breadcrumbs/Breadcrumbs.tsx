import "../../themes/tailwind.css";
export interface BreadcrumbsProps {
  items: { id: number; label: string; href: string }[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
}) => {
  return (
    <nav aria-label="Breadcrumb">
      <ol
        className="
          flex
          flex-wrap
          items-center
          gap-2
          text-sm
          text-light-black
        "
      >
        {items.map((item, index) => {
          const isLast =
            index === items.length - 1;

          return (
            <li
              key={item.id}
              className="
                flex
                items-center
                gap-2
              "
            >
              {isLast ? (
                <span
                  className="
                    font-semibold
                    text-gray-900
                  "
                >
                  {item.label}
                </span>
              ) : (
                <a
                  href={item.href}
                  className="
                    text-light-black
                    transition-colors
                    hover:text-blue-600
                    hover:underline
                  "
                >
                  {item.label}
                </a>
              )}

              {!isLast && (
                <span className="text-light-black">
                  &gt;
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};