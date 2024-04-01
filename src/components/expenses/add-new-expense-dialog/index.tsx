import ExpenseForm from "@/components/shared/expense-form";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { createExpense } from "../../providers/database";
import { Category } from "../../../lib/types/config";
import { toast } from "../../ui/use-toast";

const AddNewExpenseDialog = () => {
  const handleSubmitExpenseForm = async (values: Category) => {
    console.log(values);

    try {
      const res = await createExpense({
        ...values,
      }).then(() => {
        toast({
          description: " Added successfully",
        });
      });
    } catch (error: any) {
      toast({
        description: error.response.message,
      });
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add new</Button>
      </DialogTrigger>
      <DialogContent>
        <h6 className='text-[16px] text-muted-foreground'>Add new expense</h6>
        <ExpenseForm onSubmit={handleSubmitExpenseForm} />
      </DialogContent>
    </Dialog>
  );
};

export default AddNewExpenseDialog;
