import Dropdown, { Item, RowActionButton } from "../Dropdown";

export default function NotificationDropdown() {
  return (
    <Dropdown
      button={
        <RowActionButton>
          <i className="fas fa-bell"></i>
        </RowActionButton>
      }
      items={
        <>
          <Item>Action</Item>
          <Item>Another action</Item>
          <Item>Something else here</Item>
        </>
      }
    />
  );
}

export type NotificationDropdownProps = Parameters<
  typeof NotificationDropdown
>[number];
