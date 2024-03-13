import { twMerge } from "tailwind-merge";

type FakeAvatarProps = {
  label: string;
};

export const FakeAvatar = ({ label }: FakeAvatarProps) => {
  return (
    <div
      className={twMerge(
        "rounded-full bg-gray-300 size-12",
        "flex items-center justify-center",
        "uppercase text-text-primary font-bold"
      )}
    >
      {label}
    </div>
  );
};
