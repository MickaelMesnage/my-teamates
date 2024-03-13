import { prisma } from "@/src/lib/prisma";
import { PAGES } from "@/src/pages";
import Image from "next/image";
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
          name: true,
        },
      },
    },
  });

  if (!team) {
    redirect(PAGES.teams.list.url);
  }

  return (
    <div>
      <span>{team.name}</span>
      {team.members.map((member) => (
        <>
          {member.image && (
            <Image
              width={50}
              height={50}
              alt={`profile picture of ${member.name}`}
              className="size-12 rounded-full"
              key={member.id}
              src={member.image}
            />
          )}
        </>
      ))}
    </div>
  );
};
