import { Category } from "@/lib/types/config";
import {
  categoryCollectionId,
  databaseId,
  databases,
  expenseCollectionId,
} from "@/config/appwrite-config";
import { Models, ID } from "appwrite";

export async function createCategory(category: Omit<Category, "$id">) {
  const document = await databases.createDocument(
    databaseId,
    categoryCollectionId,
    ID.unique(),
    category
  );
  return {
    category: mapDocument(document),
  };
}

export async function getCategory() {
  const { documents } = await databases.listDocuments(
    databaseId,
    categoryCollectionId
  );
  return {
    categories: documents.map(mapDocument),
  };
}

export async function UpdateCategoryById(
  catogeryId: Category["$id"],
  data: Category
) {
  const result = await databases.updateDocument(
    databaseId,
    categoryCollectionId,
    catogeryId,
    data
  );
  return result;
}

export async function DeleteCategoryById(catogeryId: Category["$id"]) {
  const result = await databases.deleteDocument(
    databaseId,
    categoryCollectionId,
    catogeryId
  );
  return result;
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
