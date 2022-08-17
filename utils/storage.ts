import {
  BlobServiceClient,
  StorageSharedKeyCredential,
} from "@azure/storage-blob";

if (!process.env.AZURE_STORAGE_ACCOUNT)
  throw Error("AZURE_STORAGE_ACCOUNT not found");
if (!process.env.AZURE_STORAGE_ACCOUNT_KEY) {
  throw Error("AZURE_STORAGE_ACCOUNT_KEY not found");
}
const sharedKeyCredential = new StorageSharedKeyCredential(
  process.env.AZURE_STORAGE_ACCOUNT!,
  process.env.AZURE_STORAGE_ACCOUNT_KEY!
);

const blobServiceClient = new BlobServiceClient(
  `https://${process.env.AZURE_STORAGE_ACCOUNT}.blob.core.windows.net`,
  sharedKeyCredential
);

export default blobServiceClient;
