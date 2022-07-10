import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

export type DropdownProps = {
  items?: React.ReactNode;
  button: React.ReactNode;
};
export const Dropdown: React.FC<DropdownProps> = ({ button, items }) => {
  return (
    <Menu as="div" className="relative ml-3">
      {button}
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
          {items}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Dropdown;
