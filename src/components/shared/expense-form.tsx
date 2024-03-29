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
import { Field, Form } from "react-final-form";
import { Category } from "../../lib/types/config";

const ExpenseForm = () => {
  const [date, setDate] = useState<Date>();
  const handleOnSubmitExpense = (value: Category) => {
    console.log(value);
  };
  return (
    <Form onSubmit={handleOnSubmitExpense}>
      {({ handleSubmit }) => {
        return (
          <form onSubmit={handleSubmit} className='space-y-[20px]'>
            <div>
              <span className='block font-medium mb-[8px]'>Date</span>
              <Field name='date'>
                {({ input, meta }) => (
                  <DatePickerSingle
                    {...input}
                    selected={date}
                    onSelect={setDate}
                    placeholder='Select date'
                    errorMessage={
                      meta?.touched && meta?.error ? meta.error : ""
                    }
                  />
                )}
              </Field>
            </div>
            <label className='block font-medium'>
              Item
              <Field name='item'>
                {({ input, meta }) => (
                  <Input
                    {...input}
                    type='text'
                    placeholder='e.g. Coffee at Starbucks'
                    className='mt-[8px]'
                    errorMessage={
                      meta?.touched && meta?.error ? meta.error : ""
                    }
                  />
                )}
              </Field>
            </label>
            <div>
              <span className='block font-medium mb-[8px]'>Category</span>
              <Field name='category'>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder='Select a category' />
                  </SelectTrigger>
                  <SelectContent>
                    {["Food", "Transportation", "Rent", "Games"].map(
                      (category) => (
                        <SelectItem value={category} key={category}>
                          {category}
                        </SelectItem>
                      )
                    )}
                  </SelectContent>
                </Select>
              </Field>
            </div>
            <label className='block font-medium'>
              Amount
              <Field name='amount'>
                {({ input, meta }) => (
                  <Input
                    {...input}
                    errorMessage={
                      meta?.touched && meta?.error ? meta.error : ""
                    }
                    type='text'
                    placeholder='e.g. 5'
                    className='mt-[8px]'
                  />
                )}
              </Field>
            </label>
            <label className='block font-medium'>
              Notes
              <Field name='amount'>
                {({ input, meta }) => (
                  <Textarea
                    {...input}
                    errorMessage={
                      meta?.touched && meta?.error ? meta.error : ""
                    }
                    placeholder='Add optional details'
                    className='mt-[8px] font-normal'
                  />
                )}
              </Field>
            </label>
            <Button type='submit' className='w-full'>
              Save
            </Button>
          </form>
        );
      }}
    </Form>
  );
};

export default ExpenseForm;
