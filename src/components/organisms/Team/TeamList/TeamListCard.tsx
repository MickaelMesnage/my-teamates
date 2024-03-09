"use client";

import { Card } from "@/components/atoms/Card";
import { PopoverActions } from "@/components/molecules/PopoverActions";
import { TeamDeleteButton } from "@/components/organisms/Team/TeamList/TeamDeleteButton";
import { TeamListCardActions } from "@/components/organisms/Team/TeamList/TeamListCardActions";
import { TeamShareButton } from "@/components/organisms/Team/TeamList/TeamShareButton";

type TeamListCardProps = {
  teamId: string;
  teamToken: string;
  name: string;
  members: {
    image: string | null;
    id: string;
    name: string | null;
  }[];
  canDeleteTeam: boolean;
};

export const TeamListCard = async ({
  teamId,
  teamToken,
  name,
  members,
  canDeleteTeam,
}: TeamListCardProps) => {
  return (
    <Card>
      <Card.Header>
        <h2>{name}</h2>
        <Card.Actions>
          <TeamListCardActions
            teamId={teamId}
            teamToken={teamToken}
            canDeleteTeam={canDeleteTeam}
          />
        </Card.Actions>
      </Card.Header>
      <Card.Body>
        {members.map((member) => (
          <div key={member.id}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt={`profile picture of ${member.name}`}
              className="size-12 rounded-full"
              src={member.image || undefined}
            />
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
      </Card.Body>
    </Card>
  );
};
