const endpoint = process.env.NEXT_PUBLIC_APPWRITE_END_POINT as string;
const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID as string;
export const databaseId = process.env
  .NEXT_PUBLIC_APPWRITE_DATABASE_ID as string;
export const categoryCollectionId = process.env
  .NEXT_PUBLIC_APPWRITE_CATEGORY_COLLECTION_ID as string;
export const expenseCollectionId = process.env
  .NEXT_PUBLIC_APPWRITE_EXPENSE_COLLECTION_ID as string;
export const profileCollectionId = process.env
  .NEXT_PUBLIC_APPWRITE_PROFILE_COLLECTION_ID as string;
export const storageId = process.env.NEXT_PUBLIC_APPWRITE_STORAGE_ID as string;

import { Client, Account, Databases, Storage } from "appwrite";

export const client = new Client();
export const databases = new Databases(client);
export const storage = new Storage(client);

client.setEndpoint(endpoint).setProject(projectId);

export const account = new Account(client);
export { ID } from "appwrite";
