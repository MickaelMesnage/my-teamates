"use client";

import { SubmitButton } from "@/components/molecules/SubmitButton";
import { getAuthSession } from "@/lib/auth";
import { URLS } from "@/urls";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const PASSWORD_REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;

export const signinFormZodSchema = z.object({
  email: z.string().email("Email invalide"),
  password: z.string().min(1, "Champs requis"),
});

export type SigninFormFieldValues = z.infer<typeof signinFormZodSchema>;

const DEFAULT_VALUES = {
  email: "",
  password: "",
} satisfies SigninFormFieldValues;

export const SigninForm = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const methods = useForm<SigninFormFieldValues>({
    resolver: zodResolver(signinFormZodSchema),
    defaultValues: DEFAULT_VALUES,
  });

  const onSubmit = (data: SigninFormFieldValues) => {
    startTransition(async () => {
      await signIn("credentials", { ...data });
    });
  };

  const { handleSubmit, register } = methods;

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        autoComplete="email"
        {...register("email")}
      />
      <label htmlFor="password">Mot de passe</label>
      <input
        id="password"
        type="text"
        autoComplete="new-password"
        {...register("password")}
      />
      <SubmitButton>Se connecter</SubmitButton>
    </form>
  );
};
