import React from 'react';
import { Card } from '../ui/Card';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

interface PieChartCardProps {
  title: string;
  data: { category: string; value: number }[];
}

const SLICE_COLORS = ['#2563eb', '#22c55e', '#f59e0b', '#ef4444', '#06b6d4', '#8b5cf6'];

export const PieChartCard: React.FC<PieChartCardProps> = ({ title, data }) => {
  return (
    <Card title={title}>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="category"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={4}
              cx="50%"
              cy="50%"
            >
              {data.map((entry, index) => (
                <Cell key={entry.category} fill={SLICE_COLORS[index % SLICE_COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{ fontSize: 12 }}
              formatter={(value: number, name: string) => [`₹${(value as number).toLocaleString()}`, name]}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

