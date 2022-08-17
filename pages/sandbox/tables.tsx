import Table, { ColumnDef } from "../../components/Tables/Table";
import Admin from "../../layouts/Admin";
import { Property } from "../../schema/model";
import { trpc } from "../../utils/trpc";

export default function Tables() {
  const properties = trpc.useQuery(["properties.all"]);
  return properties.isLoading ? (
    <></>
  ) : (
    <div className="flex flex-wrap">
      <div className="w-full px-4 lg:w-8/12">
        <div className="relative flex flex-col w-full min-w-0 mb-6 break-words border-0 rounded-lg shadow-lg bg-slate-100">
          <Table
            data={properties.data}
            columns={[
              {
                header: "Name",
                footer: (props) => props.column.id,
                accessorKey: "name",
                cell: (info) => info.getValue(),
              },
              {
                header: "Address",
                columns: [
                  {
                    header: "City",
                    accessorFn: (r) => r.address.city,
                  },
                  {
                    header: "Street",
                    accessorFn: (r) => r.address.street,
                  },
                  {
                    header: "Zip",
                    accessorFn: (r) => r.address.zip,
                  },
                ],
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

Tables.layout = Admin;
