import { Section } from "@/src/components/atoms/Section";
import { GameCreateButton } from "@/src/components/organisms/Game/GameCreate/GameCreateButton";
import { NoGames } from "@/src/components/organisms/Game/GameList/NoGames";
import { getGameList } from "@/src/components/organisms/Game/GameList/getGameList";
import { userConnectedGuard } from "@/src/guards/userConnectedGuard";

export const GameList = async () => {
  await userConnectedGuard();
  const gameList = await getGameList();

  if (gameList.length === 0) {
    return <NoGames />;
  }

  return (
    <Section>
      <Section.Header>
        <Section.Header.Title>Matchs</Section.Header.Title>
        <Section.Header.Actions>
          <GameCreateButton />
        </Section.Header.Actions>
      </Section.Header>
      <Section.Body>
        <ul className="flex flex-col gap-4">
          {gameList.map((game) => (
            <div key={game.id}>
              <li>
                <pre>{JSON.stringify(game)}</pre>
              </li>
            </div>
          ))}
        </ul>
      </Section.Body>
    </Section>
  );
};
