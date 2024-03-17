"use client";

import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export type SelectProps = {
  isOnError?: boolean;
} & ComponentProps<"select">;

export const Select = ({ isOnError, className, ...rest }: SelectProps) => (
  <select
    className={twMerge(
      "w-full rounded-md border px-4 py-2 shadow-sm sm:text-sm",
      // "hover:border-gray-300 focus:bg-gray-100",
      "outline-focus-primary",
      isOnError && " border-danger-base",
      className
    )}
    {...rest}
  />
);
