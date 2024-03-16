"use client";

import { Dropdown } from "@/src/components/atoms/Dropdown";
import { BurgerIconButton } from "@/src/components/molecules/BurgerIconButton";
import * as Popover from "@radix-ui/react-popover";
import { ComponentProps, ReactNode, useState } from "react";
import { twMerge } from "tailwind-merge";

export type PopoverActionsProps = {
  children: ReactNode;
  disabled?: ComponentProps<"button">["disabled"];
  className?: ComponentProps<"div">["className"];
};

export const PopoverActions = ({
  children,
  disabled,
  className,
}: PopoverActionsProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger
        onClick={(e) => {
          setOpen((e) => !e);
          e.preventDefault();
        }}
        asChild
      >
        <BurgerIconButton disabled={disabled} />
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className={twMerge("absolute top-0 -right-4 z-30", className)}
          sideOffset={5}
          onClick={(e) => e.preventDefault()}
        >
          <Dropdown>
            <Dropdown.Content onClick={() => setOpen(false)}>
              {children}
            </Dropdown.Content>
          </Dropdown>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};
