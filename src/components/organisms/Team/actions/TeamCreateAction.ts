"use server";

import { authGuard } from "@/src/guards/authGuard";
import { prisma } from "@/src/lib/prisma";
import { generateToken } from "@/src/lib/utils/token";
import { PAGES } from "@/src/pages";
import { revalidatePath } from "next/cache";

export async function teamCreateAction(formData: FormData) {
  const user = await authGuard();

  const name = formData.get("name") as string;

  let unique = false;
  let token = "";
  while (!unique) {
    // Générer un token de 6 bytes, qui sera plus long une fois converti en hexadécimal
    // puis sélectionner les 8 premiers caractères pour obtenir un token de la longueur désirée
    token = generateToken();
    // Vérifier l'unicité du token dans la base de données
    const count = await prisma.team.count({
      where: {
        token: token,
      },
    });
    if (count === 0) unique = true;
  }

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
