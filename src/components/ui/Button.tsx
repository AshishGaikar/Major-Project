import React from 'react';
import clsx from 'clsx';

type Variant = 'primary' | 'secondary' | 'ghost';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  loading?: boolean;
}

const baseClasses =
  'inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60';

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-primary text-white hover:bg-blue-600 focus-visible:ring-primary dark:bg-blue-600 dark:hover:bg-blue-500',
  secondary:
    'bg-slate-100 text-slate-900 hover:bg-slate-200 focus-visible:ring-slate-400 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-700',
  ghost:
    'bg-transparent text-slate-700 hover:bg-slate-100 focus-visible:ring-slate-400 dark:text-slate-200 dark:hover:bg-slate-800',
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  loading,
  className,
  disabled,
  ...rest
}) => {
  return (
    <button
      className={clsx(baseClasses, variantClasses[variant], className)}
      disabled={disabled || loading}
      {...rest}
    >
      {loading && (
        <span className="mr-2 inline-flex h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
      )}
      {children}
    </button>
  );
};


