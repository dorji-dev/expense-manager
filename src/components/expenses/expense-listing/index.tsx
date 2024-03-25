import React from "react";
import ExpenseListFilter from "./list-filter";
import ExpenseListTable from "./list-table";

const ExpenseListing = () => {
  return (
    <div>
      <ExpenseListFilter />
      <ExpenseListTable />
    </div>
  );
};

export default ExpenseListing;
