"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { useRef } from "react";
import {
  DayPickerSingleProps,
  SelectSingleEventHandler,
} from "react-day-picker";
import { IoCalendarOutline } from "react-icons/io5";

type DatePickerSingleProps = Omit<DayPickerSingleProps, "mode"> & {
  placeholder: string;
};

/**
 * Single date picker
 */
export function DatePickerSingle({
  selected,
  className,
  onSelect,
  placeholder,
  ...props
}: DatePickerSingleProps) {
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const onDateSelect: SelectSingleEventHandler = (...args) => {
    onSelect && onSelect(...args);
    triggerRef.current?.click();
  };

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-full h-[48px] justify-start text-left font-normal",
              !selected && "text-muted-foreground"
            )}
            ref={triggerRef}
          >
            <IoCalendarOutline className="mr-[8px] h-[16px] w-[16px]" />
            {selected ? format(selected, "PPP") : <span>{placeholder}</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent align="start" className=" w-auto p-0">
          <Calendar
            defaultMonth={selected}
            mode="single"
            captionLayout="dropdown-buttons"
            selected={selected}
            fromYear={1960}
            toYear={2030}
            onSelect={onDateSelect}
            {...props}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
