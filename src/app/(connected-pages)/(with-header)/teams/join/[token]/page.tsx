import { Section } from "@/src/components/atoms/Section";
import { Shell } from "@/src/components/atoms/Shell";
import { TeamJoinForm } from "@/src/components/organisms/Team/TeamJoin/TeamJoinForm";
import { Suspense } from "react";

export default function Page({
  params,
}: {
  params: {
    token: string;
  };
}) {
  const { token } = params;

  return (
    <main>
      <Shell>
        <Section>
          <Section.Header>
            <Section.Header.Title>Rejoindre une équipe</Section.Header.Title>
          </Section.Header>
          <Section.Body>
            <Suspense fallback={<div>Chargement...</div>}>
              <TeamJoinForm token={token} />
            </Suspense>
          </Section.Body>
        </Section>
      </Shell>
    </main>
  );
}
