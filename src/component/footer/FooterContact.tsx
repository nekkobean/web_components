interface FooterContactProps {
  email: string;
  phone: string;

  socials: {
    id: number;
    label: string;
    href: string;
  }[];
}

export const FooterContact = ({
  email,
  phone,
  socials,
}: FooterContactProps) => {
  return (
    <div className="text-white">
      <h3
        className="
          mb-3
          text-lg
          font-semibold
        "
      >
        Contact
      </h3>

      <div className="flex flex-col gap-2">
        <p>{email}</p>
        <p>{phone}</p>
      </div>

      <h4
        className="
          mt-5
          mb-2
          font-medium
        "
      >
        Follow Us
      </h4>

      <div className="flex flex-wrap gap-3">
        {socials.map((social) => (
          <a
            key={social.id}
            href={social.href}
            className="hover:underline"
          >
            {social.label}
          </a>
        ))}
      </div>
    </div>
  );
};