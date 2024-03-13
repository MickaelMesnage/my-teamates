import { PAGES } from "@/src/pages";
import Link from "next/link";

export const TeamCreateButton = () => {
  return (
    <Link href={PAGES.teams.create.url} passHref>
      <button>Créer une équipe</button>
    </Link>
  );
};
