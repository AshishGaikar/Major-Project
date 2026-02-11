import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

interface Notification {
  id: string;
  message: string;
  type: 'info' | 'warning' | 'success';
  read: boolean;
}

interface UIContextValue {
  darkMode: boolean;
  toggleDarkMode: () => void;
  notifications: Notification[];
  markNotificationRead: (id: string) => void;
}

const UIContext = createContext<UIContextValue | undefined>(undefined);

const mockNotifications: Notification[] = [
  { id: '1', message: 'Your February budget is on track.', type: 'success', read: false },
  { id: '2', message: 'You are close to reaching your Emergency Fund goal.', type: 'info', read: false },
];

export const UIProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  const markNotificationRead = (id: string) => {
    setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)));
  };

  const value = useMemo(
    () => ({
      darkMode,
      toggleDarkMode,
      notifications,
      markNotificationRead,
    }),
    [darkMode, notifications],
  );

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};

export const useUI = (): UIContextValue => {
  const ctx = useContext(UIContext);
  if (!ctx) {
    throw new Error('useUI must be used within UIProvider');
  }
  return ctx;
};


