import { Shell } from "@/src/components/atoms/Shell";
import { GameList } from "@/src/components/organisms/Game/GameList/GameList";
import { Suspense } from "react";

export default async function Page() {
  return (
    <main>
      <Shell>
        <Suspense fallback={<div>Chargement match list...</div>}>
          <GameList />
        </Suspense>
      </Shell>
    </main>
  );
}
