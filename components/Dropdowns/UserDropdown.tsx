import React from 'react';
import Image from 'next/image';
import { useSession, signIn, signOut } from 'next-auth/react';

import { createPopper } from '@popperjs/core';
import Link from 'next/link';

const UserDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);

  const { data: session } = useSession();
  const btnDropdownRef = React.createRef<HTMLAnchorElement>();
  const popoverDropdownRef = React.createRef<HTMLDivElement>();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: 'bottom-start',
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
      <a
        className="block text-slate-500"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <div className="flex items-center">
          <span className="inline-flex items-center justify-center w-12 h-12 text-sm text-white rounded-full bg-slate-200">
            {session && (
              <Image
                width={800}
                height={800}
                alt="..."
                className="w-full align-middle border-none rounded-full shadow-lg"
                src={session?.user?.image??"/img/team-1-800x800.jpg"}
              />
            )}
          </span>
        </div>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? 'block ' : 'hidden ') +
          'bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48'
        }
      >
        {session && session.user? (
          <>
            <a
              href="#signout"
              className={
                'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700'
              }
              onClick={(e) => e.preventDefault()}
            >
              {session.user.name}
            </a>
            <a
              href="#signout"
              className={
                'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700'
              }
              onClick={(e) => signOut()}
            >
              Sign Out
            </a>
          </>
        ) : (
          <Link
            href="/auth/signin"
            className="block w-full px-4 py-2 text-sm font-normal bg-transparent whitespace-nowrap text-slate-700"
          >
            Sign In
          </Link>
        )}
      </div>
    </>
  );
};

export default UserDropdown;
