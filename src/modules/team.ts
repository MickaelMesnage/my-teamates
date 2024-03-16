import { IUserService } from "@/src/modules/user";
import { Prisma } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";

export interface ITeamService {
  list(): Promise<{
    members: {
      image: string | null;
      id: string;
      name: string;
      email: string;
    }[];
    }
  }>;
}

export class TeamService implements ITeamService {
  private _userService: IUserService;
  private _teamRepository: Prisma.TeamDelegate<DefaultArgs>;

  constructor(
    userService: IUserService,
    teamRepository: Prisma.TeamDelegate<DefaultArgs>
  ) {
    this._userService = userService;
    this._teamRepository = teamRepository;
  }

  public async list() {
    const user = await this._userService.getConnectedUser();

    const teamList = await this._teamRepository.findMany({
      where: {
        members: {
          some: {
            id: user.id,
          },
        },
      },
      include: {
        members: {
          select: {
            image: true,
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    return teamList.map((team) =>);
  }

  public createTeam() {
    return;
  }
}
