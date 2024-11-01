import { useEffect, useState } from 'react';

export function useDebounce<T>(value: T, timeout = 0) {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [value, timeout]);
  return debouncedValue;
}
