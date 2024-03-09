"use client";

import { SpinnerIcon } from "@/svgs/SpinnerIcon";
import { ComponentProps, ComponentPropsWithoutRef, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

export type ButtonProps = {
  variant?: "primary" | "danger" | "ghost" | "neutral" | "invisible";
  fullSize?: boolean;
  centered?: boolean;
  isLoading?: boolean;
} & ComponentPropsWithoutRef<"button">;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      centered = true,
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
          "p-2 text-base font-medium rounded-md",
          "disabled:opacity-30 disabled:cursor-not-allowed outline-offset-2 outline-2",
          "group-button",
          isLoading && "bg-gray-500",
          fullSize && "w-full",
          variant === "primary" &&
            "text-primary bg-brand-base hover:bg-brand-darker outline-brand-base",
          variant === "danger" &&
            "text-white bg-danger-base hover:bg-danger-darker outline-danger-base",
          variant === "ghost" &&
            "text-primary hover:bg-gray-100 outline-bg-gray-100",
          variant === "neutral" &&
            "text-primary bg-gray-500 hover:bg-gray-500 outline-gray-500",
          variant === "invisible" && "text-primary  outline-gray-200",
          className
        )}
        {...rest}
      >
        <div
          className={twMerge(
            "flex items-center gap-2",
            centered && "justify-center",
            isLoading && "invisible"
          )}
        >
          {children}
        </div>
        {isLoading && (
          <SpinnerIcon className="absolute w-6 h-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
