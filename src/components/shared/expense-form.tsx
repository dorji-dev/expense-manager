"use client";

import { useEffect, useState } from "react";
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
import { FormValidators } from "../../lib/validationSchema";
import { Category } from "../../lib/types/config";
import { getCategory } from "../providers/database";
interface ExpenseFormProps {
  onSubmit: (values: Category) => Promise<void>;
}

const ExpenseForm = ({ onSubmit }: ExpenseFormProps) => {
  const [catagories, setCategories] = useState<Category[]>([]);
  const res = async () =>
    await getCategory().then((res) => setCategories(res?.categories));

  useEffect(() => {
    res();
  }, []);

  // const [date, setDate] = useState<Date>();
  return (
    <Form onSubmit={onSubmit}>
      {({ handleSubmit, form }) => {
        return (
          <form onSubmit={handleSubmit} className='space-y-[20px]'>
            <div>
              <span className='block font-medium mb-[8px]'>Date</span>
              <Field name='date'>
                {({ input, meta }) => (
                  <DatePickerSingle
                    {...input}
                    selected={input?.value ? new Date(input?.value) : undefined}
                    onSelect={(date) => input?.onChange(date?.toISOString())}
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
              <Field
                name='item'
                validate={FormValidators.compose(FormValidators.required)}
              >
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
              <Field
                name='category'
                validate={FormValidators.compose(FormValidators.required)}
              >
                {() => (
                  <Select
                    onValueChange={(categoryValue) =>
                      form.change("category", categoryValue)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder='Select a category' />
                    </SelectTrigger>
                    <SelectContent>
                      {!!catagories?.length &&
                        catagories.map((category) => (
                          <SelectItem
                            value={category.categoryName as string}
                            key={category?.$id}
                          >
                            {category?.categoryName}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                )}
              </Field>
            </div>
            <label className='block font-medium'>
              Amount
              <Field
                name='amount'
                validate={FormValidators.compose(FormValidators.required)}
              >
                {({ input, meta }) => (
                  <Input
                    {...input}
                    errorMessage={
                      meta?.touched && meta?.error ? meta.error : ""
                    }
                    type='number'
                    placeholder='e.g. 5'
                    className='mt-[8px]'
                  />
                )}
              </Field>
            </label>
            <label className='block font-medium'>
              Notes
              <Field
                name='note'
                validate={FormValidators.compose(FormValidators.required)}
              >
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
