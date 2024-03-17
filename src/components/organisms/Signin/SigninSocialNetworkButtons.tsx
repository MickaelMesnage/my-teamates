"use client";

import { IconButton } from "@/src/components/atoms/IconButton";
import { useToaster } from "@/src/hooks/useToaster";
import { PAGES } from "@/src/pages";
import { GithubIcon } from "@/src/svgs/GithubIcon";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export const SigninSocialNetworkButtons = () => {
  const { toastError } = useToaster();
  const router = useRouter();

  const onSignin = async (provider: string) => {
    try {
      await signIn(provider);
      router.push(PAGES.home.url);
    } catch (error) {
      toastError("Une erreur est survenue");
    }
  };

  return (
    <div className="w-full flex items-center justify-center gap-4">
      <IconButton onClick={() => onSignin("github")}>
        <GithubIcon className="size-6 fill-black" />
      </IconButton>
    </div>
  );
};
