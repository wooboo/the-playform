import Dropdown, { Item, Button, Divider, Header } from "../Dropdown";

export default function IndexDropdown() {
  return (
    <Dropdown
      button={<Button>Demo Pages</Button>}
      items={
        <>
          <Header>Admin Layout</Header>
          <Item href="/admin/dashboard">Dashboard</Item>
          <Item href="/admin/settings">Settings</Item>
          <Item href="/admin/tables">Tables</Item>
          <Item href="/admin/maps">Maps</Item>
          <Divider />
          <Header>Auth Layout</Header>
          <Item href="/auth/login">Login</Item>
          <Item href="/auth/register">Register</Item>
          <Divider />
          <Header>No Layout</Header>
          <Item href="/index">Landing</Item>
          <Item href="/profile">Profile</Item>
        </>
      }
    />
  );
}

export type IndexDropdownProps = Parameters<typeof IndexDropdown>[number];
