"use client";

import { Button } from "@/src/components/atoms/Button";
import { FormField } from "@/src/components/atoms/FormField";
import { Input } from "@/src/components/atoms/Input";
import { signupAction } from "@/src/components/organisms/Signup/SignupAction";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

export const PASSWORD_REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;

export const signupFormZodSchema = z
  .object({
    email: z.string().email("Email invalide"),
    firstName: z.string().min(1, "Champs requis"),
    lastName: z.string().min(1, "Champs requis"),
    password: z
      .string()
      .min(1, "Champs requis")
      .regex(PASSWORD_REGEXP, "Mot de passe invalide"),
    confirmPassword: z.string().min(1, "Champs requis"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Les mots de passe ne correspondent pas",
    path: ["confirmPassword"],
  });

export type SignupFormFieldValues = z.infer<typeof signupFormZodSchema>;

const DEFAULT_VALUES = {
  email: "",
  firstName: "",
  lastName: "",
  password: "",
  confirmPassword: "",
} satisfies SignupFormFieldValues;

export const SignupForm = () => {
  const [isPending, startTransition] = useTransition();

  const methods = useForm<SignupFormFieldValues>({
    resolver: zodResolver(signupFormZodSchema),
    defaultValues: DEFAULT_VALUES,
  });

  const onSubmit = async (data: SignupFormFieldValues) => {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("name", `${data.firstName} ${data.lastName}`);
    formData.append("password", data.password);

    startTransition(async () => {
      await signupAction(formData);
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
        name="firstName"
        render={({
          field: { onChange, value, name },
          fieldState: { error },
        }) => (
          <FormField>
            <FormField.Label htmlFor={name}>Prénom</FormField.Label>
            <Input
              id={name}
              type="text"
              autoComplete="given-name"
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
        name="lastName"
        render={({
          field: { onChange, value, name },
          fieldState: { error },
        }) => (
          <FormField>
            <FormField.Label htmlFor={name}>Nom</FormField.Label>
            <Input
              id={name}
              type="text"
              autoComplete="family-name"
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
              value={value}
              autoComplete="new-password"
              onChange={onChange}
              isOnError={!!error}
            />
            {error?.message && <FormField.Error label={error?.message} />}
          </FormField>
        )}
      />
      <Controller
        control={control}
        name="confirmPassword"
        render={({
          field: { onChange, value, name },
          fieldState: { error },
        }) => (
          <FormField>
            <FormField.Label htmlFor={name}>
              Confirmation mot de passe
            </FormField.Label>
            <Input
              id={name}
              type="password"
              value={value}
              onChange={onChange}
              isOnError={!!error}
            />
            {error?.message && <FormField.Error label={error?.message} />}
          </FormField>
        )}
      />
      <Button type="submit" isLoading={isPending}>
        S&apos;inscrire
      </Button>
    </form>
  );
};
