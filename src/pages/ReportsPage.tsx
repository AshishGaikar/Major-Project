import React from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { LineChartCard } from '../components/charts/LineChartCard';
import { savingsVsExpenses, yearlyTrend } from '../services/mockData';

export const ReportsPage: React.FC = () => {
  const totalSavings = yearlyTrend.reduce((sum, item) => sum + (item.savings ?? 0), 0);
  const totalExpenses = yearlyTrend.reduce((sum, item) => sum + (item.expenses ?? 0), 0);

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <h1 className="text-xl font-semibold text-slate-900 dark:text-slate-50">Reports & insights</h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            High-level view of your yearly trends, savings behaviour and spending mix.
          </p>
        </div>
        <Button type="button" variant="secondary" className="w-full sm:w-auto">
          Download PDF report
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card title="Year-to-date savings">
          <p className="text-2xl font-semibold text-emerald-600 dark:text-emerald-400">
            ₹{totalSavings.toLocaleString()}
          </p>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Across all months with tracked data this financial year.
          </p>
        </Card>
        <Card title="Year-to-date expenses">
          <p className="text-2xl font-semibold text-danger">₹{totalExpenses.toLocaleString()}</p>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Includes fixed and variable categories.</p>
        </Card>
        <Card title="Average savings rate">
          <p className="text-2xl font-semibold text-slate-900 dark:text-slate-50">
            {Math.round((totalSavings / (totalSavings + totalExpenses || 1)) * 100)}%
          </p>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Target at least 30–40% for aggressive wealth building.
          </p>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <LineChartCard title="Yearly trends: income, expenses, savings" data={yearlyTrend} />
        <LineChartCard title="Savings vs expenses" data={savingsVsExpenses} />
      </div>
    </div>
  );
};


