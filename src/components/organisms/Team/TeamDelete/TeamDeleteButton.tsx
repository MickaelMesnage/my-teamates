"use client";

import { Button, ButtonProps } from "@/src/components/atoms/Button";
import { teamDeleteAction } from "@/src/components/organisms/Team/TeamDelete/TeamDeleteAction";
import { DeleteIcon } from "@/src/svgs/DeleteIcon";
import { useTransition } from "react";
import { twMerge } from "tailwind-merge";

export type TeamDeleteButtonProps = {
  teamId: string;
} & Omit<ButtonProps, "onClick">;

export const TeamDeleteButton = ({
  teamId,
  className,
  ...buttonProps
}: TeamDeleteButtonProps) => {
  const [isPending, startTransition] = useTransition();

  const onClick = () => {
    startTransition(() => {
      teamDeleteAction(teamId);
    });
  };

  return (
    <Button
      type="button"
      onClick={onClick}
      isLoading={isPending}
      className={twMerge("flex items-center gap-2", className)}
      {...buttonProps}
    >
      <DeleteIcon className="size-5 fill-text-secondary group-hover/button:fill-text-primary " />
      <span className="text-base text-text-secondary group-hover/button:text-text-primary">
        Supprimer
      </span>
    </Button>
  );
};
