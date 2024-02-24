import { twMerge } from "tailwind-merge";
import { urls } from "@/urls";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const LINKS = [
    { href: urls.teams.list, label: "Equipes" },
    { href: urls.games.list, label: "Matchs" },
  ];

  return (
    <div className="w-screen h-screen flex flex-col">
      <header
        className={twMerge(
          "w-full h-[4rem]",
          "bg-gray-100 border-b",
          "flex items-center justify-between gap-4"
        )}
      >
        <ul className="flex items-center gap-4">
          {LINKS.map(({ href, label }) => (
            <li key={href} className="list-none">
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </header>
      <main className="w-full h-[calc(100%-4rem)]">{children}</main>
    </div>
  );
}
