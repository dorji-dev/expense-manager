"use client";
import { CATEGORY_ICON_MAPPING } from "@/lib/constants/icon-mapping";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Field, Form } from "react-final-form";
import { Category } from "@/lib/types/config";
import { FormValidators } from "@/lib/validationSchema";

interface CategoryFormProps {
  onSubmit: (values: Category, form: any) => Promise<void>;
  submitButtonLabel: string;
  initialData?: Category;
}

const CategoryForm = ({
  initialData,
  submitButtonLabel,
  onSubmit,
}: CategoryFormProps) => {
  return (
    <Form onSubmit={onSubmit} initialValues={initialData}>
      {({ handleSubmit, form }) => {
        return (
          <form onSubmit={handleSubmit} className='space-y-[16px]'>
            <label className='block font-medium'>
              Category name
              <Field
                name='categoryName'
                validate={FormValidators.compose(FormValidators.required)}
              >
                {({ input, meta }) => (
                  <Input
                    {...input}
                    errorMessage={
                      meta?.touched && meta?.error ? meta.error : ""
                    }
                    type='text'
                    placeholder='Category name'
                    className='mt-[8px]'
                  />
                )}
              </Field>
            </label>
            <label className='block font-medium'>
              Budget
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
                    placeholder='Budget'
                    className='mt-[8px]'
                  />
                )}
              </Field>
            </label>
            <div>
              <span className='block mb-[8px] font-medium'>Icon</span>
              <Field
                name='iconName'
                validate={FormValidators.compose(FormValidators.required)}
              >
                {() => (
                  <Select
                    onValueChange={(iconValue) =>
                      form.change("iconName", iconValue)
                    }
                    defaultValue={initialData?.iconName ?? ""}
                  >
                    <SelectTrigger className='h-[48px]'>
                      <SelectValue placeholder='Select icon' />
                    </SelectTrigger>
                    <SelectContent
                      position='popper'
                      className='w-select-trigger-width'
                    >
                      <div className='flex flex-wrap justify-center gap-[20px] py-[10px]'>
                        {Object.entries(CATEGORY_ICON_MAPPING).map(
                          ([iconName, Icon]) => (
                            <SelectItem
                              showIndicator={false}
                              value={iconName}
                              key={iconName}
                              className='w-[46px] p-0 aspect-square flex justify-center items-center bg-muted rounded-[10px]'
                            >
                              <Icon className='text-[20px]' />
                            </SelectItem>
                          )
                        )}
                      </div>
                    </SelectContent>
                  </Select>
                )}
              </Field>
            </div>
            <Button type='submit' className='w-full'>
              {submitButtonLabel}
            </Button>
          </form>
        );
      }}
    </Form>
  );
};

export default CategoryForm;
