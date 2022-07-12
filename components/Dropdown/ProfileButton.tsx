import { Menu } from "@headlessui/react";
import Image from "next/image";

export default function ProfileButton({
  src,
}: {
  src: string;
}) {
  return (
    <Menu.Button className="flex items-center w-10 h-10 max-w-xs text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
      <span className="sr-only">Open user menu</span>
      <Image
        layout="fill"
        objectFit="cover"
        alt="profile-photo"
        className="rounded-full"
        src={src}
      />
    </Menu.Button>
  );
}

export type ButtonProps = Parameters<typeof ProfileButton>[number];
