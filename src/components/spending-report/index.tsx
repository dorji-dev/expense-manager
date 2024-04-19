"use client";

import ExpenseListFilter from "../expenses/expense-listing/list-filter";
import SpendingGraph from "./spending-graph";

const SpendingReport = () => {
  return (
    <div className='space-y-[20px]'>
      <h4 className='font-[900]'>Spending Report</h4>
      <SpendingGraph />
    </div>
  );
};

export default SpendingReport;
