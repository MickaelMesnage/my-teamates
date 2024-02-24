import { Section } from "@/components/atoms/Section";
import { TeamCreateButton } from "@/components/organisms/TeamCreateButton/TeamCreateButton";
import { TeamList } from "@/components/organisms/TeamList/TeamList";
import { Suspense } from "react";

export default function Page() {
  return (
    <main className="w-full">
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
    </main>
  );
}
