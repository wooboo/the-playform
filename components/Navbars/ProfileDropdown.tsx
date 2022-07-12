import { Transition } from "@headlessui/react";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import Dropdown, { Item, ProfileButton } from "../Dropdown";

export type ProfileDropdownProps = {};

export const ProfileDropdown: React.FC<ProfileDropdownProps> = ({}) => {
  const { data: session } = useSession();
  return (
    <Dropdown
      button={
        <ProfileButton
          src={session?.user?.image ?? "/img/team-1-800x800.jpg"}
        />
      }
      items={
        session && session.user ? (
          <>
            <Item href="/profile">Your Profile</Item>
            <Item href="/admin/settings">Settings</Item>
            <Item onClick={() => signOut()}>Sign Out</Item>
          </>
        ) : (
          <Item onClick={() => signIn()}>Sign In</Item>
        )
      }
    />
  );
};

export default ProfileDropdown;
