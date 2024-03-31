"use client";

import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { useState } from "react";
import DeleteCategory from "./delete-category";
import CategoryForm from "./category-form";
import { Category } from "../../lib/types/config";

interface CategoryActionProps {
  initialData: Category;
}

const CategoryAction = ({ initialData }: CategoryActionProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' className='h-[32px] w-[32px] p-0'>
          <span className='sr-only'>Open menu</span>
          <HiOutlineDotsHorizontal className='h-[16px] w-[16px]' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <Dialog>
          <DialogTrigger asChild>
            <DropdownMenuItem
              className='cursor-pointer'
              onSelect={(e) => e.preventDefault()}
            >
              Edit
            </DropdownMenuItem>
          </DialogTrigger>
          <DialogContent className=''>
            <h6 className='text-[16px] text-muted-foreground'>Edit category</h6>
            <CategoryForm
              onSubmit={async () => {}}
              initialData={initialData}
              submitButtonLabel='Update'
            />
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger asChild>
            <DropdownMenuItem
              className='cursor-pointer text-destructive focus:text-destructive'
              onSelect={(e) => e.preventDefault()}
            >
              Delete
            </DropdownMenuItem>
          </DialogTrigger>
          <DialogContent>
            <DeleteCategory />
          </DialogContent>
        </Dialog>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CategoryAction;
