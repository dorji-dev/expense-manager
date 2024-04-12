import {
  CATEGORY_ICON_MAPPING,
  CategoryIconNames,
} from "@/lib/constants/icon-mapping";
import { Progress } from "../ui/progress";

const Budgets = () => {
  const budgets = [
    {
      category: "Food",
      icon: "food",
      budget: 300,
      spending: 200,
      spendingPercentage: 30,
    },
    {
      category: "Transportation",
      icon: "transportation",
      budget: 15000,
      spending: 10000,
      spendingPercentage: 40,
    },
    {
      category: "Housing",
      icon: "housing",
      budget: 3000,
      spending: 2000,
      spendingPercentage: 70,
    },
  ];

  return (
    <div className="space-y-[20px]">
      <h4 className="font-bold">Budgets</h4>
      <div className="space-y-[16px]">
        <h6 className="font-bold">Total spent</h6>
        <div className="space-y-[12px]">
          <div className="flex justify-between">
            <span>$4000 budget</span>{" "}
            <span className="text-muted-foreground">2000</span>
          </div>
          <Progress value={50} />
        </div>
      </div>
      <div className="space-y-[20px]">
        <h6 className="font-bold">Spending by category</h6>
        <div className="space-y-[30px]">
          {budgets.map((budget) => {
            const CategoryIcon =
              CATEGORY_ICON_MAPPING[budget.icon as CategoryIconNames];
            return (
              <div key={budget.category} className="space-y-[20px]">
                <div className="flex justify-between items-center">
                  <div className="flex space-x-[16px] items-center">
                    <div className="w-[46px] aspect-square flex justify-center items-center bg-muted rounded-[10px]">
                      <CategoryIcon className="text-[20px]" />
                    </div>
                    <div>
                      <p className="font-medium">{budget.category}</p>
                      <p className="text-muted-foreground text-[12px]">
                        {budget.spendingPercentage}% of ${budget.budget}
                      </p>
                    </div>
                  </div>
                  <p>${budget.spending}</p>
                </div>
                <div className="space-y-[12px]">
                  <div className="flex justify-between">
                    <span>${budget.budget}</span>{" "}
                    <span className="text-[12px]">
                      {budget.spendingPercentage}%
                    </span>
                  </div>
                  <Progress value={budget.spendingPercentage} />
                  <p className="text-muted-foreground text-[12px]">
                    ${budget.spending}
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
