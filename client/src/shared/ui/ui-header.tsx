import clsx from "clsx";
import { ReactNode } from "react";
import { UILogo } from "./ui-logo";

export function UIHeader({
  className,
  right,
}: {
  className?: string;
  right?: ReactNode;
}) {
  return (
    <header
      className={clsx(
        "px-4 py-5 border-b border-b-slate-300 flex justify-between items-center bg-white",
        className,
      )}
    >
      <UILogo />
      {right}
    </header>
  );
}
