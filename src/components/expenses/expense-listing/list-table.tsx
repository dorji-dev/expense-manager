"use client";

import {
  SortingState,
  VisibilityState,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useEffect, useMemo, useState } from "react";
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
import { getExpense } from "../../providers/database/expense";
import {
  client,
  databaseId,
  expenseCollectionId,
} from "../../../config/appwrite-config";
import { useQueryState } from "nuqs";
import { isWithinInterval } from "date-fns";

const ExpenseListTable = () => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({
    $id: false,
  });
  const [expenseList, setExpenseList] = useState<Expense[]>([]);
  const [loading, setLoading] = useState(true);
  const [category] = useQueryState("category");
  const [startDate] = useQueryState("start");
  const [endDate] = useQueryState("end");

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    const unsubscribe = client.subscribe<Expense>(
      `databases.${databaseId}.collections.${expenseCollectionId}.documents`,
      () => {
        getCategories();
      }
    );
    return unsubscribe;
  }, [expenseList]);

  const getCategories = async () =>
    await getExpense().then((result) => {
      setExpenseList(result.expenses);
      setLoading(false);
    });

  const filteredList = useMemo(() => {
    const filterCategory = category
      ? expenseList.filter((expense) => expense.category == category)
      : expenseList;
    return filterCategory.filter(
      (expense) =>
        !startDate ||
        !endDate ||
        isWithinInterval(expense.date, { start: startDate, end: endDate })
    );
  }, [startDate, endDate, expenseList, category]);

  const table = useReactTable({
    data: filteredList,
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
        {!!filteredList.length && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='outline' className='rounded-[10px] font-normal'>
                Toggle columns
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
      {!!filteredList.length ? (
        <DataTable table={table} />
      ) : (
        <div className='flex justify-center items-center font-bold'>
          {category
            ? `No Expense for this ${category} category please add new Expense.`
            : "No expense added."}
        </div>
      )}
    </div>
  );
};

export default ExpenseListTable;
