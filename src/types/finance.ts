export type RiskProfile = 'conservative' | 'moderate' | 'aggressive';

export interface Transaction {
  id: string;
  date: string;
  description: string;
  category: string;
  amount: number;
  type: 'income' | 'expense';
}

export interface BudgetCategory {
  id: string;
  name: string;
  limit: number;
  spent: number;
}

export interface Goal {
  id: string;
  name: string;
  targetAmount: number;
  currentAmount: number;
  deadline: string;
}

export interface InvestmentRecommendation {
  id: string;
  name: string;
  type: 'SIP' | 'Mutual Fund' | 'FD/RD' | 'Govt Scheme';
  risk: RiskProfile;
  description: string;
  allocationPercent: number;
}

export interface DashboardOverview {
  totalBalance: number;
  monthlyIncome: number;
  monthlyExpenses: number;
  savingsRate: number;
}


