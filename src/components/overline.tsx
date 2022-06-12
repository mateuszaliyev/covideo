import type { HTMLAttributes } from "react";

import clsx from "clsx";

export type OverlineProps = HTMLAttributes<HTMLSpanElement> & {
  margin?: boolean;
  text: string;
};

export const Overline = ({
  children,
  className,
  margin = true,
  text,
  ...props
}: OverlineProps) => (
  <>
    <span
      className={clsx(
        "block text-xs uppercase text-primary-400 sm:text-lg",
        margin && "mb-2 sm:mb-4",
        className
      )}
      {...props}
    >
      {text}
    </span>
    {children}
  </>
);
