import {
  BudgetCategory,
  DashboardOverview,
  Goal,
  InvestmentRecommendation,
  RiskProfile,
  Transaction,
} from '../types/finance';

export const dashboardOverview: DashboardOverview = {
  totalBalance: 42500,
  monthlyIncome: 120000,
  monthlyExpenses: 78000,
  savingsRate: 35,
};

export const transactions: Transaction[] = [
  {
    id: 't1',
    date: '2026-02-11',
    description: 'Grocery Store',
    category: 'Groceries',
    amount: 3200,
    type: 'expense',
  },
  {
    id: 't2',
    date: '2026-02-10',
    description: 'Salary',
    category: 'Salary',
    amount: 120000,
    type: 'income',
  },
  {
    id: 't3',
    date: '2026-02-09',
    description: 'Electricity Bill',
    category: 'Utilities',
    amount: 2100,
    type: 'expense',
  },
  {
    id: 't4',
    date: '2026-02-08',
    description: 'Dining Out',
    category: 'Dining',
    amount: 1500,
    type: 'expense',
  },
];

export const budgetCategories: BudgetCategory[] = [
  { id: 'b1', name: 'Groceries', limit: 8000, spent: 3200 },
  { id: 'b2', name: 'Rent', limit: 25000, spent: 25000 },
  { id: 'b3', name: 'Utilities', limit: 4000, spent: 2100 },
  { id: 'b4', name: 'Entertainment', limit: 5000, spent: 3800 },
];

export const goals: Goal[] = [
  {
    id: 'g1',
    name: 'Emergency Fund',
    targetAmount: 150000,
    currentAmount: 90000,
    deadline: '2026-12-31',
  },
  {
    id: 'g2',
    name: 'Home Down Payment',
    targetAmount: 500000,
    currentAmount: 120000,
    deadline: '2028-06-30',
  },
];

export const investments: InvestmentRecommendation[] = [
  {
    id: 'i1',
    name: 'Bluechip Equity Fund SIP',
    type: 'SIP',
    risk: 'moderate',
    description: 'Diversified equity mutual fund via monthly SIP.',
    allocationPercent: 35,
  },
  {
    id: 'i2',
    name: 'Balanced Advantage Fund',
    type: 'Mutual Fund',
    risk: 'conservative',
    description: 'Dynamic allocation between equity and debt.',
    allocationPercent: 25,
  },
  {
    id: 'i3',
    name: 'Tax Saver FD',
    type: 'FD/RD',
    risk: 'conservative',
    description: '5-year fixed deposit with tax benefits under 80C.',
    allocationPercent: 20,
  },
  {
    id: 'i4',
    name: 'PPF / Sukanya Samriddhi',
    type: 'Govt Scheme',
    risk: 'conservative',
    description: 'Long-term government-backed savings schemes.',
    allocationPercent: 20,
  },
];

export const yearlyTrend = [
  { month: 'Jan', income: 110000, expenses: 75000, savings: 35000 },
  { month: 'Feb', income: 120000, expenses: 78000, savings: 42000 },
  { month: 'Mar', income: 118000, expenses: 72000, savings: 46000 },
  { month: 'Apr', income: 122000, expenses: 80000, savings: 42000 },
];

export const expenseBreakdown = [
  { category: 'Rent', value: 25000 },
  { category: 'Groceries', value: 3200 },
  { category: 'Utilities', value: 2100 },
  { category: 'Dining', value: 1500 },
  { category: 'Entertainment', value: 3800 },
];

export const savingsVsExpenses = [
  { month: 'Jan', savings: 35000, expenses: 75000 },
  { month: 'Feb', savings: 42000, expenses: 78000 },
  { month: 'Mar', savings: 46000, expenses: 72000 },
  { month: 'Apr', savings: 42000, expenses: 80000 },
];

export const fetchMock = async <T,>(data: T, delay = 600): Promise<T> =>
  new Promise((resolve) => {
    setTimeout(() => resolve(data), delay);
  });

export const filterInvestmentsByRisk = (risk: RiskProfile): InvestmentRecommendation[] =>
  investments.filter((inv) => inv.risk === risk || risk === 'moderate');


