import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export type CardProps = ComponentProps<"div">;

export const Card = ({ className, ...rest }: CardProps) => {
  return (
    <div
      className={twMerge(
        "w-full rounded-sm bg-white border shadow p-6",
        className
      )}
      {...rest}
    />
  );
};
