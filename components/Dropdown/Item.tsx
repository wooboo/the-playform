import { Menu } from "@headlessui/react";
import Link from "next/link";
import { MouseEventHandler } from "react";

export default function Item({
  href,
  onClick,
  children,
}: {
  href?: string;
  onClick?: MouseEventHandler;
  children: React.ReactNode;
}) {
  return (
    <Menu.Item>
      {href ? (
        <Link href={href}>
          <a className="block px-4 py-2 text-sm text-gray-700">{children}</a>
        </Link>
      ) : (
        <a
          href="#"
          onClick={onClick ?? ((e) => e.preventDefault())}
          className="block px-4 py-2 text-sm text-gray-700"
        >
          {children}
        </a>
      )}
    </Menu.Item>
  );
}

export type ItemProps = Parameters<typeof Item>[number];
