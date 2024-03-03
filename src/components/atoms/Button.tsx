"use client";

import { SpinnerIcon } from "@/svgs/SpinnerIcon";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

export type ButtonProps = {
  variant?: "primary" | "danger" | "ghost" | "neutral";
  fullSize?: boolean;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      fullSize = false,
      isLoading,
      disabled,
      children,
      className,
      ...rest
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={twMerge(
          "relative",
          "flex items-center justify-center",
          "p-2 text-base font-medium rounded-md",
          "disabled:opacity-30 disabled:cursor-not-allowed outline-offset-2 outline-2",
          isLoading && "bg-gray-500",
          fullSize && "w-full",
          variant === "primary" &&
            "text-primary bg-brand-base hover:bg-brand-darker outline-brand-base",
          variant === "danger" &&
            "text-white bg-danger-base hover:bg-danger-darker outline-danger-base",
          variant === "ghost" &&
            "text-primary hover:bg-gray-300 outline-bg-gray-300",
          variant === "neutral" &&
            "text-primary bg-gray-500 hover:bg-gray-500 outline-gray-500",
          className
        )}
        {...rest}
      >
        <span className={twMerge(isLoading && "invisible")}>{children}</span>
        {isLoading && (
          <SpinnerIcon className="absolute w-6 h-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
