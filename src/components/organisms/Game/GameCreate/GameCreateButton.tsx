import { Button, ButtonProps } from "@/src/components/atoms/Button";
import { PAGES } from "@/src/pages";
import Link from "next/link";

export const GameCreateButton = (props: ButtonProps) => {
  return (
    <Link href={PAGES.games.create.url} passHref>
      <Button type="button" variant="primary" {...props}>
        Créer un match
      </Button>
    </Link>
  );
};
