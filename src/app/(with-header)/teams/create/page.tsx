import { Shell } from "@/components/atoms/Shell";
import { TeamCreateForm } from "@/components/organisms/TeamCreate/TeamCreateForm";

export default function Page() {
  return (
    <main>
      <Shell>
        <TeamCreateForm />
      </Shell>
    </main>
  );
}