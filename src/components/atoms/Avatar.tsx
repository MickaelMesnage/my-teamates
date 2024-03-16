import { twMerge } from "tailwind-merge";

type AvatarProps = {
  image: string | null;
  name: string;
};

export const Avatar = ({ image, name }: AvatarProps) => {
  const nameSplit = name.split(" ");
  const initials = `${nameSplit[0]?.charAt(0)}${nameSplit[1]?.charAt(0)}`;

  return (
    <>
      {image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          alt={`avatar of ${name}`}
          className="size-12 rounded-full"
          src={image}
        />
      ) : (
        <div
          className={twMerge(
            "rounded-full bg-gray-300 size-12",
            "flex items-center justify-center",
            "uppercase text-text-primary font-bold"
          )}
        >
          {initials}
        </div>
      )}
    </>
  );
};
