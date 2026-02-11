import React, { FormEvent, useState } from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

interface ChatMessage {
  id: string;
  from: 'user' | 'assistant';
  text: string;
  timestamp: string;
}

export const ChatWindow: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'm1',
      from: 'assistant',
      text: 'Hi! I am your AI financial coach. Ask me anything about your money, goals or investments.',
      timestamp: new Date().toISOString(),
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError('');
    const trimmed = input.trim();
    if (!trimmed) {
      setError('Please enter a question.');
      return;
    }

    const userMessage: ChatMessage = {
      id: `u-${Date.now()}`,
      from: 'user',
      text: trimmed,
      timestamp: new Date().toISOString(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: `a-${Date.now()}`,
          from: 'assistant',
          text:
            'Based on your current pattern, you are saving around 35% of your income. ' +
            'Consider increasing your SIP contributions by 5–10% to reach your long-term goals faster.',
          timestamp: new Date().toISOString(),
        },
      ]);
      setLoading(false);
    }, 900);
  };

  return (
    <Card title="Ask your AI financial coach" subtitle="Get instant answers, explanations, and plan suggestions.">
      <div className="flex h-[480px] flex-col">
        <div className="scroll-thin flex-1 space-y-3 overflow-y-auto rounded-xl bg-slate-50 p-3 dark:bg-slate-900/60">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}
              aria-label={m.from === 'user' ? 'You' : 'Assistant'}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm ${
                  m.from === 'user'
                    ? 'bg-primary text-white rounded-br-sm'
                    : 'bg-white text-slate-900 shadow-sm rounded-bl-sm dark:bg-slate-900 dark:text-slate-50'
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}
          {messages.length === 0 && (
            <p className="text-center text-xs text-slate-500">No messages yet. Start by asking a question.</p>
          )}
        </div>
        <form onSubmit={handleSubmit} className="mt-3 flex items-end gap-2">
          <div className="flex-1">
            <textarea
              rows={2}
              className="w-full resize-none rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-50"
              placeholder="e.g. How much should I invest monthly to reach ₹10L in 5 years?"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            {error && <p className="mt-1 text-xs text-danger">{error}</p>}
          </div>
          <Button type="submit" loading={loading} className="shrink-0">
            Send
          </Button>
        </form>
      </div>
    </Card>
  );
};


