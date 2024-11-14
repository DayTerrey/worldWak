import "@/styles/globals.css";
import { PrimaryButton, SecondaryButton } from "@/shared/button";
import { NavLink } from "@/shared/NavLink";
import { Logo } from "@/shared/Logo";
import { Link } from "@nextui-org/link";
import { NAVBAR_NAVIGATION_PROPS } from "../constants/navbar-navigation-props";

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-opacity-80 bg-white shadow-md mx-auto max-w-screen-lg rounded-md">
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

      <div className="flex space-x-[10px]">
        <SecondaryButton>
          {NAVBAR_NAVIGATION_PROPS.registrationButtons[0].children}
        </SecondaryButton>
        <PrimaryButton>
          {NAVBAR_NAVIGATION_PROPS.registrationButtons[1].children}
        </PrimaryButton>
      </div>
    </nav>
  );
};
