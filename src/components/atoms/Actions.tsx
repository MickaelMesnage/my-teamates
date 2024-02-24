import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export const Actions = ({ className, ...rest }: ComponentProps<"div">) => {
  return (
    <div className={twMerge("flex items-center gap-4", className)} {...rest} />
  );
};
