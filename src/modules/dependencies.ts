import { prisma } from "@/src/lib/prisma";
import { TeamService } from "@/src/modules/team";
import { UserService } from "@/src/modules/user";

export const userService = new UserService();
const teamRepository = prisma.team;
export const teamService = new TeamService(userService, teamRepository);
