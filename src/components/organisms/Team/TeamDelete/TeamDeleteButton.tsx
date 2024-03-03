"use client";

import { teamDeleteAction } from "@/components/organisms/Team/TeamDelete/TeamDeleteAction";
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
    <>
      <button onClick={onClick}>Delete</button>
      {isPending && <span>pending</span>}
    </>
  );
};
