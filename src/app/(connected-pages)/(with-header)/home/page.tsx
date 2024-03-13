import { Shell } from "@/src/components/atoms/Shell";
import { PAGES } from "@/src/pages";
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
