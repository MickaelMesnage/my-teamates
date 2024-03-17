import { GameCreateButton } from "@/src/components/organisms/Game/GameCreate/GameCreateButton";

export const NoGames = () => {
  return (
    <>
      <h1 className="text-xl text-text-primary">
        Vous n&apos;êtes inscrit à aucun match pour le moment
      </h1>
      <p>N&apos;attendez plus et créez un match !</p>
      <GameCreateButton />
    </>
  );
};
