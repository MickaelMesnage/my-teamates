import { urls } from "@/urls";
import Link from "next/link";

export const TeamCreateButton = () => {
  return (
    <Link href={urls.teams.create} passHref>
      <button>Create Team</button>
    </Link>
  );
};
