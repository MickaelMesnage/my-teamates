import { Shell } from "@/components/atoms/Shell";
import { PAGES } from "@/pages";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <Shell>
        Home
        <ul>
          <li>
            <Link href={PAGES.teams.list.url}>Teams</Link>
          </li>
        </ul>
      </Shell>
    </main>
  );
}
