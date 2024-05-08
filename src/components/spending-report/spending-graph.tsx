import Chart from "react-apexcharts";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Category, Expense } from "../../lib/types/config";
import { getCategory } from "../providers/database/category";
import { getExpense } from "../providers/database/expense";
import { DateRangePicker } from "../ui/date-picker-range";
import { useQueryState } from "nuqs";
import { isWithinInterval } from "date-fns";
import { Button } from "../ui/button";
import { useAuth, AuthContextProps } from "../providers/auth-provider";

const SpendingGraph = () => {
  const { user } = useAuth() as AuthContextProps;

  const [categories, setCategories] = useState<Category[]>([]);
  const [expenseList, setExpenseList] = useState<Expense[]>([]);
  const [startDate, setStartDate] = useQueryState("start");
  const [endDate, setEndDate] = useQueryState("end");
  const ref = useRef(0);

  useEffect(() => {
    (async () => {
      const categoriesRes = await getCategory(user.$id);
      setCategories(categoriesRes.categories);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const expenseData = await getExpense(user.$id);
      setExpenseList(expenseData.expenses);
    })();
  }, []);

  const categoryGrandTotal = categories.reduce(
    (acc, categoryAmount) => acc + categoryAmount.amount,
    0
  );

  const getCategoryExpense = useCallback(
    (categoryName: string): number => {
      const categoryExpense = expenseList.filter(
        (expense) => expense.category == categoryName
      );
      const filteredExpense =
        startDate && endDate
          ? categoryExpense.filter((expense) =>
              isWithinInterval(expense.date, { start: startDate, end: endDate })
            )
          : categoryExpense;

      return filteredExpense.reduce(
        (sum, expenseItem) => sum + expenseItem.amount,
        0
      );
    },
    [expenseList, startDate, endDate]
  );

  const data = useMemo(() => {
    return categories.map((category) => ({
      x: category.categoryName,
      y: getCategoryExpense(category.categoryName),
    }));
  }, [categories, getCategoryExpense, startDate, endDate]);

  const handleClear = () => {
    setStartDate(null);
    setEndDate(null);
  };

  return (
    <div className='space-y-[20px] mt-[20px]'>
      <h6 className='font-bold'>Spending this month</h6>
      <div className='flex justify-between'>
        <h4 className='text-[16px] md:text-[20px] font-bold'>
          Nu.{categoryGrandTotal}
        </h4>
        <div className='space-x-[16px]'>
          <DateRangePicker
            onUpdate={(range) => {
              ref.current = ref.current + 1;
              setStartDate(range.range.from.toISOString());
              setEndDate(
                range.range.to?.toISOString() ?? range.range.from.toISOString()
              );
            }}
            initialDateFrom={startDate ? new Date(startDate) : undefined}
            initialDateTo={endDate ? new Date(endDate) : undefined}
            key={`${startDate}${endDate}`}
          />
          {(startDate || endDate) && (
            <Button onClick={handleClear}>Clear all</Button>
          )}
        </div>
      </div>
      <Chart
        options={{
          colors: ["#2563eb33"],
          dataLabels: { enabled: false },
          grid: { borderColor: "#f4f6f8" },
          states: {
            hover: {
              filter: {
                type: "none",
              },
            },
          },
          yaxis: {
            labels: {
              style: {
                colors: ["#02081799"],
              },
            },
          },
          tooltip: {
            y: {
              formatter: function (val) {
                return "$ " + val;
              },
            },
          },
          legend: {
            fontWeight: "600",
            showForSingleSeries: true,
            customLegendItems: ["Category"],
            markers: {
              height: 0,
              width: 0,
            },
          },
          chart: {
            toolbar: {
              tools: {
                download: false,
              },
            },
          },
        }}
        series={[{ data, name: "Spending" }]}
        type='bar'
        width='100%'
        height={400}
      />
    </div>
  );
};

export default SpendingGraph;
