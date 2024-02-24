"use client";

import { ComponentProps } from "react";
import { useFormStatus } from "react-dom";

export function SubmitButton(
  props: Omit<ComponentProps<"button">, "type" | "aria-disabled">
) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      aria-disabled={pending}
      {...props}
    />
  );
}
