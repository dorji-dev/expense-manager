import ExpenseForm from "@/components/shared/expense-form";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { Expense } from "../../../lib/types/config";
import { toast } from "../../ui/use-toast";
import { useRef } from "react";
import { createExpense } from "../../providers/database/expense";

const AddNewExpenseDialog = () => {
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const handleSubmitExpenseForm = async (values: Expense) => {
    try {
      const res = await createExpense({
        ...values,
      }).then(() => {
        toast({
          description: " Added successfully",
        });
        triggerRef.current?.click();
      });
    } catch (error: any) {
      toast({
        description: error.response.message,
      });
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild ref={triggerRef}>
        <Button>Add new</Button>
      </DialogTrigger>
      <DialogContent>
        <h6 className='text-[16px] text-muted-foreground'>Add new expense</h6>
        <ExpenseForm
          onSubmit={handleSubmitExpenseForm}
          submitButtonLabel='save'
        />
      </DialogContent>
    </Dialog>
  );
};

export default AddNewExpenseDialog;
