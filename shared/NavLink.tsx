"use client"; // Помечаем файл как клиентский. Почему то выдавало 500 без этого при импорте extendVariants

import { Link } from "@nextui-org/link";
import { extendVariants } from "@nextui-org/system";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

// extended variant for link type, add user type of variant for work with this
const MyLink = extendVariants(Link, {
  variants: {
    var: {
      main: "text-black hover:text-purple-600 hover:underline",
      secondary: "text-gray-500 underline",
    },
  },
  defaultVariants: {
    var: "main",
  },
});

export const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  return <MyLink href={href}>{children}</MyLink>;
};
