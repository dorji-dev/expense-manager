"use client";

import React from "react";
import { buttonVariants } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { DayPicker, DropdownProps } from "react-day-picker";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-[12px] w-full", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-[16px] sm:space-x-[16px] sm:space-y-0",
        month: "space-y-[16px]",
        caption: "flex justify-center pt-[4px] relative items-center",
        caption_label: "font-medium",
        caption_dropdowns: "flex justify-center gap-[4px]",
        nav: "space-x-[4px] flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-[28px] w-[28px] bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-[4px]",
        nav_button_next: "absolute right-[4px]",
        table: "w-full border-collapse space-y-[4px]",
        head_row: "flex",
        head_cell:
          "text-muted-foreground rounded-md w-[36px] font-normal text-[12px]",
        row: "flex w-full mt-[8px]",
        cell: "text-center text-[12px] p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-[36px] w-[36px] p-0 font-normal aria-selected:opacity-100"
        ),
        day_selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside: "text-muted-foreground opacity-50",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        Dropdown: ({ value, onChange, children}: DropdownProps) => {
          const options = React.Children.toArray(
            children
          ) as React.ReactElement<React.HTMLProps<HTMLOptionElement>>[];
          const selected = options.find((child) => child.props.value === value);
          const handleChange = (value: string) => {
            const changeEvent = {
              target: { value },
            } as React.ChangeEvent<HTMLSelectElement>;
            onChange?.(changeEvent);
          };
          return (
            <Select
              value={value?.toString()}
              onValueChange={(value) => {
                handleChange(value);
              }}
            >
              <SelectTrigger className="pr-[6px] focus:ring-0 text-[12px]">
                <SelectValue>{selected?.props?.children}</SelectValue>
              </SelectTrigger>
              <SelectContent position="popper" align="center">
                <ScrollArea className="h-[320px]">
                  {options.map((option, id: number) => (
                    <SelectItem
                      className="text-[12px]"
                      key={`${option.props.value}-${id}`}
                      value={option.props.value?.toString() ?? ""}
                    >
                      {option.props.children}
                    </SelectItem>
                  ))}
                </ScrollArea>
              </SelectContent>
            </Select>
          );
        },
        IconLeft: () => <MdKeyboardArrowLeft className="h-[16px] w-[16px]" />,
        IconRight: () => (
          <MdKeyboardArrowRight className="h-[16px] w-[16px]" />
        ),
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
