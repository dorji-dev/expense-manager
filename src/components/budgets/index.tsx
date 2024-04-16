"use client";
import {
  CATEGORY_ICON_MAPPING,
  CategoryIconNames,
} from "@/lib/constants/icon-mapping";
import { Progress } from "../ui/progress";
import { getCategory } from "@/components/providers/database/category";
import { getExpense } from "@/components/providers/database/expense";
import { useCallback, useEffect, useState } from "react";
import { Category, Expense } from "../../lib/types/config";

const Budgets = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [expense, setExpense] = useState<Expense[]>([]);
  useEffect(() => {
    (async () => {
      const categoriesRes = await getCategory();
      setCategories(categoriesRes.categories);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const expenseData = await getExpense();
      setExpense(expenseData.expenses);
    })();
  }, []);

  const getCategoryExpense = useCallback(
    (categoryName: string): number => {
      return expense.reduce((sum, expenseItem) => {
        return expenseItem.category === categoryName
          ? sum + expenseItem.amount
          : sum;
      }, 0);
    },
    [expense]
  );

  if (!categories.length || !expense.length) {
    return;
  }

  const getDisplayData = () => {
    const displayData = categories.map((categoryItem) => {
      return {
        category: categoryItem.categoryName,
        icon: categoryItem.iconName,
        budget: categoryItem.amount.toLocaleString("en-IN"),
        spendingPercentage:
          (getCategoryExpense?.(categoryItem.categoryName) /
            categoryItem.amount) *
          100,
        spending: getCategoryExpense?.(
          categoryItem.categoryName
        ).toLocaleString("en-IN"),
      };
    });
    return displayData;
  };

  const categoryGrandTotal = categories.reduce(
    (acc, categoryAmount) => acc + categoryAmount.amount,
    0
  );

  const expenseGrandTotal = expense.reduce(
    (acc, expenseAmount) => acc + expenseAmount.amount,
    0
  );

  return (
    <div className='space-y-[20px]'>
      <h4 className='font-bold'>Budgets</h4>
      <div>
        <div className='grid grid-cols-2 mb-[16px]'>
          <div>
            <h6 className='font-bold'>Total amount allocated for category</h6>
            <span>Nu.{categoryGrandTotal} budget</span>
          </div>
          <div className='flex flex-col items-end'>
            <h6 className='font-bold'>Total amount spent</h6>
            <span>Nu.{expenseGrandTotal}</span>
          </div>
        </div>
        <Progress value={(expenseGrandTotal / categoryGrandTotal) * 100} />
      </div>
      <div className='space-y-[20px]'>
        <h6 className='font-bold'>Spending by category</h6>
        <div className='space-y-[30px]'>
          {getDisplayData().map((budget) => {
            const CategoryIcon =
              CATEGORY_ICON_MAPPING[budget.icon as CategoryIconNames];
            return (
              <div key={budget.category} className='space-y-[20px]'>
                <div className='flex justify-between items-center'>
                  <div className='flex space-x-[16px] items-center'>
                    <div className='w-[46px] aspect-square flex justify-center items-center bg-muted rounded-[10px]'>
                      <CategoryIcon className='text-[20px]' />
                    </div>
                    <div>
                      <p className='font-medium'>{budget.category}</p>
                      <p className='text-muted-foreground text-[12px]'>
                        {budget.spendingPercentage}% of Nu.{budget.budget}
                      </p>
                    </div>
                  </div>
                  <p>Nu.{budget.spending}</p>
                </div>
                <div className='space-y-[12px]'>
                  <div className='flex justify-between'>
                    <span>Nu.{budget.budget}</span>{" "}
                    <span className='text-[12px]'>
                      {budget.spendingPercentage}%
                    </span>
                  </div>
                  <Progress value={budget.spendingPercentage} />
                  <p className='text-muted-foreground text-[12px]'>
                    Nu.{budget.spending}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Budgets;
