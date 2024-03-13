import { Button } from "@/src/components/atoms/Button";
import { PAGES } from "@/src/pages";
import Link from "next/link";

export const GameCreateButton = () => {
  return (
    <Link href={PAGES.games.create.url} passHref>
      <Button type="button">Créer un match</Button>
    </Link>
  );
};
