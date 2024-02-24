"use server";

import { prisma } from "@/lib/prisma";

export async function teamDeleteAction(userId: string) {
  await prisma.team.delete({
    where: {
      id: userId,
    },
  });
  await new Promise((resolve) => setTimeout(resolve, 5000));
}
