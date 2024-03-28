const endpoint = process.env.NEXT_PUBLIC_APPWRITE_END_POINT as string;
const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID as string;

import { Client, Account } from 'appwrite';

export const client = new Client();

client.setEndpoint(endpoint).setProject(projectId);

export const account = new Account(client);
export { ID } from 'appwrite';
