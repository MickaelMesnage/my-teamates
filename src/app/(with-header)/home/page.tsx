import { Shell } from "@/components/atoms/Shell";
import { urls } from "@/urls";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <Shell>
        Home
        <ul>
          <li>
            <Link href={urls.teams.list}>Teams</Link>
          </li>
        </ul>
      </Shell>
    </main>
  );
}
