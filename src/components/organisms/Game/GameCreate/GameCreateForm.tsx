"use client";

import { Button } from "@/src/components/atoms/Button";
import { FormField } from "@/src/components/atoms/FormField";
import { Input } from "@/src/components/atoms/Input";
import { Select } from "@/src/components/atoms/Select";
import { gameCreateAction } from "@/src/components/organisms/Game/actions/gameCreateAction";
import { useToaster } from "@/src/hooks/useToaster";
import { PAGES } from "@/src/pages";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

export const gameCreateFormZodSchema = z.object({
  teamId: z.string().min(1, "Champs requis"),
  date: z.string().min(1, "Champs requis"),
  time: z.string().min(1, "Champs requis"),
  place: z.string(),
  nbPlayers: z.number(),
});

export type GameCreateFormFieldValues = z.infer<typeof gameCreateFormZodSchema>;

const DEFAULT_VALUES = {
  teamId: "",
  date: "",
  time: "",
  place: "",
  nbPlayers: 10,
} satisfies GameCreateFormFieldValues;

type GameCreateFormProps = {
  teams: { id: string; name: string }[];
};

export const GameCreateForm = ({ teams }: GameCreateFormProps) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const { toastError } = useToaster();

  const methods = useForm<GameCreateFormFieldValues>({
    resolver: zodResolver(gameCreateFormZodSchema),
    defaultValues: DEFAULT_VALUES,
  });

  const onSubmit = async (data: GameCreateFormFieldValues) => {
    startTransition(async () => {
      try {
        const formData = new FormData();
        formData.append("date", data.date);
        formData.append("time", data.time);
        formData.append("place", data.place);
        formData.append("teamId", data.teamId);
        formData.append("nbPlayers", data.nbPlayers.toString());

        await gameCreateAction(formData);

        router.push(PAGES.games.list.url);
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
        name="teamId"
        render={({
          field: { onChange, value, name },
          fieldState: { error },
        }) => (
          <FormField>
            <FormField.Label htmlFor={name}>Date</FormField.Label>
            <Select
              id={name}
              value={value}
              onChange={onChange}
              isOnError={!!error}
            >
              <option value="" disabled>
                Choisissez une option
              </option>
              {teams.map(({ id, name }) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))}
            </Select>
            {error?.message && <FormField.Error label={error?.message} />}
          </FormField>
        )}
      />
      <Controller
        control={control}
        name="date"
        render={({
          field: { onChange, value, name },
          fieldState: { error },
        }) => (
          <FormField>
            <FormField.Label htmlFor={name}>Date</FormField.Label>
            <Input
              id={name}
              value={value}
              onChange={onChange}
              isOnError={!!error}
              type="date"
            />
            {error?.message && <FormField.Error label={error?.message} />}
          </FormField>
        )}
      />
      <Controller
        control={control}
        name="time"
        render={({
          field: { onChange, value, name },
          fieldState: { error },
        }) => (
          <FormField>
            <FormField.Label htmlFor={name}>Horaire</FormField.Label>
            <Input
              id={name}
              value={value}
              onChange={onChange}
              isOnError={!!error}
              type="time"
            />
            {error?.message && <FormField.Error label={error?.message} />}
          </FormField>
        )}
      />
      <Controller
        control={control}
        name="nbPlayers"
        render={({
          field: { onChange, value, name },
          fieldState: { error },
        }) => (
          <FormField>
            <FormField.Label htmlFor={name}>Nombre de joueurs</FormField.Label>
            <Input
              id={name}
              value={value}
              onChange={onChange}
              isOnError={!!error}
              type="number"
            />
            {error?.message && <FormField.Error label={error?.message} />}
          </FormField>
        )}
      />
      <Controller
        control={control}
        name="place"
        render={({
          field: { onChange, value, name },
          fieldState: { error },
        }) => (
          <FormField>
            <FormField.Label htmlFor={name}>Lieu</FormField.Label>
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
        Ajouter le match
      </Button>
    </form>
  );
};
