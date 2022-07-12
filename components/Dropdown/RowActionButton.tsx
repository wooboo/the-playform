import { Menu } from "@headlessui/react";
import React from "react";

export default function IconButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Menu.Button className="px-3 py-1 text-slate-500">
      {children}
    </Menu.Button>
  );
}

export type ButtonProps = Parameters<typeof IconButton>[number];
