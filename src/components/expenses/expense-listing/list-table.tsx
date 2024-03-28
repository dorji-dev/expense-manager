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
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { GoChevronDown } from "react-icons/go";
import Link from "next/link";

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

  return (
    <div>
      <div className='mb-[8px] max-w-max ml-auto'>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='outline' className='rounded-md font-normal'>
              Toggle columns{" "}
              <GoChevronDown className='ml-[8px] h-[16px] w-[16px]' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end' className='w-dropdown-trigger-width'>
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <DataTable table={table} />
    </div>
  );
};

export default ExpenseListTable;
