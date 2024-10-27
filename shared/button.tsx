import { Button } from "@nextui-org/button";

type CustomButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

// Primary Button with solid variant and primary color
export const PrimaryButton: React.FC<CustomButtonProps> = ({
  children,
  onClick,
}) => (
  <Button color="primary" variant="solid" onClick={onClick}>
    {children}
  </Button>
);

// Secondary Button with bordered variant and secondary color
export const SecondaryButton: React.FC<CustomButtonProps> = ({
  children,
  onClick,
}) => (
  <Button color="secondary" variant="bordered" onClick={onClick}>
    {children}
  </Button>
);
