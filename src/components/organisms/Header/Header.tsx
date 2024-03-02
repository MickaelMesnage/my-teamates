import { ProfileDropdown } from "@/components/organisms/Header/ProfileDropdown";
import { SignoutButton } from "@/components/organisms/SignoutButton/SignoutButton";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import { auth, getAuthSession } from "@/lib/auth";
import { ProfileIcon } from "@/svgs/ProfileIcon";
import { URLS } from "@/urls";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type HeaderProps = Omit<ComponentProps<"header">, "children">;

export const Header = async ({ className, ...rest }: HeaderProps) => {
  const session = await getAuthSession();
  const isLogged = !!session;

  const LINKS = [{ href: URLS.home, label: "Accueil" }];

  if (isLogged) {
    LINKS.push({ href: URLS.teamsList, label: "Equipes" });
    LINKS.push({ href: URLS.gamesList, label: "Matchs" });
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
          <ProfileDropdown session={session} />
          {/* <span>{session.user?.email}</span>
          <SignoutButton /> */}
        </>
      ) : (
        <Link href={URLS.signin}>Signin</Link>
      )}
    </header>
  );
};
