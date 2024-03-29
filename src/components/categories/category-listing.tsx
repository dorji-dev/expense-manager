import { CategoryIconNames, CATEGORY_ICON_MAPPING } from "@/lib/constants/icon-mapping";
import CategoryAction from "./category-action";

const categories = [
  {
    name: "Food",
    budget: 50,
    icon: "food",
  },
  {
    name: "Transportation",
    budget: 200,
    icon: "transportation",
  },
  {
    name: "Housing",
    budget: 500,
    icon: "housing",
  },
];

const CategoryListing = () => {
  return (
    <div className="space-y-[20px]">
      {categories.map((category) => {
        const CategoryIcon = CATEGORY_ICON_MAPPING[category.icon as CategoryIconNames];
        return (
          <div
            key={category.name}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-[12px]">
              <div className="w-[46px] aspect-square flex justify-center items-center bg-muted rounded-[10px]">
                <CategoryIcon className="text-[20px]" />
              </div>
              <div>
                <p className="font-medium">{category.name}</p>
                <p className="text-muted-foreground">${category.budget}</p>
              </div>
            </div>
            <div>
              <CategoryAction />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryListing;
