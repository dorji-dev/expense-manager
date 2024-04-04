import { Button } from "../ui/button";
import { DialogClose } from "@radix-ui/react-dialog";

interface Props {
  onConfirm: VoidFunction;
}

const DeleteConfirm = ({ onConfirm }: Props) => {
  return (
    <div className='space-y-[20px]'>
      <p className='text-center'>Are you sure?</p>
      <div className='flex justify-center gap-[20px]'>
        <DialogClose asChild>
          <Button type='button' variant='secondary'>
            Cancel
          </Button>
        </DialogClose>
        <Button variant='destructive' onClick={onConfirm}>
          Confirm
        </Button>
      </div>
    </div>
  );
};

export default DeleteConfirm;
