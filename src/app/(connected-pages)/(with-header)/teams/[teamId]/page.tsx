import { Shell } from "@/components/atoms/Shell";
import { TeamCreateForm } from "@/components/organisms/Team/TeamCreate/TeamCreateForm";

export default function Page({
  params,
}: {
  params: {
    teamId: string;
  };
}) {
  const { teamId } = params;

  return (
    <main>
      <Shell>
        <TeamCreateForm />
      </Shell>
    </main>
  );
}
