"use client";

import { Button } from "@/components/atoms/Button";
import { useToaster } from "@/hooks/useToaster";
import { PAGES } from "@/pages";
import { ShareIcon } from "@/svgs/ShareIcon";

export type TeamDeleteButtonProps = {
  teamToken: string;
};

export const TeamShareButton = ({ teamToken }: TeamDeleteButtonProps) => {
  const { toastError } = useToaster();
  const onClick = async () => {
    try {
      await navigator.clipboard.writeText(
        `${process.env.NEXT_PUBLIC_FRONTEND_URL}${PAGES.teams.join.url(
          teamToken
        )}`
      );
      console.log("Lien de partage copié");
    } catch (err) {
      toastError("Erreur lors de la copie du lien de partage");
    }
  };

  return (
    <Button
      type="button"
      variant="ghost"
      fullSize
      centered={false}
      onClick={onClick}
    >
      <ShareIcon className="size-5 fill-text-secondary group-hover/button:fill-text-primary " />
      <span className="text-base text-text-secondary group-hover/button:text-text-primary">
        Copier le lien de partage
      </span>
    </Button>
  );
};
