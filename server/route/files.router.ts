import {
  BlobItem,
  BlobPrefix,
  BlobSASPermissions,
  ContainerSASPermissions,
} from "@azure/storage-blob";
import { PrismaClient } from "@prisma/client";

import storage from "../../utils/storage";
import { z } from "zod";
import { createRouter } from "../createRouter";

export const AgreementListItem = z.object({
  agreementId: z.string(),
  number: z.string(),
});
export type AgreementListItem = z.infer<typeof AgreementListItem>;
export const AgreementFile = z.object({
  sas: z.string(),
  name: z.string(),
  path: z.string(),
});
export type AgreementFile = z.infer<typeof AgreementFile>;
const documentsContainerClient = storage.getContainerClient("documents");
const thumbnailsContainerClient = storage.getContainerClient("thumbnails");
export const DocumentPreview = z.object({
  w100: z.string(),
  w200: z.string(),
  w400: z.string(),
  w800: z.string(),
});

export type DocumentPreview = z.TypeOf<typeof DocumentPreview>;
export const DocumentListItem = z.object({
  name: z.string(),
  path: z.string(),
  type: z.enum(["file", "directory"]),
  preview: DocumentPreview.optional(),
});
export type DocumentListItem = z.infer<typeof DocumentListItem>;
export const DocumentList = z.object({
  name: z.string().optional(),
  path: z.string().optional(),
  items: z.array(DocumentListItem),
});

export type DocumentList = z.TypeOf<typeof DocumentList>;

export const filesRouter = createRouter().query("documents", {
  input: z.object({
    propertyId: z.string(),
    path: z.array(z.string()),
  }),
  async resolve({ ctx, input }) {
    await hasAccess(ctx.db, ctx.session.user!.email!, input.propertyId);

    const prefix = `${input.propertyId}/${input.path?.join("/")}/`;
    const listing = documentsContainerClient.listBlobsByHierarchy("/", {
      prefix: prefix,
      includeMetadata: true,
      includeTags: true,
    });
    const name = input.path?.slice(-1)[0];

    const result: DocumentList = {
      path: input.path.join("/"),
      name,
      items: [],
    };
    for await (const item of listing) {
      const name = item.name.split("/").slice(-1)[0];
      console.dir(item, { depth: null });

      if (item.kind === "prefix") {
        result.items.push({
          name,
          path: item.name,
          type: "directory",
        });
      } else {
        result.items.push({
          name,
          path: item.name,
          type: "file",
          preview: await generatePreview(item.name),
        });
      }
    }
    return result;
  },
});
// .query("agreement", {
//   input: z.object({
//     propertyId: z.string(),
//     agreementId: z.string(),
//   }),
//   async resolve({ ctx, input }) {
//     await hasAccess(ctx.db, ctx.session.user!.email!, input.propertyId);
//     documentsContainerClient.generateSasUrl({
//       permissions: ContainerSASPermissions.from({}),
//     });
//     const listing = documentsContainerClient.listBlobsByHierarchy("/", {
//       prefix: `${input.propertyId}/Agreements/${input.agreementId}/`,
//     });
//     const result: Array<AgreementFile> = [];
//     for await (const item of listing) {
//       if (item.kind !== "prefix") {
//         console.dir(item, { depth: null });
//         result.push({
//           sas: await bb.generateSasUrl({
//             permissions: BlobSASPermissions.from({ read: true }),
//             expiresOn: new Date(Date.now() + 86400 * 1000),
//           }),
//           path: item.name,
//           name: item.name.split("/")[2],
//         });
//       }
//     }
//     return result;
//   },
// });
async function hasAccess(d: PrismaClient, email: string, propertyId: string) {
  await d.propertyOwner.findFirstOrThrow({
    where: {
      AND: [
        {
          owners: {
            some: {
              email: {
                equals: email,
                mode: "insensitive",
              },
            },
          },
        },
        {
          propertyId: {
            equals: propertyId,
            mode: "insensitive",
          },
        },
      ],
    },
  });
}
async function generatePreview(blobName: string): Promise<DocumentPreview> {
  console.log("BLOB NAME", blobName);
  return {
    w100: await getThumbnailUrl(blobName, ".w100.jpg"),
    w200: await getThumbnailUrl(blobName, ".w200.jpg"),
    w400: await getThumbnailUrl(blobName, ".w400.jpg"),
    w800: await getThumbnailUrl(blobName, ".w800.jpg"),
  };
}

async function getThumbnailUrl(blobName: string, suffix: string) {
  const thumbnailName = blobName + suffix;
  const client = await thumbnailsContainerClient.getBlobClient(
    thumbnailName
  );
  console.log(client.url);
  const sas = await client.generateSasUrl({
    permissions: BlobSASPermissions.from({ read: true }),
    expiresOn: new Date(Date.now() + 86400 * 1000),
    startsOn: new Date(Date.now() - 86400 * 1000),
  });
  return sas;
}
