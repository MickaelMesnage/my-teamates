import { URLS } from "@/urls";
import Link from "next/link";

export const TeamCreateButton = () => {
  return (
    <Link href={URLS.teams.create} passHref>
      <button>Create Team</button>
    </Link>
  );
};
