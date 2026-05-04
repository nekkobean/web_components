interface CardFooterProps {
  children: React.ReactNode;
}

export const CardFooter: React.FC<CardFooterProps> = ({ children }) => {
  return <div className="p-4 border-t-0">{children}</div>;
};
