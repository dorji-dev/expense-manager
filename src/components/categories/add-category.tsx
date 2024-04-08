"use client";
import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/button";
import CategoryForm from "./category-form";
import { createCategory } from "../providers/database/category";
import { toast } from "../ui/use-toast";
import { Category } from "../../lib/types/config";

const AddCategory = () => {
  const handleOnAddCategory = async (values: Category, form: any) => {
  
      await createCategory({
        ...values,
      })
        .then(() => {
          toast({
            description: " Added successfully",
          });
          form.reset();
        })
        .catch((error) => {
          toast({
            description: error.response.message,
          });
        });
   
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add new</Button>
      </DialogTrigger>
      <DialogContent>
        <h6 className='text-[16px] text-muted-foreground'>Add category</h6>
        <CategoryForm submitButtonLabel='Add' onSubmit={handleOnAddCategory} />
      </DialogContent>
    </Dialog>
  );
};

export default AddCategory;
