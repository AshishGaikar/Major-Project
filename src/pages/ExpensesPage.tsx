import React, { FormEvent, useState } from 'react';
import { useMockData } from '../hooks/useMockData';
import { fetchMock, transactions as mockTransactions } from '../services/mockData';
import { ExpenseTable } from '../components/feature/ExpenseTable';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { Transaction } from '../types/finance';

export const ExpensesPage: React.FC = () => {
  const { data } = useMockData(async () => fetchMock(mockTransactions), []);
  const [form, setForm] = useState({
    date: '',
    description: '',
    category: '',
    amount: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof typeof form, string>>>({});
  const [localTx, setLocalTx] = useState<Transaction[]>(mockTransactions);

  const handleChange = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const nextErrors: typeof errors = {};
    if (!form.date) nextErrors.date = 'Date is required.';
    if (!form.description) nextErrors.description = 'Description is required.';
    if (!form.category) nextErrors.category = 'Category is required.';
    if (!form.amount) nextErrors.amount = 'Amount is required.';
    if (form.amount && Number.isNaN(Number(form.amount))) nextErrors.amount = 'Enter a valid number.';

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const tx: Transaction = {
      id: `local-${Date.now()}`,
      date: form.date,
      description: form.description,
      category: form.category,
      amount: Number(form.amount),
      type: 'expense',
    };
    setLocalTx((prev) => [tx, ...prev]);
    setForm({ date: '', description: '', category: '', amount: '' });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold text-slate-900 dark:text-slate-50">Expenses</h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Track and categorise your spending. Add manual expenses or import from bank statements.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <Card title="All expenses">
          <ExpenseTable transactions={localTx} />
        </Card>
        <Card title="Add new expense" subtitle="Quickly log cash or card transactions.">
          <form className="space-y-3 text-sm" onSubmit={handleSubmit}>
            <div className="grid gap-3 sm:grid-cols-2">
              <Input
                label="Date"
                type="date"
                value={form.date}
                onChange={(e) => handleChange('date', e.target.value)}
                error={errors.date}
              />
              <Input
                label="Category"
                placeholder="e.g. Groceries"
                value={form.category}
                onChange={(e) => handleChange('category', e.target.value)}
                error={errors.category}
              />
            </div>
            <Input
              label="Description"
              placeholder="e.g. Big Bazaar weekly shopping"
              value={form.description}
              onChange={(e) => handleChange('description', e.target.value)}
              error={errors.description}
            />
            <Input
              label="Amount (₹)"
              placeholder="0.00"
              value={form.amount}
              onChange={(e) => handleChange('amount', e.target.value)}
              error={errors.amount}
            />
            <Button type="submit" className="w-full">
              Save expense
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};


