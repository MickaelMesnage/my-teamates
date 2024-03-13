import { Actions } from "@/src/components/atoms/Actions";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export type CardProps = ComponentProps<"div">;

export const Card = ({ className, ...rest }: CardProps) => {
  return (
    <div
      className={twMerge(
        "w-full rounded-md bg-white border shadow-md",
        className
      )}
      {...rest}
    />
  );
};

const CardHeader = ({ className, ...rest }: ComponentProps<"div">) => {
  return (
    <div
      className={twMerge("flex justify-between items-center gap-4", className)}
      {...rest}
    />
  );
};

const CardBody = ({ className, ...rest }: ComponentProps<"div">) => {
  return <div className={twMerge(className)} {...rest} />;
};

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Actions = Actions;
