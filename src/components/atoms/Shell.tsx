import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export const Shell = ({ className, ...rest }: ComponentProps<"div">) => {
  return <div className={twMerge("w-full h-full p-8", className)} {...rest} />;
};
