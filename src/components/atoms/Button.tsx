import { ButtonHTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

export type ButtonProps = {
  variant?: "primary" | "danger" | "ghost" | "neutral";
  fullSize?: boolean;
  centered?: boolean;
  isLoading?: boolean;
  isIconButton?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      fullSize = false,
      centered = true,
      isIconButton = false,
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
          "py-2 flex items-center text-body6 rounded-md disabled:opacity-30 disabled:cursor-not-allowed outline-offset-2 outline-2",

          isLoading && "bg-gray-500",
          isIconButton ? "px-2" : "px-4",
          fullSize && "w-full",
          centered ? "justify-center" : "justify-start",
          variant === "primary" &&
            "text-primary bg-brand-base hover:bg-brand-darker outline-brand-base",
          variant === "danger" &&
            "text-white bg-danger-base hover:bg-danger-darker outline-danger-base",
          variant === "ghost" &&
            "text-primary hover:bg-background-section outline-background-section",
          variant === "neutral" &&
            "text-primary bg-background-button hover:bg-background-buttonPressed outline-background-buttonPressed",
          className
        )}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
