import { prisma } from "@/lib/prisma";
import { URLS } from "@/urls";
import { redirect } from "next/navigation";

type TeamProps = {
  teamId: string;
};

export const Team = async ({ teamId }: TeamProps) => {
  const team = await prisma.team.findUnique({
    where: {
      id: teamId,
    },
    include: {
      members: {
        select: {
          image: true,
          id: true,
        },
      },
    },
  });

  if (!team) {
    redirect(URLS.teamsList);
  }

  return (
    <div>
      <span>{team.name}</span>
      {team.members.map((member) => (
        <img
          className="size-12 rounded-full"
          key={member.id}
          src={member.image || undefined}
        />
      ))}
    </div>
  );
};
