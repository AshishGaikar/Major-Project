import { useEffect, useState } from 'react';

interface MockState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useMockData<T>(loader: () => Promise<T>, deps: unknown[] = []): MockState<T> {
  const [state, setState] = useState<MockState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    let isMounted = true;
    setState((prev) => ({ ...prev, loading: true, error: null }));

    loader()
      .then((res) => {
        if (isMounted) {
          setState({ data: res, loading: false, error: null });
        }
      })
      .catch((err: unknown) => {
        if (isMounted) {
          setState({
            data: null,
            loading: false,
            error: err instanceof Error ? err.message : 'Unknown error',
          });
        }
      });

    return () => {
      isMounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return state;
}


