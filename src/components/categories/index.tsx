import AddCategory from "./add-category";
import CategoryListing from "./category-listing";

const ExpenseCategories = () => {
  return (
    <div className='space-y-[16px] max-w-[500px] mx-auto'>
      <h5 className='font-bold'>Categorize your expenses</h5>
      <div className='flex justify-between items-center'>
        <p>Add or edit your expense categories.</p>
        <AddCategory />
      </div>
      <CategoryListing />
    </div>
  );
};

export default ExpenseCategories;
