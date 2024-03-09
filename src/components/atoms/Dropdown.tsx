import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export const Dropdown = ({ className, ...rest }: ComponentProps<"div">) => {
  return (
    <div
      className={twMerge(
        "w-full mt-2 rounded-md bg-white shadow-md border",
        className
      )}
      {...rest}
    />
  );
};

const DropdownContent = ({ className, ...rest }: ComponentProps<"div">) => {
  return (
    <div
      className={twMerge(
        "w-full p-2 flex flex-col items-start gap-2",
        className
      )}
      {...rest}
    />
  );
};

const DropdownTitle = ({ className, ...rest }: ComponentProps<"h4">) => {
  return (
    <h4
      className={twMerge("text-lg text-text-secondary", className)}
      {...rest}
    />
  );
};

Dropdown.Title = DropdownTitle;
Dropdown.Content = DropdownContent;
