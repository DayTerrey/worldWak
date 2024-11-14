import {
  Button as NextUIButton,
  ButtonProps as NextUIButtonProps,
} from "@nextui-org/button";
import React from "react";

/* 
    Экспортируем interface из shared папки для дальнейшего использования в других модулях
*/
export interface CustomButtonProps extends NextUIButtonProps {
  children: React.ReactNode;
}

// Primary Button with solid variant and primary color
export const PrimaryButton: React.FC<CustomButtonProps> = ({
  children,
  ...props // Передаем остальные пропсы в NextUIButton
}) => (
  <NextUIButton
    color="primary"
    variant="solid"
    className="bg-purple-600 h-[26px]"
    {...props} // Добавляем все пропсы, полученные от родителя
  >
    {children}
  </NextUIButton>
);

// Secondary Button with bordered variant and secondary color
export const SecondaryButton: React.FC<CustomButtonProps> = ({
  children,
  ...props
}) => (
  <NextUIButton
    color="secondary"
    variant="bordered"
    className="border-purple-600 h-[26px]"
    {...props}
  >
    {children}
  </NextUIButton>
);
