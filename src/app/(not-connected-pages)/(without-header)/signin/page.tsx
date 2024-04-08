import { Card } from "@/src/components/atoms/Card";
import { Separator } from "@/src/components/atoms/Separator";
import { Shell } from "@/src/components/atoms/Shell";
import { SigninForm } from "@/src/components/organisms/Signin/SigninForm";
import { SigninSocialNetworkButtons } from "@/src/components/organisms/Signin/SigninSocialNetworkButtons";
import { PAGES } from "@/src/pages";
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
            <h1 className="text-3xl font-bold text-center">Se connecter</h1>
            <SigninSocialNetworkButtons />
            <Separator />
            <SigninForm />
            <p className="text-base text-text-primary text-center">
              Pas encore de compte ?
              <Link
                className="ml-2 text-base text-brand-darker"
                href={PAGES.auth.signup.url}
              >
                M&apos;inscrire
              </Link>
            </p>
          </div>
        </Card>
        <a href="https://dev.mimbi.io/ref">Test</a>
      </Shell>
    </main>
  );
}
