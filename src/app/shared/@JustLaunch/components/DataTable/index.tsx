'use client';
import { useState, useMemo } from 'react';
import {
  ColumnDef,
  useReactTable,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  SortingState,
  ColumnFiltersState,
  VisibilityState,
} from '@tanstack/react-table';
import { Menu } from '@headlessui/react';
import {
  ChevronLeft,
  ChevronRight,
  Search,
  SlidersHorizontal,
} from 'lucide-react';
import { InputRoot } from '../Input/InputRoot';
import { InputWrapper } from '../Input/InputWrapper';
import { InputIcon } from '../Input/InputIcon';
import { InputPlaceHolder } from '../Input/InputPlaceHolder';
import { CheckboxRoot } from '../Checkbox/CheckboxRoot';
import { CheckboxInput } from '../Checkbox/CheckboxInput';
import { CheckboxIcon } from '../Checkbox/CheckboxIcon';
import { CheckboxLabel } from '../Checkbox/CheckboxLabel';

interface DataTableProps<TData> {
  columns: ColumnDef<TData>[];
  data: TData[];
  placeholder?: string;
  searchColumn?: string;
  pageSize?: number;
}

export function DataTable<TData>({
  columns,
  data,
  placeholder,
  searchColumn,
  pageSize = 10,
}: DataTableProps<TData>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: pageSize,
      },
    },
  });

  const handleCheckboxChange = (columnId: string) => {
    table.getColumn(columnId)?.toggleVisibility();
  };

  const renderPageNumbers = () => {
    const pageCount = table.getPageCount();
    const currentPage = table.getState().pagination.pageIndex;

    const pages = [];

    for (let i = 0; i < pageCount; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => table.setPageIndex(i)}
          className={`rounded px-3 py-1 ${
            currentPage === i
              ? 'bg-primary/600 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          {i + 1}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className='overflow-x-auto'>
      <div className='mb-4 flex items-center justify-between'>
        <div className='relative w-full sm:w-auto'>
          {!searchColumn ? (
            <></>
          ) : (
            <InputRoot>
              <InputWrapper>
                <InputIcon icon={Search} />
                <InputPlaceHolder
                  placeholder={placeholder ?? 'Search...'}
                  value={
                    (table
                      .getColumn(searchColumn)
                      ?.getFilterValue() as string) ?? ''
                  }
                  onChange={(event) =>
                    table
                      .getColumn(searchColumn)
                      ?.setFilterValue(event.target.value)
                  }
                />
              </InputWrapper>
            </InputRoot>
          )}
        </div>

        <div className='hidden sm:block'>
          <Menu
            as='div'
            className='relative inline-block text-left outline-none'
          >
            <Menu.Button
              onClick={() => setIsDropdownOpen(() => !isDropdownOpen)}
              className='inline-flex justify-center rounded-md border border-primary/300 bg-white px-2 py-2 text-sm font-medium text-gray-700 shadow-sm outline-none hover:bg-primary/600 hover:text-primary/50 focus:outline-none focus:ring-0 focus:ring-offset-0'
            >
              <SlidersHorizontal className='h-4 w-4' aria-hidden='true' />
            </Menu.Button>
            <Menu.Items className='absolute right-0 z-10 mt-2 origin-top-right divide-y divide-gray-100 rounded-md border border-gray-200 bg-white shadow-lg outline-none focus:outline-none'>
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => (
                  <div key={column.id} className='mx-4 mb-2 first:mt-2'>
                    <CheckboxRoot onClick={(e) => e.stopPropagation()}>
                      <CheckboxInput
                        checked={column.getIsVisible()}
                        onChange={() => handleCheckboxChange(column.id)}
                      />
                      <CheckboxIcon />
                      <CheckboxLabel>{column.id}</CheckboxLabel>
                    </CheckboxRoot>
                  </div>
                ))}
            </Menu.Items>
          </Menu>
        </div>
      </div>

      <div className='overflow-x-auto'>
        <table className='min-w-full divide-y divide-gray-200'>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className='px-2 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className='divide-y divide-gray-200 bg-white'>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className='whitespace-nowrap px-2 py-4 text-sm text-gray-500'
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='flex items-center justify-between p-4'>
        <div className='flex space-x-1'>
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className='rounded border border-primary/300 bg-white px-2 py-1 text-sm  hover:bg-primary/600 hover:text-primary/50 disabled:opacity-50'
          >
            <ChevronLeft className='h-4 w-4' aria-hidden='true' />
          </button>
          {renderPageNumbers()}
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className='rounded border border-primary/300 bg-white px-2 py-1 text-sm  hover:bg-primary/600 hover:text-primary/50 disabled:opacity-50'
          >
            <ChevronRight className='h-4 w-4' aria-hidden='true' />
          </button>
        </div>
      </div>
    </div>
  );
}
