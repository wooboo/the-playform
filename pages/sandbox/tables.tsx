import Table, { ColumnDef } from "../../components/Tables/Table";
import Admin from "../../layouts/Admin";
import { trpc } from "../../utils/trpc";
const columns: ColumnDef<Property>[] = [
  {
    header: "Name",
    footer: (props) => props.column.id,
    columns: [
      {
        accessorKey: "firstName",
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      },
      {
        accessorFn: (row) => row.lastName,
        id: "lastName",
        cell: (info) => info.getValue(),
        header: () => <span>Last Name</span>,
        footer: (props) => props.column.id,
      },
    ],
  },
  {
    header: "Info",
    footer: (props) => props.column.id,
    columns: [
      {
        accessorKey: "age",
        header: () => "Age",
        footer: (props) => props.column.id,
      },
      {
        header: "More Info",
        columns: [
          {
            accessorKey: "visits",
            header: () => <span>Visits</span>,
            footer: (props) => props.column.id,
          },
          {
            accessorKey: "status",
            header: "Status",
            footer: (props) => props.column.id,
          },
          {
            accessorKey: "progress",
            header: "Profile Progress",
            footer: (props) => props.column.id,
          },
        ],
      },
    ],
  },
];
export default function Tables() {
  const properties = trpc.useQuery(["properties.all"]);
  return properties.isLoading ? (
    <></>
  ) : (
    <div className="flex flex-wrap">
      <div className="w-full px-4 lg:w-8/12">
        <div className="relative flex flex-col w-full min-w-0 mb-6 break-words border-0 rounded-lg shadow-lg bg-slate-100">
          <Table
            columns={[
              {
                header: "Name",
                footer: (props) => props.column.id,
                accessorKey: "name",
                cell: (info) => info.getValue(),
              },
              {
                header: "City",
                accessorFn: (r) => r.address.city,
              },
              {
                header: "Street",
                accessorFn: (r) => r.address.street,
              },
            ]}
            data={properties.data}
          />
        </div>
      </div>
    </div>
  );
}

Tables.layout = Admin;
