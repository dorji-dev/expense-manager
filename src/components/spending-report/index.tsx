"use client";

import ExpenseListFilter from "../expenses/expense-listing/list-filter";
import ExpenseListTable from "../expenses/expense-listing/list-table";
import SpendingGraph from "./spending-graph";
import SpendingTable from "./spending-table";

const SpendingReport = () => {
  return (
    <div className='space-y-[20px]'>
      <h4 className='font-[900]'>Spending Report</h4>
      <SpendingGraph />
      <div className='space-y-[12px]'>
        <p>Tabular data for this month</p>
        {/* <SpendingTable /> */}
        <ExpenseListFilter />
        <SpendingTable />
      </div>
    </div>
  );
};

export default SpendingReport;
