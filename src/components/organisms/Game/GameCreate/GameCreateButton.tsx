import { Button } from "@/components/atoms/Button";
import { PAGES } from "@/pages";
import Link from "next/link";

export const GameCreateButton = () => {
  return (
    <Link href={PAGES.games.create.url} passHref>
      <Button type="button">Créer un match</Button>
    </Link>
  );
};
