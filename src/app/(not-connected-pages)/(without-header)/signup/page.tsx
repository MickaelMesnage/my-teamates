import { Card } from "@/components/atoms/Card";
import { Shell } from "@/components/atoms/Shell";
import { SignupForm } from "@/components/organisms/Signup/SignupForm";
import { PAGES } from "@/pages";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export default async function Page() {
  return (
    <main className="w-full h-full">
      <Shell
        className={twMerge("w-full h-full", "flex items-center justify-center")}
      >
        <Card className="w-full max-w-[30rem]">
          <div className="flex flex-col gap-6">
            <h1 className="text-3xl font-bold text-center">S&apos;inscrire</h1>
            <SignupForm />
            <p className="text-base text-text-primary text-center">
              Déjà inscrit ?
              <Link
                className="ml-2 text-base text-brand-darker"
                href={PAGES.auth.signin.url}
              >
                Me connecter
              </Link>
            </p>
          </div>
        </Card>
      </Shell>
    </main>
  );
}
