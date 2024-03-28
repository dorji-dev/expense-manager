import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/button";
import CategoryForm from "./category-form";

const AddCategory = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add new</Button>
      </DialogTrigger>
      <DialogContent>
        <h6 className="text-[16px] text-muted-foreground">Add category</h6>
        <CategoryForm />
      </DialogContent>
    </Dialog>
  );
};

export default AddCategory;
