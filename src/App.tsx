import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { AppLayout } from './layouts/AppLayout';
import { DashboardPage } from './pages/DashboardPage';
import { ExpensesPage } from './pages/ExpensesPage';
import { BudgetPage } from './pages/BudgetPage';
import { GoalsPage } from './pages/GoalsPage';
import { InvestmentsPage } from './pages/InvestmentsPage';
import { DocumentsPage } from './pages/DocumentsPage';
import { ChatbotPage } from './pages/ChatbotPage';
import { ReportsPage } from './pages/ReportsPage';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/app" element={<AppLayout />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="expenses" element={<ExpensesPage />} />
        <Route path="budget" element={<BudgetPage />} />
        <Route path="goals" element={<GoalsPage />} />
        <Route path="investments" element={<InvestmentsPage />} />
        <Route path="documents" element={<DocumentsPage />} />
        <Route path="chatbot" element={<ChatbotPage />} />
        <Route path="reports" element={<ReportsPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;


