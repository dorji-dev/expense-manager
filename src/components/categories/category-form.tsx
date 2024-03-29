import { CATEGORY_ICON_MAPPING } from "@/lib/constants/icon-mapping";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const CategoryForm = () => {
  return (
    <form className='space-y-[16px]'>
      <label className='block font-medium'>
        Category name
        <Input type='text' placeholder='Category name' className='mt-[8px]' />
      </label>
      <label className="block font-medium">
        Budget <Input type="text" placeholder="Budget" className="mt-[8px]" />
      </label>
      <div>
        <span className="block mb-[8px] font-medium">Icon</span>
        <Select>
          <SelectTrigger className="h-[48px]">
            <SelectValue placeholder="Select icon" />
          </SelectTrigger>
          <SelectContent position="popper" className="w-select-trigger-width">
            <div className="flex flex-wrap justify-center gap-[20px] py-[10px]">
              {Object.entries(CATEGORY_ICON_MAPPING).map(([iconName, Icon]) => (
                <SelectItem
                  showIndicator={false}
                  value={iconName}
                  key={iconName}
                  className="w-[46px] p-0 aspect-square flex justify-center items-center bg-muted rounded-[10px]"
                >
                  <Icon className="text-[20px]" />
                </SelectItem>
              ))}
            </div>
          </SelectContent>
        </Select>
      </div>
      <Button type="submit" className="w-full">
        Add
      </Button>
    </form>
  );
};

export default CategoryForm;
