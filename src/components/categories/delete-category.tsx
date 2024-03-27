import { Button } from "../ui/button";

const DeleteCategory = () => {
  return (
    <div className="space-y-[20px]">
      <p className="text-center">Are you sure?</p>
      <div className="flex justify-center gap-[20px]">
        <Button variant="secondary">Cancel</Button>
        <Button variant="destructive">Confirm</Button>
      </div>
    </div>
  );
};

export default DeleteCategory;
