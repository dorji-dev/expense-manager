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
import { Databases, ID, Models, Query } from "appwrite";
import { client, collectionId, databaseId } from "@/config/appwrite-config";

interface newExpenseProps {
  item: string;
  amount: number;
  notes: string;
  // category: string;
  // date: Date;
}

const AddNewExpenseForm = () => {
  const [date, setDate] = useState<Date>();
  const databases = new Databases(client);
  const [showItem, setShowItem] = useState<Models.Document[]>([]);

  useEffect(() => {
    showItems("");
  }, []);

  const handleSubmitExpense = async (value: newExpenseProps) => {
    console.log(value);
    try {
      const data = await databases.createDocument(
        databaseId,
        collectionId,
        ID.unique(),
        {
          // date: value.date,
          item: value.item,
          // category: value.category,
          amount: value.amount,
          notes: value.notes,
        }
      );
      showItems(value.item);
    } catch (error) {
      console.log("test", error);
    }
  };

  // viewing

  const showItems = async (item: string) => {
    try {
      const res = await databases.listDocuments(databaseId, collectionId, [
        Query.equal("item", item),
      ]);
      console.log(res.documents);
      setShowItem(res.documents);
    } catch (error: any) {
      console.log("test", error.response.message);
    }
  };

  return (
    <Form onSubmit={handleSubmitExpense}>
      {({ handleSubmit, values }) => {
        return (
          <>
            <form onSubmit={handleSubmit} className='space-y-[20px]'>
              <div>
                <span className='block font-medium mb-[8px]'>Date</span>
                <Field name='date'>
                  {({ input, meta }) => (
                    <DatePickerSingle
                      selected={date}
                      onSelect={setDate}
                      placeholder='Select date'
                      {...input}
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
                      type='text'
                      placeholder='e.g. Coffee at Starbucks'
                      className='mt-[8px]'
                      {...input}
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
                  {({ input, meta }) => (
                    <>
                      <Select
                        {...input}
                        // errorMessage={
                        //   meta?.touched && meta?.error ? meta.error : ""
                        // }
                      >
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
                    </>
                  )}
                </Field>
              </div>
              <label className='block font-medium'>
                Amount
                <Field name='amount'>
                  {({ input, meta }) => (
                    <Input
                      type='number'
                      placeholder='e.g. 5'
                      className='mt-[8px]'
                      {...input}
                      errorMessage={
                        meta?.touched && meta?.error ? meta.error : ""
                      }
                    />
                  )}
                </Field>
              </label>
              <label className='block font-medium'>
                Notes
                <Field name='notes'>
                  {({ input, meta }) => (
                    <Textarea
                      placeholder='Add optional details'
                      className='mt-[8px] font-normal'
                      {...input}
                      errorMessage={
                        meta?.touched && meta?.error ? meta.error : ""
                      }
                    />
                  )}
                </Field>
              </label>
              <Button type='submit' className='w-full'>
                Save
              </Button>
            </form>
            {showItem.length > 0 && (
              <div className='my-20'>
                {showItem.map((item, index) => (
                  <div key={index}>
                    <p>ID: {item.item}</p>
                    <p>Amount: ${item.amount}</p>
                    <p>Notes: {item.notes}</p>
                  </div>
                ))}
              </div>
            )}
          </>
        );
      }}
    </Form>
  );
};

export default AddNewExpenseForm;