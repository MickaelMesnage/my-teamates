"use client";

import { PopoverActionsButton } from "@/src/components/molecules/PopoverActionsButton";
import { teamDeleteAction } from "@/src/components/organisms/Team/actions/TeamDeleteAction";
import { useToaster } from "@/src/hooks/useToaster";
import { DeleteIcon } from "@/src/svgs/DeleteIcon";
import { MouseEventHandler, ReactEventHandler, useTransition } from "react";

export type TeamDeleteButtonProps = {
  teamId: string;
};

export const TeamDeleteButton = ({ teamId }: TeamDeleteButtonProps) => {
  const { toastError, toastSuccess } = useToaster();
  const [isPending, startTransition] = useTransition();

  const onClick = () => {
    startTransition(async () => {
      try {
        await teamDeleteAction(teamId);
        toastSuccess("L'équipe a été supprimée");
      } catch {
        toastError("Erreur lors de la tentative de suppression de l'équipe");
      }
    });
  };

  return (
    <PopoverActionsButton
      onClick={onClick}
      label="Supprimer"
      disabled={isPending}
      isLoading={isPending}
      icon={
        <DeleteIcon className="size-5 fill-text-secondary group-hover/button:fill-text-primary " />
      }
    />
  );
};
