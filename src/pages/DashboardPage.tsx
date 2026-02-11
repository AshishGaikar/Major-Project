import React from 'react';
import { Card } from '../components/ui/Card';
import { useMockData } from '../hooks/useMockData';
import { dashboardOverview, expenseBreakdown, fetchMock, transactions, yearlyTrend } from '../services/mockData';
import { PieChartCard } from '../components/charts/PieChartCard';
import { LineChartCard } from '../components/charts/LineChartCard';

export const DashboardPage: React.FC = () => {
  const overviewState = useMockData(async () => fetchMock(dashboardOverview), []);
  const txState = useMockData(async () => fetchMock(transactions.slice(0, 5)), []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold text-slate-900 dark:text-slate-50">Overview</h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          A quick snapshot of your cash flow, spending categories and recent activity.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {overviewState.loading || !overviewState.data ? (
          Array.from({ length: 4 }).map((_, idx) => (
            <Card key={idx} className="animate-pulse">
              <div className="h-16 rounded-lg bg-slate-100 dark:bg-slate-800" />
            </Card>
          ))
        ) : (
          <>
            <Card title="Total balance">
              <p className="text-2xl font-semibold text-slate-900 dark:text-slate-50">
                ₹{overviewState.data.totalBalance.toLocaleString()}
              </p>
              <p className="mt-1 text-xs text-emerald-600 dark:text-emerald-400">+₹4,200 vs last month</p>
            </Card>
            <Card title="Monthly income">
              <p className="text-2xl font-semibold text-slate-900 dark:text-slate-50">
                ₹{overviewState.data.monthlyIncome.toLocaleString()}
              </p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Includes salary + recurring inflows</p>
            </Card>
            <Card title="Monthly expenses">
              <p className="text-2xl font-semibold text-danger">₹{overviewState.data.monthlyExpenses.toLocaleString()}</p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Across all tracked categories</p>
            </Card>
            <Card title="Savings rate">
              <p className="text-2xl font-semibold text-emerald-600 dark:text-emerald-400">
                {overviewState.data.savingsRate}%
              </p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Recommended: 30–40% of monthly income</p>
            </Card>
          </>
        )}
      </div>

      <div className="grid gap-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
        <LineChartCard title="Monthly income vs expenses" data={yearlyTrend} />
        <PieChartCard title="Expense breakdown by category" data={expenseBreakdown} />
      </div>

      <Card title="Recent transactions" subtitle="Last 5 expenses and inflows.">
        {txState.loading || !txState.data ? (
          <div className="space-y-2">
            {Array.from({ length: 4 }).map((_, idx) => (
              <div key={idx} className="h-10 w-full animate-pulse rounded-lg bg-slate-100 dark:bg-slate-800" />
            ))}
          </div>
        ) : txState.data.length === 0 ? (
          <p className="rounded-xl border border-dashed border-slate-200 bg-slate-50/80 px-4 py-6 text-sm text-slate-500 dark:border-slate-800 dark:bg-slate-900/30 dark:text-slate-400">
            No recent transactions yet. Once you connect your bank or add expenses, they’ll appear here.
          </p>
        ) : (
          <ul className="divide-y divide-slate-100 text-sm dark:divide-slate-800">
            {txState.data.map((t) => (
              <li key={t.id} className="flex items-center justify-between py-2.5">
                <div>
                  <p className="font-medium text-slate-800 dark:text-slate-100">{t.description}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {t.date} •{' '}
                    <span className="inline-flex rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-200">
                      {t.category}
                    </span>
                  </p>
                </div>
                <p
                  className={`text-sm font-semibold ${
                    t.type === 'income' ? 'text-emerald-600 dark:text-emerald-400' : 'text-danger'
                  }`}
                >
                  {t.type === 'income' ? '+' : '-'}₹{t.amount.toLocaleString()}
                </p>
              </li>
            ))}
          </ul>
        )}
      </Card>
    </div>
  );
};


