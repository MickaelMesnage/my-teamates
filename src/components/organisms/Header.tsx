import { SignoutButton } from "@/src/components/organisms/Signout/SignoutButton";
import { auth } from "@/src/lib/auth";
import { PAGES } from "@/src/pages";
import Link from "next/link";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type HeaderProps = Omit<ComponentProps<"header">, "children">;

export const Header = async ({ className, ...rest }: HeaderProps) => {
  const session = await auth();
  const isLogged = !!session;

  const LINKS = [{ href: PAGES.home.url, label: "Accueil" }];

  if (isLogged) {
    LINKS.push({ href: PAGES.teams.list.url, label: "Equipes" });
    LINKS.push({ href: PAGES.games.list.url, label: "Matchs" });
  }

  return (
    <header
      className={twMerge(
        "w-full",
        "bg-gray-100 border-b",
        "flex items-center justify-between gap-4",
        className
      )}
      {...rest}
    >
      <ul className="flex items-center gap-4">
        {LINKS.map(({ href, label }) => (
          <li key={href} className="list-none">
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
      {isLogged ? (
        <>
          <span>{session.user?.email}</span>
          <SignoutButton />
        </>
      ) : (
        <Link href={PAGES.auth.signin.url}>Signin</Link>
      )}
    </header>
  );
};
