"use client";

import { Dropdown } from "@/components/atoms/Dropdown";
import { IconButton } from "@/components/atoms/IconButton";
import { BurgerIcon } from "@/svgs/BurgerIcon";
import * as Popover from "@radix-ui/react-popover";
import { ComponentProps, ReactNode, useState } from "react";
import { twMerge } from "tailwind-merge";

export type PopoverActionsProps = {
  children: ReactNode;
  disabled?: ComponentProps<"button">["disabled"];
};

export const PopoverActions = ({
  children,
  disabled = false,
}: PopoverActionsProps) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger
        onClick={(e) => {
          setOpen((e) => !e);
          e.preventDefault();
        }}
        asChild
      >
        <IconButton disabled={disabled}>
          <BurgerIcon
            className={twMerge(
              "w-5 h-5 fill-text-secondary group-hover/icon-button:fill-text-primary",
              disabled && "cursor-not-allowed"
            )}
          />
        </IconButton>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className="absolute top-0 -right-4 z-30"
          sideOffset={5}
          onClick={(e) => e.preventDefault()}
        >
          <Dropdown>
            <Dropdown.Content>{children}</Dropdown.Content>
          </Dropdown>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};
