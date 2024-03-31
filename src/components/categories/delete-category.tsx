import { DeleteCategoryById } from "../providers/database";
import { Button } from "../ui/button";

const DeleteCategory = () => {
  const handleOnDelete = async (category: any) => {
    await DeleteCategoryById(category.$id);
  };

  return (
    <div className='space-y-[20px]'>
      <p className='text-center'>Are you sure?</p>
      <div className='flex justify-center gap-[20px]'>
        <Button variant='secondary'>Cancel</Button>
        <Button variant='destructive' onClick={handleOnDelete}>
          Confirm
        </Button>
      </div>
    </div>
  );
};

export default DeleteCategory;
