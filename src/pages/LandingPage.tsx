import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        <header className="flex items-center justify-between py-3">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-emerald-400 text-white shadow-soft">
              <span className="text-lg font-black">₹</span>
            </div>
            <div>
              <div className="bg-gradient-to-r from-blue-300 via-emerald-200 to-cyan-200 bg-clip-text text-sm font-semibold tracking-tight text-transparent">
                FinScope&nbsp;AI
              </div>
              <div className="text-xs font-medium uppercase tracking-wide text-slate-400">
                Personal money OS
              </div>
            </div>
          </Link>
          <div className="flex items-center gap-2">
            <Link to="/login">
              <Button
                variant="secondary"
                className="text-xs px-4 py-2 font-medium bg-transparent text-white border border-white/80 hover:bg-white/10 hover:text-white"
              >
                Log in
              </Button>
            </Link>
            <Link to="/register">
              <Button className="text-xs px-4 py-2 font-medium">Get started</Button>
            </Link>
          </div>
        </header>

        <main className="mt-10 grid flex-1 gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-center">
          <section>
            <h1 className="text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Smart, simple,{' '}
              <span className="bg-gradient-to-r from-blue-400 via-emerald-300 to-cyan-400 bg-clip-text text-transparent">
                AI-powered
              </span>{' '}
              money management.
            </h1>
            <p className="mt-4 max-w-xl text-sm text-slate-300 sm:text-base">
              Track every rupee, plan your goals, and get personalised investment insights – all in one secure,
              easy-to-use dashboard.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link to="/register">
                <Button className="px-5 py-2.5 text-sm">Create free account</Button>
              </Link>
              <Link to="/login">
                <Button variant="secondary" className="px-5 py-2.5 text-sm">
                  Demo my finances
                </Button>
              </Link>
              <p className="ml-1 text-xs text-slate-400">No credit card needed. Bank-level security.</p>
            </div>
            <dl className="mt-8 grid gap-6 text-xs text-slate-300 sm:grid-cols-3">
              <div>
                <dt className="text-slate-400">Forecasting</dt>
                <dd className="mt-1 font-semibold text-slate-50">See 12–24 month cashflow projections.</dd>
              </div>
              <div>
                <dt className="text-slate-400">Smart alerts</dt>
                <dd className="mt-1 font-semibold text-slate-50">Get notified before you overspend.</dd>
              </div>
              <div>
                <dt className="text-slate-400">Financial literacy</dt>
                <dd className="mt-1 font-semibold text-slate-50">Bite-sized explainers, in simple language.</dd>
              </div>
            </dl>
          </section>

          <section className="glass-card relative overflow-hidden border border-slate-800 bg-slate-900/60 p-4 sm:p-5">
            <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
            <div className="relative space-y-3 text-xs text-slate-200">
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-wide text-slate-400">Overview</span>
                <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[11px] font-medium text-emerald-300">
                  Savings rate: 35%
                </span>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl bg-slate-900/70 p-3">
                  <p className="text-[11px] text-slate-400">Total balance</p>
                  <p className="mt-1 text-sm font-semibold text-slate-50">₹42,500</p>
                  <p className="mt-1 text-[11px] text-emerald-300">+₹4,200 this month</p>
                </div>
                <div className="rounded-xl bg-slate-900/70 p-3">
                  <p className="text-[11px] text-slate-400">Investments</p>
                  <p className="mt-1 text-sm font-semibold text-slate-50">₹3.2L</p>
                  <p className="mt-1 text-[11px] text-emerald-300">+8.4% YTD</p>
                </div>
                <div className="rounded-xl bg-slate-900/70 p-3">
                  <p className="text-[11px] text-slate-400">Goals funded</p>
                  <p className="mt-1 text-sm font-semibold text-slate-50">3 / 5</p>
                  <p className="mt-1 text-[11px] text-slate-400">2 goals ahead of schedule</p>
                </div>
              </div>
              <div className="mt-2 rounded-xl bg-slate-900/70 p-3">
                <div className="flex items-center justify-between text-[11px] text-slate-400">
                  <span>Monthly cash flow</span>
                  <span>Feb 2026</span>
                </div>
                <div className="mt-2 h-20 w-full rounded-lg bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-cyan-400/10" />
                <p className="mt-2 text-[11px] text-slate-400">
                  Powered by secure bank connects, real-time categorisation and AI forecasting.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};


