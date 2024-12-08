"use client";

import * as SwitchPrimitives from "@radix-ui/react-switch";
import * as React from "react";

import { cn } from "@/lib/utils";
import clsx from "clsx";

function getIcon({
  checkedIcon,
  uncheckedIcon,
  checked,
}: {
  checkedIcon?: React.ReactElement<HTMLElement>;
  uncheckedIcon?: React.ReactElement<HTMLElement>;
  checked?: boolean;
}) {
  const icon = checked ? checkedIcon : uncheckedIcon;

  if (!icon) {
    return null;
  }

  return React.cloneElement(icon, {
    className: cn(icon.props.className, "size-3 stroke-zinc-800"),
  });
}

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> & {
    checkedIcon?: React.ReactElement<HTMLElement>;
    uncheckedIcon?: React.ReactElement<HTMLElement>;
  }
>(({ className, ...props }, ref) => {
  return (
    <SwitchPrimitives.Root
      className={cn(
        "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
        className
      )}
      {...props}
      ref={ref}
    >
      <SwitchPrimitives.Thumb
        className={cn(
          "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        )}
      />
      <div
        className={clsx("absolute pointer-events-none", {
          "translate-x-[3px]": props.checked,
          "translate-x-[18px]": !props.checked,
        })}
      >
        {getIcon(props)}
      </div>
    </SwitchPrimitives.Root>
  );
});

Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
