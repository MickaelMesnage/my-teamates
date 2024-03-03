import { Section } from "@/components/atoms/Section";
import { Shell } from "@/components/atoms/Shell";
import { TeamCreateButton } from "@/components/organisms/Team/TeamCreate/TeamCreateButton";
import { TeamList } from "@/components/organisms/Team/TeamList/TeamList";

import { Suspense } from "react";

export default function Page() {
  return (
    <main>
      <Shell>
        <Section>
          <Section.Header>
            <Section.Header.Title>Equipes</Section.Header.Title>
            <Section.Header.Actions>
              <TeamCreateButton />
            </Section.Header.Actions>
          </Section.Header>
          <Section.Body>
            <Suspense fallback={<div>Chargement team list...</div>}>
              <TeamList />
            </Suspense>
          </Section.Body>
        </Section>
      </Shell>
    </main>
  );
}
