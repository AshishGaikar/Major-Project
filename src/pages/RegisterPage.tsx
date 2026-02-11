import React, { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';

export const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string; password?: string; confirm?: string }>({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const nextErrors: typeof errors = {};
    if (!name) nextErrors.name = 'Name is required.';
    if (!email) nextErrors.email = 'Email is required.';
    if (!password) nextErrors.password = 'Password is required.';
    if (password && password.length < 6) nextErrors.password = 'Password must be at least 6 characters.';
    if (!confirm) nextErrors.confirm = 'Please confirm your password.';
    if (password && confirm && password !== confirm) nextErrors.confirm = 'Passwords do not match.';

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/app/dashboard');
    }, 800);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 dark:bg-slate-950">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <Link to="/" className="inline-flex items-center justify-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-primary-soft text-primary">
              <span className="text-lg font-black">₹</span>
            </div>
            <div>
              <div className="text-sm font-semibold tracking-tight text-slate-900 dark:text-slate-50">FinScope</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">AI Financial Planner</div>
            </div>
          </Link>
        </div>
        <Card
          title="Create your account"
          subtitle="Takes less than a minute. You’ll get a full demo workspace with mock data."
        >
          <form className="space-y-4" onSubmit={handleSubmit}>
            <Input
              label="Full name"
              placeholder="Ashish Kumar"
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={errors.name}
            />
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
            <Input
              label="Confirm password"
              type="password"
              placeholder="••••••••"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              error={errors.confirm}
            />
            <Button type="submit" className="w-full" loading={loading}>
              Continue to dashboard
            </Button>
          </form>
          <p className="mt-4 text-center text-xs text-slate-500">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-primary hover:underline">
              Log in
            </Link>
          </p>
        </Card>
      </div>
    </div>
  );
};


