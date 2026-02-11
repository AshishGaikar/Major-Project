import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  ChartBarIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  ExclamationTriangleIcon,
  HomeIcon,
  WalletIcon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx';

interface NavItem {
  label: string;
  to: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const navItems: NavItem[] = [
  { label: 'Dashboard', to: '/app/dashboard', icon: HomeIcon },
  { label: 'Expenses', to: '/app/expenses', icon: WalletIcon },
  { label: 'Budget', to: '/app/budget', icon: ExclamationTriangleIcon },
  { label: 'Goals', to: '/app/goals', icon: ChartBarIcon },
  { label: 'Investments', to: '/app/investments', icon: ChartBarIcon },
  { label: 'Documents', to: '/app/documents', icon: DocumentTextIcon },
  { label: 'Chatbot', to: '/app/chatbot', icon: ChatBubbleLeftRightIcon },
  { label: 'Reports', to: '/app/reports', icon: ChartBarIcon },
];

export const Sidebar: React.FC = () => {
  return (
    <aside className="glass-card flex h-full w-64 flex-col border-0 bg-white/90 dark:bg-slate-950/80">
      <div className="flex items-center gap-2 px-5 pt-5 pb-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-emerald-400 text-white shadow-soft">
          <span className="text-lg font-black">₹</span>
        </div>
        <div>
          <div className="bg-gradient-to-r from-blue-600 via-emerald-500 to-cyan-500 bg-clip-text text-sm font-semibold tracking-tight text-transparent dark:from-blue-400 dark:via-emerald-300 dark:to-cyan-300">
            FinScope&nbsp;AI
          </div>
          <div className="text-xs font-medium uppercase tracking-wide text-slate-400 dark:text-slate-500">
            Personal money OS
          </div>
        </div>
      </div>
      <nav className="mt-2 flex-1 space-y-1 px-3 pb-4 text-sm">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                clsx(
                  'group flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-primary-soft hover:text-primary dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-50',
                  isActive && 'bg-primary text-white shadow-sm hover:bg-primary dark:bg-blue-600',
                )
              }
            >
              <Icon className="h-4 w-4" />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>
      <div className="border-t border-slate-100 px-5 py-4 text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400">
        <p>Securely backed by bank-level encryption.</p>
      </div>
    </aside>
  );
};


