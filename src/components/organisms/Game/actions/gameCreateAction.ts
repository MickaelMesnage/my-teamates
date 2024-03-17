"use server";

import { authGuard } from "@/src/guards/authGuard";
import { PAGES } from "@/src/pages";
import { revalidatePath } from "next/cache";

export async function gameCreateAction(formData: FormData) {
  const user = await authGuard();

  const date = formData.get("date") as string;
  const time = formData.get("time") as string;
  const place = formData.get("place") as string;

  console.log({ date, time, place });

  // await prisma.game.create({
  //   data: {
  //     date: new Date(`${date}T${time}`),
  //     place,
  //     members: {
  //       connect: [{ id: user.id }],
  //     },
  //     adminId: user.id,
  //   },
  // });

  revalidatePath(PAGES.teams.list.url);
}
