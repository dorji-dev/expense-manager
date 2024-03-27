import AddCategory from "./add-category";
import CategoryListing from "./category-listing";

const ExpenseCategories = () => {
  return (
    <div className="space-y-[16px] max-w-[500px] mx-auto">
      <h5 className="font-bold">Categorize your expenses</h5>
      <p>Add or edit your expense categories.</p>
      <CategoryListing />
      <div className="max-w-max ml-auto">
        <AddCategory />
      </div>
    </div>
  );
};

export default ExpenseCategories;
