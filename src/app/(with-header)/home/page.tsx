import { Shell } from "@/components/atoms/Shell";
import { URLS } from "@/urls";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <Shell>
        Home
        <ul>
          <li>
            <Link href={URLS.teamsList}>Teams</Link>
          </li>
        </ul>
      </Shell>
    </main>
  );
}
