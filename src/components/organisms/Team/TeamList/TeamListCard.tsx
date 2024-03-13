"use client";

import { Card } from "@/src/components/atoms/Card";
import { FakeAvatar } from "@/src/components/atoms/FakeAvatar";
import { TeamListCardActions } from "@/src/components/organisms/Team/TeamList/TeamListCardActions";
import { computeUserInitials } from "@/src/domain/computeUserInitials";
import FootImage from "@/public/photos/team-foot.webp";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

type TeamListCardProps = {
  teamId: string;
  teamToken: string;
  name: string;
  members: {
    image: string | null;
    id: string;
    name: string | null;
    email: string | null;
  }[];
  canDeleteTeam: boolean;
  canLeaveTeam: boolean;
  canShareTeam: boolean;
};

export const TeamListCard = async ({
  teamId,
  teamToken,
  name,
  members,
  canDeleteTeam,
  canLeaveTeam,
  canShareTeam,
}: TeamListCardProps) => {
  return (
    <Card className="w-full h-80 flex gap-0">
      {/* <Image
        objectFit="cover"
        className="w-1/3 h-full rounded-l-md"
        src={FootImage}
        alt="foot"
      /> */}
      <div
        className={twMerge(
          "w-1/3 h-full rounded-l-md",
          "bg-[url('/photos/team-foot.webp')]",
          "bg-cover bg-center"
        )}
      />
      <div className="relative grow p-6">
        <h2 className="text-xl text-text-primary">{name}</h2>
        <p className="text-base text-text-secondary">
          Aucune description pour cette équipe
        </p>
        <div className="flex items-center gap-4">
          {members.map((member) => (
            <div key={member.id}>
              {member.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  alt={"profile picture"}
                  className="size-12 rounded-full"
                  src={member.image || undefined}
                />
              ) : (
                <FakeAvatar
                  label={computeUserInitials(member.name, member.email)}
                />
              )}

              {/* <Switch
              id="participation"
              label="Je participe"
              checked={value && value.split(",").includes(choice)}
              onCheckedChange={(checked) => {
                if (checked) {
                  if (!value) {
                    onChange(choice);
                    return;
                  }
                  onChange([...value.split(","), choice].join(","));
                  return;
                }

                onChange(
                  value
                    .split(",")
                    .filter((val: string) => val !== choice)
                    .join(",")
                );
              }}
            /> */}
            </div>
          ))}
        </div>
        <div className="absolute right-6 top-6">
          <TeamListCardActions
            teamId={teamId}
            teamToken={teamToken}
            canDeleteTeam={canDeleteTeam}
            canLeaveTeam={canLeaveTeam}
            canShareTeam={canShareTeam}
          />
        </div>
      </div>
      {/* <Card.Header>
        <Card.Actions>
          <TeamListCardActions
            teamId={teamId}
            teamToken={teamToken}
            canDeleteTeam={canDeleteTeam}
            canLeaveTeam={canLeaveTeam}
            canShareTeam={canShareTeam}
          />
        </Card.Actions>
      </Card.Header> */}
      <Card.Body></Card.Body>
    </Card>
  );
};
