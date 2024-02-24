import { urls } from "@/urls";
import Link from "next/link";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type HeaderProps = Omit<ComponentProps<"header">, "children">;

export const Header = ({ className, ...rest }: HeaderProps) => {
  const LINKS = [
    { href: urls.home, label: "Accueil" },
    { href: urls.teams.list, label: "Equipes" },
    { href: urls.games.list, label: "Matchs" },
  ];

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
      <Link href={urls.signin}>Signin</Link>
    </header>
  );
};
