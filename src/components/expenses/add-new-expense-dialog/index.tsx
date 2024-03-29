import ExpenseForm from "@/components/shared/expense-form";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";

const AddNewExpenseDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add new</Button>
      </DialogTrigger>
      <DialogContent>
        <h6 className="text-[16px] text-muted-foreground">Add new expense</h6>
        <ExpenseForm />
      </DialogContent>
    </Dialog>
  );
};

export default AddNewExpenseDialog;
