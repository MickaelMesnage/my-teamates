"use client";

import { teamCreateAction } from "@/components/organisms/TeamCreate/TeamCreateAction";
import { useState } from "react";
import { useFormStatus } from "react-dom";

export const TeamCreateForm = () => {
  const { pending } = useFormStatus();
  const [name, setName] = useState("");

  return (
    <form action={teamCreateAction}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button disabled={pending} type="submit">
        Create
      </button>
      {pending && <p>Creating...</p>}
    </form>
  );
};
