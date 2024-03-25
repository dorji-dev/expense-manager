"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Expense } from "@/lib/types/misc";
import ExpenseListActions from "./list-actions";
import { RxCaretSort } from "react-icons/rx";

export const expenseListColumns: ColumnDef<Expense>[] = [
  {
    id: "Date",
    accessorKey: "date",
    header: ({ column }) => (
      <button
        className="flex items-center h-full"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Date
        <RxCaretSort className="ml-2 h-4 w-4" />
      </button>
    ),
  },
  {
    id: "Item",
    accessorKey: "item",
    header: ({ column }) => (
      <button
        className="flex items-center h-full"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Item
        <RxCaretSort className="ml-2 h-4 w-4" />
      </button>
    ),
  },
  {
    id: "Category",
    accessorKey: "category",
    cell: ({ cell }) => (
      <span className="text-center text-foreground w-full block bg-foreground/5 px-[12px] py-[4px] rounded-[10px]">
        {cell.getValue() as string}
      </span>
    ),
    header: ({ column }) => (
      <button
        className="flex items-center h-full"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Item
        <RxCaretSort className="ml-2 h-4 w-4" />
      </button>
    ),
  },
  {
    id: "Amount",
    accessorKey: "amount",
    header: ({ column }) => (
      <button
        className="flex items-center h-full"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Item
        <RxCaretSort className="ml-2 h-4 w-4" />
      </button>
    ),
  },
  {
    id: "Note",
    accessorKey: "note",
  },
  {
    id: "Actions",
    cell: () => {
      return <ExpenseListActions />;
    },
  },
];
