import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export const Label = ({ className, ...rest }: ComponentProps<"label">) => {
  return (
    <label
      className={twMerge("block text-xs font-medium text-gray-700", className)}
      {...rest}
    />
  );
};
