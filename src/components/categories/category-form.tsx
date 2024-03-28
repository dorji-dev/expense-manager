import { Button } from "../ui/button";
import { Input } from "../ui/input";

const CategoryForm = () => {
  return (
    <form className="space-y-[16px]">
      <label className="block font-medium">
        Category name{" "}
        <Input type="text" placeholder="Category name" className="mt-[8px]" />
      </label>
      <Button type="submit" className="w-full">Add</Button>
    </form>
  );
};

export default CategoryForm;
