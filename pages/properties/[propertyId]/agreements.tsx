// import Table, { ColumnDef } from "../../../components/Tables/Table";
// import Admin from "../../../layouts/Admin";
// import { trpc } from "../../../utils/trpc";
// import { useRouter } from "next/router";
// import Link from "next/link";

// export default function Tables() {
//   const router = useRouter();

//   const agreements = trpc.useQuery([
//     "files.documents",
//     { propertyId: router.query.propertyId as string, path: "/" },
//   ]);
//   return agreements.isLoading ? (
//     <></>
//   ) : (
//     <div className="flex flex-wrap">
//       <div className="w-full px-4 lg:w-8/12">
//         <div className="relative flex flex-col w-full min-w-0 mb-6 break-words border-0 rounded-lg shadow-lg bg-slate-100">
//           <Table
//             columns={[
//               {
//                 header: "Numer",
//                 footer: (props) => props.column.id,
//                 accessorKey: "number",
//                 cell: (info) => (
//                   <Link
//                     href={`/properties/${router.query.propertyId}/agreements/${info.row.original.agreementId}`}
//                   >
//                     {info.getValue()}
//                   </Link>
//                 ),
//               },
//             ]}
//             data={agreements.data}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// Tables.layout = Admin;
