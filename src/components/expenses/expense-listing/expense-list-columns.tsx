"use client";

import { ColumnDef } from "@tanstack/react-table";
import ExpenseListActions from "./list-actions";
import { RxCaretSort } from "react-icons/rx";
import { Expense } from "../../../lib/types/config";
import { formatDate } from "date-fns";

export const expenseListColumns: ColumnDef<Expense>[] = [
  {
    id: "Date",
    accessorKey: "date",
    header: ({ column }) => (
      <button
        className='flex items-center h-full'
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Date
        <RxCaretSort className='ml-2 h-4 w-4' />
      </button>
    ),
    cell: ({ cell }) =>
      formatDate(new Date(cell.getValue() as Date), "MMM d, yyyy"),
  },
  {
    id: "Item",
    accessorKey: "item",
    header: ({ column }) => (
      <button
        className='flex items-center h-full'
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Item
        <RxCaretSort className='ml-2 h-4 w-4' />
      </button>
    ),
  },
  {
    id: "Category",
    accessorKey: "category",
    cell: ({ cell }) => (
      <span className='text-center text-foreground w-full block bg-foreground/5 px-[12px] py-[4px] rounded-[10px]'>
        {cell.getValue() as string}
      </span>
    ),
    header: ({ column }) => (
      <button
        className='flex items-center h-full'
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Category
        <RxCaretSort className='ml-2 h-4 w-4' />
      </button>
    ),
  },
  {
    id: "Amount",
    accessorKey: "amount",
    header: ({ column }) => (
      <button
        className='flex items-center h-full'
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Amount
        <RxCaretSort className='ml-2 h-4 w-4' />
      </button>
    ),
  },
  {
    id: "Note",
    accessorKey: "note",
  },
  {
    accessorKey: "$id",
    enableHiding: false,
  },
  {
    id: "Actions",
    cell: ({ row }) => {
      return (
        <ExpenseListActions
          initialData={{
            $id: row.getValue("$id"),
            amount: row.getValue("Amount"),
            date: row.getValue("Date"),
            note: row.getValue("Note"),
            item: row.getValue("Item"),
            category: row.getValue("Category"),
          }}
          expenseId={row.getValue("$id")}
        />
      );
    },
  },
];
