import { Category } from "@/lib/types/config";
import {
  categoryCollectionId,
  databaseId,
  databases,
  expenseCollectionId,
} from "@/config/appwrite-config";
import { Models, ID, Query } from "appwrite";

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

export async function getCategory(userId: string) {
  const { documents } = await databases.listDocuments(
    databaseId,
    categoryCollectionId,
    [Query.equal("userId", userId)]
  );
  return {
    categories: documents.map(mapDocument),
  };
}

export async function updateCategoryById(
  categoryId: Category["$id"],
  data: Category
) {
  const result = await databases.updateDocument(
    databaseId,
    categoryCollectionId,
    categoryId,
    data
  );
  return result;
}

export async function deleteCategoryById(categoryId: Category["$id"]) {
  const result = await databases.deleteDocument(
    databaseId,
    categoryCollectionId,
    categoryId
  );
  return result;
}

function mapDocument(document: Models.Document) {
  const category: Category = {
    iconName: document.iconName,
    categoryName: document.categoryName,
    amount: document.amount,
    $id: document.$id,
    category: document.category,
    userId: document.userId,
  };
  return category;
}
