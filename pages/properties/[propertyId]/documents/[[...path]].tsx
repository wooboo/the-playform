import Table, { ColumnDef } from "../../../../components/Tables/Table";
import Admin from "../../../../layouts/Admin";
import { trpc } from "../../../../utils/trpc";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/future/image";
import { DocumentPreview } from "../../../../server/route/files.router";

export default function Documents() {
  const router = useRouter();
  const agreements = trpc.useQuery([
    "files.documents",
    {
      propertyId: router.query.propertyId as string,
      path: (router.query.path as string[]) ?? [],
    },
  ]);
  return agreements.isLoading ? (
    <></>
  ) : (
    <div className="flex flex-wrap">
      <div className="w-full px-4">
        <div className="relative flex flex-col w-full min-w-0 mb-6 break-words border-0 rounded-lg shadow-lg bg-slate-100">
          <div className="container grid grid-cols-3 gap-2 p-4 mx-auto">
            {agreements.data?.items.map((e) => {
              const preview = e.preview;
              return (
                preview && (
                  <div className="w-full rounded cursor-zoom-in">
                    <Image
                      className="relative w-full"
                      loader={previewBasedLoader(preview)}
                      alt="preview"
                      src={preview.w800}
                      priority
                      width={300}
                      height={300}
                    />
                    <span className="align-bottom">{e.name}</span>
                  </div>
                )
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
function previewBasedLoader(preview: DocumentPreview) {
  return ({ width }: { width: number }) => {
    if (width <= 100) return preview.w100;
    if (width <= 200) return preview.w200;
    if (width <= 400) return preview.w400;
    return preview.w800;
  };
}
Documents.layout = Admin;
