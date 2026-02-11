import React, { FormEvent, useState } from 'react';
import { useMockData } from '../hooks/useMockData';
import { budgetCategories as mockBudget, fetchMock } from '../services/mockData';
import { Card } from '../components/ui/Card';
import { BudgetCard } from '../components/feature/BudgetCard';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';

export const BudgetPage: React.FC = () => {
  const { data } = useMockData(async () => fetchMock(mockBudget), []);
  const [categories, setCategories] = useState(mockBudget);
  const [month, setMonth] = useState('');
  const [savingTarget, setSavingTarget] = useState('');

  const handleLimitChange = (id: string, value: number) => {
    setCategories((prev) => prev.map((c) => (c.id === id ? { ...c, limit: value } : c)));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // For now, just a no-op mock; in real app we’d persist to backend.
  };

  const totalLimit = categories.reduce((sum, c) => sum + c.limit, 0);
  const totalSpent = categories.reduce((sum, c) => sum + c.spent, 0);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold text-slate-900 dark:text-slate-50">Budget planner</h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Set monthly limits per category and spot overspending early with clear visual alerts.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {data?.map((cat) => (
              <BudgetCard key={cat.id} category={categories.find((c) => c.id === cat.id) ?? cat} />
            ))}
          </div>
        </div>
        <Card title="Monthly budget setup" subtitle="Adjust targets and saving goals.">
          <form className="space-y-4 text-sm" onSubmit={handleSubmit}>
            <div className="grid gap-3 sm:grid-cols-2">
              <Input
                label="Month"
                type="month"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                placeholder="2026-02"
              />
              <Input
                label="Savings target (₹)"
                placeholder="e.g. 40,000"
                value={savingTarget}
                onChange={(e) => setSavingTarget(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Adjust category limits</p>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <div key={cat.id} className="flex items-center gap-2">
                    <span className="w-24 text-xs text-slate-600 dark:text-slate-300">{cat.name}</span>
                    <input
                      type="range"
                      min={0}
                      max={50000}
                      value={cat.limit}
                      onChange={(e) => handleLimitChange(cat.id, Number(e.target.value))}
                      className="flex-1"
                    />
                    <span className="w-20 text-right text-xs text-slate-600 dark:text-slate-300">
                      ₹{cat.limit.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl bg-slate-50 px-3 py-3 text-xs text-slate-600 dark:bg-slate-900 dark:text-slate-300">
              <div className="flex items-center justify-between">
                <span>Total budgeted</span>
                <span className="font-semibold">₹{totalLimit.toLocaleString()}</span>
              </div>
              <div className="mt-1 flex items-center justify-between">
                <span>Current projected spend</span>
                <span className="font-semibold text-danger">₹{totalSpent.toLocaleString()}</span>
              </div>
            </div>
            <Button type="submit" className="w-full">
              Save budget plan
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};


