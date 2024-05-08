import { Expense } from "@/lib/types/config";
import {
  databaseId,
  databases,
  expenseCollectionId,
} from "@/config/appwrite-config";
import { Models, ID, Query } from "appwrite";

export async function createExpense(expense: Omit<Expense, "$id">) {
  const document = await databases.createDocument(
    databaseId,
    expenseCollectionId,
    ID.unique(),
    expense
  );
  return {
    expense: mapDocument(document),
  };
}

export async function getExpense(userId: string) {
  const { documents } = await databases.listDocuments(
    databaseId,
    expenseCollectionId,
    [Query.equal("userId", userId)]
  );
  return {
    expenses: documents.map(mapDocument),
  };
}

export async function deleteExpenseById(expenseId: Expense["$id"]) {
  const result = await databases.deleteDocument(
    databaseId,
    expenseCollectionId,
    expenseId
  );
  return result;
}

export async function updateExpenseById(
  expenseId: Expense["$id"],
  data: Expense
) {
  const result = await databases.updateDocument(
    databaseId,
    expenseCollectionId,
    expenseId,
    data
  );
  return result;
}

function mapDocument(document: Models.Document) {
  const expense: Expense = {
    amount: document.amount,
    $id: document.$id,
    item: document.item,
    note: document.note,
    date: document.date,
    category: document.category,
    userId: document.userId,
  };
  return expense;
}
