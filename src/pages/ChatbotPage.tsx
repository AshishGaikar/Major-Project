import React from 'react';
import { ChatWindow } from '../components/feature/ChatWindow';

export const ChatbotPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold text-slate-900 dark:text-slate-50">AI chatbot</h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Ask personalised questions around budgeting, investing, credit cards or tax planning.
        </p>
      </div>
      <ChatWindow />
    </div>
  );
};


