import type { ReactNode } from "react";
import { MdOutlineCoronavirus } from "react-icons/md";

export type HeaderProps = {
  children?: ReactNode;
};

export const Header = ({ children }: HeaderProps) => (
  <header className="select-none bg-secondary-900 p-4">
    <div className="mx-auto flex w-full max-w-6xl justify-between">
      <h1 className="flex items-center gap-2">
        <MdOutlineCoronavirus className="h-8 w-8 animate-spin-slow text-white" />
        <span className="text-xl font-semibold">Covideo</span>
      </h1>
      <div className="flex gap-2">{children}</div>
    </div>
  </header>
);
