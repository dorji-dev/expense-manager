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

const ExpenseForm = () => {
  const [date, setDate] = useState<Date>();
  const handleOnSubmitExpense = (selected: string) => console.log(selected); // TODO: implement

  return (
    <Form onSubmit={handleOnSubmitExpense}>
      {({ handleSubmit, values }) => {
        return (
          // <form onSubmit={handleSubmit}>
          //   <div className='space-y-[20px]'>
          //     <label className='block font-medium'>
          //       Password
          //       <Field
          //         name='password'
          //         type='password'
          //         placeholder='Enter your password'
          //         validate={FormValidators.compose(
          //           FormValidators.minLength(8)
          //         )}
          //       >
          //         {({ input, meta }) => (
          //           <Input
          //             {...input}
          //             className='mt-[8px]'
          //             errorMessage={
          //               meta?.touched && meta?.error ? meta.error : ""
          //             }
          //           />
          //         )}
          //       </Field>
          //     </label>

          //     <label className='block font-medium'>
          //       Confirm Password
          //       <Field
          //         name='confirmpassword'
          //         type='password'
          //         placeholder='Confirm your password'
          //         validate={(value) => {
          //           if (value !== values.password) {
          //             return "Password do not match!";
          //           }
          //         }}
          //       >
          //         {({ input, meta }) => (
          //           <Input
          //             {...input}
          //             className='mt-[8px]'
          //             errorMessage={
          //               meta?.touched && meta?.error ? meta.error : ""
          //             }
          //           />
          //         )}
          //       </Field>
          //     </label>
          //   </div>

          //   <Button type='submit' className='w-full mt-[20px]'>
          //     Reset password
          //   </Button>
          // </form>
          <form className='space-y-[20px]'>
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
            </div>
            <label className='block font-medium'>
              Amount{" "}
              <Input type='text' placeholder='e.g. 5' className='mt-[8px]' />
            </label>
            <label className='block font-medium'>
              Notes{" "}
              <Textarea
                placeholder='Add optional details'
                className='mt-[8px] font-normal'
              />
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
