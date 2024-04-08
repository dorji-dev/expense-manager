"use client";
import {
  CategoryIconNames,
  CATEGORY_ICON_MAPPING,
} from "@/lib/constants/icon-mapping";
import CategoryAction from "./category-action";
import { getCategory } from "@/components/providers/database/category";
import { useEffect, useState } from "react";
import { client } from "../../appwrite-config";
import { categoryCollectionId, databaseId } from "../../config/appwrite-config";
import { Category } from "../../lib/types/config";

const CategoryListing = () => {
  const [categoryListing, setCategoryListing] = useState<Category[]>([]);
  const [, setLoading] = useState(true);

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    const unsubscribe = client.subscribe<Category>(
      `databases.${databaseId}.collections.${categoryCollectionId}.documents`,
      (res) => {
        if (res.events[0].split(".").includes("create")) {
          if (
            !categoryListing.some((c) => {
              return c.$id === res.payload.$id;
            })
          ) {
            setCategoryListing((prev) => [...prev, res.payload]);
          }
        } else if (res.events[0].split(".").includes("delete")) {
          setCategoryListing(
            categoryListing.filter((c) => c.$id !== res.payload.$id)
          );
        } else if (res.events[0].split(".").includes("update")) {
          setCategoryListing(
            categoryListing.map((categoryList) => {
              if (categoryList.$id === res.payload.$id) {
                return res.payload;
              }
              return categoryList;
            })
          );
        }
      }
    );
    return unsubscribe;
  }, [categoryListing]);

  const getCategories = async () =>
    await getCategory().then((res) => {
      setCategoryListing(res.categories);
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
