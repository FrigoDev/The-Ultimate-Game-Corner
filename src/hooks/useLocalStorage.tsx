import { useState } from "react";
export const useLocalStorage = <T extends unknown>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
      setStoredValue(valueToStore);
    } catch (error) {
      alert(error);
    }
  };
  const clear = () => {
    window.localStorage.clear();
    setStoredValue(initialValue);
  };

  return [storedValue, setValue, clear] as const;
};

export default useLocalStorage;
