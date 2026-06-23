import "../../themes/tailwind.css";
export interface CardContentProps {
  title: string;
  description: string;
}

export const CardContent: React.FC<CardContentProps> = ({
  title,
  description,
}) => {
  return (
    <div className="p-10">
      <h2 className="text-lg font-bold mb-2 text-black">{title}</h2>
      <p className="text-gray text-sm font-normal">{description}</p>
    </div>
  );
};
