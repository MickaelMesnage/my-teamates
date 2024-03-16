"use client";

import { PopoverActionsButton } from "@/src/components/molecules/PopoverActionsButton";
import { teamLeaveAction } from "@/src/components/organisms/Team/actions/TeamLeaveAction";
import { useToaster } from "@/src/hooks/useToaster";
import { CrossIcon } from "@/src/svgs/CrossIcon";
import { useTransition } from "react";

export type TeamLeaveButtonProps = {
  teamId: string;
};

export const TeamLeaveButton = ({ teamId }: TeamLeaveButtonProps) => {
  const { toastError } = useToaster();
  const [isPending, startTransition] = useTransition();

  const onClick = () => {
    startTransition(() => {
      try {
        teamLeaveAction(teamId);
      } catch (error) {
        toastError("Erreur lors de la tentative de quitter l'équipe");
      }
    });
  };

  return (
    <PopoverActionsButton
      onClick={onClick}
      label="Quitter l'équipe"
      disabled={isPending}
      isLoading={isPending}
      icon={
        <CrossIcon className="size-5 fill-text-secondary group-hover/button:fill-text-primary " />
      }
    />
  );
};
