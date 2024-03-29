const endpoint = process.env.NEXT_PUBLIC_APPWRITE_END_POINT as string;
const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID as string;
export const databaseId = process.env
  .NEXT_PUBLIC_APPWRITE_DATABASE_ID as string;
export const collectionId = process.env
  .NEXT_PUBLIC_APPWRITE_COLLECTION_ID as string;

import { Client, Account, Databases } from "appwrite";

export const client = new Client();
export const databases = new Databases(client);


client.setEndpoint(endpoint).setProject(projectId);

export const account = new Account(client);
export { ID } from 'appwrite';
