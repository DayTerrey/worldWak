"use client"; // Для корректной работы extendVariants

import { Button } from "@nextui-org/button";
import { extendVariants } from "@nextui-org/system";
import React from "react";

interface CustomButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  isDisabled?: boolean;
  variant?: "primary" | "secondary" | "custom";
}

// Расширяем стандартный компонент Button с кастомными вариантами
const MyButton = extendVariants(Button, {
  variants: {
    variant: {
      primary: "bg-purple-600 text-white hover:bg-purple-700",
      secondary:
        "border border-1 border-purple-600 text-purple-600 hover:border-purple-700 hover:text-purple-700",
      custom: "bg-green-500 text-white rounded-lg hover:bg-green-600",
    },
  },
  defaultVariants: {
    variant: "primary", // По умолчанию primary
  },
});

export const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  onClick,
  isDisabled,
  variant = "primary", // Вариант по умолчанию
}) => {
  return (
    <MyButton
      variant={variant} // Используем кастомный вариант
      isDisabled={isDisabled}
      onClick={onClick}
      className="h-[26px]" // Общий стиль высоты
    >
      {children}
    </MyButton>
  );
};
