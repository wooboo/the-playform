import Dropdown, { Item, RowActionButton } from "../Dropdown";

export default function TableRowActionsDropdown() {
  return (
    <Dropdown
      button={
        <RowActionButton>
          <i className="fas fa-ellipsis-v"></i>
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

export type TableRowActionsDropdownProps = Parameters<
  typeof TableRowActionsDropdown
>[number];
