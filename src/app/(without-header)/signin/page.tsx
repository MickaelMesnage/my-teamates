import { Card } from "@/components/atoms/Card";
import { Separator } from "@/components/atoms/Separator";
import { Shell } from "@/components/atoms/Shell";
import { SigninForm } from "@/components/organisms/Signin/SigninForm";
import { SigninSocialNetworkButtons } from "@/components/organisms/Signin/SigninSocialNetworkButtons";
import { URLS } from "@/urls";
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
                href={URLS.signup}
              >
                M&apos;inscrire
              </Link>
            </p>
          </div>
        </Card>
      </Shell>
    </main>
  );
}
