"use client";

import { useState } from "react";
import { DatePickerSingle } from "../ui/date-picker-single";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const AddNewExpenseForm = () => {
  const [date, setDate] = useState<Date>();

  return (
    <form className="space-y-[20px]">
      <div>
        <span className="block font-medium mb-[8px]">Date</span>
        <DatePickerSingle selected={date} onSelect={setDate} />
      </div>
      <label className="block font-medium">
        Item{" "}
        <Input
          type="text"
          placeholder="e.g. Coffee at Starbucks"
          className="mt-[8px]"
        />
      </label>
      <div>
        <span className="block font-medium mb-[8px]">Category</span>
        <Select>
          <SelectTrigger>
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
      <label className="block font-medium">
        Amount <Input type="text" placeholder="e.g. 5" className="mt-[8px]" />
      </label>
      <label className="block font-medium mb-[8px]">
        Notes{" "}
        <Textarea
          placeholder="Add optional details"
          className="mt-[8px] font-normal"
        />
      </label>
      <Button type="submit" className="w-full">
        Save
      </Button>
    </form>
  );
};

export default AddNewExpenseForm;
