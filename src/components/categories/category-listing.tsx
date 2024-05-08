"use client";
import {
  CategoryIconNames,
  CATEGORY_ICON_MAPPING,
} from "@/lib/constants/icon-mapping";
import CategoryAction from "./category-action";
import { getCategory } from "@/components/providers/database/category";
import { useEffect, useState } from "react";
import {
  categoryCollectionId,
  client,
  databaseId,
} from "../../config/appwrite-config";
import { Category } from "../../lib/types/config";
import { useAuth, AuthContextProps } from "../providers/auth-provider";

const CategoryListing = () => {
  const { user } = useAuth() as AuthContextProps;
  const [categoryListing, setCategoryListing] = useState<Category[]>([]);
  const [, setLoading] = useState(true);

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    const unsubscribe = client.subscribe<Category>(
      `databases.${databaseId}.collections.${categoryCollectionId}.documents`,
      () => {
        getCategories();
      }
    );
    return unsubscribe;
  }, [categoryListing]);

  const getCategories = async () =>
    await getCategory(user.$id).then((result) => {
      setCategoryListing(result.categories);
      setLoading(false);
    });
  return (
    <div className='space-y-[20px]'>
      {categoryListing.map((category) => {
        const CategoryIcon =
          CATEGORY_ICON_MAPPING[category.iconName as CategoryIconNames];
        return (
          <div
            key={category.categoryName}
            className='flex items-center justify-between'
          >
            <div className='flex items-center gap-[12px]'>
              <div className='w-[46px] aspect-square flex justify-center items-center bg-muted rounded-[10px]'>
                <CategoryIcon className='text-[20px]' />
              </div>
              <div>
                <p className='font-medium'>{category.categoryName}</p>
                <p className='text-muted-foreground'>Nu.{category.amount}</p>
              </div>
            </div>
            <div>
              <CategoryAction initialData={{ ...category }} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryListing;
