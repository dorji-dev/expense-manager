"use client";

import {
  SortingState,
  VisibilityState,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { expenseListColumns } from "./expense-list-columns";
import DataTable from "../../shared/data-table";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { GoChevronDown } from "react-icons/go";
import AddNewExpenseDialog from "../add-new-expense-dialog";
import { Expense } from "../../../lib/types/config";
import { client } from "../../../appwrite-config";
import { getExpense } from "../../providers/database/expense";

const ExpenseListTable = () => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({
    $id: false,
  });
  const [tablelist, setTablelist] = useState<Expense[]>([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    const unsubscribe = client.subscribe<Expense>(
      "databases.66066386f36bd7316ce8.collections.660a5003b5d43e877b5e.documents",
      (res) => {
        if (res.events[0].split(".").includes("create")) {
          if (
            !tablelist.some((c) => {
              return c.$id === res.payload.$id;
            })
          ) {
            setTablelist((prev) => [...prev, res.payload]);
          }
        } else if (res.events[0].split(".").includes("delete")) {
          setTablelist(tablelist.filter((c) => c.$id !== res.payload.$id));
        }
      }
    );
    return unsubscribe;
  }, [tablelist]);

  const getCategories = async () =>
    await getExpense().then((res) => {
      setTablelist(res.expenses);
      setloading(false);
    });

  const table = useReactTable({
    data: tablelist,
    columns: expenseListColumns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      sorting,
      columnVisibility,
    },
  });
  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <div className='mb-[8px] space-x-[12px] max-w-max ml-auto'>
        <AddNewExpenseDialog />
        {!!tablelist.length && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='outline' className='rounded-[10px] font-normal'>
                Toggle columns{" "}
                <GoChevronDown className='ml-[8px] h-[16px] w-[16px]' />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align='end'
              className='w-dropdown-trigger-width'
            >
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
        )}
      </div>
      {!!tablelist.length ? (
        <DataTable table={table} />
      ) : (
        <div className='flex justify-center items-center font-bold'>
          Add New expenses.
        </div>
      )}
    </div>
  );
};

export default ExpenseListTable;
