import { ReactNode } from "react";

export default function Header({ children }: { children: ReactNode }) {
  return (
    <span
      className={
        "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-slate-400"
      }
    >
      {children}
    </span>
  );
}

export type HeaderProps = Parameters<typeof Header>[number];
