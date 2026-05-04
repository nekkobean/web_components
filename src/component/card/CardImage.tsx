import Image from "next/image";

interface CardImageProps {
  alt: string;
  image: string;
  children?: React.ReactNode;
}

export const CardImage: React.FC<CardImageProps> = ({
  alt,
  image,
  children,
}) => {
  return (
    <div className="relative w-full h-48">
      <Image
        src={image}
        alt={alt}
        width={300}
        height={192}
        className="w-full h-auto object-cover"
      />
      {children}
    </div>
  );
};
