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
import { AuthContextProps, useAuth } from "../../providers/auth-provider";

const ExpenseListFilter = () => {
  const { user } = useAuth() as AuthContextProps;
  const [catagories, setCategories] = useState<Category[]>([]);
  const [fetchCategory, setFetchCategory] = useQueryState("category");
  const [startDate, setStartDate] = useQueryState("start");
  const [endDate, setEndDate] = useQueryState("end");
  const result = async () => {
    await getCategory(user.$id).then((result) =>
      setCategories(result?.categories)
    );
  };

  useEffect(() => {
    result();
  }, []);

  const handleClear = () => {
    setFetchCategory(null);
    setStartDate(null);
    setEndDate(null);
  };
  return (
    <div>
      <p className='mb-[10px] text-[12px] text-muted-foreground'>Filters</p>
      <div className='flex flex-col sm:flex-row sm:items-center gap-[20px] border rounded-[10px] p-[12px]'>
        <div className='flex items-center gap-[20px]'>
          <span className='font-medium grow'>Date</span>
          <DateRangePicker
            onUpdate={(range) => {
              setStartDate(range.range.from.toISOString());
              setEndDate(
                range.range.to?.toISOString() ?? range.range.from.toISOString()
              );
            }}
            initialDateFrom={startDate ? new Date(startDate) : undefined}
            initialDateTo={endDate ? new Date(endDate) : undefined}
            key={`${startDate}${endDate}`}
          />
        </div>
        <div className='flex items-center gap-[20px]'>
          <span className='font-medium grow'>Category</span>
          <Select
            defaultValue={fetchCategory ?? ""}
            onValueChange={(value) => {
              if (value === "all") {
                setFetchCategory(null);
              } else setFetchCategory(value);
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
        {(fetchCategory || startDate || endDate) && (
          <Button onClick={handleClear}>Clear all</Button>
        )}
      </div>
    </div>
  );
};

export default ExpenseListFilter;
