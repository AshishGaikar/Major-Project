import React from 'react';
import { BellIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { useUI } from '../../store/UIContext';

export const Topbar: React.FC = () => {
  const { darkMode, toggleDarkMode, notifications } = useUI();
  const unread = notifications.filter((n) => !n.read).length;

  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-100 bg-white/80 px-4 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-950/80 lg:px-6">
      <div className="hidden text-sm font-medium text-slate-500 sm:block">
        <span className="text-slate-400">Good evening,</span>{' '}
        <span className="font-semibold text-slate-800 dark:text-slate-50">Ashish</span>
      </div>
      <div className="flex flex-1 items-center justify-end gap-3">
        <button
          type="button"
          className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
          aria-label="Notifications"
        >
          <BellIcon className="h-4 w-4" />
          {unread > 0 && (
            <span className="absolute -right-0.5 -top-0.5 inline-flex h-4 min-w-[16px] items-center justify-center rounded-full bg-danger px-0.5 text-[10px] font-semibold text-white">
              {unread}
            </span>
          )}
        </button>
        <button
          type="button"
          onClick={toggleDarkMode}
          className="inline-flex h-9 items-center gap-1 rounded-full border border-slate-200 bg-white px-3 text-xs font-medium text-slate-600 shadow-sm transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
        >
          <span
            className="h-2 w-2 rounded-full"
            style={{ background: darkMode ? '#22c55e' : '#0ea5e9' }}
            aria-hidden="true"
          />
          <span>{darkMode ? 'Dark' : 'Light'} mode</span>
        </button>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-2 py-1.5 text-xs font-medium text-slate-700 shadow-sm transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 text-xs font-semibold text-white">
            AS
          </div>
          <span className="hidden sm:inline">Ashish</span>
          <ChevronDownIcon className="h-3.5 w-3.5 text-slate-400" />
        </button>
      </div>
    </header>
  );
};


