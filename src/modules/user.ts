import { auth } from "@/src/lib/auth";
import { User } from "next-auth";

export interface IUserService {
  getConnectedUser(): Promise<
    User & {
      id: string;
    }
  >;
}

export class UserService implements IUserService {
  constructor() {}

  public async getConnectedUser() {
    const session = await auth();

    if (!session) {
      throw new Error("getRequiredUser: Session not found");
    }

    if (!session.user) {
      throw new Error("getRequiredUser: User not found");
    }

    return session.user;
  }
}
