"use client";

import { Button } from "@/src/components/atoms/Button";
import { FormField } from "@/src/components/atoms/FormField";
import { Input } from "@/src/components/atoms/Input";
import { teamJoinAction } from "@/src/components/organisms/Team/actions/TeamJoinAction";
import { useToaster } from "@/src/hooks/useToaster";
import { PAGES } from "@/src/pages";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

export const teamJoinFormZodSchema = z.object({
  token: z.string().min(1, "Champs requis"),
});

export type TeameJoinFormFieldValues = z.infer<typeof teamJoinFormZodSchema>;

type TeamJoinFormProps = {
  token: string;
};

export const TeamJoinForm = ({ token }: TeamJoinFormProps) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const { toastError } = useToaster();

  const methods = useForm<TeameJoinFormFieldValues>({
    resolver: zodResolver(teamJoinFormZodSchema),
    defaultValues: { token },
  });

  const onSubmit = async (data: TeameJoinFormFieldValues) => {
    startTransition(async () => {
      try {
        const formData = new FormData();
        formData.append("token", data.token);

        await teamJoinAction(formData);

        router.push(PAGES.teams.list.url);
      } catch (error: unknown) {
        console.log({ error });
        if (error instanceof Error) {
          if (error.message === "Wrong token error") {
            toastError("Le token est invalide");
            return;
          }
          if (error.message === "Team already joined error") {
            toastError("Vous avez déjà rejoint cette équipe");
            return;
          }
        }
        toastError("Erreur lors de la tentative de rejoindre l'équipe");
      }
    });
  };

  const { handleSubmit, control } = methods;

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="token"
        render={({
          field: { onChange, value, name },
          fieldState: { error },
        }) => (
          <FormField>
            <FormField.Label htmlFor={name}>
              Token de l&apos;équipe que je veux rejoindre
            </FormField.Label>
            <Input
              id={name}
              value={value}
              onChange={onChange}
              isOnError={!!error}
            />
            {error?.message && <FormField.Error label={error?.message} />}
          </FormField>
        )}
      />
      <Button type="submit" isLoading={isPending}>
        Rejoindre l&apos;équipe
      </Button>
    </form>
  );
};
