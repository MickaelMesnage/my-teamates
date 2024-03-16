import { Button, ButtonProps } from "@/src/components/atoms/Button";
import { PAGES } from "@/src/pages";
import Link from "next/link";

export const TeamJoinButton = (props: ButtonProps) => {
  return (
    <Link href={PAGES.teams.join.url()} passHref>
      <Button type="button" variant="primary" {...props}>
        Rejoindre une équipe
      </Button>
    </Link>
  );
};
