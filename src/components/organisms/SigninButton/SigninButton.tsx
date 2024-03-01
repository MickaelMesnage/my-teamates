"use client";

import { signIn } from "next-auth/react";

export const SigninButton = () => {
  const onSignin = async () => {
    signIn();
  };

  return <button onClick={onSignin}>Login</button>;
};
