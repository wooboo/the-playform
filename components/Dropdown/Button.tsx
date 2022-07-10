import { Menu } from "@headlessui/react";

export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <Menu.Button className="flex items-center px-3 py-4 text-xs font-bold uppercase lg:text-white lg:hover:text-slate-200 text-slate-700 lg:py-2">
      {children}
    </Menu.Button>
  );
}

export type ButtonProps = Parameters<typeof Button>[number];
