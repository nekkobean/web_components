// import "web_components/src/themes/tailwind.css";

export interface FooterBottomProps {
  copyright: string;
}

export const FooterBottom: React.FC<FooterBottomProps> = ({
  copyright,
}) => {
  return (
    <div
      className="
        bg-gray
        text-light-gray

        border-t
        border-gray

        py-4

        text-center
        text-sm
      "
    >
      {copyright}
    </div>
  );
};