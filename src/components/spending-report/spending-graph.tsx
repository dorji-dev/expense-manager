import Chart from "react-apexcharts";
import { useCallback, useEffect, useState } from "react";
import { Category, Expense } from "../../lib/types/config";
import { getCategory } from "../providers/database/category";
import { getExpense } from "../providers/database/expense";

const SpendingGraph = () => {
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

  const categoryGrandTotal = categories.reduce(
    (acc, categoryAmount) => acc + categoryAmount.amount,
    0
  );

  const getCategoryExpense = useCallback(
    (categoryName: string) => {
      let sum = 0;
      const categoryExpenses = expense.filter(
        (expense) => expense?.category === categoryName
      );
      categoryExpenses.forEach((item) => (sum += item.amount));
      return sum;
    },
    [categories, expense]
  );

  const data = categories.map((category) => ({
    x: category.categoryName,
    y: getCategoryExpense?.(category.categoryName),
  }));

  return (
    <div className='space-y-[20px] mt-[20px]'>
      <h6 className='font-bold'>Spending this month</h6>
      <div className='flex justify-between'>
        <h4 className='text-[16px] md:text-[20px] font-bold'>
          Nu.{categoryGrandTotal}
        </h4>
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
