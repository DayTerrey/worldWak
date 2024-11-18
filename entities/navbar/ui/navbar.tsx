"use client";
import "@/styles/globals.css";
import { NavLink } from "@/shared/NavLink";
import { CustomButton } from "@/shared/button";
import { Logo } from "@/shared/Logo";
import { Link } from "@nextui-org/link";
import { NAVBAR_NAVIGATION_PROPS } from "../constants/navbar-navigation-props";

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-opacity-80 bg-white shadow-md rounded-md mx-[100px]">
      <div className="flex items-center space-x-[20px]">
        <Link href="/">
          <Logo />
        </Link>

        <div className="flex space-x-[10px]">
          {NAVBAR_NAVIGATION_PROPS.mainLinks.map((link, index) => (
            <NavLink key={index} href={link.href}>
              {link.children}
            </NavLink>
          ))}
        </div>
      </div>

      <div className="flex space-x-4">
        <CustomButton variant="secondary" onClick={() => alert("Регистрация")}>
          Регистрация
        </CustomButton>
        <CustomButton variant="primary">Войти</CustomButton>
      </div>
    </nav>
  );
};
