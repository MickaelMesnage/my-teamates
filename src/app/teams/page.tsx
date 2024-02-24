import { TeamCreateButton } from "@/components/organisms/TeamCreateButton/TeamCreateButton";
import { TeamList } from "@/components/organisms/TeamList/TeamList";

export default function Page() {
  return (
    <main>
      <TeamList />
      <TeamCreateButton />
    </main>
  );
}
