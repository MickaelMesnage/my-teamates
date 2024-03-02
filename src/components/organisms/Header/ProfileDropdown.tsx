"use client";

import { DropdownMenu } from "@/components/ui/dropdown-menu";
import { ProfileIcon } from "@/svgs/ProfileIcon";
import {
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Session } from "next-auth";
import { ComponentProps } from "react";

type HeaderProps = Omit<ComponentProps<"header">, "children">;

type ProfileDropdownProps = {
  session: Session;
};

export const ProfileDropdown = ({ session }: ProfileDropdownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button>
          <ProfileIcon className="size-6 fill-black" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem></DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
