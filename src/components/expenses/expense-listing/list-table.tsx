"use client";

import {
  SortingState,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import { expenseListColumns } from "./expense-list-columns";
import { Expense } from "@/lib/types/misc";
import DataTable from "../../shared/data-table";

const expenses: Expense[] = [
  {
    date: "Sep 30",
    item: "Coffee at starbucks",
    category: "Restaurant",
    amount: "500",
    note: "Had a great time!",
  },
  {
    date: "Sep 30",
    item: "Party at Swiss",
    category: "Party",
    amount: "500",
    note: "Had a great time!",
  },
  {
    date: "Sep 30",
    item: "Coffee at starbucks",
    category: "Restaurant",
    amount: "500",
    note: "Had a great time!",
  },
  {
    date: "Sep 30",
    item: "Coffee at starbucks",
    category: "Restaurant",
    amount: "500",
    note: "Had a great time!",
  },
  {
    date: "Sep 30",
    item: "Coffee at starbucks",
    category: "Restaurant",
    amount: "500",
    note: "Had a great time!",
  },
  {
    date: "Sep 30",
    item: "Coffee at starbucks",
    category: "Restaurant",
    amount: "500",
    note: "Had a great time!",
  },
  {
    date: "Sep 30",
    item: "Coffee at starbucks",
    category: "Restaurant",
    amount: "500",
    note: "Had a great time!",
  },
  {
    date: "Sep 30",
    item: "Coffee at starbucks",
    category: "Restaurant",
    amount: "500",
    note: "Had a great time!",
  },
];

const ExpenseListTable = () => {
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data: expenses,
    columns: expenseListColumns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
  });

  return <div><DataTable table={table} /></div>;
};

export default ExpenseListTable;
