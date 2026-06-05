interface CardFooterProps {
  children?: React.ReactNode;
}

export const CardFooter: React.FC<CardFooterProps> = ({ children }) => {
  return <div className="flex justify-end gap-4 w-full p-4">{children}</div>;
};
