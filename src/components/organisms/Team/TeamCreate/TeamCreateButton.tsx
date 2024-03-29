import { Button, ButtonProps } from "@/src/components/atoms/Button";
import { PAGES } from "@/src/pages";
import Link from "next/link";

export const TeamCreateButton = (props: ButtonProps) => {
  return (
    <Link href={PAGES.teams.create.url} passHref>
      <Button type="button" variant="primary" {...props}>
        Créer une équipe
      </Button>
    </Link>
  );
};
