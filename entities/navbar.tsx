// entities/Navbar/Navbar.tsx
import Link from "next/link";
import { button } from "@nextui-org/theme";

export default function Navbar() {
  // Создаем стили для кнопок с использованием `button`
  const primaryButtonStyles = button({ variant: "solid", color: "primary" });
  const secondaryButtonStyles = button({
    variant: "bordered",
    color: "secondary",
  });

  return (
    <nav className="flex justify-between items-center p-4 bg-opacity-80 bg-white shadow-md">
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-4">
          {/* Логотип и название */}
          <img src="/favicon.ico" alt="Логотип" className="h-8 w-8" />
          <span className="text-black">МирВакансий</span>
        </div>

        {/* Контейнер для ссылок, расположенный рядом с логотипом */}
        <div className="flex px-{25} text-black" style={{ marginLeft: "30px" }}>
          <Link href="/">Вакансии</Link>
          <Link href="/">Сотрудники</Link>
          <Link href="/">Зарплаты</Link>
        </div>
      </div>

      {/* <div className="flex space-x-4">
        <button className={primaryButtonStyles()} type="button">Регистрация</button>
        <button className={secondaryButtonStyles()} type="button">Войти</button>
      </div> */}
    </nav>
  );
}
