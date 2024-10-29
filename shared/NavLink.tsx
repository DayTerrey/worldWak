import Link from "next/link";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="text-black hover:text-purple-600 hover:underline"
    >
      {children}
    </Link>
  );
};

export default NavLink;