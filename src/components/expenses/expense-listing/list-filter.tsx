import { DateRangePicker } from "@/components/ui/date-picker-range";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

const ExpenseListFilter = () => {
  return (
    <div>
      <p className="mb-[10px] text-[12px] text-muted-foreground">Filters</p>
      <div className="flex flex-col sm:flex-row sm:items-center gap-[20px] border rounded-[10px] p-[12px]">
        <div className="flex items-center gap-[20px]">
          <span className="font-medium grow">Date</span>
          <DateRangePicker />
        </div>
        <div className="flex items-center gap-[20px]">
          <span className="font-medium grow">Category</span>
          <Select>
            <SelectTrigger className="h-[40px] max-w-max">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              {["Food", "Transportation", "Rent", "Games"].map((category) => (
                <SelectItem value={category} key={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default ExpenseListFilter;
