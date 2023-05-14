const localStorage = typeof window !== 'undefined' ? window.localStorage : null;

export const setItem = (key: string, value: string) => {
  return localStorage.setItem(key, JSON.stringify(value));
};

export const getItem = <T,>(key: string): T | null => {
  const value = localStorage.getItem(key);
  if (typeof value === 'string') {
    try {
      return JSON.parse(value) as T;
    } catch (error) {
      console.error(`Error parsing JSON value for key ${key}:`, error);
    }
  }
  return null;
};

export const removeItem = (key: string) => {
  return localStorage.removeItem(key);
};
