import { flexRender, Table as ReactTable } from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { RefObject } from "react";
import { cn } from "@/lib/utils/misc";

interface DataTableProps<TData> {
  table: ReactTable<TData>;
  tableRef?: RefObject<HTMLTableElement>;
  containerClass?: string;
}

/**
 * Reusable tanstack table component. All the table config should be passed from the parent component.
 */
const DataTable = <TData,>({
  table,
  tableRef,
  containerClass,
}: DataTableProps<TData>) => {
  return (
    <div className={cn(containerClass, "rounded-[10px] border")}>
      <Table ref={tableRef}>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id} className="px-[16px] py-[12px] text-foreground capitalize">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length &&
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.parentId}
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="px-[16px] py-[20px] text-muted-foreground">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DataTable;
