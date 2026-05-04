import React from "react";

// interface CardProps {
//   CardHeader?: React.ReactNode;
//   CardContent: Promise<React.ReactNode> | React.ReactNode;
//   CardAction?: React.ReactNode;
// }
interface CardProps {
  children?: React.ReactNode;
}
// interface SubProps {children: React.ReactNode;}
export const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="bg-primary w-full max-w-sm rounded-lg shadow-md overflow-hidden">
      {children}
    </div>
  );
};

// Card.Header = ({ children }: SubProps) => {
//   return <div className="text-lg font-bold mb-2">{children}</div>;
// };

// Card.Content = ({ children }: SubProps) => {
//   return <div className="p-4">{children}</div>;
// };

// Card.Action = ({ children }: SubProps) => {
//   return <div className="p-4">{children}</div>;
// };
