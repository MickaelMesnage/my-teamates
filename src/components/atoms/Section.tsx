import { Actions } from "@/src/components/atoms/Actions";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export type SectionProps = ComponentProps<"div">;

export const Section = ({ className, ...rest }: SectionProps) => {
  return (
    <div className={twMerge("w-full flex flex-col", className)} {...rest} />
  );
};

export type SectionHeaderProps = {
  withBorderBottom?: boolean;
} & ComponentProps<"div">;

const SectionHeader = ({
  withBorderBottom = false,
  className,
  ...rest
}: SectionHeaderProps) => {
  return (
    <div
      className={twMerge(
        "flex justify-between items-center pb-4",
        withBorderBottom && "border-b border-background-border-solid",
        className
      )}
      {...rest}
    />
  );
};

Section.Header = SectionHeader;

const SectionHeaderTitle = ({ className, ...rest }: ComponentProps<"h4">) => {
  return (
    <h4
      className={twMerge("text-body1 text-text-primary", className)}
      {...rest}
    />
  );
};

SectionHeader.Title = SectionHeaderTitle;

const SectionHeaderDescription = ({
  className,
  ...rest
}: ComponentProps<"p">) => {
  return (
    <p
      className={twMerge("text-body6 text-text-secondary", className)}
      {...rest}
    />
  );
};

SectionHeader.Description = SectionHeaderDescription;

const SectionBody = ({ className, ...rest }: ComponentProps<"div">) => {
  return <div className={twMerge("w-full", className)} {...rest} />;
};

Section.Body = SectionBody;

SectionHeader.Actions = Actions;
