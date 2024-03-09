"use client";

import { Button } from "@/components/atoms/Button";
import { teamDeleteAction } from "@/components/organisms/Team/TeamDelete/TeamDeleteAction";
import { DeleteIcon } from "@/svgs/DeleteIcon";
import { useTransition } from "react";

export type TeamDeleteButtonProps = {
  teamId: string;
};

export const TeamDeleteButton = ({ teamId }: TeamDeleteButtonProps) => {
  const [isPending, startTransition] = useTransition();

  const onClick = () => {
    startTransition(() => {
      teamDeleteAction(teamId);
    });
  };

  return (
    <Button
      type="button"
      variant="ghost"
      fullSize
      centered={false}
      onClick={onClick}
      isLoading={isPending}
    >
      <DeleteIcon className="size-5 fill-text-secondary group-hover/button:fill-text-primary " />
      <span className="text-base text-text-secondary group-hover/button:text-text-primary">
        Supprimer
      </span>
    </Button>
  );
};
