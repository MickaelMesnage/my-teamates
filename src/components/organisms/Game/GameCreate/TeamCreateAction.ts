"use server";

import { authGuard } from "@/guards/authGuard";
import { prisma } from "@/lib/prisma";
import { URLS } from "@/urls";
import { revalidatePath } from "next/cache";

export async function teamCreateAction(formData: FormData) {
  const user = await authGuard();

  const name = formData.get("name") as string;

  await prisma.team.create({
    data: {
      name,
      members: {
        connect: [{ id: user.id }],
      },
      adminId: user.id,
    },
  });

  revalidatePath(URLS.teamsList);
}
