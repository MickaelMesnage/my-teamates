import { Avatar } from "@/src/components/atoms/Avatar";
import { Card } from "@/src/components/atoms/Card";
import { Section } from "@/src/components/atoms/Section";
import { GameCreateButton } from "@/src/components/organisms/Game/GameCreate/GameCreateButton";
import { NoGames } from "@/src/components/organisms/Game/GameList/NoGames";
import { getGameList } from "@/src/components/organisms/Game/GameList/getGameList";
import { userConnectedGuard } from "@/src/guards/userConnectedGuard";
import { twMerge } from "tailwind-merge";

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
            <Card key={game.id} className="w-full h-80 flex gap-0">
              <div
                className={twMerge(
                  "w-1/3 h-full rounded-l-md",
                  "bg-[url('/photos/team-foot.webp')]",
                  "bg-cover bg-center"
                )}
              />
              <div className="relative grow p-6">
                <h2 className="text-xl text-text-primary">{`Match ${new Intl.DateTimeFormat(
                  "fr-FR",
                  {
                    dateStyle: "full",
                    timeStyle: "short",
                  }
                ).format(new Date(game.date))}`}</h2>
                <div className="flex items-center gap-4">
                  {game.participants.map((participant) => (
                    <Avatar key={participant.id} {...participant} />
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </ul>
      </Section.Body>
    </Section>
  );
};
