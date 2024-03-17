import { GameCreateForm } from "@/src/components/organisms/Game/GameCreate/GameCreateForm";
import { getTeams } from "@/src/components/organisms/Game/GameCreate/getTeams";

export const GameCreate = async () => {
  const teams = await getTeams();

  return <GameCreateForm teams={teams} />;
};
