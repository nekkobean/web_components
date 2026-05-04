// export const CardContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   return <div className="p-4">{children}</div>;
// };
/** The CardContent component is a simple wrapper that provides padding to its children. It is used to create a consistent layout for the content inside a Card component. The children prop is of type React.ReactNode, which means it can accept any valid React element, including strings, numbers, and other components. The padding is applied using Tailwind CSS classes, specifically "p-4", which adds padding of 1rem (16px) on all sides of the content. This component can be used to structure the content within a Card, ensuring that there is appropriate spacing around the elements inside the card. */
// interface ButtonProps {
//   variant?: "primary" | "secondary" | "restore" | "delete" | "disabled";
//   label?: string;
//   isLoading?: boolean;
// }
// export const Button: React.FC<ButtonProps> = ({
//   variant = "primary",
//   label,
//   isLoading = false,
// }) => {
//   const colors = {
//     primary: "bg-primary-button text-primary",
//     secondary: "bg-secondary-button text-primary",
//     restore: "bg-restore-button text-primary",
//     delete: "bg-delete-button text-primary",
//     disabled: "bg-disabled-button text-primary",
//   };
//   const loader = isLoading ? <Loader /> : null;

//   return (
//     <button
//       className={
//         colors[variant] + " flex items-center gap-3 px-4 py-2 rounded-2xl"
//       }
//       disabled={isLoading}
//     >
//       {loader}
//       {label}
//     </button>
//   );
// };
interface CardContentProps {
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
      <p className="text-gray-600">{description}</p>
    </div>
  );
};
