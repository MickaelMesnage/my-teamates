"use client";

import { SubmitButton } from "@/components/molecules/SubmitButton";
import { signupAction } from "@/components/organisms/Signup/SignupAction";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
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
      <label htmlFor="firstName">Prénom</label>
      <input
        id="firstName"
        type="text"
        autoComplete="given-name"
        {...register("firstName")}
      />
      <label htmlFor="firstName">Nom</label>
      <input
        id="firstName"
        type="text"
        autoComplete="family-name"
        {...register("lastName")}
      />
      <label htmlFor="password">Mot de passe</label>
      <input
        id="password"
        type="text"
        autoComplete="new-password"
        {...register("password")}
      />
      <label htmlFor="confirmPassword">Confirmations mot de passe</label>
      <input
        id="confirmPassword"
        type="text"
        {...register("confirmPassword")}
      />
      <SubmitButton>Create</SubmitButton>
    </form>
  );
};
