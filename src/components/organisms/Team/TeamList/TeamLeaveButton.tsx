"use client";

import { Button } from "@/src/components/atoms/Button";
import { teamLeaveAction } from "@/src/components/organisms/Team/TeamLeave/TeamLeaveAction";
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
    <Button
      type="button"
      variant="ghost"
      fullSize
      centered={false}
      onClick={onClick}
    >
      <CrossIcon className="size-5 fill-text-secondary group-hover/button:fill-text-primary " />
      <span className="text-base text-text-secondary group-hover/button:text-text-primary">
        Quitter l&apos;équipe
      </span>
    </Button>
  );
};
