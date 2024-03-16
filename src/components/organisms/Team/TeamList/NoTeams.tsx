import { Button } from "@/src/components/atoms/Button";
import { TeamCreateButton } from "@/src/components/organisms/Team/TeamCreate/TeamCreateButton";
import { TeamJoinButton } from "@/src/components/organisms/Team/TeamJoin/TeamJoinButton";
import { PAGES } from "@/src/pages";
import Link from "next/link";

export const NoTeams = () => {
  return (
    <>
      <h1 className="text-xl text-text-primary">
        Vous n&apos;êtes insrcit à aucune équipe pour le moment
      </h1>
      <p>N&apos;attendez plus et créer votre équipe ou rejoignez vos amis !</p>
      <TeamCreateButton />
      <TeamJoinButton />
    </>
  );
};
