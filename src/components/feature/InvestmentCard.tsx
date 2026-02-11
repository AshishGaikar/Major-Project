import React from 'react';
import { InvestmentRecommendation } from '../../types/finance';
import { Card } from '../ui/Card';

interface InvestmentCardProps {
  recommendation: InvestmentRecommendation;
}

export const InvestmentCard: React.FC<InvestmentCardProps> = ({ recommendation }) => {
  return (
    <Card
      title={recommendation.name}
      subtitle={`${recommendation.type} • ${recommendation.risk.toUpperCase()} risk`}
      className="h-full"
    >
      <p className="mb-3 text-sm text-slate-600 dark:text-slate-300">{recommendation.description}</p>
      <div className="mt-auto flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
        <span>Suggested allocation</span>
        <span className="text-sm font-semibold text-primary dark:text-blue-400">
          {recommendation.allocationPercent}%
        </span>
      </div>
    </Card>
  );
};


