"use client";

import { signOut } from "next-auth/react";

export const SignoutButton = () => {
  const onSignout = async () => {
    signOut();
  };

  return <button onClick={onSignout}>Logout</button>;
};
