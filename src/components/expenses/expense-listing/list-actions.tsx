"use client";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import DeleteConfirm from "../../shared/delete-confirm";
import { toast } from "../../ui/use-toast";
import { Expense } from "../../../lib/types/config";
import ExpenseForm from "../../shared/expense-form";
import {
  DeleteExpenseById,
  UpdateExpenseById,
} from "../../providers/database/expense";

interface ExpenseListActionsProps {
  expenseId: string;
  initialData: Expense;
}

const ExpenseListActions = ({
  expenseId,
  initialData,
}: ExpenseListActionsProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const handleEditExpense = async (values: Expense) => {
    await UpdateExpenseById(initialData.$id, values)
      .then(() => {
        toast({
          description: "Updated category successfully",
        });
        setDropdownOpen(false);
      })
      .catch((error) => {
        toast({
          description: error.response.message,
        });
      });
  };

  const handleOnDeleteExpense = async () => {
    await DeleteExpenseById(expenseId)
      .then(() => {
        toast({
          description: "Delete successful",
        });
        setDropdownOpen(false);
      })
      .catch((error) =>
        toast({
          description: error.response.message,
        })
      );
  };

  return (
    <DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' className='h-[32px] w-[32px] p-0'>
          <span className='sr-only'>Open menu</span>
          <HiOutlineDotsHorizontal className='h-[16px] w-[16px]' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <Dialog>
          <DialogTrigger asChild>
            <DropdownMenuItem
              className='cursor-pointer'
              onSelect={(e) => e.preventDefault()}
            >
              Edit
            </DropdownMenuItem>
          </DialogTrigger>
          <DialogContent>
            <ExpenseForm
              onSubmit={handleEditExpense}
              initialData={initialData}
              submitButtonLabel='Update'
            />
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger asChild>
            <DropdownMenuItem
              className='cursor-pointer text-destructive focus:text-destructive'
              onSelect={(e) => e.preventDefault()}
            >
              Delete
            </DropdownMenuItem>
          </DialogTrigger>
          <DialogContent>
            <DeleteConfirm onConfirm={handleOnDeleteExpense} />
          </DialogContent>
        </Dialog>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ExpenseListActions;
