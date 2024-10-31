import { Link } from "@nextui-org/link";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="text-black hover:text-purple-600 hover:underline"
    >
      {children}
    </Link>
  );
};
