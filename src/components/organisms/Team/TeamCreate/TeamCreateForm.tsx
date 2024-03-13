"use client";

import { Button } from "@/src/components/atoms/Button";
import { FormField } from "@/src/components/atoms/FormField";
import { Input } from "@/src/components/atoms/Input";
import { teamCreateAction } from "@/src/components/organisms/Team/TeamCreate/TeamCreateAction";
import { useToaster } from "@/src/hooks/useToaster";
import { PAGES } from "@/src/pages";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

export const teamCreateFormZodSchema = z.object({
  name: z.string().min(1, "Champs requis"),
});

export type TeameCreateFormFieldValues = z.infer<
  typeof teamCreateFormZodSchema
>;

const DEFAULT_VALUES = { name: "" } satisfies TeameCreateFormFieldValues;

export const TeamCreateForm = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const { toastError } = useToaster();

  const methods = useForm<TeameCreateFormFieldValues>({
    resolver: zodResolver(teamCreateFormZodSchema),
    defaultValues: DEFAULT_VALUES,
  });

  const onSubmit = async (data: TeameCreateFormFieldValues) => {
    startTransition(async () => {
      try {
        const formData = new FormData();
        formData.append("name", data.name);

        await teamCreateAction(formData);

        router.push(PAGES.teams.list.url);
      } catch (error) {
        toastError("Erreur lors de la création de l'équipe");
      }
    });
  };

  const { handleSubmit, control } = methods;

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="name"
        render={({
          field: { onChange, value, name },
          fieldState: { error },
        }) => (
          <FormField>
            <FormField.Label htmlFor={name}>
              Nom de la future équipe
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
        Créer mon équipe
      </Button>
    </form>
  );
};
