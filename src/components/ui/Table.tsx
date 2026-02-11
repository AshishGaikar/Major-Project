import React from 'react';
import clsx from 'clsx';

interface TableProps {
  headers: string[];
  children: React.ReactNode;
}

export const Table: React.FC<TableProps> = ({ headers, children }) => {
  return (
    <div className="w-full overflow-x-auto rounded-xl border border-slate-100 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <table className="min-w-full divide-y divide-slate-100 text-sm dark:divide-slate-800">
        <thead className="bg-slate-50 dark:bg-slate-900/70">
          <tr>
            {headers.map((header) => (
              <th
                key={header}
                className="whitespace-nowrap px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 bg-white dark:divide-slate-800 dark:bg-slate-900">
          {children}
        </tbody>
      </table>
    </div>
  );
};

interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  className?: string;
}

export const TableRow: React.FC<TableRowProps> = ({ className, children, ...rest }) => (
  <tr className={clsx('hover:bg-slate-50 dark:hover:bg-slate-800/70', className)} {...rest}>
    {children}
  </tr>
);

interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  className?: string;
}

export const TableCell: React.FC<TableCellProps> = ({ className, children, ...rest }) => (
  <td className={clsx('whitespace-nowrap px-4 py-3 text-sm text-slate-700 dark:text-slate-200', className)} {...rest}>
    {children}
  </td>
);


