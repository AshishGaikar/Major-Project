import React, { useState } from 'react';
import { useMockData } from '../hooks/useMockData';
import { fetchMock, filterInvestmentsByRisk } from '../services/mockData';
import { Card } from '../components/ui/Card';
import { InvestmentCard } from '../components/feature/InvestmentCard';
import { RiskProfile } from '../types/finance';

const riskOptions: { value: RiskProfile; label: string; description: string }[] = [
  {
    value: 'conservative',
    label: 'Conservative',
    description: 'Capital protection with steady, predictable returns.',
  },
  {
    value: 'moderate',
    label: 'Moderate',
    description: 'Balanced growth with controlled volatility.',
  },
  {
    value: 'aggressive',
    label: 'Aggressive',
    description: 'Higher equity exposure for long-term growth.',
  },
];

export const InvestmentsPage: React.FC = () => {
  const [selectedRisk, setSelectedRisk] = useState<RiskProfile>('moderate');
  const { data } = useMockData(async () => fetchMock(filterInvestmentsByRisk(selectedRisk)), [selectedRisk]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold text-slate-900 dark:text-slate-50">Investment recommendations</h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          AI-curated suggestions based on your risk profile and saving behaviour.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <Card title="Risk profile">
          <div className="space-y-3 text-sm">
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Choose the profile that best matches your comfort with ups and downs in market value.
            </p>
            <div className="space-y-2">
              {riskOptions.map((opt) => (
                <button
                  type="button"
                  key={opt.value}
                  onClick={() => setSelectedRisk(opt.value)}
                  className={`w-full rounded-xl border px-3 py-2 text-left text-xs transition ${
                    selectedRisk === opt.value
                      ? 'border-primary bg-primary-soft/80 text-primary shadow-sm dark:border-blue-500 dark:bg-blue-950/40 dark:text-blue-200'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-primary/40 hover:bg-primary-soft/40 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200'
                  }`}
                >
                  <p className="font-semibold">{opt.label}</p>
                  <p className="mt-0.5 text-[11px] text-slate-500 dark:text-slate-400">{opt.description}</p>
                </button>
              ))}
            </div>
          </div>
        </Card>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold text-slate-800 dark:text-slate-100">
              Suggested allocation ({selectedRisk.toUpperCase()} profile)
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              SIP, mutual funds, FDs and government-backed schemes.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {data?.map((inv) => (
              <InvestmentCard key={inv.id} recommendation={inv} />
            ))}
          </div>
          {!data?.length && (
            <p className="rounded-xl border border-dashed border-slate-200 bg-slate-50/70 px-4 py-6 text-xs text-slate-500 dark:border-slate-800 dark:bg-slate-900/40 dark:text-slate-400">
              Adjust your risk profile on the left to view recommendations.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};


