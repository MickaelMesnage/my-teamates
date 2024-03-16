import { Shell } from "@/src/components/atoms/Shell";
import { TeamList } from "@/src/components/organisms/Team/TeamList/TeamList";
import { Suspense } from "react";

export default async function Page() {
  return (
    <main>
      <Shell>
        <Suspense fallback={<div>Chargement team list...</div>}>
          <TeamList />
        </Suspense>
      </Shell>
    </main>
  );
}
