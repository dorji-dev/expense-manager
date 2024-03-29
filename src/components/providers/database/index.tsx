import { Category } from "@/lib/types/config";
import { collectionId, databaseId, databases } from "@/config/appwrite-config";
import { Models, ID } from "appwrite";

export async function createCategory(event: Category) {
  const document = await databases.createDocument(
    databaseId,
    collectionId,
    ID.unique(),
    event
  );
  return {
    event: mapDocument(document),
  };
}

function mapDocument(document: Models.Document) {
  const event: Category = {
    icon: document.icon,
    name: document.name,
    amount: document.amount,
  };
  return event;
}
