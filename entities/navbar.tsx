import "@/styles/globals.css";
import Link from "next/link";

import { PrimaryButton, SecondaryButton } from "@/shared/button";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-opacity-80 bg-white shadow-md">
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-4">
          {/* Логотип и название */}
          <img alt="Логотип" className="h-8 w-8" src="/favicon.ico" />
          <span className="text-black">МирВакансий</span>
        </div>

        {/* Контейнер для ссылок, расположенный рядом с логотипом */}
        <div
          className="flex px-[25px] text-black"
          style={{ marginLeft: "30px" }}
        >
          <Link href="/">Вакансии</Link>
          <Link href="/">Сотрудники</Link>
          <Link href="/">Зарплаты</Link>
        </div>
      </div>

      <div className="flex gap-[10px]">
        <SecondaryButton>Регистрация</SecondaryButton>
        <PrimaryButton>Войти</PrimaryButton>
      </div>
    </nav>
  );
}
