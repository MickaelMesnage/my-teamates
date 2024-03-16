import { Button, ButtonProps } from "@/src/components/atoms/Button";
import { ReactNode } from "react";

export type PopoverActionsButtonProps = {
  icon: ReactNode;
  label: string;
} & ButtonProps;

export const PopoverActionsButton = ({
  icon,
  label,
  ...props
}: PopoverActionsButtonProps) => {
  return (
    <Button type="button" variant="ghost" fullSize centered={false} {...props}>
      {icon}
      <span className="text-base text-text-secondary group-hover/button:text-text-primary">
        {label}
      </span>
    </Button>
  );
};
