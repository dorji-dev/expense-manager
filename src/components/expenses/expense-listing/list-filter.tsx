"use client";
import { DateRangePicker } from "@/components/ui/date-picker-range";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useEffect, useState } from "react";
import { Category } from "../../../lib/types/config";
import { getCategory } from "../../providers/database/category";
import { useQueryState } from "nuqs";
import { Button } from "../../ui/button";

const ExpenseListFilter = () => {
  const [catagories, setCategories] = useState<Category[]>([]);
  const [category, setCategory] = useQueryState("category");
  const [start, setStart] = useQueryState("start");
  const [end, setEnd] = useQueryState("end");
  const res = async () => {
    await getCategory().then((res) => setCategories(res?.categories));
  };

  useEffect(() => {
    res();
  }, []);

  const handleclear = () => {
    setCategory(null);
    setStart(null);
    setEnd(null);
  };
  return (
    <div>
      <p className='mb-[10px] text-[12px] text-muted-foreground'>Filters</p>
      <div className='flex flex-col sm:flex-row sm:items-center gap-[20px] border rounded-[10px] p-[12px]'>
        <div className='flex items-center gap-[20px]'>
          <span className='font-medium grow'>Date</span>
          <DateRangePicker
            onUpdate={(range) => {
              setStart(range.range.from.toISOString());
              setEnd(range.range.to?.toISOString() ?? null);
            }}
            initialDateFrom={start ? new Date(start) : undefined}
            initialDateTo={end ? new Date(end) : undefined}
            key={`${start}${end}`}
          />
        </div>
        <div className='flex items-center gap-[20px]'>
          <span className='font-medium grow'>Category</span>
          <Select
            defaultValue={category ?? ""}
            onValueChange={(value) => {
              if (value === "all") {
                setCategory(null);
              } else setCategory(value);
            }}
          >
            <SelectTrigger className='h-[40px] max-w-max'>
              <SelectValue placeholder='Select a category' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='all'>All</SelectItem>
              {catagories.map((category) => (
                <SelectItem value={category.categoryName} key={category.$id}>
                  {category.categoryName}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        {(category || start || end) && (
          <Button onClick={handleclear}>Clear all</Button>
        )}
      </div>
    </div>
  );
};

export default ExpenseListFilter;
