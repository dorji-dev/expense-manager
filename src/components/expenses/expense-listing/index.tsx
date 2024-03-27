import React from "react";
import ExpenseListFilter from "./list-filter";
import ExpenseListTable from "./list-table";

const ExpenseListing = () => {
  return (
    <div className="space-y-[30px]">
      <ExpenseListFilter />
      <ExpenseListTable />
    </div>
  );
};

export default ExpenseListing;
