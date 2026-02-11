import React, { useMemo, useState } from 'react';
import { Transaction } from '../../types/finance';
import { Table, TableCell, TableRow } from '../ui/Table';
import { Input } from '../ui/Input';

interface ExpenseTableProps {
  transactions: Transaction[];
}

export const ExpenseTable: React.FC<ExpenseTableProps> = ({ transactions }) => {
  const [categoryFilter, setCategoryFilter] = useState('');
  const [dateFilter, setDateFilter] = useState('');

  const filtered = useMemo(
    () =>
      transactions.filter((t) => {
        if (t.type === 'income') return false;
        const matchesCategory = categoryFilter
          ? t.category.toLowerCase().includes(categoryFilter.toLowerCase())
          : true;
        const matchesDate = dateFilter ? t.date === dateFilter : true;
        return matchesCategory && matchesDate;
      }),
    [transactions, categoryFilter, dateFilter],
  );

  return (
    <div className="space-y-3">
      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
        <Input
          label="Filter by category"
          placeholder="e.g. Groceries"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        />
        <Input label="Filter by date" type="date" value={dateFilter} onChange={(e) => setDateFilter(e.target.value)} />
      </div>
      {filtered.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50/60 px-4 py-8 text-center text-sm text-slate-500 dark:border-slate-700 dark:bg-slate-900/40 dark:text-slate-400">
          No expenses found for the selected filters.
        </div>
      ) : (
        <Table headers={['Date', 'Description', 'Category', 'Amount']}>
          {filtered.map((t) => (
            <TableRow key={t.id}>
              <TableCell>{t.date}</TableCell>
              <TableCell>{t.description}</TableCell>
              <TableCell>
                <span className="inline-flex rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-200">
                  {t.category}
                </span>
              </TableCell>
              <TableCell className="text-right text-danger">-₹{t.amount.toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </Table>
      )}
    </div>
  );
};


