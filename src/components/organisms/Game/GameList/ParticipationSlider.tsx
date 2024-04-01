"use client";

import { Switch } from "@/src/components/atoms/Switch";
import { gameUpdateParticipationAction } from "@/src/components/organisms/Game/actions/gameUpdateParticipationAction";
import { useToaster } from "@/src/hooks/useToaster";
import { useTransition } from "react";

type ParticipationSliderProps = {
  hasJoined: boolean;
  gameId: string;
};

export const ParticipationSlider = ({
  hasJoined,
  gameId,
}: ParticipationSliderProps) => {
  const { toastError } = useToaster();
  const [isPending, startTransition] = useTransition();

  const updateParticipation = async (hasJoined: boolean) => {
    console.log("ddd");
    startTransition(async () => {
      try {
        const formData = new FormData();
        formData.append("gameId", gameId);
        formData.append("hasJoined", hasJoined.toString());

        await gameUpdateParticipationAction(formData);
      } catch (error) {
        toastError("Erreur lors de la mise a jour de l'équipe");
      }
    });
  };

  return (
    <Switch
      id={`switch_${gameId}`}
      label="Participer"
      checked={hasJoined}
      onCheckedChange={updateParticipation}
    />
    // <div className="flex items-center gap-4">
    //   {hasJoined ? (
    //     <button onClick={() => updateParticipation(false)} type="button">
    //       Quitter
    //     </button>
    //   ) : (
    //     <button onClick={() => updateParticipation(true)} type="button">
    //       Rejoindre
    //     </button>
    //   )}
    // </div>
  );
};
