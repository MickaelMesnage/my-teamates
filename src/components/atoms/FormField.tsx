import { InfoIcon } from "@/src/svgs/InfoIcon";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export const FormField = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      className={twMerge("w-full flex flex-col items-start gap-1", className)}
      {...props}
    />
  );
};

const FormFieldLabel = ({ className, ...rest }: ComponentProps<"label">) => {
  return (
    <label
      className={twMerge("text-text-primary text-base", className)}
      {...rest}
    />
  );
};

FormField.Label = FormFieldLabel;

type FormFieldHelperTextProps = {
  className?: ComponentProps<"div">["className"];
  label: string;
  disabled?: boolean;
};

const FormFieldHelperText = ({
  className,
  label,
  disabled,
}: FormFieldHelperTextProps) => {
  return (
    <div className={twMerge("flex gap-1 items-center", className)}>
      <InfoIcon
        className={twMerge(
          "w-4 h-4 fill-text-secondary",
          disabled && "opacity-30"
        )}
      />
      <span
        className={twMerge(
          "text-sm text-text-secondary",
          disabled && "text-opacity-30"
        )}
      >
        {label}
      </span>
    </div>
  );
};

FormField.HelperText = FormFieldHelperText;

type FormFieldErrorProps = {
  className?: ComponentProps<"div">["className"];
  label: string;
  disabled?: boolean;
};

const FormFieldError = ({
  className,
  label,
  disabled,
}: FormFieldErrorProps) => {
  return (
    <div className={twMerge("flex gap-1 items-center", className)}>
      <InfoIcon
        className={twMerge(
          "w-4 h-4 fill-danger-base",
          disabled && "opacity-30"
        )}
      />
      <span
        className={twMerge(
          "text-body6 text-danger-base",
          disabled && "text-opacity-30"
        )}
      >
        {label}
      </span>
    </div>
  );
};

FormField.Error = FormFieldError;
