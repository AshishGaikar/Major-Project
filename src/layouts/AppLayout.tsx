import React from 'react';
import { Sidebar } from '../components/layout/Sidebar';
import { Topbar } from '../components/layout/Topbar';
import { Outlet } from 'react-router-dom';

export const AppLayout: React.FC = () => {
  return (
    <div className="flex h-screen bg-background dark:bg-slate-950">
      <div className="hidden border-r border-slate-100 bg-white/80 p-3 pr-0 shadow-soft backdrop-blur dark:border-slate-800 dark:bg-slate-950/80 md:block">
        <Sidebar />
      </div>
      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar />
        <main className="scroll-thin flex-1 overflow-y-auto bg-slate-50/80 p-4 dark:bg-slate-950/90 sm:p-6">
          <div className="mx-auto max-w-6xl space-y-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};


