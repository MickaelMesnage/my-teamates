import { Button } from "@/components/atoms/Button";
import { URLS } from "@/urls";
import Link from "next/link";

export const GameCreateButton = () => {
  return (
    <Link href={URLS.gamesCreate} passHref>
      <Button type="button">Créer un match</Button>
    </Link>
  );
};
