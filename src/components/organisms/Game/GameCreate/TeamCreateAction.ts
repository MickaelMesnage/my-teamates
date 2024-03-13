"use server";

import { authGuard } from "@/src/guards/authGuard";
import { prisma } from "@/src/lib/prisma";
import { generateToken } from "@/src/lib/utils/token";
import { PAGES } from "@/src/pages";
import { revalidatePath } from "next/cache";

export async function teamCreateAction(formData: FormData) {
  const user = await authGuard();

  const name = formData.get("name") as string;

  const token = generateToken();

  await prisma.team.create({
    data: {
      name,
      token,
      members: {
        connect: [{ id: user.id }],
      },
      adminId: user.id,
    },
  });

  revalidatePath(PAGES.teams.list.url);
}
