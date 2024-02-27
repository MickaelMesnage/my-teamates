import { Team } from "@prisma/client";

export class DomainTeam {
  constructor(private team: Team) {}

  canRemoveTeam(userId: string) {
    return true;
  }
}
