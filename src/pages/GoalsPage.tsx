import React, { FormEvent, useState } from 'react';
import { useMockData } from '../hooks/useMockData';
import { fetchMock, goals as mockGoals } from '../services/mockData';
import { Card } from '../components/ui/Card';
import { GoalCard } from '../components/feature/GoalCard';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { Goal } from '../types/finance';

export const GoalsPage: React.FC = () => {
  const { data } = useMockData(async () => fetchMock(mockGoals), []);
  const [goals, setGoals] = useState<Goal[]>(mockGoals);
  const [form, setForm] = useState({
    name: '',
    targetAmount: '',
    deadline: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof typeof form, string>>>({});

  const handleChange = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const nextErrors: typeof errors = {};
    if (!form.name) nextErrors.name = 'Goal name is required.';
    if (!form.targetAmount) nextErrors.targetAmount = 'Target amount is required.';
    if (form.targetAmount && Number.isNaN(Number(form.targetAmount))) {
      nextErrors.targetAmount = 'Enter a valid number.';
    }
    if (!form.deadline) nextErrors.deadline = 'Timeline is required.';

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const newGoal: Goal = {
      id: `g-${Date.now()}`,
      name: form.name,
      targetAmount: Number(form.targetAmount),
      currentAmount: 0,
      deadline: form.deadline,
    };
    setGoals((prev) => [newGoal, ...prev]);
    setForm({ name: '', targetAmount: '', deadline: '' });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold text-slate-900 dark:text-slate-50">Goals</h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Create and track financial goals like emergency fund, vacation or home down payment.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {data?.map((g) => (
              <GoalCard key={g.id} goal={goals.find((goal) => goal.id === g.id) ?? g} />
            ))}
            {goals
              .filter((g) => !data?.some((dg) => dg.id === g.id))
              .map((g) => (
                <GoalCard key={g.id} goal={g} />
              ))}
          </div>
        </div>
        <Card title="Create financial goal" subtitle="We’ll help you calculate monthly savings needed.">
          <form className="space-y-3 text-sm" onSubmit={handleSubmit}>
            <Input
              label="Goal name"
              placeholder="e.g. Emergency fund, Europe trip, Home down payment"
              value={form.name}
              onChange={(e) => handleChange('name', e.target.value)}
              error={errors.name}
            />
            <Input
              label="Target amount (₹)"
              placeholder="e.g. 300000"
              value={form.targetAmount}
              onChange={(e) => handleChange('targetAmount', e.target.value)}
              error={errors.targetAmount}
            />
            <Input
              label="Target date"
              type="date"
              value={form.deadline}
              onChange={(e) => handleChange('deadline', e.target.value)}
              error={errors.deadline}
            />
            <Button type="submit" className="w-full">
              Add goal
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};


