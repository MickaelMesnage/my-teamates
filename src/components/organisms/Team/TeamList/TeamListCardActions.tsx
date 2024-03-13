"use client";

import { Dropdown } from "@/src/components/atoms/Dropdown";
import { IconButton } from "@/src/components/atoms/IconButton";
import { TeamDeleteButton } from "@/src/components/organisms/Team/TeamList/TeamDeleteButton";
import { TeamLeaveButton } from "@/src/components/organisms/Team/TeamList/TeamLeaveButton";
import { TeamShareButton } from "@/src/components/organisms/Team/TeamList/TeamShareButton";
import { BurgerIcon } from "@/src/svgs/BurgerIcon";
import * as Popover from "@radix-ui/react-popover";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

type TeamListCardActions = {
  teamId: string;
  teamToken: string;
  canDeleteTeam: boolean;
  canLeaveTeam: boolean;
  canShareTeam: boolean;
};

export const TeamListCardActions = ({
  teamId,
  teamToken,
  canDeleteTeam,
  canLeaveTeam,
  canShareTeam,
}: TeamListCardActions) => {
  const [open, setOpen] = useState(false);

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger
        onClick={(e) => {
          setOpen((e) => !e);
          e.preventDefault();
        }}
        asChild
      >
        <IconButton>
          <BurgerIcon
            className={twMerge(
              "w-5 h-5 fill-text-secondary group-hover/icon-button:fill-text-primary"
            )}
          />
        </IconButton>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className="absolute z-30 w-72 top-0 -right-4"
          sideOffset={5}
          onClick={(e) => e.preventDefault()}
        >
          <Dropdown>
            <Dropdown.Content>
              {canDeleteTeam && <TeamDeleteButton teamId={teamId} />}
              {canShareTeam && <TeamShareButton teamToken={teamToken} />}
              {canLeaveTeam && <TeamLeaveButton teamId={teamId} />}
            </Dropdown.Content>
          </Dropdown>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};
