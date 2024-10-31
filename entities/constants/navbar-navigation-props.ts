interface NavLinkProps {
  children: string;
  href: string;
}

interface ButtonProps {
  children: string;
}

interface NavbarNavigationProps {
  mainLinks: NavLinkProps[];
  registrationButtons: ButtonProps[];
}

export const NAVBAR_NAVIGATION_PROPS: NavbarNavigationProps = {
  mainLinks: [
    { children: "Вакансии", href: "/" },
    { children: "Сотрудники", href: "/" },
    { children: "Зарплаты", href: "/" },
  ],
  registrationButtons: [{ children: "Регистрация" }, { children: "Войти" }],
} as const;
