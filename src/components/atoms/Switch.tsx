import * as SwitchPrimitive from "@radix-ui/react-switch";
import clsx from "clsx";

export type SwitchProps = {
  id: string;
  label: string;
  checked: boolean;
  onCheckedChange: (isChecked: boolean) => void;
  disabled?: boolean;
};

export const Switch = (props: SwitchProps) => {
  const { checked, id, label } = props;

  return (
    <div className="flex items-center gap-2">
      <SwitchPrimitive.Root
        {...props}
        className={clsx(
          "w-12 h-8 rounded-full relative disabled:bg-opacity-50",
          checked
            ? "bg-brand-base hover:bg-brand-darker"
            : "bg-gray-400 hover:bg-gray-600"
        )}
      >
        <SwitchPrimitive.Thumb
          className={clsx(
            "block w-6 h-6 bg-white rounded-full transform transition-all ease duration-300",
            checked ? "translate-x-5" : "translate-x-1"
          )}
        />
      </SwitchPrimitive.Root>
      <label className="text-base text-text-primary" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};
