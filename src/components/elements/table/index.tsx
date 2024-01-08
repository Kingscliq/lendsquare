import React, { ReactNode, SetStateAction, useState } from 'react';
import styles from './table.module.scss';
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  ColumnDef,
  flexRender,
} from '@tanstack/react-table';
import { FilterTypes, IUserData } from '@/types/dataTable';
import Filter from '@components/widget/filter';

interface TableProps {
  data: any;
  columns: any;
  loading: boolean;
  noData?: string;
  option?: string;
  setOption?: React.Dispatch<SetStateAction<string>>;
  filters: FilterTypes;
}

interface PaginationButtonProps {
  loading: boolean;
  children: ReactNode;
  disabled: boolean;
  className: string;
  onClick: () => void;
}

const TableComponent: React.FC<TableProps> = ({
  data,
  columns,
  loading,
  noData,
  setOption,
  option,
  filters,
}) => {
  return (
    <Table
      {...{ data, columns }}
      loading={loading}
      noData={noData}
      setOption={setOption}
      option={option}
      filters={filters}
    />
  );
};

function Table({
  data,
  columns,
  loading,
  noData,
  setOption,
  option,
  filters,
}: {
  data: IUserData[];
  columns: ColumnDef<IUserData>[];
  loading: boolean;
  noData?: string;
  option?: string;
  setOption?: React.Dispatch<SetStateAction<string>>;
  filters: FilterTypes;
}) {
  const [globalFilter, setGlobalFilter] = useState<string>('');

  // const [sorting, setSorting] = useState<SortingState>([]);
  // const options: { label: string; value: string }[] = [
  //   { label: 'Monthly', value: 'monthly' },
  //   { label: 'Daily', value: 'daily' },
  // ];

  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: true,
  });

  const Button: React.FC<PaginationButtonProps> = ({
    loading,
    children,
    disabled,
    className,
    onClick,
  }) => {
    return (
      <button
        className={`${className} border rounded p-1 text-xs ${
          disabled ? 'bg-primary-100 opacity-60' : 'bg-primary text-white'
        }`}
        disabled={disabled || loading}
        onClick={onClick}
      >
        {children}
      </button>
    );
  };
  return (
    <section>
      <div className="grid grid-cols-2 justify-between mt-4 mx-4">
        {/* <div>
          <TextField
            value={globalFilter ?? ''}
            onChange={(event) => setGlobalFilter(event.target.value)}
            className="p-2 font-lg border border-block"
            placeholder="Search Member"
            leftIcon={<Image src={search} alt={'Search'} />}
          />
        </div>
        <div className="ml-4">
          <SelectDropdown
            options={options}
            defaultValue={option}
            placeholder='Toggle By'
            onChange={({ value }: { value: string }) => {
              setOption!(value);
            }}
          />
        </div> */}
      </div>
      <article className={styles.table__container}>
        <Filter filters={filters} />
        <div className={styles.table__main}>
          <div className={styles.table__cover}>
            <table className={styles.table}>
              <thead>
                {table?.getHeaderGroups().map(headerGroup => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map(header => {
                      return (
                        <th key={header.id} colSpan={header.colSpan}>
                          {header.isPlaceholder ? null : (
                            <div>
                              {flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                            </div>
                          )}
                        </th>
                      );
                    })}
                  </tr>
                ))}
              </thead>
              <tbody>
                {!loading &&
                  table?.getRowModel()?.rows.map(row => {
                    return (
                      <tr key={row.id}>
                        {row?.getVisibleCells().map(cell => {
                          return (
                            <td key={cell.id}>
                              {flexRender(
                                cell?.column.columnDef.cell,
                                cell?.getContext()
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
              </tbody>
            </table>
            {loading && (
              <div>
                <div>Loading...</div>
              </div>
            )}
            {!loading && data?.length === 0 && (
              <div>
                <p>{noData || 'Oops! No Data to Display'}</p>
              </div>
            )}
          </div>
        </div>
      </article>
      <div />
      {!loading && data?.length > 0 && (
        <div className={styles.pagination__container}>
          <div className={styles.pagination_body}>
            <div className={styles.page}>
              {/* <div>Page </div>
              <div>
                {table?.getState().pagination.pageIndex + 1} of{' '}
                {table?.getPageCount()}
              </div> */}
              Show
            </div>
            {/* <span className="flex items-center gap-1 text-xs">
              | Go to page:
              <input
                type="number"
                defaultValue={table?.getState().pagination.pageIndex + 1}
                onChange={e => {
                  const page = e.target.value ? Number(e.target.value) - 1 : 0;
                  table.setPageIndex(page);
                }}
                className="border p-1 rounded w-16"
              />
            </span> */}
            <div>
              <select
                value={table?.getState().pagination.pageSize}
                onChange={e => {
                  table?.setPageSize(Number(e.target.value));
                }}
              >
                {[100, 200, 300, 400, 500].map(pageSize => (
                  <option key={pageSize} value={pageSize}>
                    {pageSize}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <div>of {data.length}</div>
            </div>
          </div>
          <div>
            <Button
              className=""
              onClick={() => table?.setPageIndex(0)}
              disabled={!table?.getCanPreviousPage()}
              loading={false}
            >
              {'<<'}
            </Button>
            <Button
              className=""
              onClick={() => table?.previousPage()}
              disabled={!table?.getCanPreviousPage()}
              loading={false}
            >
              &larr; Prev
            </Button>
            <Button
              className=""
              onClick={() => table?.nextPage()}
              disabled={!table?.getCanNextPage()}
              loading={false}
            >
              Next &rarr;
            </Button>

            <Button
              className=""
              onClick={() => table?.setPageIndex(table?.getPageCount() - 1)}
              disabled={!table?.getCanNextPage()}
              loading={false}
            >
              {'>>'}
            </Button>
          </div>
        </div>
      )}
    </section>
  );
}

export default TableComponent;
