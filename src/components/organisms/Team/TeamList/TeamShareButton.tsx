"use client";

import { PopoverActionsButton } from "@/src/components/molecules/PopoverActionsButton";
import { useToaster } from "@/src/hooks/useToaster";
import { PAGES } from "@/src/pages";
import { ShareIcon } from "@/src/svgs/ShareIcon";

export type TeamDeleteButtonProps = {
  teamToken: string;
};

export const TeamShareButton = ({ teamToken }: TeamDeleteButtonProps) => {
  const { toastError, toastSuccess } = useToaster();

  const onClick = async () => {
    try {
      await navigator.clipboard.writeText(
        `${process.env.NEXT_PUBLIC_FRONTEND_URL}${PAGES.teams.join.url(
          teamToken
        )}`
      );
      toastSuccess("Lien de partage copié");
    } catch (err) {
      toastError("Erreur lors de la copie du lien de partage");
    }
  };

  return (
    <PopoverActionsButton
      onClick={onClick}
      label="Copier le lien de partage"
      icon={
        <ShareIcon className="size-5 fill-text-secondary group-hover/button:fill-text-primary " />
      }
    />
  );
};
