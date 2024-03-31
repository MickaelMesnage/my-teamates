import { z } from "zod";

export const gameCreateSchema = z.object({
  test: z.string().min(1, "Champs requis"),
  //teamId: z.string().min(1, "Champs requis"),
  // date: z.string().min(1, "Champs requis"),
  // time: z.string().min(1, "Champs requis"),
  // place: z.string(),
  // nbPlayers: z.number(),
});
