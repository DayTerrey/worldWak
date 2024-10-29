// import "@/styles/globals.css";
import { PrimaryButton, SecondaryButton } from "@/shared/button";
import NavLink from "@/shared/NavLink";
import Logo from "@/shared/Logo"; // Импортируем компонент Logo
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-opacity-80 bg-white shadow-md mx-auto max-w-screen-lg rounded-md">
      <div className="flex items-center space-x-[20px]">
        <Link href="/">
          <Logo />
        </Link>

        <div className="flex space-x-[10px]">
          <NavLink href="/">Вакансии</NavLink>
          <NavLink href="/">Сотрудники</NavLink>
          <NavLink href="/">Зарплаты</NavLink>
        </div>
      </div>

      <div className="flex space-x-[10px]">
        <SecondaryButton>Регистрация</SecondaryButton>
        <PrimaryButton>Войти</PrimaryButton>
      </div>
    </nav>
  );
}
