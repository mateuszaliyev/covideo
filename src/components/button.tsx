import type { ButtonHTMLAttributes, ReactNode } from "react";

import clsx from "clsx";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  endIcon?: ReactNode;
  startIcon?: ReactNode;
};

export const Button = ({
  children,
  className,
  disabled,
  endIcon,
  startIcon,
  ...props
}: ButtonProps) => (
  <button
    className={clsx(
      className,
      "flex h-8 items-center justify-center space-x-2 rounded px-2 text-base text-white/75 transition-colors",
      disabled ? "opacity-30" : "hover:bg-white/10 hover:text-white"
    )}
    disabled={disabled}
    {...props}
  >
    {startIcon}
    {children}
    {endIcon}
  </button>
);
