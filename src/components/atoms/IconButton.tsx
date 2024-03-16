"use client";

import { ComponentPropsWithoutRef, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

export type IconButtonProps = {
  isLoading?: boolean;
} & ComponentPropsWithoutRef<"button">;

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ isLoading, disabled, children, className, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={twMerge(
          "border rounded-md p-2",
          "disabled:opacity-30 disabled:cursor-not-allowed",
          "hover:scale-105",
          className
        )}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

IconButton.displayName = "Button";
