// shared/Button.tsx
import { button } from "@nextui-org/theme";
import React from "react";

type ButtonProps = {
  variant?: "solid" | "bordered";
  color?: "primary" | "secondary" | "danger";
  children: React.ReactNode;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  variant = "solid",
  color = "primary",
  children,
  onClick,
}) => {
  const buttonStyles = button({ variant, color }); // Получаем классы как строку

  return (
    <button className={buttonStyles} onClick={onClick} type="button">
      {children}
    </button>
  );
};

// Кастомная кнопка с фиксированным стилем `bordered`
export const SecondaryButton: React.FC<Omit<ButtonProps, "variant">> = ({
  color = "secondary",
  children,
  onClick,
}) => {
  return (
    <Button variant="bordered" color={color} onClick={onClick}>
      {children}
    </Button>
  );
};

export default Button;
