"use client";

import { Button } from "@/components/atoms/Button";
import { FormField } from "@/components/atoms/FormField";
import { Input } from "@/components/atoms/Input";
import { useToaster } from "@/hooks/useToaster";
import { URLS } from "@/urls";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { Controller, useForm } from "react-hook-form";
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
  const { toastError } = useToaster();

  const methods = useForm<SigninFormFieldValues>({
    resolver: zodResolver(signinFormZodSchema),
    defaultValues: DEFAULT_VALUES,
  });

  const onSubmit = async (data: SigninFormFieldValues) => {
    startTransition(async () => {
      try {
        const response = await signIn("credentials", {
          ...data,
          redirect: false,
        });
        if (response?.error) {
          throw new Error("SigninForm onSubmit: Callback error");
        }
        router.push(URLS.home);
      } catch (error) {
        toastError("Erreur lors de la connexion");
      }
    });
  };

  const { handleSubmit, control } = methods;

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="email"
        render={({
          field: { onChange, value, name },
          fieldState: { error },
        }) => (
          <FormField>
            <FormField.Label htmlFor={name}>Email</FormField.Label>
            <Input
              id={name}
              type="email"
              autoComplete="email"
              value={value}
              onChange={onChange}
              isOnError={!!error}
            />
            {error?.message && <FormField.Error label={error?.message} />}
          </FormField>
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({
          field: { onChange, value, name },
          fieldState: { error },
        }) => (
          <FormField>
            <FormField.Label htmlFor={name}>Mot de passe</FormField.Label>
            <Input
              id={name}
              type="password"
              autoComplete="new-password"
              value={value}
              onChange={onChange}
              isOnError={!!error}
            />
            {error?.message && <FormField.Error label={error?.message} />}
          </FormField>
        )}
      />
      <Button type="submit" isLoading={isPending}>
        Se connecter
      </Button>
    </form>
  );
};
