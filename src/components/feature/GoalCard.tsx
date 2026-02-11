import React from 'react';
import { Goal } from '../../types/finance';
import { Card } from '../ui/Card';

interface GoalCardProps {
  goal: Goal;
}

export const GoalCard: React.FC<GoalCardProps> = ({ goal }) => {
  const progress = Math.min(100, Math.round((goal.currentAmount / goal.targetAmount) * 100));

  return (
    <Card title={goal.name} subtitle={`Target: ₹${goal.targetAmount.toLocaleString()}`}>
      <div className="space-y-2 text-sm">
        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <span>Saved so far</span>
          <span>₹{goal.currentAmount.toLocaleString()}</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
          <div className="h-full rounded-full bg-accent" style={{ width: `${progress}%` }} />
        </div>
        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <span>Progress</span>
          <span className="font-semibold text-slate-700 dark:text-slate-200">{progress}%</span>
        </div>
        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
          Target date:{' '}
          <span className="font-medium text-slate-700 dark:text-slate-200">
            {new Date(goal.deadline).toLocaleDateString()}
          </span>
        </p>
      </div>
    </Card>
  );
};


