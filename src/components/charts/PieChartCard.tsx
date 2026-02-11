import React from 'react';
import { Card } from '../ui/Card';
import { Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

interface PieChartCardProps {
  title: string;
  data: { category: string; value: number }[];
}

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
            />
            <Tooltip
              contentStyle={{ fontSize: 12 }}
              formatter={(value: number, name: string) => [`₹${value.toLocaleString()}`, name]}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};


