"use server";

import { authGuard } from "@/guards/authGuard";
import { prisma } from "@/lib/prisma";
import { generateToken } from "@/lib/utils/token";
import { PAGES } from "@/pages";
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
