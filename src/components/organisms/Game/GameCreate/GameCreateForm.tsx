"use client";

import { Button } from "@/src/components/atoms/Button";
import { FormField } from "@/src/components/atoms/FormField";
import { Input } from "@/src/components/atoms/Input";
import { Select } from "@/src/components/atoms/Select";
import { SubmitButton } from "@/src/components/molecules/SubmitButton";
import { gameCreateAction } from "@/src/components/organisms/Game/actions/gameCreateAction";
import { gameCreateSchema } from "@/src/components/organisms/Game/actions/gameCreateSchema";
import { getFormProps, useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { useRouter } from "next/navigation";
import { useFormState, useFormStatus } from "react-dom";

// const DEFAULT_VALUES = {
//   teamId: "",
//   date: "",
//   time: "",
//   place: "",
//   nbPlayers: 10,
// } satisfies GameCreateFormFieldValues;

type GameCreateFormProps = {
  teams: { id: string; name: string }[];
};

export const GameCreateForm = ({ teams }: GameCreateFormProps) => {
  const router = useRouter();
  // const [isPending, startTransition] = useTransition();
  // const { toastError } = useToaster();

  // const methods = useForm<GameCreateFormFieldValues>({
  //   resolver: zodResolver(gameCreateFormZodSchema),
  //   defaultValues: DEFAULT_VALUES,
  // });

  // const onSubmit = async (data: GameCreateFormFieldValues) => {
  //   startTransition(async () => {
  //     try {
  //       const formData = new FormData();
  //       formData.append("date", data.date);
  //       formData.append("time", data.time);
  //       formData.append("place", data.place);
  //       formData.append("teamId", data.teamId);
  //       formData.append("nbPlayers", data.nbPlayers.toString());

  //       await gameCreateAction(formData);

  //       router.push(PAGES.games.list.url);
  //     } catch (error) {
  //       toastError("Erreur lors de la création de l'équipe");
  //     }
  //   });
  // };

  // const { handleSubmit, control } = methods;

  const [lastResult, action] = useFormState(gameCreateAction, undefined);
  const [form, fields] = useForm({
    // Sync the result of last submission
    lastResult,

    // Reuse the validation logic on the client
    onValidate({ formData }) {
      console.log("coucou");
      return parseWithZod(formData, { schema: gameCreateSchema });
    },

    // onSubmit: (event, { formData }) => {
    //   event.preventDefault();
    //   // console.log("submited ok", formData);
    // },

    // Validate the form on blur event triggered
    shouldValidate: "onSubmit",
    shouldRevalidate: "onInput",
  });

  // console.log({ test: fields.test, z });

  return (
    <form action={action} {...getFormProps(form)}>
      <FormField>
        <FormField.Label htmlFor={fields.test.key}>Date</FormField.Label>
        <Input
          id={fields.test.key}
          name={fields.test.name}
          isOnError={!!fields.test.errors}
        />
        {fields.test.errors && fields.test.errors.length > 0 && (
          <FormField.Error label={fields.test.errors[0]} />
        )}
      </FormField>
      {/* <FormField>
        <FormField.Label htmlFor={fields.date.key}>Date</FormField.Label>
        <Select
          id={fields.date.key}
          name={fields.date.name}
          isOnError={!!fields.date.errors}
        >
          <option value="" disabled>
            Choisissez une option
          </option>
          {teams.map(({ id, name }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </Select> */}
      {/* {Boolean(fields.date.errors?[0]) && <FormField.Error label={fields.date.errors[0]} />} */}
      {/* </FormField> */}
      {/* <Controller
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
      /> */}
      <SubmitButton> Ajouter le match</SubmitButton>
    </form>
  );
};
