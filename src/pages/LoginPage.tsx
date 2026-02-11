import React, { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const nextErrors: typeof errors = {};
    if (!email) nextErrors.email = 'Email is required.';
    if (!password) nextErrors.password = 'Password is required.';
    if (password && password.length < 6) nextErrors.password = 'Password must be at least 6 characters.';

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/app/dashboard');
    }, 700);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 dark:bg-slate-950">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <Link to="/" className="inline-flex items-center justify-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-emerald-400 text-white shadow-soft">
              <span className="text-lg font-black">₹</span>
            </div>
            <div>
              <div className="bg-gradient-to-r from-blue-600 via-emerald-500 to-cyan-500 bg-clip-text text-sm font-semibold tracking-tight text-transparent dark:from-blue-400 dark:via-emerald-300 dark:to-cyan-300">
                FinScope&nbsp;AI
              </div>
              <div className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
                Personal money OS
              </div>
            </div>
          </Link>
        </div>
        <Card title="Welcome back, Ashish" subtitle="Sign in to continue where you left off with your finances.">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <Input
              label="Email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={errors.email}
            />
            <Input
              label="Password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={errors.password}
            />
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>Demo login is instant — any email/password works.</span>
            </div>
            <Button type="submit" className="w-full" loading={loading}>
              Continue to dashboard
            </Button>
          </form>
          <p className="mt-4 text-center text-xs text-slate-500">
            New here?{' '}
            <Link to="/register" className="font-medium text-primary hover:underline">
              Create an account
            </Link>
          </p>
        </Card>
      </div>
    </div>
  );
};


