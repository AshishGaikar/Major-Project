import React from 'react';
import { Card } from '../ui/Card';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

interface LineChartCardProps {
  title: string;
  data: { month: string; income?: number; expenses?: number; savings?: number }[];
}

export const LineChartCard: React.FC<LineChartCardProps> = ({ title, data }) => {
  return (
    <Card title={title}>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} />
            <YAxis stroke="#94a3b8" fontSize={12} />
            <Tooltip contentStyle={{ fontSize: 12 }} />
            {data.some((d) => d.expenses != null) && (
              <Line type="monotone" dataKey="expenses" stroke="#ef4444" strokeWidth={2} dot={false} />
            )}
            {data.some((d) => d.income != null) && (
              <Line type="monotone" dataKey="income" stroke="#2563eb" strokeWidth={2} dot={false} />
            )}
            {data.some((d) => d.savings != null) && (
              <Line type="monotone" dataKey="savings" stroke="#22c55e" strokeWidth={2} dot={false} />
            )}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};


