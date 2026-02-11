import React from 'react';
import { BudgetCategory } from '../../types/finance';
import { Card } from '../ui/Card';

interface BudgetCardProps {
  category: BudgetCategory;
}

export const BudgetCard: React.FC<BudgetCardProps> = ({ category }) => {
  const percent = Math.min(100, Math.round((category.spent / category.limit) * 100));
  const isOver = category.spent > category.limit;

  return (
    <Card
      title={category.name}
      subtitle={`Limit: ₹${category.limit.toLocaleString()}`}
      className={isOver ? 'border-danger/40 ring-1 ring-danger/40' : ''}
    >
      <div className="space-y-2 text-sm">
        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <span>Spent</span>
          <span className={isOver ? 'text-danger font-semibold' : ''}>
            ₹{category.spent.toLocaleString()} ({percent}%)
          </span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
          <div
            className={`h-full rounded-full ${isOver ? 'bg-danger' : 'bg-primary'}`}
            style={{ width: `${percent}%` }}
          />
        </div>
        {isOver && (
          <p className="mt-1 text-xs font-medium text-danger">
            You have exceeded this budget. Consider reducing spending next month.
          </p>
        )}
      </div>
    </Card>
  );
};


