import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export type ProfileMenuItemProps = {};
export const ProfileMenuItem: React.FC<ProfileMenuItemProps> = ({}) => {
  const { data: session } = useSession();
  return (
    <Menu as="div" className="relative ml-3">
      <Menu.Button className="flex items-center w-10 h-10 max-w-xs text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
        <span className="sr-only">Open user menu</span>
        <Image
          layout="fill"
          objectFit="cover"
          alt="profile-photo"
          className="rounded-full"
          src={session?.user?.image ?? "/img/team-1-800x800.jpg"}
        />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {session && session.user ? (
            <>
              <Menu.Item>
                <Link href="/profile">
                  <a className="block px-4 py-2 text-sm text-gray-700">
                    Your Profile
                  </a>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link href="/admin/settings">
                  <a className="block px-4 py-2 text-sm text-gray-700">
                    Settings
                  </a>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  onClick={() => signOut()}
                >
                  Sign Out
                </a>
              </Menu.Item>
            </>
          ) : (
            <Menu.Item>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700"
                onClick={() => signIn()}
              >
                Sign In
              </a>
            </Menu.Item>
          )}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default ProfileMenuItem;
