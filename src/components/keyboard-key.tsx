import type { HTMLAttributes } from "react";

import clsx from "clsx";

export type KeyboardKeyProps = HTMLAttributes<HTMLElement>;

export const KeyboardKey = ({ className, ...props }: KeyboardKeyProps) => (
  <kbd
    className={clsx(
      "flex h-6 w-6 items-center justify-center rounded bg-secondary-1000 font-sans text-xs",
      className
    )}
    {...props}
  />
);
