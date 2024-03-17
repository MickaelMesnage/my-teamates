import { Shell } from "@/src/components/atoms/Shell";
import { GameCreate } from "@/src/components/organisms/Game/GameCreate/GameCreate";

export default function Page() {
  return (
    <main>
      <Shell>
        <GameCreate />
      </Shell>
    </main>
  );
}
