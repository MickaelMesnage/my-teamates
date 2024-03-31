import { Avatar } from "@/src/components/atoms/Avatar";
import { Card } from "@/src/components/atoms/Card";
import { Section } from "@/src/components/atoms/Section";
import { PopoverActions } from "@/src/components/molecules/PopoverActions";
import { TeamCreateButton } from "@/src/components/organisms/Team/TeamCreate/TeamCreateButton";
import { NoTeams } from "@/src/components/organisms/Team/TeamList/NoTeams";
import { TeamDeleteButton } from "@/src/components/organisms/Team/TeamList/TeamDeleteButton";
import { TeamLeaveButton } from "@/src/components/organisms/Team/TeamList/TeamLeaveButton";
import { TeamShareButton } from "@/src/components/organisms/Team/TeamList/TeamShareButton";
import { getTeamList } from "@/src/components/organisms/Team/TeamList/getTeamList";
import { userConnectedGuard } from "@/src/guards/userConnectedGuard";
import { twMerge } from "tailwind-merge";

export const TeamList = async () => {
  await userConnectedGuard();
  const teamList = await getTeamList();

  if (teamList.length === 0) {
    return <NoTeams />;
  }

  return (
    <Section>
      <Section.Header>
        <Section.Header.Title>Equipes</Section.Header.Title>
        <Section.Header.Actions>
          <TeamCreateButton />
        </Section.Header.Actions>
      </Section.Header>
      <Section.Body>
        <ul className="flex flex-col gap-4">
          {teamList.map((team) => (
            <div key={team.id}>
              <li>
                <Card className="w-full h-80 flex gap-0">
                  <div
                    className={twMerge(
                      "w-1/3 h-full rounded-l-md",
                      "bg-[url('/photos/team-foot.webp')]",
                      "bg-cover bg-center"
                    )}
                  />
                  <div className="relative grow p-6">
                    <h2 className="text-xl text-text-primary">{team.name}</h2>
                    <p className="text-base text-text-secondary">
                      Aucune description pour cette équipe
                    </p>
                    <div className="flex items-center gap-4">
                      {team.members.map((member) => (
                        <Avatar key={member.id} {...member} />
                      ))}
                    </div>
                    <div className="absolute right-6 top-6">
                      <PopoverActions>
                        {team.canDeleteTeam && (
                          <TeamDeleteButton teamId={team.id} />
                        )}
                        {team.canLeaveTeam && (
                          <TeamLeaveButton teamId={team.id} />
                        )}
                        {team.canShareTeam && (
                          <TeamShareButton teamToken={team.token} />
                        )}
                      </PopoverActions>
                    </div>
                  </div>
                </Card>
              </li>
            </div>
          ))}
        </ul>
      </Section.Body>
    </Section>
  );
};
