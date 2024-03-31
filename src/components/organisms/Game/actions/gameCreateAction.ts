"use server";

import { gameCreateSchema } from "@/src/components/organisms/Game/actions/gameCreateSchema";
import { authGuard } from "@/src/guards/authGuard";
import { PAGES } from "@/src/pages";
import { parseWithZod } from "@conform-to/zod";
import { revalidatePath } from "next/cache";

export async function gameCreateAction(prevState: unknown, formData: FormData) {
  console.log("debut");
  const user = await authGuard();

  const submission = parseWithZod(formData, {
    schema: gameCreateSchema,
  });

  // console.log({ submission });

  await new Promise((resolve) => setTimeout(resolve, 5000));

  // const { date, time, teamId, place, nbPlayers } = submission.value;

  // await prisma.game.create({
  //   data: {
  //     date: new Date(`${date}T${time}`),
  //     place,
  //     nbPlayers,
  //     teamId,
  //     participants: {
  //       connect: [{ id: user.id }],
  //     },
  //     adminId: user.id,
  //   },
  // });
  console.log("rrrererere");
  if (submission.status !== "success") {
    return submission.reply();
  }
  console.log("fin");

  revalidatePath(PAGES.teams.list.url);
}
