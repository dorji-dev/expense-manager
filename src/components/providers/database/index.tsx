import { Category } from "@/lib/types/config";
import { collectionId, databaseId, databases } from "@/config/appwrite-config";
import { Models, ID } from "appwrite";

export async function createCategory(category: Omit<Category, "$id">) {
  const document = await databases.createDocument(
    databaseId,
    collectionId,
    ID.unique(),
    category
  );
  return {
    category: mapDocument(document),
  };
}

export async function getCategory() {
  const { documents } = await databases.listDocuments(databaseId, collectionId);
  return {
    categories: documents.map(mapDocument),
  };
}

// export async function getCategoryById(eventId: Category["$id"]) {
//   const document = await databases.getDocument(
//     databaseId,
//     collectionId,
//     eventId
//   );
//   return {
//     category: mapDocument(document),
//   };
// }

export async function DeleteCategoryById(eventId: string) {
  await databases.deleteDocument(databaseId, collectionId, eventId);
}

function mapDocument(document: Models.Document) {
  const category: Category = {
    iconName: document.iconName,
    categoryName: document.categoryName,
    amount: document.amount,
    $id: document.$id,
  };
  return category;
}
