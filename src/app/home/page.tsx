import { urls } from "@/urls";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      Home
      <ul>
        <li>
          <Link href={urls.teams.list}>Teams</Link>
        </li>
      </ul>
    </main>
  );
}
