import { PAGES } from "@/pages";
import Link from "next/link";

export const TeamCreateButton = () => {
  return (
    <Link href={PAGES.teams.create.url} passHref>
      <button>Créer une équipe</button>
    </Link>
  );
};
