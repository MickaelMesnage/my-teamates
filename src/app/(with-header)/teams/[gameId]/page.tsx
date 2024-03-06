import { Shell } from "@/components/atoms/Shell";
import { TeamCreateForm } from "@/components/organisms/Team/TeamCreate/TeamCreateForm";

export default function Page({
  params,
}: {
  params: {
    gameId: string;
  };
}) {
  return (
    <main>
      <Shell>
        <TeamCreateForm />
      </Shell>
    </main>
  );
}
