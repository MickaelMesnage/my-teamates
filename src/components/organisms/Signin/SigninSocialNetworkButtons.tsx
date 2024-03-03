"use client";

import { IconButton } from "@/components/atoms/IconButton";
import { GithubIcon } from "@/svgs/GithubIcon";
import { signIn } from "next-auth/react";

export const SigninSocialNetworkButtons = () => {
  return (
    <div className="w-full flex items-center justify-center gap-4">
      <IconButton onClick={() => signIn("github")}>
        <GithubIcon className="size-6 fill-black" />
      </IconButton>
    </div>
  );
};