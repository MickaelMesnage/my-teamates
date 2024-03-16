import { IconButton, IconButtonProps } from "@/src/components/atoms/IconButton";
import { BurgerIcon } from "@/src/svgs/BurgerIcon";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

type BurgerIconButtonProps = IconButtonProps;

export const BurgerIconButton = forwardRef<
  HTMLButtonElement,
  BurgerIconButtonProps
>((props, ref) => {
  return (
    <IconButton {...props} ref={ref}>
      <BurgerIcon
        className={twMerge(
          "w-5 h-5 fill-text-secondary group-hover/icon-button:fill-text-primary"
        )}
      />
    </IconButton>
  );
});

BurgerIconButton.displayName = "BurgerIconButton";
