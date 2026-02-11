## AI-Powered Personal Financial Planning and Management Frontend

This is a modern React + TypeScript + Vite frontend for an AI-driven personal finance assistant. It includes dashboards, budgeting, goals, investments, OCR upload, chatbot, and reports – all built with a clean fintech-style UI and Tailwind CSS.

### Tech stack

- **React 18 + Vite**
- **TypeScript**
- **Tailwind CSS**
- **React Router v6**
- **Recharts** for charts
- **Context** for UI state (dark mode, notifications)

### Getting started

1. **Install dependencies**

```bash
npm install
```

2. **Run the dev server**

```bash
npm run dev
```

Open the URL shown in the terminal (by default `http://localhost:5173`).

### App structure (high level)

- `src/App.tsx` – Application routing
- `src/layouts/AppLayout.tsx` – Sidebar + topbar layout for authenticated pages
- `src/pages/*` – Landing, auth, dashboard, expenses, budget, goals, investments, documents, chatbot, reports
- `src/components/ui/*` – Reusable UI elements (`Button`, `Card`, `Input`, `Table`)
- `src/components/feature/*` – Domain-specific components (`ExpenseTable`, `BudgetCard`, `GoalCard`, `InvestmentCard`, `ChatWindow`, `UploadZone`)
- `src/components/charts/*` – Chart wrappers using Recharts
- `src/services/mockData.ts` – Mock API data and helpers
- `src/hooks/useMockData.ts` – Simple loading/error wrapper to simulate API calls
- `src/store/UIContext.tsx` – Global UI state (dark mode, notifications)
- `src/types/finance.ts` – Shared TypeScript interfaces

### Notes

- All data is mocked in-memory but flows through a simple async API wrapper to make it easy to plug in a real backend later.
- Forms include basic validation and show inline errors.
- The layout is fully responsive and supports a light/dark theme via a toggle in the top bar.


